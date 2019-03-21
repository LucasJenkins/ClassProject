using System;
using System.Collections.Generic;
using System.Linq;

using FinalProjectFileManager.Api;
using FinalProjectFileManager.Data;
using FinalProjectFileManager.Data.Entities;

using FinalProjectFileManager.Exception;

using FinalProjectFileManager.Dtos;


using Microsoft.Extensions.Logging;
using WebApplication1.Exception.Exceptions;

namespace FinalProjectFileManager.Services
{
    public class FileService : IFileService
    {
        private readonly FileManagerContext _context;

        private readonly ILogger _logger;

        public StorageItem GetById(int id)
        {
            return _context.StorageItem.SingleOrDefault(f => f.Id == id);
        }

        public IEnumerable<StorageItem> GetByIds(int[] id)
        {
            var files = new List<StorageItem>();
            foreach (var i in id)
            {
                files.Add(GetById(i));
            }
            return files;
        }

        public StorageItem RenameItem(int id, string newName)
        {
            StorageItem oldItem = GetById(id);
            var existingName = _context.StorageItem.SingleOrDefault(item => item.Name == newName);

            if (existingName != null)
            {
                throw new NameTakenException();
            }

            oldItem.Name = newName;
            return oldItem;
        }

        public StorageItem MoveItem(int id, int folderId)
        {
            StorageItem itemToMove = GetById(id);
            itemToMove.FolderId = folderId;
            return itemToMove;
        }

        public StorageItem TrashItem(int id)
        {
            StorageItem itemToTrash = GetById(id);
            itemToTrash.IsTrash = true;
            return itemToTrash;
        }

        public StorageItem UntrashItem(int id)
        {
            StorageItem itemToUntrash = GetById(id);
            itemToUntrash.IsTrash = false;
            return itemToUntrash;
        }

        private bool fileExistsInCurrentContext(string name, int folderId)
        {
            var context = _context.StorageItem.Where(item => item.FolderId == folderId).Where(file => file.Name == name).ToList();
            if (context.Count == 0)
            {
                return false;
            }
            return true;
        }

        public StorageItem CreateFile(CreateFileDto file)
        {
            if (!fileExistsInCurrentContext(file.Name, file.FolderId))
            {
                var newFile = new StorageItem();
                newFile.Name = file.Name;
                newFile.FolderId = file.FolderId;
                newFile.Created = DateTime.Now;
                newFile.IsTrash = false;
                newFile.Hash = Guid.NewGuid().ToString();
                Files.WriteToFile(newFile.Hash, file.Data);
                _context.StorageItem.Add(newFile);
                _context.SaveChanges();

                return newFile;
            }
            return null;
        }

        public IEnumerable<StorageItem> CreateFiles(List<CreateFileDto> files)
        {
            List<StorageItem> result = new List<StorageItem>();
            foreach (var file in files)
            {
                var item = CreateFile(file);
                if (item != null) result.Add(item);
            }
            return result;
        }

//Changes by Chris
        public void DeleteFile(int id)
        {
            var file = GetById(id);
            try
            {
                if (file.IsTrash != true)
                {
                    //Throw appropriate exception 
                }
                _context.StorageItem.Remove(file);
                _context.SaveChanges();
            }
            catch
            {
                Console.WriteLine("Error deleting file");
            }
           

        }

//Changes by Chris
        public void DeleteFiles(int []id)
        {
            foreach (var i in id)
            {
                DeleteFile(i);
            }

        }

        public FileService(FileManagerContext context, ILogger<FileService> logger)
        {
            _context = context;
            _logger = logger;
        }

    }
}

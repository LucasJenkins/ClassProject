using System.Collections.Generic;
using System.Linq;
using FinalProjectFileManager.Data;
using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Exception;
using Microsoft.Extensions.Logging;
using WebApplication1.Exception.Exceptions;

namespace FinalProjectFileManager.Services
{
    public class FileService : IFileService
    {
        private readonly FileManagerContext _context;

        private readonly ILogger _logger;

        public StorageItem GetById(int  id)
        {
            return _context.StorageItems.SingleOrDefault(f => f.Id == id);
        }

        public IEnumerable<StorageItem> GetByIds(int []id)
        {
            var files = new List<StorageItem>();
            foreach(var i in id)
            {
                files.Add(GetById(i));
            }
            return files;
        }

        public StorageItem RenameItem(int id, string newName)
        {
            StorageItem oldItem = GetById(id);
            var existingName = _context.StorageItems.SingleOrDefault(item => item.Name == newName);

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

        public FileService(FileManagerContext context, ILogger<FileService> logger)
        {
            _context = context;
            _logger = logger;
        }
  }
}
using System;
using System.Collections.Generic;
using System.Linq;

using FinalProjectFileManager.Data;
using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;

using Microsoft.Extensions.Logging;

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

        public FileService(FileManagerContext context, ILogger<FileService> logger)
        {
            _context = context;
            _logger = logger;
        }

    }
}

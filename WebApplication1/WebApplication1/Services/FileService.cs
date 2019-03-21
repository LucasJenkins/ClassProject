using System.Collections.Generic;
using System.Linq;
using FinalProjectFileManager.Data;
using FinalProjectFileManager.Data.Entities;
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

        public IEnumerable<StorageItem> GetByIds(int []id)
        {
            var files = new List<StorageItem>();
            foreach(var i in id)
            {
                files.Add(GetById(i));
            }
            return files;
        }

        public void DeleteFile(int id)
        {
            var file = GetById(id);
            if(file.Id != id){
             //Throw appropriate exception 
            }
            file.IsTrash =true;
            _context.StorageItem.Update(file);
            _context.SaveChanges();

        }
        public void DeleteFiles(int[] id)
        {
            foreach(var i in id)
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
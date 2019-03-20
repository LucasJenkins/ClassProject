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

        public StorageItem GetById(int  id)
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

        public FileService(FileManagerContext context, ILogger<FileService> logger)
        {
            _context = context;
            _logger = logger;
        }
  }
}
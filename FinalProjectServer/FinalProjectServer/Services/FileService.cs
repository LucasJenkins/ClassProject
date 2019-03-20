using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FinalProjectServer.Data;
using FinalProjectServer.Data.Entities;

namespace FinalProjectServer.Services
{
    public class FileService : IFileService
    {
        private FinalProjectContext _context;

        public FileService(FinalProjectContext context)
        {
            _context = context;
        }

        public File CreateFile(string name, string data, string folder)
        {
               
            throw new NotImplementedException();
        }

        public bool DeleteFileById(int id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteMultipleFilesByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }

        public List<File> GetFilesByIds(params int[] ids)
        {
            var files = new List<File>();
            File file = _context.Files.SingleOrDefault(f => f.Id == );
            foreach(int i in ids)
            {
                file = _context.Files.SingleOrDefault(f => f.Id == i);
                if (file == null || file.IsTrash)
                {
                    //Exception goes here
                }
                files.Add(file);
            }
            return files;
        }

        public bool UpdateFileById(int id)
        {
            throw new NotImplementedException();
        }

        public bool UpdateFilesByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }

        File IFileService.CreateFile(string name, string data, string folder)
        {
            throw new NotImplementedException();
        }

        bool IFileService.DeleteFileById(int id)
        {
            throw new NotImplementedException();
        }

        bool IFileService.DeleteMultipleFilesByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }

        File IFileService.GetFileById(int id)
        {
            throw new NotImplementedException();
        }

        List<File> IFileService.GetMultipleFilesByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }

        

        bool IFileService.UpdateFilesByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }
    }
}

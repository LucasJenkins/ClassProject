﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FinalProjectServer.Data;


namespace FinalProjectServer.Services
{
    public class FilesServices : IFilesServices
    {
        private FinalProjectContext _context;

        public FilesServices(FinalProjectContext context)
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

        public File GetFileById(int id)
        {
            throw new NotImplementedException();
        }

        public List<File> GetMultipleFiles(params int[] ids)
        {
            throw new NotImplementedException();
        }

        public List<File> GetMultipleFilesByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }

        public bool UpdateFileById(int id)
        {
            throw new NotImplementedException();
        }

        public bool UpdateFilesByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }
    }
}

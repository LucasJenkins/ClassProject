﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FinalProjectServer.Data;
using FinalProjectServer.Data.Entities;

namespace FinalProjectServer.Services
{

    public class FolderService : IFolderService
    {
        private FinalProjectContext _context;
        
        public FolderService(FinalProjectContext context)
        {
            _context = context;
        }
        public Folder CreateFolder(string name, string data, string folder)
        {
            throw new NotImplementedException();
        }

        public bool DeleteFolderById(int id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteMultipleFoldersByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }

        public Folder GetFolderById(int id)
        {
            throw new NotImplementedException();
        }

        public List<Folder> GetFoldersByIds(params int[] ids)
        {
            var folders = new List<Folder>();
            File folder;
            foreach (int i in ids)
            {
                folder = _context.Folders.SingleOrDefault(f => f.Id == i);
                if (folder == null || folder.IsTrash)
                {
                    //Exception goes here
                }
                folders.Add(folder);
            }
            return folders;
        }

        public bool UpdateFolderById(int id)
        {
            throw new NotImplementedException();
        }

        public bool UpdateMultipleFoldersByIds(params int[] ids)
        {
            throw new NotImplementedException();
        }
    }
}

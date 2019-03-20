using FinalProjectServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProjectServer.Dtos
{
    public class FolderDto
    {
        public string Name { get; set; }

        public int FolderId { get; set; }

        public List<File> Files { get; set; }
    }
}

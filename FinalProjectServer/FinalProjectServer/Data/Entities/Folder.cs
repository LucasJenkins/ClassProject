using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProjectServer.Data.Entities
{
    public class Folder
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime CreatedAt { get; set; }

        public int FolderId { get; set; }

        public bool Deleted { get; set; }

        public List<File> Files { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProjectServer.Data.Entities
{
    public class File
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int FolderId { get; set; }

        public DateTime CreatedAt { get; set; }

        public string Hash { get; set; }

        public bool Deleted { get; set; }
    }
}

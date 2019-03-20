using System;

namespace FinalProjectFileManager.Data.Entities
{
    public class StorageItem
    {
        public int Id { get; set; }
        
        public string Name{ get; set; }
        
        public DateTime Created { get; set; }
        
        public string Hash { get; set; }

        public Boolean IsTrash { get; set; }

        public Boolean IsFolder { get; set; }

        public int FolderId { get; set; }
    }
}
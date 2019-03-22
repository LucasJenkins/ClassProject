using System;

namespace FinalProjectFileManager.Dtos
{
    public class CreateStorageItemDto
    {
        public string Name {get;set; }

        public int FolderId {get;set;}

        public bool Is_Folder{ get; set;}

        public string Data {get;set;}
    }
}

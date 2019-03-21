using System;

namespace FinalProjectFileManager.Dtos
{
    public class CreateFileDto
    {
        public string Name
        {
            get;
            set;
        }

        public int FolderId
        {
            get;
            set;
        }

        public string Data
        {
            get;
            set;
        }
    }
}

using System;

namespace FinalProjectFileManager.Dtos
{
    public class FileResponseDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime Created { get; set; }

        public int FolderId { get; set; }
    }
}
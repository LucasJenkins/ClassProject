using System.Collections.Generic;

using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;

namespace FinalProjectFileManager.Services
{
    public interface IFileService
    {
        StorageItem GetById(int id);
        IEnumerable<StorageItem> GetByIds(int[] id);

        void DeleteFiles(int[] id);
        void DeleteFile(int id);

        StorageItem CreateFile(CreateFileDto file);

        IEnumerable<StorageItem> CreateFiles(List<CreateFileDto> files);
    }
}

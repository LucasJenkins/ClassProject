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
<<<<<<< HEAD
=======
        void DeleteFile(int id);
>>>>>>> 5572f6e0556bcc168eabecede516162f4e32764f
    }
}

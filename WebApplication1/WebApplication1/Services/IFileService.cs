using System.Collections.Generic;

using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;

namespace FinalProjectFileManager.Services
{
    public interface IFileService
    {
        StorageItem GetById(int id);
        IEnumerable<StorageItem> GetByIds(int[] id);
<<<<<<< HEAD

        StorageItem CreateFile(CreateFileDto file);

        IEnumerable<StorageItem> CreateFiles(List<CreateFileDto> files);
=======
>>>>>>> d7716a1ac90b67d79d1120e44d9bc39d615822e6
        void DeleteFile(int[] id);
    }
}

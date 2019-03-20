using FinalProjectFileManager.Data.Entities;
using System.Collections.Generic;

namespace FinalProjectFileManager.Services
{
    public interface IFileService
    {
        IEnumerable<StorageItem> GetByIds(int[] id);
    }
}
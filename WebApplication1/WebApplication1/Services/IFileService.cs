using FinalProjectFileManager.Data.Entities;
using System.Collections.Generic;

namespace FinalProjectFileManager.Services
{
    public interface IFileService
    {
        IEnumerable<StorageItem> GetByIds(int[] id);
        StorageItem RenameItem(int id, string newName);
        StorageItem MoveItem(int id, int folderId);
        StorageItem TrashItem(int id);
        StorageItem UntrashItem(int id);
        //StorageItem DownloadItem()
    }
}
using System.Collections.Generic;

using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;

namespace FinalProjectFileManager.Services
{
    public interface IFileService
    {
        StorageItem GetById(int id);
        IEnumerable<StorageItem> GetByIds(int[] id);

        StorageItem RenameItem(int id, string newName);
        StorageItem MoveItem(int id, int folderId);
        StorageItem TrashItem(int id);
        StorageItem UntrashItem(int id);
        //StorageItem DownloadItem()


        void DeleteFiles(int[] id);
        void DeleteFile(int id);

        StorageItem CreateFile(CreateFileDto file);

        IEnumerable<StorageItem> CreateFiles(List<CreateFileDto> files);
        void DeleteFile(int id);

    }
}

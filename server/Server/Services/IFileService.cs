using System.Collections.Generic;
using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;

namespace FinalProjectFileManager.Services
{
  public interface IFileService
  {
    IEnumerable<StorageItem> GetByIds(int[] id);
<<<<<<< HEAD:WebApplication1/WebApplication1/Services/IFileService.cs
=======

    StorageItem GetById(int id);
>>>>>>> c40af793f1a98fe19f17d4b90a44881691f6f04d:server/Server/Services/IFileService.cs
    StorageItem RenameItem(int id, string newName, int folderItem);
    StorageItem MoveItem(int id, int folderId);
    StorageItem TrashItem(int id);
    StorageItem UntrashItem(int id);
    StorageItem CreateFile(CreateStorageItemDto file);

    string Download(int id);
    void DeleteFiles(int[] id);
    void DeleteFile(int id);
<<<<<<< HEAD:WebApplication1/WebApplication1/Services/IFileService.cs
    StorageItem CreateFile(CreateFileDto file);
=======

    

<<<<<<< HEAD
>>>>>>> c40af793f1a98fe19f17d4b90a44881691f6f04d:server/Server/Services/IFileService.cs
    IEnumerable<StorageItem> CreateFiles(List<CreateFileDto> files);
=======
    IEnumerable<StorageItem> CreateFiles(List<CreateStorageItemDto> files);
>>>>>>> 28c79ca50383b9be9fd37bda134d51f92ee81d1e
  }
}

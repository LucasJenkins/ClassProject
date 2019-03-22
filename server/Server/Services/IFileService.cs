using System.Collections.Generic;
using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;

namespace FinalProjectFileManager.Services
{
  public interface IFileService
  {
    IEnumerable<StorageItem> GetByIds(int[] id);

    StorageItem GetById(int id);
    StorageItem RenameItem(int id, string newName, int folderItem);
    StorageItem MoveItem(int id, int folderId);
    StorageItem TrashItem(int id);
    StorageItem UntrashItem(int id);
    StorageItem CreateFile(CreateFileDto file);

    string Download(int id);

    void DeleteFiles(int[] id);
    void DeleteFile(int id);

    

    IEnumerable<StorageItem> CreateFiles(List<CreateFileDto> files);
  }
}

using System.Collections.Generic;

using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;

namespace FinalProjectFileManager.Services
{
  public interface IFileService
  {
    StorageItem GetById(int id);
    IEnumerable<StorageItem> GetByIds(int[] id);

    StorageItem RenameItem(int id, string newName, int folderItem);
    StorageItem MoveItem(int id, int folderId);
    StorageItem TrashItem(int id);
    StorageItem UntrashItem(int id);
    string Download(int id);

    void DeleteFiles(int[] id);
    void DeleteFile(int id);

    StorageItem CreateFile(CreateFileDto file);

    IEnumerable<StorageItem> CreateFiles(List<CreateFileDto> files);
  }
}

using System.Collections.Generic;
using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;

namespace FinalProjectFileManager.Services
{
  public interface IValidationService
  {
    void FileExistsInCurrentContext(string name, int folderId);
    void GetRequestValid(string ids);
    void PostRequestValid(List<CreateFileDto> files);
    void DeleteRequestValid(int[] id);
    void RenameRequestValid(int id, string newName, int folderId);
    void MoveRequestValid(int id, int folderId);
    void TrashRequestValid(int ids);
    void UntrashRequestValid(int ids);
    void DownloadRequestValid(int ids);

  }
}
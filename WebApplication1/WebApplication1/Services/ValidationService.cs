using System;
using System.Collections.Generic;
using System.Linq;
using FinalProjectFileManager.Api;
using FinalProjectFileManager.Data;
using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;
using Microsoft.Extensions.Logging;
using WebApplication1.Exception.Exceptions;
using FinalProjectFileManager.Services

namespace FinalProjectFileManager.Services
{
  public class ValidationService : IValidationService
  {
    private readonly FileManagerContext _context;

    private readonly ILogger _logger;
    private void FileExistsInCurrentContext(string name, int folderId)
    {
      var context = _context.StorageItem.Where(item => item.FolderId == folderId).Where(file => file.Name == name).ToList();
      if (!(context.Count == 0))
      {
        throw new NameTakenException();
      }
    }
    void GetRequestValid(string ids)
    {
      FileExistsInCurrentContext(i);
    }
    void PostRequestValid(List<CreateFileDto> files)
    {

    }
    void DeleteRequestValid(int[] id)
    {

    }
    void RenameRequestValid(int id, string newName, int folderId)
    {

    }
    void MoveRequestValid(int id, int folderId)
    {

    }
    void TrashRequestValid(int ids)
    {

    }
    void UntrashRequestValid(int ids)
    {

    }
    void DownloadRequestValid(int ids)
    {

    }

  }


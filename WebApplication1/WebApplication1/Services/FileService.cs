using System;
using System.Collections.Generic;
using System.Linq;
using FinalProjectFileManager.Api;
using FinalProjectFileManager.Data;
using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;
using Microsoft.Extensions.Logging;
using WebApplication1.Exception.Exceptions;

namespace FinalProjectFileManager.Services
{
  public class FileService : IFileService
  {
    private readonly FileManagerContext _context;

    private readonly ILogger _logger;

    public StorageItem GetById(int id)
    {
      return _context.StorageItem.SingleOrDefault(f => f.Id == id);
    }

    public IEnumerable<StorageItem> GetByIds(int[] id)
    {
      var files = new List<StorageItem>();
      foreach (var i in id)
      {
        files.Add(GetById(i));
      }
      return files;
    }

    private bool fileExistsInCurrentContext(string name, int folderId)
    {
      var context = _context.StorageItem.Where(item => item.FolderId == folderId).Where(file => file.Name == name).ToList();
      if (context.Count == 0)
      {
        return false;
      }
      return true;
    }

    public StorageItem RenameItem(int id, string newName, int folderId)
    {

      if (fileExistsInCurrentContext(newName, folderId) == true)
      {
        throw new NameTakenException();
      }
      var oldItem = GetById(id);

      oldItem.Name = newName;
      _context.StorageItem.Update(oldItem);
      _context.SaveChanges();
      return oldItem;
    }

    public StorageItem MoveItem(int id, int folderId)
    {
      StorageItem itemToMove = GetById(id);
      itemToMove.FolderId = folderId;
      _context.StorageItem.Update(itemToMove);
      _context.SaveChanges();
      return itemToMove;
    }

    public StorageItem TrashItem(int id)
    {
      StorageItem itemToTrash = GetById(id);
      itemToTrash.IsTrash = true;
      _context.StorageItem.Update(itemToTrash);
      _context.SaveChanges();
      return itemToTrash;
    }

    public StorageItem UntrashItem(int id)
    {
      StorageItem itemToUntrash = GetById(id);
      itemToUntrash.IsTrash = false;
      _context.StorageItem.Update(itemToUntrash);
      _context.SaveChanges();
      return itemToUntrash;
    }

    public StorageItem CreateFile(CreateFileDto file)
    {
      if (!fileExistsInCurrentContext(file.Name, file.FolderId))
      {
        var newFile = new StorageItem();
        newFile.Name = file.Name;
        newFile.FolderId = file.FolderId;
        newFile.Created = DateTime.Now;
        newFile.IsTrash = false;
        newFile.Hash = Guid.NewGuid().ToString();
        Files.WriteToFile(newFile.Hash, file.Data);
        _context.StorageItem.Add(newFile);
        _context.SaveChanges();

        return newFile;
      }
      return null;
    }

    public IEnumerable<StorageItem> CreateFiles(List<CreateFileDto> files)
    {
      List<StorageItem> result = new List<StorageItem>();
      foreach (var file in files)
      {
        var item = CreateFile(file);
        if (item != null) result.Add(item);
      }
      return result;
    }

    //Changes by Chris
    public void DeleteFile(int id)
    {
      var file = GetById(id);
      try
      {
        if (file.IsTrash != true)
        {
          //Throw appropriate exception 
        }
        Files.DeleteFile(file.Hash);
        _context.StorageItem.Remove(file);
        _context.SaveChanges();
      }
      catch
      {
        Console.WriteLine("Error deleting file");
      }
    }

    //Changes by Chris
    public void DeleteFiles(int[] id)
    {
      foreach (var i in id)
      {
        DeleteFile(i);
      }
    }
    public String Download(int id)
    {
      var file = GetById(id);
      var data = Files.ReadFromFile(file.Hash);
      return data;
    }

    public FileService(FileManagerContext context, ILogger<FileService> logger)
    {
      _context = context;
      _logger = logger;
    }
  }
}

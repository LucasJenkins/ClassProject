using FinalProjectServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProjectServer.Services
{
    public interface IFileService
    {
        File GetFileById(int id);
        List<File> GetMultipleFilesByIds(params int[] ids);
        File CreateFile(string name, string data, int folderId);
        bool DeleteFile(int[] id);
        bool UpdateFileById(int id);
        bool UpdateFilesByIds(params int[] ids);
        object GetFiles();
    }
}

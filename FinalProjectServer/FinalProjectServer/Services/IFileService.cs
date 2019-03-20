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
        File CreateFile(string name, string data, string folder);
        bool DeleteFileById(int id);
        bool DeleteMultipleFilesByIds(params int[] ids);
        bool UpdateFileById(int id);
        bool UpdateFilesByIds(params int[] ids);
    }
}

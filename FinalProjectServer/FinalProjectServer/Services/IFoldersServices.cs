using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProjectServer.Services
{
    interface IFoldersServices
    {
        Folder GetFolderById(int id);
        List<Folder> GetMultipleFoldersByIds(params int[] ids);
        Folder CreateFolder(string name, string data, string folder);
        bool DeleteFolderById(int id);
        bool DeleteMultipleFoldersByIds(params int[] ids);
        bool UpdateFolderById(int id);
        bool UpdateMultipleFoldersByIds(params int[] ids);
    }
}

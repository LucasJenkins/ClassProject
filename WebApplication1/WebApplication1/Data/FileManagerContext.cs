using FinalProjectFileManager.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace FinalProjectFileManager.Data
{
    public class FileManagerContext : DbContext
    {
        public DbSet<StorageItem> StorageItem { get; set; }
        
        public FileManagerContext(DbContextOptions<FileManagerContext> options)
            : base(options) 
        { }
    }
}
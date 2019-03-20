using FinalProjectServer.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace FinalProjectServer.Data
{
    public class FinalProjectContext : DbContext
    {
        public DbSet<File> File { get; set; }
        public DbSet<Folder> Folder { get; set; }

        public FinalProjectContext(DbContextOptions<FinalProjectContext> options) : base(options) { }

    }
}

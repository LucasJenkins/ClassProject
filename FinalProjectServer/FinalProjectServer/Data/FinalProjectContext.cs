using Microsoft.EntityFrameworkCore;

namespace FinalProjectServer.Data
{
    public class FinalProjectContext : DbContext
    {
        // public DbSet<File> Files { get; set; }
        // public DbSet<Folders> Folders { get; set; }

        public FinalProjectContext(DbContextOptions<FinalProjectContext> options) : base(options) { }

    }
}

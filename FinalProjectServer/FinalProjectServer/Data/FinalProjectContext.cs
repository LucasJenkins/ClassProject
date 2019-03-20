﻿using Microsoft.EntityFrameworkCore;
using FinalProjectServer.Data.Entities;

namespace FinalProjectServer.Data
{
    public class FinalProjectContext : DbContext
    {
        public DbSet<File> Files { get; set; }
        public DbSet<Folder> Folders { get; set; }

        public FinalProjectContext(DbContextOptions<FinalProjectContext> options) : base(options) { }

    }
}

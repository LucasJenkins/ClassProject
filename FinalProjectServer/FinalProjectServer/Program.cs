using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using FinalProjectServer.Data;

namespace FinalProjectServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateWebHost(args);

            // Drop/Create database and populate with seed data
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                try
                {
                    var context = services.GetService<FinalProjectContext>();
                    context.Database.EnsureDeleted();
                    context.Database.EnsureCreated();
                    
                }
                catch (System.Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogDebug(ex.Message);
                    logger.LogError(ex, "An error occurred creating the DB.");
                }
            }

            host.Run();
        }

        public static IWebHost CreateWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}

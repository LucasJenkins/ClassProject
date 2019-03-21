using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace WebApplication1.Api
{
    public class Files
    {
        public Files()
        {

        }

        public bool WriteToFile(string path, string data)
        {
            var fullPath = @"C:\Users\ftd-04\Desktop\final_project\final-project\WebApplication1\WebApplication1\StorageFolder\" + path;
            var decodedData = Decode(data);

            if (!File.Exists(fullPath))
            {
                // Create a file to write to.
                using (StreamWriter sw = File.CreateText(fullPath))
                {
                    sw.WriteLine("Hello");
                }
                return true;
            }
            return false;
        }

        public string ReadFromFile(string path)
        {
            var fullPath = @"C:\Users\ftd-04\Desktop\final_project\final-project\WebApplication1\WebApplication1\StorageFolder\" + path;
            var data = "";
            if (File.Exists(fullPath))
            {
                data = File.ReadAllText(fullPath);
                var encodedData = Encode(data);
                return encodedData;
            }
            return data;
        }

        public static string Encode(string plainText)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        public static string Decode(string base64EncodedData)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }

    }
}

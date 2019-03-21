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

        // Lucas Jenkins - Only overwrites data. Returns only bool upon completion 
        public bool WriteToFile(string path, string data)
        {
            try
            {
                var fullPath = @".\StorageFolder\" + path;
                var decodedData = Decode(data);
                File.WriteAllText(fullPath, decodedData);
                return true;
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }

        }

//Changes by Chris
        public bool DeleteFile(string path)
        {
            try
            {
                var fullPath = @".\StorageFolder\" + path;
                File.Delete(fullPath);
                return true;
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
        }

//Changes by Chris
        public void DeleteFiles(string []paths)
        {
                foreach(var i in paths)
                {
                    try{
                        DeleteFile(i);
                    }
                    catch(Exception e){
                        Console.WriteLine(e.Message); 
                    }
                }                 
        }

        // Lucas Jenkins - Will return empty string if file does not exisit
        public string ReadFromFile(string path)
        {
            try
            {
                var fullPath = @".\StorageFolder\" + path;
                var data = "";
                if (File.Exists(fullPath))
                {
                    data = File.ReadAllText(fullPath);
                    var encodedData = Encode(data);
                    return encodedData;
                }
                return data;
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return "";
            }

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

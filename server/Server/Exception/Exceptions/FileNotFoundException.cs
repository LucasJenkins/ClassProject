namespace FinalProjectFileManager.Exception.Exceptions
{
    public class FileNotFoundException : NotFoundCustomException
    {

        public FileNotFoundException() : this("File not found", "No such file exists")
        {
        }
        
        private FileNotFoundException(string message, string description) : base(message, description)
        {
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebApplication1.Exception.Exceptions
{
    public class NameTakenException : FinalProjectFileManager.Exception.Exceptions.BaseCustomException
    {
        public NameTakenException() : base("Name taken", "An item with that name already exists", (int)HttpStatusCode.BadRequest)
        {
        }
    }

   
}

using System;
using FinalProjectServer.Data.Entities;
using FinalProjectServer.Dtos;
using File = AutoMapper.File;

namespace FinalProjectServer
{
    public class AutoMapperFile : File
    {
        public AutoMapperFile()
        {

            CreateMap<FileResponseDto, File>();


            CreateMap<FileUploadDto, File>();

        }

        
    }
}

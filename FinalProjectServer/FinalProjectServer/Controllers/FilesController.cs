using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinalProjectServer.Dtos;
using FinalProjectServer.Services;
using Microsoft.AspNetCore.Mvc;
using FinalProjectServer.Data.Entities;
using FinalProjectServer.AutoMapperFile;

namespace FinalProjectServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private IFileService _fileService;
        private IMapper _mapper;

        public FilesController(IFileService fileService, IMapper mapper) : base()
        {
            _fileService = fileService;
            _mapper = mapper;
        }

        // GET api/files/5
        [HttpGet("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<FileResponseDto> Get(int[] id)
        {
            var file = _fileService.GetFilesByIds(id);
            return _mapper.Map<FileResponseDto>(file);
        }

        // POST api/files
        [HttpPost]
        public ActionResult<FileResponseDto> Post([FromBody] FileUploadDto fileUpload)
        {
            var file = _fileService.CreateFile();
        }

        [HttpDelete]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
    }
}

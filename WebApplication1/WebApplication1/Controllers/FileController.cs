using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FinalProjectFileManager.Data.Entities;
using FinalProjectFileManager.Dtos;
using FinalProjectFileManager.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FinalProjectFileManager.Controllers
{
    [Route("api/files")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;

        private readonly IMapper _mapper;

        private readonly ILogger _logger;
        
        public FileController(IFileService fileService, IMapper mapper, ILogger<FileController> logger)
        {
            _fileService = fileService;
            _mapper = mapper;
            _logger = logger;
        }
        
        // GET api/files
        [HttpGet]
        [ProducesResponseType (200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<FileResponseDto>> Get([FromBody] int[]id)
        {
            var result = _fileService.GetByIds(id);

            var mappedFiles = _mapper.Map<IEnumerable<StorageItem>, IEnumerable<FileResponseDto>>(result);
            return mappedFiles.ToList();
        }
    }
}
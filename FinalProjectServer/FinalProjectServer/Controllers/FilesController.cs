using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FinalProjectServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private IFileService _fileService { get; }
        public FilesController(IFileService fileService) : base()
        {
            _fileService = fileService;
        }

        // GET api/files
        [HttpGet]
        public ActionResult<IEnumerable<FileResponseDto>> Get()
        {
            var files = _fileService.GetFiles();
            var filesResponse = new List<FileResponseDto>();
            foreach (var file in files)
            {

            }
            return new FileResponseDto(file);
        }

        // GET api/files/5
        [HttpGet("{id}")]
        public ActionResult<FileResponseDto> Get(int id)
        {
            return _fileService.GetFileById(id);
        }

        // POST api/files
        [HttpPost]
        public ActionResult<FileResponseDto> Post([FromBody] FileUploadDto fileUpload)
        {
            var file = _fileService.CreateFile();
        }
    }
}

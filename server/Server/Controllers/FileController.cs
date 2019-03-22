using System;
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
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    public ActionResult<IEnumerable<int>> Get(string ids)
    {
      var idList = new List<int>();
      if (ids != null)
      {
        foreach (var id in ids.Split(','))
        {
          idList.Add(Int16.Parse(id));
        }
      }
      return idList;
    }

    [HttpPost]
    [ProducesResponseType(409)]
    [ProducesResponseType(201)]
    public ActionResult<IEnumerable<FileResponseDto>> Post([FromBody] List<CreateStorageItemDto> files)
    {
      return _mapper.Map<IEnumerable<StorageItem>, IEnumerable<FileResponseDto>>(_fileService.CreateFiles(files)).ToList();
    }

    [HttpDelete]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    public ActionResult DeleteFiles([FromBody]int[] id)
    {
      _fileService.DeleteFiles(id);
      return StatusCode(200);

    }

    [HttpPatch("/rename/{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    public ActionResult<FileResponseDto> Rename(int id, string newName, int folderId)
    {
      var fileToRename = _fileService.RenameItem(id, newName, folderId);
      var mappedRenamed = _mapper.Map<StorageItem, FileResponseDto>(fileToRename);
      return mappedRenamed;
    }

    [HttpPatch("/move/{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    public ActionResult<FileResponseDto> Move(int id, int folderId)
    {
      var fileToMove = _fileService.MoveItem(id, folderId);
      var mappedMoved = _mapper.Map<StorageItem, FileResponseDto>(fileToMove);
      return mappedMoved;
    }

    [HttpPatch("/trash/{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    public ActionResult<FileResponseDto> Trash(int id)
    {
      var fileToTrash = _fileService.TrashItem(id);
      var mappedTrashed = _mapper.Map<StorageItem, FileResponseDto>(fileToTrash);
      return mappedTrashed;
    }

    [HttpPatch("/untrash/{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    public ActionResult<FileResponseDto> Untrash(int id)
    {
      var fileToUntrash = _fileService.UntrashItem(id);
      var mappedUntrashed = _mapper.Map<StorageItem, FileResponseDto>(fileToUntrash);
      return mappedUntrashed;
    }
    [HttpGet("/download/{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    public ActionResult<String> Download(int id)
    {
      var data = _fileService.Download(id);
      return data;
    }
  }
}

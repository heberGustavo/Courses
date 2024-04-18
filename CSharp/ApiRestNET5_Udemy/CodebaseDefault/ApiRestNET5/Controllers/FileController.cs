using ApiRestNET5.Business;
using ApiRestNET5.Data.VO;
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiVersion("1")]
	[Route("api/[controller]/v{version:apiVersion}")]
	[ApiController]
	public class FileController : ControllerBase
	{
		private readonly IFileBusiness _fileBusiness;

		public FileController(IFileBusiness fileBusiness)
		{
			_fileBusiness = fileBusiness;
		}

		[HttpGet("downloadFile/{filename}")]
		[ProducesResponseType(200, Type = typeof(byte[]))]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		public  async Task<ActionResult> DownloadFile(string filename)
		{
			byte[] buffer = _fileBusiness.GetFile(filename);
			if (buffer != null)
			{
				Response.ContentType = $"application/{Path.GetExtension(filename).Replace(".", "")}";
				Response.Headers.Append("content-length", buffer.Length.ToString());
				await Response.Body.WriteAsync(buffer, 0, buffer.Length);
			}
			return new ContentResult();
		}
		
		[HttpPost("uploadFile")]
		[ProducesResponseType(200, Type = typeof(FileDetailVO))]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		public async Task<ActionResult> UploadOneFile([FromForm] IFormFile file)
		{
			FileDetailVO fileDetail = await _fileBusiness.SaveFileToDisk(file);
			return Ok(fileDetail);
		}

		[HttpPost("uploadMultipleFiles")]
		[ProducesResponseType(200, Type = typeof(List<FileDetailVO>))]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		public async Task<ActionResult> UploadMultipleFiles([FromForm] List<IFormFile> files)
		{
			List<FileDetailVO> fileDetails = await _fileBusiness.SaveFilesToDisk(files);
			return Ok(fileDetails);
		}
	}
}

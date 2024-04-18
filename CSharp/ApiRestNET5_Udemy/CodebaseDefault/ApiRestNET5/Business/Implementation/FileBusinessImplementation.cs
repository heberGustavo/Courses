using ApiRestNET5.Data.VO;

namespace ApiRestNET5.Business.Implementation
{
	public class FileBusinessImplementation : IFileBusiness
	{
		private readonly string _basePath;
		private readonly IHttpContextAccessor _context;

		public FileBusinessImplementation(IHttpContextAccessor context)
		{
			_context = context;
			_basePath = Directory.GetCurrentDirectory() + "\\UploadDir\\";
		}

		public byte[] GetFile(string filename)
		{
			var filePath = _basePath + filename;
			return File.ReadAllBytes(filePath);
		}

		public async Task<FileDetailVO> SaveFileToDisk(IFormFile file)
		{
			var fileDetail = new FileDetailVO();

			var fileType = Path.GetExtension(file.FileName);
			var baseUrl = _context.HttpContext.Request.Host;

			if(fileType.ToLower().Equals(".pdf") || fileType.ToLower().Equals(".jpg") || fileType.ToLower().Equals(".png") || fileType.ToLower().Equals(".jpeg"))
			{
				if(file != null && file.Length > 0)
				{
					var docName = Path.GetFileName(file.FileName);
					var destination = Path.Combine(_basePath, "", docName);
					
					fileDetail.DocName = docName;
					fileDetail.DocType = fileType;
					fileDetail.DocUrl = Path.Combine(baseUrl.Value, "/api/file/v1/", docName);

					using var stream = new FileStream(destination, FileMode.Create);
					await file.CopyToAsync(stream);
				}
			}

			return fileDetail;
		}

		public async Task<List<FileDetailVO>> SaveFilesToDisk(List<IFormFile> files)
		{
			var filesDetail = new List<FileDetailVO>();

			foreach (var file in files)
			{
				filesDetail.Add(await SaveFileToDisk(file));
			}

			return filesDetail;
		}
	}
}

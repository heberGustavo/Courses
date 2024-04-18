using ApiRestNET5.Data.VO;

namespace ApiRestNET5.Business
{
	public interface IFileBusiness
	{
		public byte[] GetFile(string filename);
		public Task<FileDetailVO> SaveFileToDisk(IFormFile file);
		public Task<List<FileDetailVO>> SaveFilesToDisk(List<IFormFile> files);
    }
}

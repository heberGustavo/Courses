using ApiRestNET5.Hypermedia.Abstract;

namespace ApiRestNET5.Hypermedia.Utils
{
	public class PagedSeachVO<T> where T : ISupportHyperMedia
	{
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int TotalResults { get; set; }
        public string SortFields { get; set; }
        public string SortDirections { get; set; }

        public Dictionary<string, Object> Filters { get; set; }
        public List<T> List { get; set; }

		#region Constructors

		public PagedSeachVO() { }

		public PagedSeachVO(int currentPage, int pageSize, string sortFields, string sortDirections)
		{
			CurrentPage = currentPage;
			PageSize = pageSize;
			SortFields = sortFields;
			SortDirections = sortDirections;
		}

		public PagedSeachVO(int currentPage, int pageSize, string sortFields, string sortDirections, Dictionary<string, object> filters) : this(currentPage, pageSize, sortFields, sortDirections)
		{
			Filters = filters;
		}

		public PagedSeachVO(int currentPage, string sortFields, string sortDirections)
			: this(currentPage, 10, sortFields, sortDirections) { }

		#endregion

		#region Public Methods

		public int GetCurrentPage() => CurrentPage == 0 ? 2 : CurrentPage;

		public int GetPageSize() => PageSize == 0 ? 10 : PageSize;

		#endregion
	}
}

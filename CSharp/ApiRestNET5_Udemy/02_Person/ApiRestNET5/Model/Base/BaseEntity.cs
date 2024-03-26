using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRestNET5.Model.Base
{
	public class BaseEntity
	{
		[Column("id")]
		public int Id { get; set; }
	}
}

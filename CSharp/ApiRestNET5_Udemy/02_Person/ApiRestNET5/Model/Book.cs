﻿using System.ComponentModel.DataAnnotations.Schema;

namespace ApiRestNET5.Model
{
    [Table("books")]
	public class Book
	{
        [Column("id")]
        public int Id { get; set; }

        [Column("author")]
        public string Author { get; set; }

		[Column("launch_date")]
		public DateTime LaunchDate { get; set; }
		
        [Column("price")]
		public decimal Price { get; set; }

		[Column("title")]
		public string Title { get; set; }
    }
}
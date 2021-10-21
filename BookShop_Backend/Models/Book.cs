using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookShop_Backend.Models
{
    public class Book
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string booktitle { get; set; }
        public long ISBN { get; set; }
        public int bookYear { get; set; }
        public string bookDescription { get; set; }
        public bool bookStatus { get; set; }
        public string bookImage { get; set; }
        public int bookPrice { get; set; }

        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }
    }
}
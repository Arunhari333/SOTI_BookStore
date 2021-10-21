using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookShop_Backend.Models
{
    public class Category
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string catName { get; set; }
        public string catdescripation { get; set; }
        public string catImage { get; set; }
        public bool catStatus { get; set; }
        public int catPosition { get; set; }
        public DateTime catCreateAt { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookShop_Backend.Models
{
    public class ShippingAddress
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public int zipcode { get; set; }
        public DateTime? date_added { get; set; }

        public int userId { get; set; }
        [ForeignKey("userId")]
        public virtual User User { get; set; }

        public ShippingAddress()
        {
            date_added = DateTime.Today;
        }
    }
}
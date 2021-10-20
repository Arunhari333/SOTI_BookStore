using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookShop_Backend.Models
{
    public class Order
    {
        [Key]
        public int id { get; set; }
        public int orderQty { get; set; }
        public int orderAddress { get; set; }
        public DateTime? orderDate { get; set; }
        public DateTime? orderEstimationDelivery { get; set; }

        public int bookId { get; set; }
        [ForeignKey("bookId")]
        public virtual Book Book { get; set; }

        public int userId { get; set; }
        [ForeignKey("userId")]
        public virtual User User { get; set; }

        public virtual ShippingAddress ShippingAddress { get; set; }
    }
}
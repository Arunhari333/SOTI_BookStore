using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookShop_Backend.Models
{
    public class OrderItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int qty { get; set; }

        public int bookId { get; set; }
        [ForeignKey("bookId")]
        public virtual Book Book { get; set; }

        public int orderId { get; set; }
        [ForeignKey("orderId")]
        public virtual Order Order { get; set; }

        public OrderItem()
        {
            orderId = 1;
        }
   
    }
}
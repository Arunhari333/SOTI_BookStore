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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public DateTime? orderDate { get; set; }
        public DateTime? orderEstimatedDelivery { get; set; }
        public string transactionId { get; set; }
        public bool complete { get; set; }
        public double? totalPrice { get; set; }
        public int userId { get; set; }
        [ForeignKey("userId")]
        public virtual User User { get; set; }

        //public int orderAddress { get; set; }
        //[ForeignKey("orderAddress")]
        //public virtual ShippingAddress ShippingAddress { get; set; }
        public int shippingAddressId { get; set; }
        public Order()
        {
        }

        public Order(int uId)
        {
            userId = uId;
            complete = false;
        }
    }
}
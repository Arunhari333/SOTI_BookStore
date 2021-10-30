using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookShop_Backend.Models
{
    public class DiscountCoupon
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string couponCode { get; set; }
        public int discount { get; set; }
        public bool isPercentage { get; set; }
    }
}
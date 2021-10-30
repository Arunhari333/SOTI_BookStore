using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BookShop_Backend.Models
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext():base("BookShopDB")
        {
        }
        public DbSet<Book> Books { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }
        public DbSet<ShippingAddress> ShippingAddress { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Wishlist> Wishlist { get; set; }
        public DbSet<DiscountCoupon> DiscountCoupons { get; set; }
    }
}
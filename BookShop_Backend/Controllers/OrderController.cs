using BookShop_Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BookShop_Backend.Controllers
{
    [RoutePrefix("api/Order")]
    public class OrderController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        [Route("UserOrders/{userId:int}")]
        public IEnumerable<Order> GetOrdersByUser(int userId)
        {
            var orders = (from item in db.Orders
                          where item.userId == userId
                          select item).ToList();
            return orders;
        }

        //To do: PlaceOrder() 
        [Route("PlaceOrder/{id:int}")]
        [HttpPut]
        public IHttpActionResult PlaceOrder(int userId)
        {
            //find order object using userId
            Order order = (from item in db.Orders
                         where item.userId == userId && item.complete == false
                         select item).SingleOrDefault();

            // orderDate=currentDate
            order.orderDate = DateTime.Today;
            //estimatedDeliveryDat=Set After 1 week
            order.orderEstimatedDelivery = DateTime.Now.AddDays(7);
            //TransactionId = TR+current time
            order.transactionId = "TR" + DateTime.Now;
            //save to db -> LINQ
            db.Entry(order).State = EntityState.Modified;
            db.SaveChanges();
            return Ok(order.transactionId);
        }
    }
}
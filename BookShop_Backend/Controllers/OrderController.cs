using BookShop_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BookShop_Backend.Controllers
{
    public class OrderController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        //To do: PlaceOrder() 
        public IHttpActionResult PlaceOrder(int userId)
        {
            //find order object using userId
            Order order = db.Orders.Find(userId);
            // orderDate=currentDate
            order.orderDate = DateTime.Today;
            //estimatedDeliveryDat=Set After 1 week
            order.orderEstimatedDelivery = DateTime.Now.AddDays(7);
            //TransactionId = TR+current time
            order.transactionId = "TR" + DateTime.Now;
            //save to db -> LINQ
            db.Orders.Add(order); //do we have to add order to order table?
            db.SaveChanges();
            return Ok(order.transactionId); //or return order?
        }
    }
}

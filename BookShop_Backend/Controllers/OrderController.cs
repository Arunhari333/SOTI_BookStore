using BookShop_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BookShop_Backend.Controllers
{
    [EnableCors(origins: "http://localhost:4200/", headers:"*", methods:"*")]
    [RoutePrefix("api/Order")]
    public class OrderController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        [Route("UserOrders/{userId:int}")]
        public IEnumerable<Order> GetOrdersByUser(int userId)
        {
            List<Order> orders = ((List<Order>)(from item in db.Orders
                                  where item.userId == userId
                                  select item));
            return orders;
        }

        //To do: PlaceOrder() 
        [Route("PlaceOrder/{id:int}")]
        [HttpPut]
        public IHttpActionResult PlaceOrder(int userId)
        {
            //find order object using userId
            Order order = (Order)(from item in db.Orders
                                  where item.userId == userId && item.complete == false
                                  select item);

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
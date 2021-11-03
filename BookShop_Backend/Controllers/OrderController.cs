using BookShop_Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.Jwt;
using WebApi.Jwt.Filters;

namespace BookShop_Backend.Controllers
{
    [RoutePrefix("api/Order")]
    public class OrderController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Order/UserOrders/5
        [Route("UserOrders/{userId:int}")]
        [JwtAuthentication]
        public IEnumerable<Order> GetOrdersByUser(int userId)
        {
            var orders = (from item in db.Orders
                          where item.userId == userId
                          select item).ToList();
            return orders;
        }

        // PUT: api/Order/PlaceOrder/5
        [Route("PlaceOrder/{shipId:int}/{totalPrice:int}")]
        [HttpPut]
        [JwtAuthentication]
        public IHttpActionResult PlaceOrder(int shipId, int totalPrice)
        {
            int userId = CurrentUser.id;
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
            order.shippingAddressId = shipId;
            order.totalPrice = totalPrice;
            order.complete = true;
            //save to db -> LINQ
            db.Entry(order).State = EntityState.Modified;

            //Creating a new order instance for the user
            Order newOrder = new Order(userId);
            db.Orders.Add(newOrder);

            db.SaveChanges();
            return Ok(order);
        }
    }
}
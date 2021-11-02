using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BookShop_Backend.Models;
using WebApi.Jwt;

namespace BookShop_Backend.Controllers
{
    public class PartialOrders
    {
        public int id { get; set; }
        public int qty { get; set; }
    }
    
    [RoutePrefix("api/OrderItems")]
    public class OrderItemsController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/OrderItems
        [Route("")]
        public IQueryable<OrderItem> GetOrderItem()
        {
            return db.OrderItem;
        }

        // GET: api/OrderItems/5
        [Route("{id:int}")]
        [ResponseType(typeof(OrderItem))]
        public IHttpActionResult GetOrderItem(int id)
        {
            OrderItem orderItem = db.OrderItem.Find(id);
            if (orderItem == null)
            {
                return NotFound();
            }

            return Ok(orderItem);
        }

        // GET: api/OrderItems/GetByUser/5
        [Route("GetByUser")]
        public IEnumerable<OrderItem> GetOrderItemsByUser()
        {
            int userId = CurrentUser.id;
            Order order = (from item in db.Orders
                           where item.userId == userId && item.complete == false
                           select item).SingleOrDefault();

            if (order == null)
            {
                return null;
            }

            var orderItems = (from item in db.OrderItem
                              where item.orderId == order.id
                              select item).ToList();

            return orderItems;
        }

        // GET: api/OrderItems/GetByOrder/5
        [Route("GetByOrder/{oid:int}")]
        public IEnumerable<OrderItem> GetOrderItemsByOrder(int oid)
        {
            Order order = db.Orders.Find(oid);

            if (order == null)
            {
                return null;
            }

            var orderItems = (from item in db.OrderItem
                              where item.orderId == order.id
                              select item).ToList();

            return orderItems;
        }

        //PUT: api/OrderItems
        [Route("")]
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOrderItems(PartialOrders[] items)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            OrderItem orderItem;
            foreach (var item in items)
            {
                orderItem = db.OrderItem.Find(item.id);
                if (orderItem == null)
                {
                    return BadRequest();
                }
                orderItem.qty = item.qty;
                db.Entry(orderItem).State = EntityState.Modified;
            }

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                foreach (var item in items)
                {
                    if (!OrderItemExists(item.id))
                    {
                        return NotFound();
                    }
                }
                throw;
            }

            return StatusCode(HttpStatusCode.OK);
        }

        //POST: api/OrderItems
        [Route("")]
        [HttpPost]
        [ResponseType(typeof(OrderItem))]
        public IHttpActionResult PostOrderItem(OrderItem orderItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Order order = (from item in db.Orders
                           where item.userId == CurrentUser.id && item.complete == false
                           select item).SingleOrDefault();

            if (order == null)
            {
                return null;
            }

            var orderItems = (from item in db.OrderItem
                              where item.orderId == order.id
                              select item).ToList();
            orderItem.orderId = order.id;

            db.OrderItem.Add(orderItem);
            db.SaveChanges();

            return Ok(orderItem);
        }

        // DELETE: api/OrderItems/5
        [Route("{id:int}")]
        [HttpDelete]
        [ResponseType(typeof(OrderItem))]
        public IHttpActionResult DeleteOrderItem(int id)
        {
            OrderItem orderItem = db.OrderItem.Find(id);
            if (orderItem == null)
            {
                return NotFound();
            }

            db.OrderItem.Remove(orderItem);
            db.SaveChanges();

            return Ok(orderItem);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderItemExists(int id)
        {
            return db.OrderItem.Count(e => e.id == id) > 0;
        }
    }
}
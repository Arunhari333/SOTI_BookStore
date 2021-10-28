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

namespace BookShop_Backend.Controllers
{
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

        // GET: api/OrderItems/5
        [Route("GetByUser/{uid:int}")]
        [ResponseType(typeof(OrderItem))]
        public IEnumerable<OrderItem> GetOrderItemsByUser(int uid)
        {
            Order order = (from item in db.Orders
                           where item.userId == uid && item.complete == false
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

        [Route("{id:int}")]
        [HttpPatch]
        [ResponseType(typeof(void))]
        public IHttpActionResult PatchOrderItem(int id, OrderItem orderItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != orderItem.id)
            {
                return BadRequest();
            }

            db.Entry(orderItem).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // PUT: api/OrderItems
        [Route("")]
        [HttpPatch]
        [ResponseType(typeof(void))]
        public IHttpActionResult PatchOrderItems(OrderItem[] orderItems)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            foreach (var orderItem in orderItems)
            {
                db.Entry(orderItem).State = EntityState.Modified;
            }

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                foreach (var orderItem in orderItems)
                {
                    if (!OrderItemExists(orderItem.id))
                    {
                        return NotFound();
                    }
                }
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/OrderItems
        [Route("")]
        [HttpPost]
        [ResponseType(typeof(OrderItem))]
        public IHttpActionResult PostOrderItem(OrderItem orderItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

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

        //[ResponseType(typeof(void))]
        //[Route("UpdateQty/{id:int}")]
        //[HttpPut]
        //public IHttpActionResult PutQty(int id, int qty)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    OrderItem item = db.OrderItem.Find(id);
        //    if (item == null)
        //    {
        //        return BadRequest();
        //    }
        //    item.qty = qty;
        //    db.Entry(item).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!OrderItemExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

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
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
    [RoutePrefix("api/Shipping")]
    public class ShippingController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Shipping
        [Route("")]
        public IQueryable<ShippingAddress> GetShippingAddress()
        {
            return db.ShippingAddress;
        }

        // GET: api/Shipping/5
        [Route("{id:int}")]
        [ResponseType(typeof(ShippingAddress))]
        public IHttpActionResult GetShippingAddress(int id)
        {
            ShippingAddress shippingAddress = db.ShippingAddress.Find(id);
            if (shippingAddress == null)
            {
                return NotFound();
            }

            return Ok(shippingAddress);
        }

        [Route("SearchByUserId/{userId}")]
        public IEnumerable<ShippingAddress> GetBookByCategoryId(int userId)
        {
            List<ShippingAddress> books = (from shipAdd in db.ShippingAddress
                                where shipAdd.userId == userId
                                select shipAdd).ToList();
            return books;
        }

        // POST: api/Shipping
        [Route("")]
        [HttpPost]
        [ResponseType(typeof(ShippingAddress))]
        public IHttpActionResult PostShippingAddress(ShippingAddress shippingAddress)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ShippingAddress.Add(shippingAddress);
            db.SaveChanges();

            return Ok(shippingAddress);
        }

        // DELETE: api/Shipping/5
        [Route("{id:int}")]
        [HttpDelete]
        [ResponseType(typeof(ShippingAddress))]
        public IHttpActionResult DeleteShippingAddress(int id)
        {
            ShippingAddress shippingAddress = db.ShippingAddress.Find(id);
            if (shippingAddress == null)
            {
                return NotFound();
            }

            db.ShippingAddress.Remove(shippingAddress);
            db.SaveChanges();

            return Ok(shippingAddress);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ShippingAddressExists(int id)
        {
            return db.ShippingAddress.Count(e => e.id == id) > 0;
        }
    }
}
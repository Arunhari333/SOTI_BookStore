using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BookShop_Backend.Models;

namespace BookShop_Backend.Controllers
{
    [RoutePrefix("api/DiscountCoupons")]
    public class DiscountCouponsController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/DiscountCoupons
        [Route("")]
        public IQueryable<DiscountCoupon> GetDiscountCoupons()
        {
            return db.DiscountCoupons;
        }

        // GET: api/DiscountCoupons/5
        [Route("{id:int}")]
        [ResponseType(typeof(DiscountCoupon))]
        public IHttpActionResult GetDiscountCoupon(int id)
        {
            DiscountCoupon discountCoupon = db.DiscountCoupons.Find(id);
            if (discountCoupon == null)
            {
                return NotFound();
            }

            return Ok(discountCoupon);
        }

        // PUT: api/DiscountCoupons/5
        [Route("{id:int}")]
        [ResponseType(typeof(DiscountCoupon))]
        public IHttpActionResult PutDiscountCoupon(int id, DiscountCoupon discountCoupon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != discountCoupon.id)
            {
                return BadRequest();
            }

            db.Entry(discountCoupon).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DiscountCouponExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(discountCoupon);
        }

        // POST: api/DiscountCoupons
        [Route("")]
        [ResponseType(typeof(DiscountCoupon))]
        public IHttpActionResult PostDiscountCoupon(DiscountCoupon discountCoupon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.DiscountCoupons.Add(discountCoupon);
            db.SaveChanges();

            return Ok(discountCoupon);
        }

        // DELETE: api/DiscountCoupons/5
        [Route("{id:int}")]
        [ResponseType(typeof(DiscountCoupon))]
        public IHttpActionResult DeleteDiscountCoupon(int id)
        {
            DiscountCoupon discountCoupon = db.DiscountCoupons.Find(id);
            if (discountCoupon == null)
            {
                return NotFound();
            }

            db.DiscountCoupons.Remove(discountCoupon);
            db.SaveChanges();

            return Ok(discountCoupon);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DiscountCouponExists(int id)
        {
            return db.DiscountCoupons.Count(e => e.id == id) > 0;
        }
    }
}
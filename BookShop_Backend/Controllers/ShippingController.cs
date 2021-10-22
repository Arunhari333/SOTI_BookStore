﻿using System;
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
    public class ShippingController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Shipping
        public IQueryable<ShippingAddress> GetShippingAddress()
        {
            return db.ShippingAddress;
        }

        // GET: api/Shipping/5
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

        // POST: api/Shipping
        [ResponseType(typeof(ShippingAddress))]
        public IHttpActionResult PostShippingAddress(ShippingAddress shippingAddress)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ShippingAddress.Add(shippingAddress);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = shippingAddress.id }, shippingAddress);
        }

        // DELETE: api/Shipping/5
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
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
using WebApi.Jwt.Filters;

namespace BookShop_Backend.Controllers
{
    [RoutePrefix("api/Wishlist")]
    public class WishlistsController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Wishlist
        [Route("")]
        [JwtAuthentication]
        public IEnumerable<Wishlist> GetWishlist()
        {
            int userId = 2;
            var wishlist = (from item in db.Wishlist
                              where item.userId == userId
                              select item).ToList();
            return wishlist;
        }

        // POST: api/Wishlist
        [Route("")]
        [JwtAuthentication]
        [ResponseType(typeof(Wishlist))]
        public IHttpActionResult PostWishlist(Wishlist wishlist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Wishlist.Add(wishlist);
            db.SaveChanges();

            return Ok(wishlist);
        }

        // DELETE: api/Wishlist/5
        [Route("{id:int}")]
        [JwtAuthentication]
        [ResponseType(typeof(Wishlist))]
        public IHttpActionResult DeleteWishlist(int id)
        {
            Wishlist wishlist = db.Wishlist.Find(id);
            if (wishlist == null)
            {
                return NotFound();
            }

            db.Wishlist.Remove(wishlist);
            db.SaveChanges();

            return Ok(wishlist);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WishlistExists(int id)
        {
            return db.Wishlist.Count(e => e.id == id) > 0;
        }
    }
}
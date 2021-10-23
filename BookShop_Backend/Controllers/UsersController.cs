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
    public class UsersController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Users
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }

        // GET: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            new Order(user.id);
            db.Users.Add(user);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.id }, user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.id == id) > 0;
        }
        //public IHttpActionResult ToggleUser(int id1)
        //{
        //    User user = db.Users.Find(id1);
        //    user.isAdmin = !user.isAdmin;

        //    db.SaveChanges();
        //    return Ok(user);
        //}

        [ResponseType(typeof(void))]
        public IHttpActionResult PutToggle(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            User item = db.Users.Find(id);
            if (item == null)
            {
                return BadRequest();
            }
            item.isAdmin = !item.isAdmin;
            db.Entry(item).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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







        //public IHttpActionResult Login(string username, string password)
        //{
        //    User user =     (from u in db.Users
        //                        where u.username == username 
        //                        and u.password == password
        //                        select u);
        //    if (username==user.username && password== user.password)
        //    {
        //        return Ok(user);
        //    }
        //    return NotFound();
        //}


    }
}
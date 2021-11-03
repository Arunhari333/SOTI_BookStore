using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BookShop_Backend.Models;
using WebApi.Jwt;
using WebApi.Jwt.Filters;

namespace BookShop_Backend.Controllers
{
    public class LoginData
    {
        public string username { get; set; }
        public string password { get; set; }
    }

    [RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Users
        [Route("")]
        [AdminAuthentication]
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }

        // GET: api/Users/5
        [Route("{id:int}")]
        [AdminAuthentication]
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

        // GET: api/Users/GetCurrentUser
        [Route("GetCurrentUser")]
        [JwtAuthentication]
        [ResponseType(typeof(User))]
        public IHttpActionResult GetCurrentUser()
        {
            User user = db.Users.Find(CurrentUser.id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [Route("GetCurrentUserId")]
        [JwtAuthentication]
        public int GetCurrentUserId()
        {
            return CurrentUser.id;
        }

        [Route("GetByUserName/{username}")]
        [AdminAuthentication]
        [ResponseType(typeof(User))]
        public int GetUserIdByUsername(string username)
        {
            User user = (from u in db.Users
                         where u.username == username
                         select u).SingleOrDefault();
            if (user == null)
            {
                return 0;
            }
            return user.id;
        }

        // PUT: api/Users/5
        [Route("{id:int}")]
        [HttpPut]
        [JwtAuthentication]
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

            return StatusCode(HttpStatusCode.OK);
        }

        // POST: api/Users
        [Route("")]
        [HttpPost]
        [JwtAuthentication]
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Users.Add(user);

            Order order = new Order(user.id);
            db.Orders.Add(order);

            db.SaveChanges();

            return Ok(user);
        }

        // PUT: api/Users/ToggleStatus/5
        [Route("ToggleStatus/{id:int}")]
        [HttpPut]
        [AdminAuthentication]
        [ResponseType(typeof(void))]
        public IHttpActionResult ToggleUserStatus(int id)
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
            item.status = !item.status;
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

            return StatusCode(HttpStatusCode.OK);
        }

        [AllowAnonymous]
        [Route("login")]
        [HttpPost]
        public Token Login(LoginData credentials)
        {
            if (CheckUser(credentials.username, credentials.password))
            {
                CurrentUser.id = GetUserIdByUsername(credentials.username);
                return JwtManager.GenerateToken(credentials.username);
            }

            throw new HttpResponseException(HttpStatusCode.Unauthorized);
        }

        private bool CheckUser(string username, string password)
        {
            User user = (from u in db.Users
                         where u.username == username && u.password == password
                         select u).SingleOrDefault();
            if(user == null)
            {
                return false;
            }
            return true;
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
    }
}
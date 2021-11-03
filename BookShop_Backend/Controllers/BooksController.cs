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
using WebApi.Jwt.Filters;

namespace BookShop_Backend.Controllers
{
    //[EnableCors(origins: "http://localhost:4200", headers:"*", methods:"*")]
    [RoutePrefix("api/Books")]
    public class BooksController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Books
        [AllowAnonymous]
        [Route("")]
        public IQueryable<Book> GetBooks()
        {
            return db.Books;
        }

        // GET: api/Books/5
        [AllowAnonymous]
        [Route("{id:int}")]
        [ResponseType(typeof(Book))]
        public IHttpActionResult GetBook(int id)
        {
            Book book = db.Books.Find(id);
            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        //GET: api/Books/SearchByName/Harry Potter
        [AllowAnonymous]
        [Route("SearchByName/{name}")]
        public IEnumerable<Book> GetBookByName(string name)
        {
            List<Book> books = (from book in db.Books
                                where book.bookTitle.Contains(name)
                                select book).ToList();
            return books;
        }

        //GET: api/Books/SearchByAuthor/JK Rowling
        [AllowAnonymous]
        [Route("SearchByAuthor/{author}")]
        public IEnumerable<Book> GetBookByAuthor(string author)
        {
            List<Book> books = (from book in db.Books
                                where book.bookAuthor.Contains(author)
                                select book).ToList();
            return books;
        }

        //GET: api/Books/SearchByISBN/26734682
        [AllowAnonymous]
        [Route("SearchByISBN/{isbn}")]
        public IEnumerable<Book> GetBookByISBN(long isbn)
        {
            List<Book> books = (from b in db.Books
                                where b.ISBN == isbn
                                select b).ToList();
            return books;
        }

        //GET: api/Books/SearchByCategoryId/2
        [AllowAnonymous]
        [Route("SearchByCategoryId/{cid}")]
        public IEnumerable<Book> GetBookByCategoryId(int cid)
        {
            List<Book> books = (from book in db.Books
                                where book.CategoryId == cid
                                select book).ToList();
            return books;
        }

        //GET: api/Books/SearchByCategory/2
        [AllowAnonymous]
        [Route("SearchByCategory/{category}")]
        public IEnumerable<Book> GetBookByCategory(string category)
        {
            List<Book> books = (from book in db.Books
                                where book.Category.catName == category
                                select book).ToList();
            return books;
        }

        // PUT: api/Books/5
        [Route("{id:int}")]
        [HttpPut]
        [AdminAuthentication]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBook(int id, Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != book.id)
            {
                return BadRequest();
            }

            db.Entry(book).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(book);
        }

        // POST: api/Books
        [Route("")]
        [HttpPost]
        [AdminAuthentication]
        [ResponseType(typeof(Book))]
        public IHttpActionResult PostBook(Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Books.Add(book);
            db.SaveChanges();

            return Ok(book);
        }

        // DELETE: api/Books/5
        [Route("{id:int}")]
        [HttpDelete]
        [AdminAuthentication]
        [ResponseType(typeof(Book))]
        public IHttpActionResult DeleteBook(int id)
        {
            Book book = db.Books.Find(id);
            if (book == null)
            {
                return NotFound();
            }

            db.Books.Remove(book);
            db.SaveChanges();

            return Ok(book);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookExists(int id)
        {
            return db.Books.Count(e => e.id == id) > 0;
        }
    }
}
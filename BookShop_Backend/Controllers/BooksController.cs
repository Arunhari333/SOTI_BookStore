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
    public class BooksController : ApiController
    {
        private ApplicationDBContext db = new ApplicationDBContext();

        // GET: api/Books
        public IQueryable<Book> GetBooks()
        {
            return db.Books;
        }

        // GET: api/Books/5
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

        //GET: api/Books/name=""
        public IEnumerable<Book> GetBookByName(string name)
        {
            List<Book> books = (from book in db.Books
                                where book.bookTitle == name
                                select book).ToList();
            return books;
        }

        //GET: api/Books/author=""
        public IEnumerable<Book> GetBookByAuthor(string author)
        {
            List<Book> books = (from book in db.Books
                                where book.bookAuthor == author
                                select book).ToList();
            return books;
        }

        //GET: api/Books/isbn=5
        public IEnumerable<Book> GetBookByISBN(int isbn)
        {
            List<Book> books = (from book in db.Books
                                where book.ISBN == isbn
                                select book).ToList();
            return books;
        }

        //GET: api/Books/cid=5
        public IEnumerable<Book> GetBookByCategoryId(int cid)
        {
            List<Book> books = (from book in db.Books
                                where book.CategoryId == cid
                                select book).ToList();
            return books;
        }

        // PUT: api/Books/5
        // update
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

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Books
        // add
        [ResponseType(typeof(Book))]
        public IHttpActionResult PostBook(Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Books.Add(book);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = book.id }, book);
        }

        // DELETE: api/Books/5
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
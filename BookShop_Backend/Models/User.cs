using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookShop_Backend.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }
        [MinLength(3, ErrorMessage = "Username must be between 3 and 20 characters")]
        public string username { get; set; }
        [MinLength(6, ErrorMessage = "Password must be at least 6 characters")]
        public string password { get; set; }
        [EmailAddress(ErrorMessage = "Enter a valid Email Address")]
        public string email { get; set; }
        public bool isAdmin { get; set; }
        public bool status { get; set; }
    }
}
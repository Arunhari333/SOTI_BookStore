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
        [Range(3, 20, ErrorMessage = "Username must be between 6 and 20 characters")]
        public string username { get; set; }
        [Range(6, 25, ErrorMessage = "Password must be at least 6 characters")]
        public string password { get; set; }
        [EmailAddress(ErrorMessage = "Enter a valid Email Address")]
        public string email { get; set; }
        public bool isAdmin { get; set; }
        public bool status { get; set; }
    }
}
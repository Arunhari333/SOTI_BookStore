using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using BookShop_Backend.Controllers;
using BookShop_Backend.Models;

namespace BookShop_Backend.Tests.Controllers
{
    [TestClass]
    public class UsersControllerTest
    {
        [TestMethod]
        public void ToggleUserStatus()
        {
            var controller = new UsersController();
            //bool prevStatus = controller.GetUser(2).status;
            //controller.ToggleUserStatus(2);
            //bool newStatus = controller.GetUser(2).status;
            //Assert.AreEqual(newStatus, !prevStatus);
        }
    }
}

namespace BookShop_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class createDatabase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        booktitle = c.String(),
                        ISBN = c.Long(nullable: false),
                        bookYear = c.Int(nullable: false),
                        bookDescription = c.String(),
                        bookStatus = c.Boolean(nullable: false),
                        bookImage = c.String(),
                        bookPrice = c.Int(nullable: false),
                        CategoryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Categories", t => t.CategoryId, cascadeDelete: true)
                .Index(t => t.CategoryId);
            
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        catName = c.String(),
                        catdescripation = c.String(),
                        catImage = c.String(),
                        catStatus = c.Boolean(nullable: false),
                        catPosition = c.Int(nullable: false),
                        catCreateAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        orderQty = c.Int(nullable: false),
                        orderAddress = c.Int(nullable: false),
                        orderDate = c.DateTime(),
                        orderEstimationDelivery = c.DateTime(),
                        bookId = c.Int(nullable: false),
                        userId = c.Int(nullable: false),
                        ShippingAddress_id = c.Int(),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Books", t => t.bookId, cascadeDelete: true)
                .ForeignKey("dbo.ShippingAddresses", t => t.ShippingAddress_id)
                .ForeignKey("dbo.Users", t => t.userId, cascadeDelete: true)
                .Index(t => t.bookId)
                .Index(t => t.userId)
                .Index(t => t.ShippingAddress_id);
            
            CreateTable(
                "dbo.ShippingAddresses",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        address = c.String(),
                        city = c.String(),
                        state = c.String(),
                        zipcode = c.Int(nullable: false),
                        date_added = c.DateTime(),
                        userId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Users", t => t.userId, cascadeDelete: true)
                .Index(t => t.userId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        username = c.String(),
                        password = c.String(),
                        email = c.String(),
                        isAdmin = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "userId", "dbo.Users");
            DropForeignKey("dbo.Orders", "ShippingAddress_id", "dbo.ShippingAddresses");
            DropForeignKey("dbo.ShippingAddresses", "userId", "dbo.Users");
            DropForeignKey("dbo.Orders", "bookId", "dbo.Books");
            DropForeignKey("dbo.Books", "CategoryId", "dbo.Categories");
            DropIndex("dbo.ShippingAddresses", new[] { "userId" });
            DropIndex("dbo.Orders", new[] { "ShippingAddress_id" });
            DropIndex("dbo.Orders", new[] { "userId" });
            DropIndex("dbo.Orders", new[] { "bookId" });
            DropIndex("dbo.Books", new[] { "CategoryId" });
            DropTable("dbo.Users");
            DropTable("dbo.ShippingAddresses");
            DropTable("dbo.Orders");
            DropTable("dbo.Categories");
            DropTable("dbo.Books");
        }
    }
}

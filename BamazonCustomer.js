var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: "Banks2013!",
	database: "bazamon_db"
})

connection.connect(function(err) {
	console.log("Connected as id: "+connection.threadId);
	start();
})
var products= [];

var start = function () {
	console.log("All items available for sale");
	connection.query("SELECT * FROM products", function(err, res) {
		product = res;
		// console.log(product);
		// console.log(res);
		var choiceArray = [];
		inquirer.prompt([{
			name: "choices",
			type: "rawlist",
			choices: function(value) {
				
				for (var i=0; i<res.length;i++) {
					choiceArray.push(res[i].product_name + "  $" + res[i].department_nameprice);
				}
				return choiceArray;
			},
			message: "Please type the item ID number you wish to purchase"
			}]).then(function(answer) {
				// console.log("array index: ", choiceArray.indexOf(answer.choices))
				// console.log("line 36", answer)
				var itemIndex = choiceArray.indexOf(answer.choices) + 1;
				quantityCheck(itemIndex);
			})

var quantityCheck = function(itemId) {
	inquirer.prompt({
			name: "amount",
			type: "input",
			message: "How many would you like to purchase?",
			validate: function(val) {
				if(parseInt(val) <= product[itemId].department_quantity) {
					return true
					connection.query("UPDATE products SET ? WHERE ?", [{
						quantity_purchased: val
					},{
						item_id: itemId
					}]), function(err, res) {
					console.log("Purchase was successful!");
				}
				}else {
					console.log("\n\n Insufficient Quantity! Only " + product[itemId].department_quantity + " in stock.")
				}
				},

			}).then(function(boolean) {
				inquirer.prompt({
					name: "confirm",
					type: "confirm",
					message: "Would you like to purchase anything else?",
					validate: function(value){
						if(isNaN(value)==false){
						return true;
						} else{
						return false;
							}
						}
					}).then(function(answer) {
      					// based on their answer, either call the bid or the post functions
      						if (answer.confirm === true) {
      							console.log("What else would you like to purchase?");
     						   start();
    							}
   						   else {
       						 console.log("You are ready to check out!");
     						 }
   			 			})
					// .then(function(update) {

   		// 	 				if(itemId == product[i].item_id) {
   		// 	 					var purchaseQuant = val;
   		// 	 					console.log("Purchased Quant: " + purchaseQuant);
   		// 	 				}
   		// 	 			})
				})	
		}

	})
}

//function to show total at end of purchase to checkout
// var addPurchased = function() {
//    connection.query('SELECT * FROM products' function (error, res) {
//    	console.log(res);
//    	for (var i =0; i<res.length; i++) {
//    		if(res[i].)
//    	}
//    	inquirer.prompt({
//    		name: "checkout",
//    		type: "confirm",
//    		message: "Your cart: \n\n" 
//    	})
// }




// var add = function (id, name) {
//     connection.query('SELECT * FROM products WHERE item_id = ?', [item_id, product_name] function (error, res) {
//     // 	var selected = id;
//     //   for (var i=0; i<res.length; i++) {
// 				// 	selected.push(res[i].product_name + "  $" + res[i].department_nameprice);
// 				// }
// 				// return selected;
//       if (error) throw error;
//      var quantity = res[0].department_quantity;
//      console.log(quantity); // the over_head_costs
//      var totalQuant = quantity + 20;
//         // Handling the calculation
//         var update = 'UPDATE products SET department_quantity = ' + totalQuant;
//         var condition = ' WHERE item_id = ' + id;
//          connection.query(update + condition, function (error, res) {
          
//           if (error) throw error;
//           console.log("Total cost has been updated!!!");
//           connection.end();
//         });
//     });
//     }









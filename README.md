# Bamazon Project

##Overview

In this project I've created a Respoisoty with a .gitignore, js and sql file. The js file requires inquirer and mysql packages and I've created a connection to my localhost. In my terminal, the user(or Customer) will see a list of available fishing related products for sale along with their ID and 

##CustomerNode Part

The Customer recieves a prompt with a list of available items to purchase along with their price. The Customer can then scroll through the items and select with item they would like to purchase. Then add the amount of items they wish to purchase. The prompt will then ask if they would like to continue shopping or checkout. If they select contiue shopping the prompt will ask Q1 and Q2 again. Once the Customer selects they are done shopping the prompt says "You are rady to checkout!".

##MYSql Part

MySql has a table called Products which has 4 columns: Item_id, Product_name, Department_Quantity and Purchased_Quantity. When th Customer selects they they are ready to checkout, the Purchased_Quantity colums updates. 
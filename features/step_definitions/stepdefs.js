const assert = require("assert");

const { Given, When, Then } = require("@cucumber/cucumber");

let shoppingCart = [];

Given(
  "A Customer searches for a {string} {string} on website",
  function (string, string2) {
    console.log("<product>", "<available>", string, string2);
    console.log("shoppingCartBefore", shoppingCart);

    if (string2 === "true") {
      shoppingCart.push(string);
      console.log("shoppingCartAfter", shoppingCart);
      console.log("shoppingCartAfter length", shoppingCart.length);
    }
  }
);

When("A Customer buys a product", function () {
  if (shoppingCart.length > 0) {
    this.status = "successful";
    console.log("this.status", this.status);
  }
});

Then("The purchase stastus is {string}", function (expectedStatus) {
  assert.strictEqual(this.status, expectedStatus);
});



// Given(
//   "the following products are added to the shopping cart:",
//   function (dataTable) {
//     shoppingCart = dataTable.hashes();
//   }
// );

// When("I calculate the total cost", function () {
//   let totalCost = 0;

//   for (let i = 0; i < shoppingCart.length; i++) {
//     const product = shoppingCart[i];

//     totalCost += parseInt(product.Price);
//   }

//   this.totalCost = totalCost;
// });

// Then("the total cost should be {int}", function (expectedTotalCost) {
//   const actualTotalCost = this.totalCost;

//   assert.strictEqual(actualTotalCost, expectedTotalCost);
// });

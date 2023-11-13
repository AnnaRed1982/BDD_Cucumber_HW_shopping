const assert = require("assert");

const { Given, When, Then } = require("@cucumber/cucumber");

function isItFriday(today) {
  return today === "Friday" ? "TGIF" : "Nope";
}

Given("today is {string}", function (string) {
  this.today = string;
});
When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today);
});
Then("I should be told {string}", function (expectedAnswer) {
  console.log("expectedAnswer=", expectedAnswer);
  console.log("this.actualAnswer=", this.actualAnswer);
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

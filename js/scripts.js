//business logic
function Account (name,initDeposit){
  this.name = name;
  this.initDeposit = initDeposit;

}

Account.prototype.Deposit = function(amount) {
  this.initDeposit += amount;
  return this.initDeposit;
}

Account.prototype.Withdrawal = function(amount) {
  this.initDeposit -= amount;
  return this.initDeposit;
}

Account.prototype.AccountNumber = function() {
  return parseInt( Math.random() * 90000 ).toString();
}
//User logic
$(document).ready(function(){

  $("form#create").submit(function(event){ // submit the form
    event.preventDefault();

    // getting user input
    var name = $(".name").val();
    var number = parseFloat( $("#initDeposit").val() );

    var users = new Account(name,initDeposit); //instantiate a new user account

    // show the newly created account
    $("#Registered").show();
    $(".Name").text(name);
    $("#accountNum").text(users.AccountNumber() + 10);
  });
})

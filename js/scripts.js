//business logic
var nextAccountNumber = parseInt( Math.random() * 90000 );

function Account(name,initDeposit) {
  this.name = name;
  this.initDeposit = initDeposit;
  this.accountNumber = nextAccountNumber+=10;

}
Account.prototype.Deposit = function(amount) {
  return this.initDeposit += amount;
}

Account.prototype.Withdrawal = function(amount) {
  return this.initDeposit -= amount;
}

Account.prototype.AccountNumber = function() {
  return this.accountNumber;
}
//User logic
$(document).ready(function(){



  $("button#register").click(function(){ // submit the form
    // getting user input
    var name = $(".name").val();
    var number = parseInt($("#initDeposit").val());

    console.log(number);

    var users = new Account(name,number); //instantiate a new user account

    // show the newly created account
    $("#Registered").show();
    $(".Name").text(name);
    $("#accountNum").text(users.AccountNumber());
    console.log(users.initDeposit);
    $("#balance").text(users.initDeposit);

    $("button#update").click(function(){
    var deposit= parseInt($("#deposit").val());
    var withdrawal= parseInt($("#withdrawal").val());
      //deposit
      if( parseInt($("#acctNum").val())  === users.AccountNumber() ) {
        $("#balance").val(users.Deposit(deposit));
      } else {
        alert("Please enter a valid account number");
      };

      if(parseInt($("#acctNum").val()) === users.AccountNumber() ) {
        $("#balance").val(users.Withdrawal(withdrawal));
      } else {
        alert("Please enter a valid account number");
      };
       
    });
  });

})

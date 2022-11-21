/*===============  Object Oriented Programing Javascript ===============*/
class CreateBankAccount{
    User_Name;
    Account_Number;
    User_Balance;
    constructor(name, balance = 'Balance is Empty'){
        this.User_Name = name;
        this.Account_Number = Date.now();
        this.User_Balance = balance;
    }

    deposit(amount){
        this.User_Balance += amount;
    }
    withdrew(amount){
        this.User_Balance -= amount;
    }
}

const account = new CreateBankAccount('Puja Bhawmik', 1000);

account.deposit(300);
account.withdrew(500);
console.log(account)
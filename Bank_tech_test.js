
  function get_date(date) 
  {
    var date_parts = date.split('/');
    var day = date_parts[0];
    var month = date_parts[1]-1;
    var year = date_parts[2];
    return new Date(year, month, day, 0, 0).toLocaleDateString
    ('en-gb',
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }
    );
  }

class Account 
{
  constructor(balance, ledger)
  {  
    this.balance = balance;
    this.ledger = ledger;
    balance = 0;
    ledger = []; 
  }

  increment(amount) 
  {
    this.balance += amount;
    return null;
  }

  deposit(amount, date)
  {
    var date1 = get_date(date)
    this.increment(amount);
    var new_deposit_array = [date1, amount, 0, this.balance];
    var formatted_deposit = new_deposit_array.join(' || ');
    this.ledger.push([formatted_deposit]);
    return null;
  }

  withdraw(amount, date)
  {
    var date2 = get_date(date);
    this.increment(-amount); 
    var new_withdrawal_array = [date2, 0, amount, this.balance];
    var formatted_withdrawal = new_withdrawal_array.join(' || ');
    this.ledger.push([formatted_withdrawal]);
    return null;
  }

  print_statement()
  {
    console.log("date || credit || debit || balance");
    const formatted_reversed_ledger = this.ledger.reverse().join("\r\n");
    console.log(formatted_reversed_ledger);
    return null;
  }

}

let Account1 = new Account(0, []);

Account1.deposit(1000, '10/01/2023');
Account1.deposit(2000, '13/01/2023');
Account1.withdraw(500, '14/01/2023');
Account1.print_statement();
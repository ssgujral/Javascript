let balance = 0;
let ledger = [];

function getBalance(){
  return balance;
}

function increment(amount) {
  balance = balance + amount;
}

function deposit(amount, day, month, year)
{
  var date1 = new Date(year, month-1, day+1, 0, 0).toLocaleDateString
  ('en-gb',
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timeZone: 'utc'
    }
  );
  increment(amount);
  new_deposit_array = [date1, amount, 0, getBalance()];
  formatted_deposit = new_deposit_array.join(' || ');
  ledger = ledger.concat([formatted_deposit]);
}

function withdraw(amount, day, month, year)
{
  var date2 = new Date(year, month-1, day+1, 0, 0).toLocaleDateString
  ('en-gb',
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timeZone: 'utc'
    }
  );
  increment(-amount); 
  new_withdrawal_array = [date2, 0, amount, getBalance()];
  formatted_withdrawal = new_withdrawal_array.join(' || ');
  ledger = ledger.concat([formatted_withdrawal]);
}


function print_statement()
{
  console.log("date || credit || debit || balance");
  const formatted_reversed_ledger = ledger.reverse().join("\r\n");
  console.log(formatted_reversed_ledger);

}







deposit(1000, 10, 01, 2023);
deposit(2000, 13, 01, 2023);
withdraw(500, 14, 1, 2023);
print_statement();

let balance = 0;
let ledger = [];

function getBalance(){
  return balance;
}

function increment(amount) {
  balance = balance + amount;
}


function deposit(amount, date)
{

  var date_parts = date.split('/');
  var day = date_parts[0];
  var month = date_parts[1]-1;
  var year = date_parts[2];

  var date1 = new Date(year, month, day, 0, 0).toLocaleDateString
  ('en-gb',
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }
  );

  increment(amount);
  new_deposit_array = [date1, amount, 0, getBalance()];
  formatted_deposit = new_deposit_array.join(' || ');
  ledger.push([formatted_deposit]);
}

function withdraw(amount, date)
{

  var date_parts2 = date.split('/');
  var day = date_parts2[0];
  var month = date_parts2[1]-1;
  var year = date_parts2[2];

  var date2 = new Date(year, month, day, 0, 0).toLocaleDateString
  ('en-gb',
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }
  );

  increment(-amount); 
  new_withdrawal_array = [date2, 0, amount, getBalance()];
  formatted_withdrawal = new_withdrawal_array.join(' || ');
  ledger.push([formatted_withdrawal]);
}

function print_statement()
{
  console.log("date || credit || debit || balance");
  const formatted_reversed_ledger = ledger.reverse().join("\r\n");
  console.log(formatted_reversed_ledger);

}







deposit(1000, '10/01/2023');
deposit(2000, '13/01/2023');
withdraw(500, '14/01/2023');
deposit(100000, '01/12/2023');
print_statement();
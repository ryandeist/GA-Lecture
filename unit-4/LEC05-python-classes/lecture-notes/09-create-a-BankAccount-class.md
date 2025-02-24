# Python Classes - Create a `BankAccount` Class

## 🎓 You Do
Let’s get some practice building an object hierarchy in Python by creating a `BankAccount` class!

Create a `BankAccount` class with the following members:

- `owner`: (attribute) The owner’s name as a string
- `balance`: (attribute) The amount of money in the account
- `account_no`: (attribute) A number to be randomly generated and assigned within `__init__` - not passed in at time of instantiation
- `deposit(amount)`: (method) When called on an instance, increases the `balance` by the `amount` argument and returns the new balance
- `withdraw(amount)`: (method) When called on an instance, decreases the `balance` by the `amount` argument and returns the new balance

Create two instances, make both deposits and withdrawals, and print the attributes to test them out.


## Hint
Here’s how to generate a random integer for the in Python:

```py
import random

# Use this inside of BankAccount's __init__ to generate
# a random account number from 111111111 to 999999999
self.account_no = random.randint(111111111, 999999999)
```

## Bonus
Override the `__str__` method to return the following formatted string:

```py
Account <account_no> - Balance: xxxxx.xx
```

Replacing `<account_no>` with the actual account number and `xxxxx.xx` with the actual balance.
# Python Classes - Creating a `SavingsAccount` Subclass

## 🎓 You Do
Create a `SavingsAccount` Class

Looking for even more practice building an object hierarchy in Python? Great!

## Extend the `BankAccount` Class
- First, modify the existing `BankAccount` class to include an additional attribute called `has_overdraft`.
    - This attribute should accept a Boolean value (True or False).
    - It should default to `False` if no value is provided during instantiation. This requires using a default parameter in the class’s constructor.
- Adjust the withdraw method to check the `has_overdraft` status.
    - If `has_overdraft` is `False` and the withdrawal amount exceeds the balance, deny the withdrawal and return an appropriate message.
    - Otherwise, if `has_overdraft` is `True`, deduct the amount from the balance and return the new balance.

## Create a `SavingsAccount` Class
- Next, create a new `SavingsAccount` class that subclasses the `BankAccount` class.
    - This new class should *specialize* the withdraw method. In the `SavingsAccount` class, override the withdraw method so that it no longer accepts any arguments, does not change the account balance, and returns the message `"No withdrawals permitted"`.
import random

# Bank Account Class Exercise

class BankAccount():
    def __init__(self, owner, balance=0, has_overdraft=False):
        self.owner = owner
        self.balance = balance
        self.has_overdraft = has_overdraft
        self.account_no = random.randint(111111111, 999999999)
        
    def deposit(self, amount):
        self.balance += amount
        print(f'The account for {self.owner}(Act#: {self.account_no}), now has ${(round(self.balance, 2)):,}')
        return self.balance
        
    def withdraw(self, amount):
        if amount > self.balance and self.has_overdraft == False:
            print(f'Cannot complete transaction. Account {self.account_no} would be overdrawn.')
        else:
            self.balance -= amount
            print(f'The account for {self.owner}(Act#: {self.account_no}), now has ${(round(self.balance, 2)):,}')
            return self.balance
    
    def __str__(self):
        return f'Account {self.account_no} - Balance: {(round(self.balance, 2)):,}'

class SavingsAccount(BankAccount):
    def withdraw(self):
        return 'No Withdrawals Permitted.'

ryans_account = BankAccount('Ryan', 345.00, True)
julias_account = BankAccount('Julia', 1304.44)
adams_account = BankAccount('Adam', 200)
ryans_saving = SavingsAccount('Ryan', 1000)

ryans_account.withdraw(500)
julias_account.withdraw(500)
adams_account.withdraw(500)
print(ryans_saving.withdraw())

print(ryans_account)
print(julias_account)
print(adams_account)

# ryans_account.deposit(1500)
# julias_account.deposit(1500)

# print(ryans_account)
# print(julias_account)

# Dog Class Exercise 

class Dog():
    next_id = 1
    
    def __init__(self, name, age=0):
        self.name = name
        self.age = age
        self.id = Dog.next_id
        
        Dog.next_id += 1
        
    def bark(self):
        print(f'{self.name} says woof!')
    
    def __str__(self):
        return f'Dog #{self.id} named {self.name} is {self.age} years old.'
    
    @classmethod
    def get_total_dogs(cls):
        return cls.next_id - 1
    
class ShowDog(Dog):
    def __init__(self, name, age=0, total_earnings=0):
        Dog.__init__(self, name, age)
        self.total_earnings = total_earnings
        
    def add_prize_money(self, amount):
        self.total_earnings += amount
        print(f'{self.name}\'s new total earnings are ${self.total_earnings}')

winky = ShowDog('Winky', 3, 1000)

# print(winky)

# winky.bark()

# print(winky.total_earnings)

# winky.add_prize_money(500)

# print(winky.total_earnings)

ruby = Dog('Ruby', 3)

# print(ruby)

# print(ruby.name, ruby.age)

# ruby.bark()

liam = Dog('Liam')

# print(liam.name, liam.age)

nums = [1, 2, 3]

# print(dir(nums))

# print(dir(ruby))

harry = Dog('Harry', 2)

# print(harry)

maggie = Dog('Maggie', 7)

# print(maggie)

spot = Dog('Spot', 4)

diogee = Dog('Diogee', 1)

# print(Dog.get_total_dogs())

# Vehicle Class Exercise 

class Vehicle():
    def __init__(self, make, model, running=False):
        self.make = make
        self.model = model
        self.running = running
    
    def start(self):
        self.running = True
        print('Starting Up!')
        
    def stop(self):
        self.running = False
        print('Turning Off')
        
    def __str__(self):
        return f'The vehicle is a {self.make} {self.model}. Running is {self.running}.'

ryans_car = Vehicle('Chevy', 'Malibu')

# print(ryans_car)

# ryans_car.start()

# print(ryans_car)

# ryans_car.stop()

# print(ryans_car)


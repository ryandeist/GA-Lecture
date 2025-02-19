# Writing a Python Class

class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age
        
    def bark(self):
        print(f'{self.name} says woof!')
    
    def __str__(self):
        return f'The dog named {self.name} is {self.age} years old'
        
ruby = Dog('Ruby', 3)

# print(ruby)

# print(ruby.name, ruby.age)

# ruby.bark()

liam = Dog('Liam')

# print(liam.name, liam.age)

nums = [1, 2, 3]

# print(dir(nums))

# print(dir(ruby))

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

print(ryans_car)

ryans_car.start()

print(ryans_car)

ryans_car.stop()

print(ryans_car)
# Writing a Python Class

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


# Writing a Python Class

class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age
        
    def bark(self):
        print(f'{self.name} says woof!')
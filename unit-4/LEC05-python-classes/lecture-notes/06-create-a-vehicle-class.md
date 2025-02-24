# Python Classes - Create a Vehicle Class

## 🎓 You Do
Define a class named `Vehicle` with the following members:

- `make`: attribute for the vehicle’s make.
- `model`: attribute for the vehicle’s model.
- `running`: attribute for maintaining whether or not the vehicle is running. Initialize `self.running` to a default of `False` within the `__init__()` method instead of passing the value in as an argument.
- `start()`: method for changing `running` to `True`. It should also print the string: `"Starting up!"`
- `stop()`: method for changing `running` to `False`. It should also print the string: `"Turning off."`
- Override the `__str__` method so that it returns a string formatted as: `The vehicle is a <make> <model>`. `<make>` and `<model>` should be replaced with the actual values of the make and model of the vehicle.

Test out the class by instantiating it, creating a vehicle of your choice. Call the `start()` and `stop()` methods, and print some of its attributes:

```py
car = Vehicle("Toyota", "RAV4")

print(car)
# prints: The vehicle is a Toyota RAV4.

print(car.running) 
# prints: False

car.start()
# prints: Starting up!

print(car.running) 
# prints: True
```

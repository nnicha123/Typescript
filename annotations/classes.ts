class Vehicle {
  drive(): void {
    console.log('chuga chuga');
  }
  honk(): void {
    console.log('honk');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.drive();
car.honk();

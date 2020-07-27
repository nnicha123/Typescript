const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
// Type alias
// Tuples
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];
// Better to use objects than tuple
const carStates = {
  horsePower: 400,
  weight: 3354,
};

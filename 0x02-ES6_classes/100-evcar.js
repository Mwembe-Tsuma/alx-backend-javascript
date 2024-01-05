// 11-evcar.js
import Car from './10-car';

const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[rangeSymbol] = '';

    // Verify and set the range using the setter
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}

// 9-holbertonclass.js

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter and setter for size
  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  // Getter and setter for location
  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  // Casting to a Number returns the size
  valueOf() {
    return this.size;
  }

  // Casting to a String returns the location
  toString() {
    return this.location;
  }
}

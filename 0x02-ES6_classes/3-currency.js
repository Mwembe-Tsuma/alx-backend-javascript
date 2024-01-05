export default class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    // Verify and set the values using the setters
    this.code = code;
    this.name = name;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

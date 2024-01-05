// 5-building.js
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
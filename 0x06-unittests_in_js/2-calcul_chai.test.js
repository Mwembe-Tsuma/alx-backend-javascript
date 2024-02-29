// File: 2-calcul_chai.test.js

import chai from 'chai';
import calculateNumber from './2-calcul_chai.js';

const { expect } = chai;


describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should add rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should subtract rounded b from a', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should divide rounded a by rounded b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should handle division by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});

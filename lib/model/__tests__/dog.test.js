const Dog = require('../dog');
// const mongoose = require('mongoose');

describe('Dog model', () => {

  it('valid model all properties', () => {
    const data = {
      breed: 'Jindo',
      temperment: 'Alert, Intelligent, Bold',
      group: 'Foundation Stock Service',
      countryOfOrigin: 'South Korea',
      lifespan: 14,
      hypoallergenic: false
    };

    const dog = new Dog(data);
    const err = dog.validateSync();
    expect(err).toBeUndefined();
    expect(dog.hypoallergenic).toBe(false);
  });

  it('enforces max of 25 years', () => {
    const data = {
      lifespan: 30
    };
    const dog = new Dog(data);
    const { errors } = dog.validateSync();
    expect(errors.lifespan.kind).toBe('max');
  });

  it('enforces min of 0 years', () => {
    const data = {
      lifespan: -10
    };
    const dog = new Dog(data);
    const { errors } = dog.validateSync();
    expect(errors.lifespan.kind).toBe('min');
  });

  it('enforces enum on group', () => {
    const data = {
      group: ['Hairy']
    };
    const dog = new Dog(data);
    const { errors } = dog.validateSync();
    console.log(errors);
    expect(errors['group.0'].kind).toBe('enum');
  });

});
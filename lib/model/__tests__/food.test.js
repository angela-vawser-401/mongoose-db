const Food = require('../food');
// const mongoose = require('mongoose');

describe('Food model', () => {

  it('valid model all properties', () => {
    const data = {
      name: 'Kimbap',
      category: {
        level: 'easy'
      },
      countryOfOrigin: 'Korea',
      servings: 1,
      canBeVegetarian: true,
      course: ['entree'],
    };

    const food = new Food(data);
    const errors = food.validateSync();
    expect(errors).toBeUndefined();

    const json = food.toJSON();

    expect(json).toEqual({
      ...data,
      _id: expect.any(Object),
    });
  });

  it.skip('validates required properties', () => {
    const data = {};
    const food = new Food(data);
    //const errors - food.validateSync().errors;
    const { errors } = food.validateSync();
    expect(errors.name.kind).toBe('required');
    expect(errors['category.level'].kind).toBe('required');
    expect(errors.countryOfOrigin.kind).toBe('required');
  });

  it.skip('populates default properties', () => {
    const data = {
      name: 'Kimbap',
      category: {        
        level: 'easy'
      },
      countryOfOrigin: 'Korea',
      servings: 1,
      canBeVegetarian: true,
      course: ['entree'],
    };

    const food = new Food(data);
    // const errors = food.validateSync().errors;
    const err = food.validateSync();
    expect(err).toBeUndefined();
    expect(food.canBeVegetarian).toBe(true);
  });

  it.skip('enforces max of 12 servings', () => {
    const data = {
      servings: 13
    };
    const food = new Food(data);
    const { errors } = food.validateSync();
    expect(errors.servings.kind).toBe('max');
  });

  it.skip('enforces min of 0 servings', () => {
    const data = {
      servings: -10
    };
    const food = new Food(data);
    const { errors } = food.validateSync();
    expect(errors.servings.kind).toBe('min');
  });

  it.skip('enforces enum on course', () => {
    const data = {
      media: ['frogs']
    };
    const food = new Food(data);
    const { errors } = food.validateSync();
    console.log(errors);
    expect(errors['course.0'].kind).toBe('enum');
  });

});
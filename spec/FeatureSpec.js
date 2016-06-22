'use strict';

describe('Feature Test', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at airport', function(){
    plane.land(airport)
    expect(airport.planes()).toContain(plane)
  });

  it('planes can be instructed to takeoff from an airport', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    plane.takeoff(airport)
    expect(airport.planes()).not.toContain(plane)
  });

  it('planes can\'t take off when stormy', function(){
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    // spyOn(Math, 'random').and.returnValue(1);
    expect(function(){plane.takeoff(airport)}).toThrowError('Plane can\'t takeoff in stormy weather');
  });

});
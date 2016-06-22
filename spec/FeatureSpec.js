'use strict';

describe('Feature Test', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at airport', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    plane.land(airport)
    expect(airport.planes()).toContain(plane)
  });

  it('planes can be instructed to takeoff from an airport', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    plane.takeoff(airport)
    expect(airport.planes()).not.toContain(plane)
  });

  it('planes can\'t take off when stormy', function(){
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){plane.takeoff(airport)}).toThrowError('Plane can\'t takeoff in stormy weather');
  });

  it('planes can\'t land when stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){plane.land(airport)}).toThrowError('Plane can\'t land in stormy weather');
  });

});

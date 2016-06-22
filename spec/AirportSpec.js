'use strict';

describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('initializes with an empty array for storing planes', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('clears planes for landing and stores that plane', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toContain(plane);
  });

  it('clears a plane for takeoff and removes plane from hangar', function(){
    airport.clearForLanding(plane);
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).not.toContain(plane);
  });

  it('can have stormy weather', function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(airport.isStormy()).toBeTruthy();
  });

});
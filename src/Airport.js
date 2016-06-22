'use strict';

function Airport(){
  this._hangar = []
};

Airport.prototype.planes = function(){
  return this._hangar
};

Airport.prototype.clearForLanding = function(plane){
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane){
  if (this.isStormy()) {
    throw new Error('Plane can\'t takeoff in stormy weather');
  }
  this._hangar.pop(plane);
};

Airport.prototype.isStormy = function(){
  return (Math.random() > 0.5);
};
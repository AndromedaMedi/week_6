const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const listStartLocations = this.journeys.map((journey) => {
  return journey.startLocation;
  })
  return listStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const listEndLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return listEndLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
   const journeyByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
   })
   return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyByDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance; 
  })
  return journeyByDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const uniqueModesOfTransport = this.journeys
//   .map((journey) => journey.transport)
//   .filter((journey, index, self) => self.indexOf(value === index));
//     // const cleanModeOfTransport = new Set(uniqueModesOfTransport);
//     return cleanModeOfTransport
// };

// const unique = array
//   .map((item) => item.age)
//   .filter((value, index, self) => self.indexOf(value) === index);


module.exports = Traveller;

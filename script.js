// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let pilotNameInput = document.querySelector("input[name=pilotName");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass");
    let list = document.getElementById("faultyItems")
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    let pilot = pilotNameInput.value;
    let copilot = copilotNameInput.value;
    let fuelLevel = fuelLevelInput.value;
    let cargoMass = cargoMassInput.value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass)
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let myPlanet = pickPlanet(listedPlanets);
       console.log(myPlanet);
       let name = myPlanet.name;
       let diameter = myPlanet.diameter;
       let star = myPlanet.star;
       let distance = myPlanet.distance;
       let moons = myPlanet.moons;
       let imageUrl = myPlanet.image;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
   })
   
});
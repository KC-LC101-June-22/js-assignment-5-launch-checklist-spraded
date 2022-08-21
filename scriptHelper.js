// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const destination = document.getElementById("missionTarget");
    destination.innerHTML =
   // Here is the HTML formatting for our mission target div.
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    let value = '';
    if (!testInput){
        value = 'Empty';
    } if (typeof Number(testInput) === "number" && testInput !== ''){
        value = 'Is a Number';
    } if (isNaN(Number(testInput))) {
        value = 'Not a Number';
    }
    return value;   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatusName = document.getElementById("pilotStatus");
   let copilotStatusName = document.getElementById("copilotStatus");
   let launchStatusColor = document.getElementById("launchStatus");
   let fuelStatusText = document.getElementById("fuelStatus");
   let cargoStatusText = document.getElementById("cargoStatus");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields required.");
   }
   if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Invalid input. Fuel and Cargo must be numbers.");
   }
   if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
    alert("Invalid input. Pilot and copilot names cannot be numbers.")
   }
   pilotStatusName.innerHTML = `Pilot ${pilot} is ready for launch`;
   copilotStatusName.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   if (fuelLevel <= 9999 && cargoLevel >= 10001){
    list.style.visibility = "visible";
    launchStatusColor.style.color = "rgb(199, 37, 78)";
    launchStatusColor.innerHTML = `Shuttle Not Ready for Launch`;
    fuelStatusText.innerHTML = `Fuel level too low for launch`;
    cargoStatusText.innerHTML = `Cargo mass too heavy for launch`;
   } 
   if (fuelLevel >= 10000 && cargoLevel >= 10001){
    list.style.visibility = "visible";
    launchStatusColor.style.color = "rgb(199, 37, 78)";
    launchStatusColor.innerHTML = `Shuttle Not Ready for Launch`;
    fuelStatusText.innerHTML = `Fuel level high enough for launch`;
    cargoStatusText.innerHTML = `Cargo mass too heavy for launch`;
   } 
   if (fuelLevel <= 9999 && cargoLevel <= 10000){
    list.style.visibility = "visible";
    launchStatusColor.style.color = "rgb(199, 37, 78)";
    launchStatusColor.innerHTML = `Shuttle Not Ready for Launch`;
    fuelStatusText.innerHTML = `Fuel level too low for launch`;
    cargoStatusText.innerHTML = `Cargo mass low enough for launch`;
   } 
   if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    list.style.visibility = "visible";
    launchStatusColor.style.color = "green";
    launchStatusColor.innerHTML = `Shuttle is Ready for Launch`;
    fuelStatusText.innerHTML = `Fuel level high enough for launch`;
    cargoStatusText.innerHTML = `Cargo mass low enough for launch`;
   }
} 

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         return response.json()
         })
         return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

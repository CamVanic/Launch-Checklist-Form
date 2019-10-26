// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("formID");
   let pilotName= document.getElementById("pilotName")
   let copilotName= document.getElementById("copilotName")
   let cargoMass= document.getElementById("cargoMass")
   let fuelLevel= document.getElementById("fuelLevel")
   let faultyItems = document.querySelector('#faultyItems')
   let launchStatus = document.getElementById("launchStatus")
   let fuelStatus= document.getElementById("fuelStatus")
   let cargoStatus= document.getElementById("cargoStatus")

   form.addEventListener("submit", function(event){
      if (pilotName.value === '' || copilotName.value === '' || cargoMass.value === "" || fuelLevel.value === ""){
         alert("All Fields Required!")
         event.preventDefault();
      } else if(!isNaN(pilotName.value) || !isNaN(copilotName.value)){
         alert("Invalid Input")
      }

      if(cargoMass.value > 10000){
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "red"
         launchStatus.innerHTML = "Shuttle Not Ready for Launch"
         cargoStatus.innerHTML = "You are Overweight.  Cargo is too Heavy"
         event.preventDefault();
      } else if(fuelLevel.value < 10000){
         faultyItems.style.visibility = "visible"
         launchStatus.style.color = "red"
         launchStatus.innerHTML = "Shuttle Not Ready for Launch"
         fuelStatus.innerHTML = "Fuel Level too Low"
         event.preventDefault();
      }
   })
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

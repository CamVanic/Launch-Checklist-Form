// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("formID");
   let pilotName= document.getElementById("pilotName")
   let copilotName= document.getElementById("copilotName")
   let cargoMass= document.getElementById("cargoMass")
   let fuelLevel= document.getElementById("fuelLevel")
   form.addEventListener("submit", function(event){
      if (pilotName.value === '' || copilotName.value === '' || cargoMass.value === "" || fuelLevel.value === ""){
         alert("All Fields Required!")
         event.preventDefault();
      }

      if (typeof(pilotName.value) === "number"){
         alert("not a string")
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

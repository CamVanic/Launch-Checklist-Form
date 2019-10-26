// Write your JavaScript code here!
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
window.addEventListener("load",function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then( function(json){
         const missionTarget= document.getElementById("missionTarget");
         missionTarget.innerHTML =
            `<ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src= "${json[3].image}">`
            
      })
   })
})

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
   let pilotStatus= document.getElementById("pilotStatus")
   let copilotStatus= document.getElementById("copilotStatus")

   form.addEventListener("submit", function(event){
      if (pilotName.value === '' || copilotName.value === '' || cargoMass.value === "" || fuelLevel.value === ""){
         alert("All Fields Required!")
         event.preventDefault();
      } else if(!/^[A-Za-z]+$/.test(pilotName.value) || !/^[A-Za-z]+$/.test(copilotName.value)){
         alert("Invalid Input")
         event.preventDefault();
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

      pilotStatus.innerHTML = `Pilot ${pilotName.value} is Ready for Launch`
      copilotStatus.innerHTML = `Copilot ${copilotName.value} is Ready for Launch`
   })
});




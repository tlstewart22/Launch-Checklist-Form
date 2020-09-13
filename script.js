// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         console.log(json[1]);

         /* This block of code shows how to format the HTML once you fetch some planetary JSON! */
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[5].name}</li>
                     <li>Diameter: ${json[5].diameter}</li>
                     <li>Star: ${json[5].star}</li>
                     <li>Distance from Earth: ${json[5].distance}</li>
                     <li>Number of Moons: ${json[5].moons}</li>
                  </ol>
               <img src="${json[5].image}"> `;

      });
   });
});
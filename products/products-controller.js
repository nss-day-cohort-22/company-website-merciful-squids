 //P O P U L A T E
//define glasses as a parse of local storage. (getting the glasses info)
 const spectacles = JSON.parse(localStorage.getItem("glasses"))
 //defining glassesEl to be used to GET the class stored in the html div
 const glassesEl = document.getElementsByClassName("glasses")[0]
 
 //for in loop to go through each DB entry and pump out its info into a card 
 for (var key in spectacles) {
         const currentGlasses = spectacles[key];
         //for loop nested in the for in loop, to iterated through and define each detail for each pair of glasses
         for (var i = 0; i < currentGlasses.length; i++) {
             var detail = currentGlasses[i];
             
// The meat and potatoes, the raw HTML spit out after the loop has iterated its info. All plugged in to the HTML div of course.
             glassesEl.innerHTML += `
         <section class="${key}">
         
         <div class="card">
           <img class="card-img-top" src="${detail.picture}" alt="Card image cap">
           <div class="card-body">
             <h4 class="card-title">${detail.name}</h4>
             <p class="card-text">${detail.type}</p>
             <p class="card-text">${detail.color}</p>
             <p class="card-text">${detail.price}</p>
             <p class="card-text"><small class="text-muted">${detail.availibility}</small></p>
           </div>
         </div>
             
             `    
         }
 }



//  <section class="${key}">
//  <h2><strong>${detail.name}</strong></h2>
//  <div class="cardStyle">
//  <div><img src="${detail.picture}" alt="Picture of glasses" height="300px" width="400px"</div>
//  <div>${detail.type}</div>
//  <div>${detail.color}</div>
//  <div>${detail.price}</div>
//  <div>${detail.avaidivbidivty}</div>
//  </div>
// </section>
// <br>

{/* <h2><strong>${detail.name}</strong></h2>
             <div class="col">
             <div><img src="${detail.picture}" alt="Picture of glasses" height="300px" width="400px"</div>
             <div>${detail.type}</div>
             <div>${detail.color}</div>
             <div>${detail.price}</div>
             <div>${detail.availibility}</div>
             </div>
         </section>
         <br> */}
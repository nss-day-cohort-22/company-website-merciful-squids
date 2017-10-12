 //P O P U L A T E

 const glasses = JSON.parse(localStorage.getItem("glasses"))
 const glassesEl = document.getElementsByClassName("glasses")[0]
 
 for (var key in glasses) {
         const currentGlasses = glasses[key];
         for (var i = 0; i < currentGlasses.length; i++) {
             var detail = currentGlasses[i];
             
 
             glassesEl.innerHTML += `
         <section class="${key}">
             <h2><strong>${detail.name}</strong></h2>
             <div>${detail.picture}</div>
             <div>${detail.type}</div>
             <div>${detail.color}</div>
             <div>${detail.price}</div>
             <div>${detail.availibility}</div>
         </section>
         <br>
             
             `    
         }
 }
// assemble the saved contactmethods string in browser memory into a database
const assembledContactMethods = JSON.parse(localStorage.getItem("contactmethods"))

// assign the selector for posting innerHTML to address contacts
const addressElement = document.getElementsByClassName("address")[0]

// assign the selector for posting innerHTML to direct contacts
const directElement = document.getElementsByClassName("direct")[0]

// assign the selector for posting innerHTML to social media contacts
const socialElement = document.getElementsByClassName("social")[0]

// assign the selector for posting innerHTML to retailer contacts
const retailerElement = document.getElementsByClassName("retailers")[0]

// cycle through the various contact methods in the assembledContactMethods database
for (let contactKey in assembledContactMethods) {
    

    if (contactKey === "address") {    
            addressElement.innerHTML += `
            <section class= "${contactKey}">
                <p>${assembledContactMethods.address.street}</p>
                <p>${assembledContactMethods.address.city}, ${assembledContactMethods.address.state} ${assembledContactMethods.address.zip}<br></p>
            </section>
            `
    } else if (contactKey ==="direct") {
            directElement.innerHTML += `
            <section class = "${contactKey}">
                <p>Phone: ${assembledContactMethods.direct.phone}</p>
                <p>Email: <a href=mailto:${assembledContactMethods.direct.email}>${assembledContactMethods.direct.email}</a><br></p>
            </section>
            `    
    } else if (contactKey ==="social") {
            socialElement.innerHTML += `
            <section class = "${contactKey}">
                <p>Twitter: <a href=${assembledContactMethods.social.twitter}>${assembledContactMethods.social.twitter}</a></p>
                <p>FaceBook: <a href=${assembledContactMethods.social.facebook}>${assembledContactMethods.social.facebook}</a><br></p>
            </section>
            `
    } else {
            retailerElement.innerHTML += `
            <section class = "${contactKey}">
                <p>Amazon: <a href=${assembledContactMethods.retailers.amazon}>${assembledContactMethods.retailers.amazon}</a></p>
                <p>iWare House: ${assembledContactMethods.retailers.iWareHouse}</p>
                <p>In Specs: <a href=${assembledContactMethods.retailers.inSpecs}>${assembledContactMethods.retailers.inSpecs}</a></p>
            </section>
            ` 
    }
    
}
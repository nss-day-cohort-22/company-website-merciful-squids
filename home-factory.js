const homeDatabase= {
"contact": "contact.html",
"about": "about.html",
"products": "products.html",

}

const culture = {
"text": "Here at Looksie we're a group of developers who have a passion to spread our fashion-forward specs on to you."

}




const mission = {
"text": "To increase our profit margins at a steady rate of 

aka: to get rich off your poor eyesight"

}



const homeDatabaseString = JSON.stringify(homeDatabase)
localStorage.setItem("homeDatabase", homeDatabaseString)


//factory to set the data
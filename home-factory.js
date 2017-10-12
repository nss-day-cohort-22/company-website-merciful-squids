const homeDatabase= {
"contact": "contact.html",
"about": "about.html",
"products": "products.html",

}

const culture = {
"text": "Here at Looksie we're a group of developers who have a passion to spread our fashion-forward spectacular spectacles on to you.",
"title": "Our Culture"
}


const mission = {
"text": "To increase our profit margins at a steady growth rate of 99% profit gain on a monthly basis. aka: to get rich off your poor eyesight",
"title": "Our Mission"
}

const homeContents = {
  "culture": culture,
  "mission": mission    
}



const homeDatabaseString = JSON.stringify(homeDatabase)
localStorage.setItem("homeDatabase", homeDatabaseString)

const homeContentsString = JSON.stringify(homeContents) 
localStorage.setItem("contentsHome", homeContentsString)


//factory to set the data
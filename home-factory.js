const homeDatabase= {
"contact": "contact.html",
"about": "about.html",
"products": "products.html",
"hi": "http://www.warbyparker.com"
}

const homeDatabaseString = JSON.stringify(homeDatabase)
localStorage.setItem("homeDatabase", homeDatabaseString)


//factory to set the data
const homeDatabase= {
"contact": "contact.html",
"about": "about.html",
"products": "products.html",

}

const culture = {
"text": "Here at Looksie we're a group of developers who have a passion to spread our fashion-forward specs on to you. 

"
}




const mission = {


}



const homeDatabaseString = JSON.stringify(homeDatabase)
localStorage.setItem("homeDatabase", homeDatabaseString)


//factory to set the data
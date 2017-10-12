// define contact methods objects
const address = {
    "street":   "500 Interstate Blvd.",
    "city":     "Nashville",
    "state":    "TN",
    "zip":      "37210"  
}

const direct = {
    "phone":    "(555) 321-7654",
    "email":    "info@looksieglasses.com"
}

const social = {
    "twitter":  "https://twitter.com/looksieglasses",
    "facebook": "https://www.facebook.com/looksie-glasses"    
}

const retailers = {
    "amazon":       "https://www.amazon.com",
    "iWareHouse":   "1 Optical St Vision, AK 98765",
    "inSpecs":      "https://www.in-specs.ch"
}

// populate the contactMethod database with the objects
const contactMethod = {
    "address":      address,
    "direct":       direct,
    "social":       social,
    "retailers":    retailers
}

// convert contactgMethod database into string saved in browser memory
const contactMethodString = JSON.stringify(contactMethod)
localStorage.setItem("contactmethods", contactMethodString)

//Database entries for use with products-controller.js
// NAME, PICTURE, TYPE, PRICE, availibility, COLOR
//Stringified and stored below

  let readers = {
    "name": 'The Readers',
    "picture": './images/readers.jpg',
    "type": 'Reading Glasses',    
    "price": '$100.00',
    "availibility": 'In Stock',
    "color": 'Jade Green'
  }

let prestige = {
    "name": 'The Prestige',
    "picture": './images/prestige.jpg',
    "type": 'Sunglasses',    
    "price": '$280.00',
    "availibility": 'In Stock',
    "color": 'Monster Green'
  }

  let xpands = {
    "name": 'The XPands',
    "picture": './images/xpand.jpg',
    "type": '3d Sunglasses',    
    "price": '$420.00',
    "availibility": 'Under 5 left',
    "color": 'Salmon Salmon'
  }

  let shutter = {
    "name": 'The Shutters',
    "picture": './images/shutter.jpg',
    "type": 'Precision 3d Viewing',    
    "price": '$2,000.00',
    "availibility": 'In Stock',
    "color": 'Expensive Black'
  }
//yet to be plugged products
  // let xxxx = {
  //   "name": '',
  //   "picture": '',
  //   "type": '',    
  //   "price": '$',
  //   "availibility": '',
  //   "color": ''
  // }

  // let xxxx = {
  //   "name": '',
  //   "picture": '',
  //   "type": '',    
  //   "price": '',
  //   "availibility": '',
  //   "color": ''
  // }

//taking data arrays and storing it into another array variable

let name = [readers, prestige, xpands, shutter]
// let xxx = [xxxxx, xxxxx]
// let xxx = [xxxxx, xxxxx]

// storing those arrays in one variable creating our Database
let glasses = {
  "name": name
}

//Stringifying the Database to be stored in our browser for use by the controller file.
const glassesString = JSON.stringify(glasses)
localStorage.setItem("glasses", glassesString)

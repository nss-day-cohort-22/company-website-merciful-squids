const homeDatabaseStringified=localStorage.getItem("homeDatabase")
let  homeDatabaseObject=JSON.parse(homeDatabaseStringified)

const navBarOutput=document.getElementsByClassName("navlinks")[0]

for (let key in homeDatabaseObject){
    const currentLink=homeDatabaseObject[key]
    console.log(currentLink)
    navBarOutput.innerHTML += `
    <li><a href="${currentLink}">${key}</a></li>
    `
}

//this is 
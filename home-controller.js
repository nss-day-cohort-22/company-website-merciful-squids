// const homeDatabaseStringified=localStorage.getItem("homeDatabase")
// let  homeDatabaseObject=JSON.parse(homeDatabaseStringified)

// const navBarOutput=document.getElementsByClassName("navlinks")[0]

// for (let key in homeDatabaseObject){
//     const currentLink=homeDatabaseObject[key]
//     console.log(currentLink)
//     navBarOutput.innerHTML += `
//     <li><a href="${currentLink}">${key}</a></li>
//     `
// }

const homeContentsStringified=localStorage.getItem("contentsHome")
let homeContentsObject=JSON.parse(homeContentsStringified)
const contents=document.getElementsByClassName("contents")[0]


for (let key in homeContentsObject){
    const currentContent=homeContentsObject[key]
    console.log(currentContent)
    contents.innerHTML += `
    <section>
        <h2>${currentContent.title}</h2>
        <p>${currentContent.text}</p>
    </section> 
    
    `
}





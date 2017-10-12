// one for in loop to go with each object
// find a way to get into the array within the team object - use an if statement

aboutLooksie = JSON.parse(localStorage.getItem("aboutLooksiePage"))
const aboutLooksieEl =  document.getElementsByClassName("history")[0]
const teamEl =  document.getElementsByClassName("team")[0]

    aboutLooksieEl.innerHTML += `
        <section>
        <img src="${history.aboutPic}" width="400px">
        <div class="historyText">${history.text}</div>
        </section>
    `

    teamEl.innerHTML += `<img src="${team.aboutPic}" width="400px">`
    
    for (let i = 0; i < team.text.length; i++) {
        let currentTeammate = team.text[i];
        
        teamEl.innerHTML += `
        <div class="teamNames">${currentTeammate.name}</div>
        `
    }


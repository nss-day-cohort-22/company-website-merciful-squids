const history = {
    "name": "History",
    "aboutPic": "img/NSS.jpg",
    "text": "Looksie came about in October 2017 in Nashville, Tennessee. We are passionate about looking good while we code, which is what brought us to the world of eyewear."
}

const team = {
    "name": "Our Team",
    "aboutPic": "img/Team-Photo.jpg",
    "text":
        [{"name": "Alexis Hennecy: From Orlando, Florida"},
        {"name": "John Dulaney: From Knoxville, Tennessee"},
        {"name": "Greg Turner: Nashville Native"},
        {"name": "Kimmy Bird: From Salt Lake City, Utah"}]
}

let aboutLooksie = {
    "history": history,
    "team": team,
}

const aboutStringify = JSON.stringify(aboutLooksie)
  localStorage.setItem("aboutLooksiePage", aboutStringify)
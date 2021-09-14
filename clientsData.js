
// clints info
const clientsList = [
    {id: 0,
    picture: 'images/image-emily.jpg', 
    text:"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: 'Emily R.',
    job: "Marketing Director"
    },
    {
    id: 1,
    picture: 'images/image-thomas.jpg', 
    text:"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: 'Thomas S.',
    job: "Chief Operating Officer"
    },
    {id: 2,
    picture: 'images/image-jennie.jpg', 
    text:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: 'Jennie F.',
    job: "Business Owner"
    },
    

]

const clients = document.querySelector(".clients-t")

i =0
while(i<clientsList.length){

    // create client element
    let client = document.createElement("div")
    client.className = "client"

    let clientimg = document.createElement("img")
    clientimg.className = "client-img"
    clientimg.src = `${clientsList[i].picture}`
    clientimg.alt = "pic"

    let clienttext = document.createElement("div")
    clienttext.className = "client-text"
    clienttext.textContent = `${clientsList[i].text}`

    let clientName = document.createElement("div")
    clientName.className = "name"
    clientName.textContent = `${clientsList[i].name}`

    let clientJob = document.createElement("div")
    clientJob.className = "client-job"
    clientJob.textContent = `${clientsList[i].job}`
    
    client.appendChild(clientimg)
    client.appendChild(clienttext)
    client.appendChild(clientName)
    client.appendChild(clientJob)
    clients.appendChild(client)
    i++
    
}

// functinality

const arrowDown = document.querySelector(".arrow-down")
const footerLogo = document.querySelector(".footer-logo")
const toggle = document.querySelector(".toggle")
const options = document.querySelector(".m-options")
arrowDown.addEventListener('click', scroll)
footerLogo.addEventListener('click', scollTop)
toggle.addEventListener('click', toggleCliked)
function scroll(){
    let down = document.body.scrollHeight
    window.scrollTo(0, down)
}
function scollTop(){
    window.scrollTo(0,0)
}
function toggleCliked(){
        options.classList.toggle("m-options-toggle")
    
}
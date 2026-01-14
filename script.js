console.log('Hello!');

const factButton = document.querySelector("#factButton")

async function getFact () {
    try {
        
        const catFact = document.querySelector("#catFact")
        console.log(catFact)
        const data = await fetch(`https://catfact.ninja/fact`)

       
        const response = await data.json()
        console.log(response)
        
        const catFactData = await response.fact
        console.log(catFactData)
        
        const catFactlength = await response.length

        

        const catPic = document.querySelector("#catPic")
        const dataTwo = await fetch(`https://cataas.com/cat?height=600&json=true`)
      
        if (!dataTwo.ok || !data.ok) {
    
          catPic.innerHTML = `
    
        <figure class="figure">
            <h1>No cat :(</h1>
          </figure> 
          `
        } 
          
          const responseTwo = await dataTwo.json()
          console.log(response)
          
          const imageUrl = await responseTwo.url
          console.log(imageUrl)
          
        
        catFact.innerHTML = 
        `
        <figure class="figure">
        <img src="${imageUrl}" alt="1" />
        <figcaption>
        <h1>Fact: ${catFactData}</h1>
        <h3>Det er ${catFactlength} bokstaver i denne faktaen.</h3>
        </figcaption>
        </figure>
        `

    } catch {
        console.error("Det er ein feil her.")
        
    }

}


factButton.addEventListener("click", getFact) 
/*
async function getCatImg () {
    try {
        const data = await fetch(`https://cataas.com//cat?json=true`)
        return data
    } catch {
        console.error("No Img")
    }
        
}

async function getFactData () {
    try {
        const data = await fetch(`https://catfact.ninja/fact`)
        return data
    } catch {
        console.error("No Fact")
    }
}

async function getFact () {
    try {
        
        const catFact = document.querySelector("#catFact")
        console.log(catFact)
    
        const factData = getFactData.json()
        
        
        const catFactData = await factData.fact
        console.log(catFactData)
        
        const catFactlength = await factData.length

        

        const catPic = document.querySelector("#catPic")
         
          
          const catImg = await getCatImg.json()
          console.log(response)
          
          const imageUrl = await catImg.url
          console.log(imageUrl)
          
        
        catFact.innerHTML = 
        `
        <figure class="figure">
        <img src="${imageUrl}" alt="1" />
        <figcaption>
        <h1>Fact: ${catFactData}</h1>
        <h3>Det er ${catFactlength} bokstaver i denne faktaen.</h3>
        </figcaption>
        </figure>
        `

    } catch {
        console.error("Det er ein feil her.")
        
    }

}

factButton.addEventListener("click", getFact)
*/
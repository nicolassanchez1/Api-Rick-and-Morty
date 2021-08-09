const cardsPadre = document.querySelector('.container-cards')
const cantPersonaje = 100;




const recPersonaje = async () =>{
    for (let i = 1; i <= cantPersonaje; i++ ){
            await (getPersonaje(i))
    }
}

const getPersonaje = async (id) =>{
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const respuesta = await fetch(url)
    const personaje = await respuesta.json()
    crearPersonajes(personaje)
}



function crearPersonajes(person) {
    const cardRick = document.createElement('div')
    cardRick.classList.add ('personajes')
    const name = person.name
    const imgPersonaje = person.image
    const [status, specie, origin] = [person.status, person.species, person.origin.name] 
    const personInnerData = `
        <div class="cont-card">
            <img src="${imgPersonaje}">
            <div class="info">
            <h2>${name}</h2>
            <p>status: ${status}</p>
            <p>specie: ${specie}</p>
            <p>origen: ${origin}</p>
            </div>
        </div>        
    `
    console.log(cardRick)
    cardRick.innerHTML = personInnerData
    cardsPadre.appendChild(cardRick)
}

recPersonaje()
let phrase = document.getElementById('phrase')
let author = document.getElementById('author')
const buttonPhrase = document.getElementById('button-phrase')

buttonPhrase.addEventListener('click', getPhrase)

async function getPhrase(){
    try {
        const response = await fetch('https://www.positive-api.online/phrase/esp')
        const data = await response.json()
        // cambiamos la frase y el autor
        phrase.innerText = `"${data.text}"`
        author.innerText = await searchAuthor(data.author_id)
    } catch (error) {
        alert('Error al realizar la consulta de la frase')
    }
}

async function searchAuthor(authorId) {
    if (authorId === null || authorId > 12) {
        return "Autor Desconocido"
    }

    try {
        const responseAuthors = await fetch('https://www.positive-api.online/authors')
        const dataAuthors = await responseAuthors.json()
        // buscar al autor con id
        const author = dataAuthors.find(item => item.id === authorId)
        return author.name
    } catch (error) {
        alert('Error al buscar el autor')
    }
}


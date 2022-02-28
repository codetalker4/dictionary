let word = ''
const wordInput = document.getElementById('wordIp')
const submit = document.getElementById('submit')
const container = document.getElementById('container')
const node = document.createElement('div')
const wordNode = document.createElement('div')
const meaningNode = document.createElement('div')
const br = document.createElement('br')

var meaning
// const btnNode = document.createElement('button')

let meaningData = []
let wordData = []

wordInput.addEventListener('change', e => {
    word = e.target.value
    
})


submit.addEventListener('click', () =>{

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then((data) => {
            wordData = document.createTextNode(`${data[0].word}`)
            meaningData = data[0].meanings.map((meaning) => {
                let br = document.createElement('br')
                let pos = document.createTextNode(`Part of Speech : ${meaning.partOfSpeech}`)
                let def = document.createTextNode( `Meaning : ${meaning.definitions[0].definition}`)
                wordNode.append(wordData)
                meaningNode.append(pos,br,def)
                node.append(wordNode,meaningNode)
                container.append(node)
            })
        }
    )  
})





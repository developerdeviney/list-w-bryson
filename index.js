
const listDisciples = (disciples) => {
    let text = ''
    for (const disciple in disciples) {
        text += `<li>${disciples[disciple]}</li >`
    }
    return text
    console.log(text)
}

const randomData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((respeck) => {
            console.log(respeck.data)
            alert(respeck.data.title)
        })
        .catch((error) => console.log(error)
        )
}

export { listDisciples, randomData }
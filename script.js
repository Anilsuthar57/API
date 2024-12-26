const img = document.querySelector('img')
const button = document.querySelector('button')



button.addEventListener('click', () => {

    // fetch('https://dog.ceo/api/breeds/image/random')
    // .then(response => response.json())
    // .then(json => {
    //     img.src = json.message
    // })

    const xhr = new XMLHttpRequest()

    console.log(xhr)
    xhr.responseType = "json"
    // xhr.addEventListener('load', () => {
    //     console.log(xhr.response)
    //     img.src = xhr.response.message
    // })

    xhr.onload = () => {
            console.log(xhr.response)
            img.src = xhr.response.message
        }


    xhr.open('Get', 'https://dog.ceo/api/breeds/image/random')
    xhr.send()


})


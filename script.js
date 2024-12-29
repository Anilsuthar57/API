// const img = document.querySelector('img')
// const button = document.querySelector('button')



// button.addEventListener('click', () => {

//     // fetch('https://dog.ceo/api/breeds/image/random')
//     // .then(response => response.json())
//     // .then(json => {
//     //     img.src = json.message
//     // })

//     const xhr = new XMLHttpRequest()

//     console.log(xhr)
//     xhr.responseType = "json"
//     // xhr.addEventListener('load', () => {
//     //     console.log(xhr.response)
//     //     img.src = xhr.response.message
//     // })

//     xhr.onload = () => {
//             console.log(xhr.response)
//             img.src = xhr.response.message
//         }


//     xhr.open('Get', 'https://dog.ceo/api/breeds/image/random')
//     xhr.send()


// })

function makeHttpRequest(method, url) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'


    const promises = new promises()
     

    
    xhr.addEventListener('load', () => {
        console.log(xhr.response)
    })
    xhr.open(method, url)
    xhr.send()
}


// makeHttpRequest('GET', 'https://dummyjson.com/users/1',(userdata)=>{
//     makeHttpRequest('GET','https://dummyjson.com/users/2',(userdata=>{
//         makeHttpRequest('GET','https://dummyjson.com/users/3',(userdata)=>{
//             console.log(userdata)
//         })
//     }))
// })



// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(responese => responese.json())
//     .then(function(todos) {
//         console.log(todos);
//     });




// let payload = {
//     title: "Blog Title",
//     body: "lorem ipsum",
//     userId:1
// }
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(payload),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then(responese => responese.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=> response.json())
//     .then((json)=> console.log(json))
//     .catch((err)=> console.log(err))


// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response)=> response.json())
//     .then((json)=> json.forEach((item)=> console.log(item.email)))
//     .catch((err)=> console.log(err))
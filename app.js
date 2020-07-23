const http = new easyHTTP

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         debugger
//         console.log(err)
//     }else{
//     console.log(posts)
//     }
// })


//Get Single Post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
//     if(err){
//         debugger
//         console.log(err)
//     }else{
//     console.log(posts)
//     }
// })


//create Data 

const data = {
    title: 'Custom post',
    body: 'This is custom post'
}

//Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(post)
//     }
// })


//Update Post ( PUT)
http.post('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
})


//Delete Post(Delete)
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        debugger
        console.log(err)
    }else{
    console.log(response)
    }
})

const http = new easyHTTP

http.get('https://jsonplaceholder.typicode.com/posts1', function(err, posts){
    if(err){
        debugger
        console.log(err)
    }else{
    console.log(posts)
    }
})

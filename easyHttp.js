function easyHTTP(){
    this.http = new XMLHttpRequest()
}

//Make a HTTP GET Request
easyHTTP.prototype.get = function(url){
    this.http.open('GET', url, true)
    
    let self = this
    this.http.onload = function(){
        if(self.http.status === 200){
            return self.http.responseText
        }
    }
    this.http.send()
}

//Make a HTTP POST Request


//Make a HTTP PUT Request


//Make a HTTP DELETE Request
 
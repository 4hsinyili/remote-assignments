function ajax(src, callback){
    // your code here
} 

function render(data){
     // your code here. 
     // document.createElement() and appendChild() methods are preferred. 
    }
    
ajax("http://13.113.12.180:4000/api/1.0/remote-w4-data", function(response){
     render(response); });
      // you should get product information in JSON format and render data in the page
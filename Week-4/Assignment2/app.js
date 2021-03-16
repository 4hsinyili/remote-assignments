let buttonDiv = document.querySelector('.button-row')
let resultDiv = document.querySelector('.result-row')

// buttonDiv.addEventListener('click', (e) =>{
//     if (e.target.classList.contains('product') ){
//         let product = e.target.classList[1]
//         console.log(`.${product}`)
//         for (i in resultDiv.children){
//              resultDiv.children[i].classList.add('hide')
//             }
//         resultDiv.querySelector(`.${product}`).classList.remove('hide')
        
//     }
// })

function ajax(src, callback){
    let initialUrl = src;
    // let initialParse = new DOMParser();
    let initaialXhr = new XMLHttpRequest();

    initaialXhr.open('GET', initialUrl, true);
    initaialXhr.onload = function() {
    if (initaialXhr.status >= 200 && initaialXhr.status < 400) {
        let data = JSON.parse(initaialXhr.responseText);
        callback(data)
        // console.log(data)
    }
    };
    initaialXhr.send();
} 

function render(data){
    for (let i in data){
        let newButton = document.createElement('div')
        newButton.classList.add('col-4', 'button', data[i]['name'].replace(/\s+/g, ''))
        
        let newResult = document.createElement('div')
        newResult.classList.add('col-4', 'result', 'hide', data[i]['name'].replace(/\s+/g, ''))
        
        let productName = document.createElement('p')
        productName.textContent = `產品名稱：${data[i]['name']}`
        productName.classList.add('product', data[i]['name'].replace(/\s+/g, ''))
        
        let productPrice = document.createElement('p')
        productPrice.textContent = `價格：＄${data[i]['price']}`
        productPrice.classList.add(data[i]['name'].replace(/\s+/g, ''))
        
        let productDescription = document.createElement('p')
        productDescription.textContent = `描述：${data[i]['description']}`
        productDescription.classList.add(data[i]['name'].replace(/\s+/g, ''))
        
        newButton.appendChild(productName)
        newResult.appendChild(productPrice)
        newResult.appendChild(productDescription)
        resultDiv.appendChild(newResult)
        buttonDiv.appendChild(newButton)
    }

    // let newElement = document.createElement('h3');
    // newElement.textContent = data[0]['name'];
    // document.querySelector('.result').appendChild(newElement);
    // console.log(data);

     // your code here. 
     // document.createElement() and appendChild() methods are preferred. 
    }
    
ajax("http://13.113.12.180:4000/api/1.0/remote-w4-data", function(response){
     render(response); });
      // you should get product information in JSON format and render data in the page


const welcomeMessage = document.querySelector('.welcome-message')
const showMore = document.querySelector('.show-more')
const hiddenSection = document.querySelector('.hide')
const addContentInBox = document.querySelector('.add-content-in-box')
const newContentInBox = document.querySelectorAll('.new-content-in-box')
const contentBox = document.querySelectorAll('.content-box')
const newContentDiv = document.querySelector('.new-content-div')


function changeMessageText(element){
    if(element.textContent === 'Welcome Message'){
        element.textContent = 'Have a good day!'
    }else if (element.textContent === 'Have a good day!'){
        element.textContent = 'Welcome Message'
    }
}


function changeDisplay(element){
    element.classList.toggle('hide')
}

function changeButtonText(element){
    if(element.textContent === 'Show More'){
        element.textContent = 'Show Less'
    }else if (element.textContent === 'Show Less'){
        element.textContent = 'Show More'
    }
}

function getPosition (element) {
    // from https://andyyou.github.io/2015/04/07/get-an-element-s-position-by-js/
    let x = 0;
    let y = 0;
    while ( element ) {
      x += element.offsetLeft - element.scrollLeft + element.clientLeft;
      y += element.offsetTop - element.scrollLeft + element.clientTop;
      element = element.offsetParent;
    }
    return { x: x, y: y };
  }

welcomeMessage.addEventListener('click', (e)=>{
    changeMessageText(e.target)})

showMore.addEventListener('click', ()=>{
    changeDisplay(hiddenSection)
    changeButtonText(showMore)
    position = getPosition(showMore)
    window.scrollTo(position.x, position.y)
})

addContentInBox.addEventListener('click',(event)=>{
    let contents = []
    for(let i = 0; i < newContentInBox.length ; i ++){
        let newContent = newContentInBox[i].value;
        let newP = document.createElement('p');
        if (newContent !== ''){
            newP.textContent = newContent;
            contentBox[i].append(newP);
        }
        contents.push(newContent)
    }
    confirm(`${contents} have been added`)
    console.log(contents)
})

newContentDiv.addEventListener('click',(event)=>{
    if (event.target.className === 'down'){
        let parent = event.target.parentNode;
        let grandParent = parent.parentNode;
        if (grandParent.lastElementChild !==parent){
            let refSibling = parent.nextElementSibling.nextElementSibling
            grandParent.insertBefore(parent,refSibling)
        } 
    }
})

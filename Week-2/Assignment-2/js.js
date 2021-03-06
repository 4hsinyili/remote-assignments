const welcomeMessage = document.querySelector('#wmsg')
const showMore = document.querySelector('#showMore')
const hiddenSection = document.querySelector('[title=hide]')
const addContentInBox = document.querySelector('.addContentInBox')
const newContentInBox = document.querySelectorAll('.newContentInBox')
const contentBox = document.querySelectorAll('.contentBox')
const newContentDiv = document.querySelector('.newContentDiv')


function changeMessageText(element){
    if(element.textContent === 'Welcome Message'){
        element.textContent = 'Have a good day!'
    }else if (element.textContent === 'Have a good day!'){
        element.textContent = 'Welcome Message'
    }
}


function changeDisplay(element){
    if(element.className === 'hide'){
        element.className = 'show'
    }else if (element.className === 'show'){
        element.className = 'hide'
    }
}

function changeButtonText(element){
    if(element.textContent === 'Show More'){
        element.textContent = 'Show Less'
    }else if (element.textContent === 'Show Less'){
        element.textContent = 'Show More'
    }
}

welcomeMessage.addEventListener('click', ()=>{
    changeMessageText(welcomeMessage)})

showMore.addEventListener('click', ()=>{
    changeDisplay(hiddenSection)
    changeButtonText(showMore)
})


newContentDiv.addEventListener('click',(event)=>{
    if (event.target.className === 'addContentInBox'){
        for(i in newContentInBox){
            let newContent = newContentInBox[i].value;
            let newP = document.createElement('p');
            if (newContent !== ''){
                newP.textContent = newContent;
                contentBox[i].append(newP);
            }
        }
    }
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

const gameZone = document.querySelector('.game-zone');
const pOutput = document.querySelector('.p-output');
const aOutput = document.querySelector('.a-output');
const pOutputRow = pOutput.querySelector('.row')
const aOutputRow = aOutput.querySelector('.row')
const aPlayAgain = document.querySelector('.a-play-again')
const pPlayAgain = document.querySelector('.p-play-again')

let wordCard = gameZone.querySelectorAll('.word-card');
let wordCardContent = gameZone.querySelectorAll('.word-card-content');

let newElements = [];
let pClickCount = 0;
let pConClickCount = 0;
let aClickCount = 0;
let aConClickCount = 0;

gameZone.addEventListener('click', (e)=>{
    if (e.target.classList.contains('word-card')){
        e.target.classList.toggle('card-hide');
        e.target.nextElementSibling.classList.toggle('card-hide');
        let cardContent = e.target.nextElementSibling.innerHTML
        let cardClass = e.target.nextElementSibling.classList
        let newCard = document.createElement('div')
        newCard.innerHTML = cardContent
        newCard.classList = cardClass
        newCard.classList.add('col', 'col-10', 'col-lg-4')
        newElements.splice(0,0,newCard)
        if (e.target.classList.contains('anthropology')){
            aClickCount ++
            aConClickCount ++
            pConClickCount = 0
        } else if(e.target.classList.contains('philosophy')){
            pClickCount ++
            pConClickCount ++
            aConClickCount = 0
        };
        let totalClickCount = pClickCount + aClickCount;
        if (totalClickCount === 5){
            setTimeout(()=>{
            gameZone.classList.toggle('game-zone-hide')
            window.scrollTo(0,0)
            if(pClickCount>aClickCount){
                pOutput.classList.toggle('output-hide')
                for (let i = 0; i < 5; i++){
                    pOutputRow.appendChild(newElements[i])
                }
            } else{
                aOutput.classList.toggle('output-hide')
                for (let i = 0; i < 5; i++){
                    aOutputRow.appendChild(newElements[i])
                }}},0)
        }else if (pConClickCount ===3){
            setTimeout(()=>{
            window.scrollTo(0,0)
            gameZone.classList.toggle('game-zone-hide')
            pOutput.classList.toggle('output-hide')
            for (let i = 0; i < 3; i++){
                    console.log(pOutputRow)
                    pOutputRow.appendChild(newElements[i])
                }},0)
        }else if (aConClickCount ===3){
            setTimeout(()=>{
            window.scrollTo(0,0)
            gameZone.classList.toggle('game-zone-hide')
            aOutput.classList.toggle('output-hide')
            for (let i = 0; i < 3; i++){
                    aOutputRow.appendChild(newElements[i])
                }},0)
        };
    }
}
)

aPlayAgain.addEventListener('click',()=>{
    pConClickCount = 0;
    pClickCount = 0;
    aConClickCount = 0;
    aClickCount = 0;
    totalClickCount = 0;
    aOutputRow.innerHTML = ''
    pOutputRow.innerHTML = ''
    gameZone.classList.toggle('game-zone-hide');
    aOutput.classList.add('output-hide');
    pOutput.classList.add('output-hide');;
    newElements = [];
    for(let i =0; i <wordCard.length; i++){
        wordCard[i].classList.remove('card-hide')
        wordCardContent[i].classList.add('card-hide')
    }
})

pPlayAgain.addEventListener('click',()=>{
    pConClickCount = 0;
    pClickCount = 0;
    aConClickCount = 0;
    aClickCount = 0;
    totalClickCount = 0;
    aOutputRow.innerHTML = ''
    pOutputRow.innerHTML = ''
    gameZone.classList.toggle('game-zone-hide');
    aOutput.classList.add('output-hide');
    pOutput.classList.add('output-hide');
    newElements = [];
    for(let i =0; i <wordCard.length; i++){
        wordCard[i].classList.remove('card-hide')
        wordCardContent[i].classList.add('card-hide')
    };
})

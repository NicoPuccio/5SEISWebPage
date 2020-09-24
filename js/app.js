const btn = document.getElementById('start-button');
const questionDiv = document.getElementById('question');
const buttons = document.getElementById('buttons');
var correctBtn = document.getElementById('correct');
var incorrectBtn = document.getElementById('incorrect');

loadEventListeners();
function loadEventListeners(){
    btn.addEventListener('click', startTrivia);
}

function startTrivia(e){
    e.preventDefault();

    questionDiv.innerHTML = `
    <h1> ¿QUE PORCENTAJE DE VITAMINA C CONTIENEN LAS AMPOLLAS PEPTIDE-C?"</h1>
    `;
    buttons.innerHTML = ` 
    <button id="option incorrect">8%</button>
    <button id="option correct">10%</button>
    <button id="option incorrect">5%</button>
    <button id="option incorrect">2.5%</button>
    `;
    var body = document.getElementById('body');
    body.style.backgroundImage = "url('img/BG_02.jpg')";
}

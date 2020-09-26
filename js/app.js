const btn = document.getElementById('start-button');
const questionDiv = document.getElementById('question');
const buttons = document.getElementById('buttons');
const wrapper = document.querySelector(".wrapper");
var flag = 0;

var nameInput = document.getElementById('name');
var adress = document.getElementById('adress');
var county = document.getElementById('county');
var postCode = document.getElementById('postCode');
var continueBtn = document.getElementById('continue');
var radio = document.getElementById('checked');

loadEventListeners();
function loadEventListeners(){
    btn.addEventListener('click', startTrivia);
    continueBtn.addEventListener('click', onFilledData);
}

function startTrivia(e){
    e.preventDefault();
    buttons.style.display = "grid";
    questionDiv.innerHTML = `
    <h1> ¿QUE PORCENTAJE DE VITAMINA C CONTIENEN LAS AMPOLLAS PEPTIDE-C?</h1>
    `;
    addOptions();
    var body = document.getElementById('body');
    body.style.backgroundImage = "url('img/BG_02.jpg')";
}

function addOptions(){
    buttons.innerHTML = "";
    var button = document.createElement("button");
    createButton(button, "8%", "incorrect");
    var button2 = document.createElement("button");
    createButton(button2, "10%", "correct");
    var button3 = document.createElement("button");
    createButton(button3, "5%", "incorrect");
    var button4 = document.createElement("button");
    createButton(button4, "2.5%", "incorrect");
}

function trueOrFalse(){
    body.style.backgroundImage = "url('img/BG_03.jpg')";
    //La vitamina C Mancha?
    questionDiv.innerHTML = `
    <h1>¿LA VITAMINA C <br> MANCHA?</h1>
    `;
    buttons.innerHTML = "";
    enableButtons();
    var buttonFalse = document.createElement("button");
    createButton(buttonFalse, "Verdadero", "incorrect");
    var buttonTrue = document.createElement("button");
    createButton(buttonTrue, "Falso", "correct");
}

function trueOrFalse2(){
    enableButtons();
    //Las ampollas peptide-C se usan solo de dia
    questionDiv.innerHTML = `
    <h1>LAS AMPOLLAS PEPTIDE-C SE USAN SOLO DE DIA</h1>
    `;
    buttons.innerHTML = "";
    var buttonFalse = document.createElement("button");
    createButton(buttonFalse, "Verdadero", "incorrect");
    var buttonTrue = document.createElement("button");
    createButton(buttonTrue, "Falso", "correct");
}

function fillData(){
    questionDiv.innerHTML = "";
    buttons.innerHTML = "";
    body.style.backgroundImage = "url('img/BG_01.jpg')";
    createForm();
}

function createForm(){
    var form = document.getElementById('form');
    form.style.display = "grid";
    setInterval(() => {
        validateData();
    }, 500); 
    
}

function onFilledData(){
    var form = document.getElementById('form');
    form.style.display = "none";
    var div = document.getElementById("filledData");
    div.style.display = "grid";
}

function validateData(){
    if(nameInput.value !== '' && adress.value !== '' && county.value !== '' &&
         postCode.value !== '' && radio.checked == true)
        {
            continueBtn.className = "";
        }else 
            continueBtn.className = "disabled";
}

function showCorrect(e){
    e.preventDefault();
    flag++;
    const correct = document.getElementById('answer');
    correct.innerHTML = `
        <img src = "img/CORRECTO.png" alt = "Correcto">
    `;
    wrapper.appendChild(correct);
    disableButtons();
    setTimeout(() => clearCorrectIncorrect(), 1000);
    switch (flag){
        case 1:
            setTimeout(() => { trueOrFalse()}, 1000);
            break;
        case 2:
            setTimeout(() => { trueOrFalse2()}, 1000);
            break;
        case 3:
            setTimeout(() => {fillData()}, 1000);
            break;
    }
}

function showIncorrect(e){
    e.preventDefault();
    flag++;
    const incorrect = document.getElementById('answer');
    incorrect.innerHTML = ` 
    <img src = "img/INCORRECTO.png"> 
    `;
    wrapper.appendChild(incorrect);
    disableButtons();
    setTimeout(() => clearCorrectIncorrect(), 1000);
    switch (flag){
        case 1:
            setTimeout(() => { trueOrFalse()}, 1000);
            break;
        case 2:
            setTimeout(() => { trueOrFalse2()}, 1000);
            break;
        case 3:
            setTimeout(() => {fillData()}, 1000);
            break;
    }
}
function clearCorrectIncorrect()
{
    var div = document.getElementById("answer");
    div.innerHTML = ``;
}

function createButton(btn, text, id){
    btn.innerText = text;
    btn.id = id;
    buttons.appendChild(btn);
    if(btn.id === "correct"){
        btn.addEventListener('click', showCorrect);
    }
    else if(btn.id === "incorrect"){
        btn.addEventListener('click', showIncorrect);
    }
}

function disableButtons(){
    buttons.className = "disabled";
}

function enableButtons(){
    buttons.className = "";
}
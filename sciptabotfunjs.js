console.log("start");
const boutonsoranges = document.querySelectorAll("button");
document.getElementById("chuisundiv").style.backgroundColor = "rgb(193, 253, 253)";
document.querySelector("body").style.backgroundColor = "mediumturquoise";
document.querySelector("body").style.color = "black";
var themactuel = true;

//detectioncliqueboutons

boutonsoranges.forEach(button => {
    if(button.id == "seecomandbuton"){
    button.addEventListener("click", cliquecommandes);}
    if(button.id == "boutonacceilid"){
    button.addEventListener("click", cliqueacceil);}
    if(button.id == "lienajoutbot") {
    button.addEventListener("click", cliqajouterbot);}
    if(button.id == "proposajoutbuton") {
    button.addEventListener("click", cliqproposajout);
    }
});


//changerletheme

function onchangdethem() {
if(themactuel == false) {
    document.getElementById("chuisundiv").style.backgroundColor = "rgb(193, 253, 253)";
    document.querySelector("body").style.backgroundColor = "mediumturquoise";
    document.querySelector("body").style.color = "black";
    themactuel = true;
} else {
    document.getElementById("chuisundiv").style.backgroundColor = "rgb(30, 85, 85)";
    document.querySelector("body").style.backgroundColor = "rgb(41, 41, 41)";
    document.querySelector("body").style.color = "white";
    themactuel = false;
}
}

//allerausitepourlescommandes

function cliquecommandes(event){
    let cliqrond = document.createElement("div");
    this.appendChild(cliqrond);
    cliqrond.classList.add("rondclasse");
    cliqrond.style.top = event.clientY - this.offsetTop + "px";
    cliqrond.style.left = event.clientX - this.offsetLeft + "px";
    cliqrond.style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(vaslistecommand, 700);
}

function vaslistecommand() {
    if(themactuel == true){
        window.open("pagecommandabotp.html");
    
    } else {
            window.open("pagecommandabotpdark.html");
            
        }
}


//retourneralacceil

function cliqueacceil(event){
    let cliqrond = document.createElement("div");
    this.appendChild(cliqrond);
    cliqrond.classList.add("rondclasse");
    cliqrond.style.top = event.clientY - this.offsetTop + "px";
    cliqrond.style.left = event.clientX - this.offsetLeft + "px";
    cliqrond.style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(vasalacceil, 700);
}

function vasalacceil() {
    window.open("index.html");
}


//ajouterlebotabotprotec

function cliqajouterbot(event){
    let cliqrond = document.createElement("div");
    this.appendChild(cliqrond);
    cliqrond.classList.add("rondclasse");
    cliqrond.style.top = event.clientY - this.offsetTop + "px";
    cliqrond.style.left = event.clientX - this.offsetLeft + "px";
    cliqrond.style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(ajoutbotp, 700);
}

function ajoutbotp() {
    window.location.href="https://discord.com/api/oauth2/authorize?client_id=823646729210691594&permissions=8&scope=bot";
}


//proposerunajoutaubot

function cliqproposajout(event) {
    let cliqrond = document.createElement("div");
    this.appendChild(cliqrond);
    cliqrond.classList.add("rondclasse");
    cliqrond.style.top = event.clientY - this.offsetTop + "px";
    cliqrond.style.left = event.clientX - this.offsetLeft + "px";
    cliqrond.style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(vasproposajout, 700);
}

function vasproposajout() {
if(themactuel == true){
    window.open("pageproposajout.html");

} else {
        window.open("pageproposajoutdark.html");
        
    }
}

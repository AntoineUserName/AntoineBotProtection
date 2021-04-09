console.log("start");
const boutonsoranges = document.querySelectorAll("button");

//detectionclique

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
    window.open("pagecommandabotp.html");
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
    window.open("pageproposajout.html");
}

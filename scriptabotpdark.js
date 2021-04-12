console.log("start");
const boutonsoranges = document.querySelectorAll("button");

//detectioncliqueboutons

boutonsoranges.forEach(button => {
    if(button.id == "boutonacceilid"){
    button.addEventListener("click", cliqueacceil);}
});

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
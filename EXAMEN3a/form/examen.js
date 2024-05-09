document.addEventListener("DOMContentLoaded", main);
function main() {
    document.getElementById("abstract").addEventListener("click", colorFondo);

}



function colorFondo() {
    let color = window.getComputedStyle(this).getPropertyValue("background-color");
    
    this.style.backgroundColor = (color == 'rgb(144, 238, 144)') ? 'rgb(173, 216, 230)' : 'rgb(144, 238, 144)';
}
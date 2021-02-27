/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("navBar").style.width = "20vw";
    document.getElementById("main").style.marginLeft = "20vw";
}
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("navBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
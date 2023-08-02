// * EVENT EXERCISES

function handleMouseOver() {
    document.getElementById("paragraph").style.color = "Red";
}

// ! The function above is an event handler that changes the color of text when its hovered over.

// TODO Create a new event handler called handleMouseLeave() that changes the color back to white after the mouse leaves it
function handleMouseLeave() {
    document.getElementById("paragraph").style.color = "black";
}


// TODO Create an event handle called handleClick() that changes the screens background color when clicked
// To do this, you can use document.body.style.backgroundColor and set it to a color of your choice
// function handleClick() {
//     document.body.style.backgroundColor = "maroon";
// }

function setRandomBackgroundColor() {
    let randomHexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
    // set the background color to the random RGB values
    document.body.style.backgroundColor = randomHexCode;

    if(isDarkColor(randomHexCode)) {    // Checks for darker hex codes
        document.getElementById("paragraph").style.color = "white";
    }

  }
  
  function isDarkColor(hexCode) {
    // parse the hexcode into RGB components
    var red = parseInt(hexCode.substring(1, 3), 16);
    var green = parseInt(hexCode.substring(3, 5), 16);
    var blue = parseInt(hexCode.substring(5, 7), 16);
  
    // calculate the relative luminance
    var relativeLuminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  
    // compare the relative luminance to the threshold value
    if (relativeLuminance < 0.5) {
      return true;  // the color is dark
    } else {
      return false; // the color is light
    }
  }
  
// ! Don't Forget: Add your functions to the event attribute in the HTML doc!

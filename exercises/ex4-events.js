// * EVENT EXERCISES

function handleMouseOver() {
    document.getElementById("paragraph").style.color = "Red";
}

// ! The function above is an event handler that changes the color of text when its hovered over.

/**
 * Create an event handler to change the font color to white whenever someone 
 * mouses over the text.
 */
function handleMouseLeave() {
  // TODO Finish the function
    document.getElementById("paragraph").style.color = "black";
}

/**
 * Create an event handler called handleClick() that changes the screen's  
 * background color when clicked. You may change the background color to a color
 * of your choice.
 * 
 * You can do this by changing the value of document.body.style.backgroundColor.
 */
function handleClick() {
  // TODO Finish the function
}

// function setRandomBackgroundColor() {
//     let randomHexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
//     // set the background color to the random RGB values
//     document.body.style.backgroundColor = randomHexCode;

//     if(isDarkColor(randomHexCode)) {    // Checks for darker hex codes
//         document.getElementById("paragraph").style.color = "white";
//     }

//   }
  
//   function isDarkColor(hexCode) {
//     // parse the hexcode into RGB components
//     var red = parseInt(hexCode.substring(1, 3), 16);
//     var green = parseInt(hexCode.substring(3, 5), 16);
//     var blue = parseInt(hexCode.substring(5, 7), 16);
  
//     // calculate the relative luminance
//     var relativeLuminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  
//     // compare the relative luminance to the threshold value
//     if (relativeLuminance < 0.5) {
//       return true;  // the color is dark
//     } else {
//       return false; // the color is light
//     }
//   }

function setRandomBackgroundColor () {
  let randomRGB;

  // RGBs are made up of three color values between 0 and 255
  let red = Math.floor(Math.random() * 255);  // Random Red
  let green = Math.floor(Math.random() * 255);  // Random Green
  let blue = Math.floor(Math.random() * 255); // Random Blue

  randomRGB = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = randomRGB;
  // return randomRGB;
}
  
// ! Don't Forget: Add your functions to the event attribute in the HTML doc!

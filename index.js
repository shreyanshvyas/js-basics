// Select the element on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx  =  canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;

// Setup our canvas for drawing
// make a variable called width and height from the same properties on our canvas
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x and y starting poinrt son canvas

ctx.lineJoin = 'round';
ctx.lineCap  = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
    // increment hue by one
    hue += 3;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

console.log(key);

// Start the path 

ctx.beginPath();
ctx.moveTo(x, y);

// move our x and y values depending on what the user did
switch (key) {
    case 'ArrowUp' :
    y -= MOVE_AMOUNT;
    break;
    case 'ArrowRight' :
        x += MOVE_AMOUNT;
        break;
        case 'ArrowDown' :
            y += MOVE_AMOUNT;
            break;
            case 'ArrowLeft' :
                x -= MOVE_AMOUNT;
                break;
    default:
        break;
}
ctx.lineTo(x,y);
ctx.stroke();
}

// write a handler for the keys 

function handleKey(e) {
   if(e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key : e.key });
    console.log(e.key);
    console.log('HANDLING KEY');
   }
}

// clear/shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        console.log('Done the shake!');
        canvas.classList.remove('shake');
    },
    { once: true }
    );
}

// listen for arrow keys 
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);


















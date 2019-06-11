
let canvas;
let ctx;

document.addEventListener('DOMContentLoaded', SetupCanvas);

function SetupCanvas() {
    canvas = document.getElementById('my-canvas');
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext('2d');

    DrawGrid(ctx, 'rgb(192, 192, 192)', 25);
//    DrawSquare(ctx, 10.5, 10.5, 50, 'rgb(200, 0, 0');
//    DrawSquare(ctx, 30.5, 30.5, 50, 'rgb(0, 0, 200, 0.5');
}

function GetMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function DrawSquare(context, xPos, yPos, size, rgb) {
    ctx.fillStyle = rgb;
    ctx.fillRect(xPos, yPos, size, size);
}

// Draw a grid 
// If the grid_size does not fit perfectly into the dimensions
// adjust the dimensions to next closest size that does fit
function DrawGrid(context, rgb, grid_size) {
    // get the dimensions of the canvas
    let w = context.canvas.width;
    let h = context.canvas.height;
    let adjust_width = w % grid_size;
    let adjust_height = h % grid_size;


    if (grid_size - adjust_width > grid_size / 2)
        context.canvas.width -= adjust_width;
    else
        context.canvas.width += adjust_width;

    if (grid_size - adjust_height > grid_size / 2)
        context.canvas.height -= adjust_height;
    else
        context.canvas.height += adjust_height;

    let x_gap = context.canvas.width / grid_size;
    let y_gap = context.canvas.height / grid_size;

    context.strokeStyle = rgb;
    
    // draw vertical lines
    for (let x = 0.5; x < context.canvas.width; x += grid_size) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, context.canvas.height);
        context.closePath();
        context.stroke();     
    }
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(context.canvas.width - 0.5, 0);
    context.lineTo(context.canvas.width - 0.5, context.canvas.height);
    context.closePath();
    context.stroke();
        
    // draw horizontal lines
    for (let y = 0.5; y < context.canvas.height; y += grid_size) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(context.canvas.width, y);
        context.closePath();
        context.stroke();     
    }
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, context.canvas.height - 0.5);
    context.lineTo(context.canvas.width, context.canvas.height - 0.5);
    context.closePath();
    context.stroke();     
}

//    canvas.addEventListener('mousedown', function(evt) {
//        let mousePos = GetMousePos(canvas, evt);
//        console.log('Mouse position: [' + mousePos.x + ']' + '[' + mousePos.y + ']');
//    }, false);

// ctx.strokeRect(0, 0, canvas.width, canvas.height);
// ctx.strokeRect(8, 8, 280, 462);
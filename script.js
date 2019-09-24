window.onload = init;
var canvas;
var ctx;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);

    canvas.addEventListener('mousemove', function (evt) {
        mousePos = getMousePos(canvas, evt);
        var message = " " + mousePos.x + ", " + mousePos.y;
        document.querySelector("#coords").innerHTML = message;
    });
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top),
    }
}
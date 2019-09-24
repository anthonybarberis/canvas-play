window.onload = init;

function init() {
    var canvas = document.querySelector("#myCanvas");
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);

}
let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "日会月分対思場発意道保日会月分対思場発対思場発意道保日会月分対思場発意道保";
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    // ctx.fillStyle = "#007a00";
    ctx.fillStyle = "#e83636";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 20);

window.addEventListener("resize", () => location.reload());




/* ================= js/calculator.js ================= */
function calc(){
let base = {mdrive:1500000, mall:1200000, standalone:2000000};
let type = document.getElementById('type').value;
let city = parseFloat(document.getElementById('city').value);
let total = base[type]*city;

document.getElementById('result').innerHTML = "Сума: $"+total.toLocaleString();

let ctx = document.getElementById('chart').getContext('2d');
ctx.clearRect(0,0,500,250);
let parts = [0.2,0.2,0.2,0.15,0.1,0.1,0.05];
let x=0;
parts.forEach(p=>{
let w = p*500;
ctx.fillRect(x,0,w,250);
x+=w;
});
}

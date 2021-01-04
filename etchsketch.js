function createCanvas(){
    // const ammountGrid = prompt("Enter height of grid, limit is 64","16");
    for(let i = 0; i <= 440; i++){
        const container = document.querySelector('#container');
        const content = document.createElement('div');
        container.style.display = 'grid';
        // container.style.gridTemplateRows = `repeat(${ammountGrid}, 1fr)`;
        container.style.gridTemplateRows = `repeat(21, 1fr)`;

        container.style.gridTemplateColumns = `repeat(21, 1fr)`;

        content.classList.add('content');
        container.appendChild(content);
    }
const button = document.querySelectorAll('.color');
button.forEach(button => button.addEventListener('click', colorPicker));
};


// let pen = [];
// pen[0] = {
//     x: 9 * box,
//     y: 10 * box
// }


function colorPicker (e) {
    const color = e.target.id;
    // console.log(color);
    if(color == 'black'){
        const draw = document.querySelectorAll('.content');
        console.log(draw[220])
        draw[220].style.backgroundColor = 'black'
        draw.forEach(draw => draw.addEventListener('onkeyup', (e){
            
        }))
    }
    

}
// function colorPicker(e){
//     const color = e.target.id;
//     if(color === 'black'){
//         const draw = document.querySelectorAll('.content');
//         draw.forEach(draw => draw.addEventListener('mouseover', function(){
//             draw.style.backgroundColor = "black";
//         }));
        
//     }else if(color === 'rainbow'){
//         const draw = document.querySelectorAll('.content');
//         draw.forEach(draw => draw.addEventListener('mouseover', function(){
//             draw.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 45%)`;
//         }));
//     };
// };


function resetEtch(){
    const containerReset = document.querySelectorAll('.content');
    containerReset.forEach(reset => reset.style.backgroundColor = 'white');

    createCanvas();
}

createCanvas();
document.getElementById('reset').addEventListener('click', resetEtch);

const rainbowHover = document.getElementById('rainbow').addEventListener('mousemove', rainbowEffect);
function rainbowEffect(e){
    document.getElementById('rainbow').style.backgroundColor = "rgb("+e.offsetX * 5+","+e.offsetY * 5+", 0)";
};
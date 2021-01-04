function createCanvas(){
    const container = document.querySelector('#container');
    const canvas = document.createElement('canvas');

    // canvas.classList.add('canvas');
    container.appendChild(canvas);
    
    let context = canvas.getContext('2d'),
    w = 590,
    h = 360,
    deltaX = 0,
    deltaY = 0;

    canvas.width = w;
    canvas.height = h;

    function (cursor){
        let size = 3;

        cursor.x = w/2 - size/2;
        cursor.y = h/2 -size/2;

        cursor.draw = function (x, y){
            context.beginPath();
            context.moveTo(cursor.x, cursor.y);

            if (cursor.x <= 0){
                cursor.x = 0;
            } else if (cursor.x >=w) {
                cursor.x = w;
            }
            if (cursor.y <= 0){
                cursor.y = 0;
            } else if (cursor.y >= h){
                cursor.y = h;
            }

            context.lineTo(cursor.x, cursor.y);
            context.closePath();
            context.stroke();
        }
    }

    canvas.addEventListener('onkeydown', function(e){
        let key = e.keyCode;
        if(key == 37) {
            deltaX = -1;
        } else if (key = 38){
            deltaY = -1;
        } else if (key = 39){
            deltaX = 1;
        } else if (key = 40){
            deltaY = 1;
        }

        cursor.draw(deltaX, deltaY);

        canvas.addEventListener('onkeyup', function() {
            if (key == 37){
                deltaX = 0;
            } else if()
        })
    })

};
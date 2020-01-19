let matrix = [];
let side = 10;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let mardArr = [];
let alienArr = [];

function setup() {
    matrixGenerator(80, 200, 100, 30, 20, 25);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('grey');
    frameRate(8);

    noStroke()

    function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, mardCount, alienCount) {
        for (let index = 0; index < matrixSize; index++) {
            matrix[index] = [];
            for (let i = 0; i < matrixSize; i++) {
                matrix[index][i] = 0;
            }
        }
        for (let index = 0; index < grassCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 1;
        }
        for (let index = 0; index < grassEaterCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 2;
        }
        for (let index = 0; index < predatorCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 3;
        }
        for (let index = 0; index < mardCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 4;
        }
        for (let index = 0; index < alienCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 5;
        }
    }

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                let mard = new Mard(x, y);
               mardArr.push(mard);
            }
            else if (matrix[y][x] == 5) {
                let alien = new Alien(x, y);
                alienArr.push(alien);
            }
        }
    }

}

function draw() {

    for (let y = 0; y < matrix.length; y++) {
        const element = matrix[y];
        for (let x = 0; x < element.length; x++) {

            if (matrix[y][x] == 1) {
                fill(28, 185, 28)
            }
            else if (matrix[y][x] == 2) {
                fill(223, 223, 87)
            }
            else if (matrix[y][x] == 3) {
                fill(173, 13, 13)
            }
            else if (matrix[y][x] == 4) {
                fill(5, 10, 3)
            }
            else if (matrix[y][x] == 5) {
                fill(29, 19, 121)
            }
            else {
                fill(24, 168, 156)
            }
            rect(x * side, y * side, side, side)
        }
    }
    for (let index = 0; index < grassArr.length; index++) {
        grassArr[index].mul();
    }
    for (let index = 0; index < grassEaterArr.length; index++) {
        grassEaterArr[index].eat();
    }
    for (let index = 0; index < predatorArr.length; index++) {
        predatorArr[index].eat();
    }
    for (let index = 0; index < mardArr.length; index++) {
       mardArr[index].eat();
    }
    for (let index = 0; index < alienArr.length; index++) {
        alienArr[index].eat();
     }
}
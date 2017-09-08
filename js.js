// первое задание

document.getElementById('press').onclick = task1;

function task1() {

    var arr = [1, 3, 5, 77, 88, 99];

    document.getElementById('new').innerHTML = arr;
}

// второе задание

document.getElementById('press2').onclick = task2;

function task2() {

    var arr = [1, 3, 5, 77, 88, 99];

    document.getElementById('new2').innerHTML = arr;

    var ind = document.getElementById('index');
    var mng = document.getElementById('meaning');

    document.getElementById('ok').onclick = oki;

    function oki() {
        arr.splice(ind.value, 0, mng.value);
        console.log(arr);
        console.log(ind.value);
        console.log(mng.value);
        document.getElementById('new2').innerHTML = arr;

    }

}

// третье задание

document.getElementById('press3').onclick = task3;

function task3() {

    var arr = [1, 3, 5, 77, 88, 99];

    document.getElementById('new3').innerHTML = arr;

    document.getElementById('poppop').onclick = pop;

    function pop() {
        arr.pop();
        document.getElementById('new3').innerHTML = arr;
    }

}

// четвертое задание

document.getElementById('press4').onclick = task4;

function task4() {

    var arr = [1, 3, 5, 77, 88, 99];

    document.getElementById('new4').innerHTML = arr;

    document.getElementById('shift').onclick = sh;

    function sh() {
        arr.shift();
        document.getElementById('new4').innerHTML = arr;
    }

}

// пятое задание


document.getElementById('press5').onclick = task5;

function task5() {

    var arr = [1, 3, 5, 77, 88, 99];

    document.getElementById('new5').innerHTML = arr;

    var inp = document.getElementById('push');
    document.getElementById('pus').onclick = pu;


    function pu() {
        arr.push(inp.value);
        document.getElementById('new5').innerHTML = arr;
    }
}

// шестое задание

document.getElementById('press6').onclick = task6;

function task6() {

    var arr = [1, 3, 5, 77, 88, 99];

    document.getElementById('new6').innerHTML = arr;

    var inp = document.getElementById('unsh');
    document.getElementById('uns').onclick = un;

    function un() {
        arr.unshift(inp.value);
        document.getElementById('new6').innerHTML = arr;
    }
}
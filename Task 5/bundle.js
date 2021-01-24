let arr = new Array(5);

function random(max, min){
    return Math.round(Math.random() * (max - min) + min);
 }

function fillArray() {  
	arr = arr.fill().map(a => random(100, -100));
   
}

function replaceFromArray () {
    arr = arr.map(item => item < 0 ? 0 : item);
}

function addToArray() {
	for (let i = 0; i < arr.length; i+=2) {
        if(arr[i] == 0){
            arr.splice(i+1, 0, -1);
        }
    }
    
}


fillArray();
replaceFromArray();
addToArray();
console.log(arr);

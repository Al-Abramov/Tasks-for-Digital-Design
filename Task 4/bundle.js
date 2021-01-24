function printTriangle(){
let str = '    ';

 for(let i = 0; i < 5; i++ ){
     str = str.substr(1) + ' #';
     console.log(str + '\n');
 }
}
printTriangle();
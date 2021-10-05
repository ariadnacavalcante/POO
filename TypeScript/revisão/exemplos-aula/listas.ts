//js listas
let l = [1,2,3];
console.log(l);

// ts lista number
let l1: number[]= [2,3,4];
console.log(l1);

// ts lista string
let l2:string[] =["Ari", "Bruno"];
console.log(l2);

//iteração javascript
    console.log(l1.length);
for(let i=0; i<l1.length; i++){
    console.log(i, l1[i]);

}
// or for.in // 
for(let i in l1){
    console.log(i);

}

// for off (valores de l1, somente)
for(let elemento of l1){
    console.log(elemento); 
}




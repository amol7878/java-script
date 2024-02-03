// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // Internal loop
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);


let n=5
let string=""
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        string +=j
    }
    string +="\n"
}

console.log(string)



let a=" i am a king"
let b=a.split(' ')
let c=b.reverse()
console.log(c)
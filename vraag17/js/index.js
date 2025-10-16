function lengte() {
    for (naam of namen){
        if (naam.length > 5){
            aantal = aantal + aantal;

        }



    }
    console.log(`je hebt ${aantal} namen langer dan 5`);

}
let vraag1=window.prompt("hoeveel namen wil je ingeven:");
let namen = [];
let aantal = 0;
for (let i = 1;i<=vraag1;i++){
    let vraag2= window.prompt(`geef naam ${i} in:`);
    namen.push(vraag2);

}
console.log(namen);


lengte();

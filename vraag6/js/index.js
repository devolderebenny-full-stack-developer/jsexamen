let score = parseInt(prompt("geef een score op 20:"));
if (score<10){
    console.log("Onvoldoende");
}else if (score < 14){
    console.log("Voldoende");
}else if (score < 18){
    console.log("Goed");
}else{
    console.log("Uitstekend");
}
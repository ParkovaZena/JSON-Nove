
//ascync await

async function getData(){
    try{
    const odpovet = await fetch('data.json');
    const data = await odpovet.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

getData();


/*
const jsonFile = `[
    {"jmeno" : "patric"},
    {"jmeno" : "bateman"}
]`;

const pomoc = JSON.parse(jsonFile);

const spet = JSON.stringify(pomoc);

console.log(pomoc + jsonFile);

*/
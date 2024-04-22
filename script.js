
//ascync await

async function getData(){
    try{
    const odpovet = await fetch('https://v2.jokeapi.dev/');
    const data = await odpovet.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById('btn').addEventListener('click',()=>{
    getData();
});

/*
const jsonFile = `[
    {"jmeno" : "patric"},
    {"jmeno" : "bateman"}
]`;

const pomoc = JSON.parse(jsonFile);

const spet = JSON.stringify(pomoc);

console.log(pomoc + jsonFile);

*/
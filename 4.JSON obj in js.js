//const person={"last":"svekis","num":1}

const url="4.j1.json";
myjson();


function myjson(){
    fetch(url)
    .then(rep => rep.json())
    .then(json =>{
        console.log(json);
    })
}
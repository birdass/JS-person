let name = "Kirill Delija";
let age = 20;
let city = "Tallinn";
let commentary = "";
let drivinglecence = "";

console.log(`Character: ${name}. age: ${age}. city: ${city}.`);


if(age < 18) {
    drivinglicence = ` ${name}   Слишком молод для прав`;
} else {
    drivinglicence = ` ${name} Могу получить права`;
}

console.log(drivinglicence);

const html = `  
    <ul> 
        <li> Имя: ${name} </il>
        <li> Возраст : ${age} </il>
        <li> Город: ${city} </il>
        <li>. Я ${commentary} </il>
        <li> ${drivinglicence} </il>
    </ul>

`;

document.body. innerHTML = html;
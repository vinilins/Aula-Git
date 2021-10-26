const peoples = [
    {
        "name": "Vinícius",
        "departament": "Presidente",
        "age": 20
    },
    {
        "name": "Negão",
        "departament": "Diretor de Qualidade",
        "age": 22
    },
    {
        "name": "Fernando",
        "departament": "Diretor de Projetos",
        "age": 24
    },
    {
        "name": "Magão",
        "departament": "Diretor de Negócios",
        "age": 20
    },
    {
        "name": "Pamplona",
        "departament": "Diretor de Gente & Gestão",
        "age": 20
    },
]

peoples.forEach(people => {
    if (people.age < 20) console.log(people.name);
});

console.log(peoples);
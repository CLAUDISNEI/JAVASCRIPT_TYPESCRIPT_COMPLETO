
const meuEscopo = ()=>{
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const tbody = document.querySelector('.tbody');

    const pessoas = [];

    recebeEventoForm =(evento)=>{
        evento.preventDefault();

        let name = form.querySelector('#name');
        let lastname = form.querySelector('#lastname');
        let weight = form.querySelector('#weight');
        let height = form.querySelector('#height');

        pessoas.push(
            {
            name:name.value, 
            lasname: lastname.value, 
            weight: weight.value,
            height:height.value }
        );

        console.log(pessoas);

        resultado.innerHTML += `<p>${name.value} ${lastname.value} ${weight.value} ${height.value} </p>`

        tbody.innerHTML += `<tr><td>${name.value}</td><td>${lastname.value}</td><td>${weight.value}</td><td>${height.value}</td></td>`
    }
    form.addEventListener('submit', recebeEventoForm)

}

meuEscopo();

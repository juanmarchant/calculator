







document.addEventListener('DOMContentLoaded', () => {

    const calculator = document.querySelector('.col');

    calculator.addEventListener('click', (e) => {

        if (e.target.className === 'number') {
            console.log(e.target.textContent)
        }
    })



    console.log('cargado')
});
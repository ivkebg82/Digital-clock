const button = document.querySelector('.btn')


const initialValuesOfPerson = {
    name: 'Petar',
    age: 38
}

button.addEventListener('click', () => {
    const address = 'Stojana Protica 6'
    const fullInfoOfPerson = new Object({
        ...initialValuesOfPerson,
        address
    })

    console.log(fullInfoOfPerson)
})
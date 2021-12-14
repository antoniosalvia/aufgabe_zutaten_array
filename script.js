'use strict'

const zutaten = ['Salami', 'Rucola', 'Tomate Mozzarella', 'Thunfisch'];

const createNewArray = param => {

    const newArray = [];

    param.forEach(element => {
        newArray.push(element + ' Pizza'); 
    });

    console.log(newArray);
};

createNewArray(zutaten);
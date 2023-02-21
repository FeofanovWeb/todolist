const addDo = document.querySelector('#addDo'); // добавить задачу
const addNote = document.querySelector('#addNote'); // добавить заметку
const btngreen = document.querySelector("#btn-green"); // отметить задачу
const btnred = document.querySelector('#btn-red'); // удалить задачу
const ToDo = document.querySelector('.ToDo');

const modal = document.querySelector('.modal-window');
const body = document.querySelector('BODY');
const modalbtn1 = document.querySelector('#modal-btn1');
const modalbtn2 = document.querySelector('#modal-btn2');

const input = document.querySelector('#input');
// все кнопки, инпуты и окно задач


// массив для того, чтобы потом добавлять в него список задач
let arr = [];

// индекс задач, который увеличивается, когда добавляется новая задача
let TodoIndex = 1;
let id = 1;


// событие на кнопку добавить зачаду
addDo.addEventListener('click', function(event){
    //принажатии на эту кнопку открывается модальное окно, где можно написать задачу
    modal.style.display = 'block'

    // при надатии на закрыть , можно закрыть(странно звучит)
    modalbtn2.addEventListener('click', function(event){
        modal.style.display = 'none'
    })
})


// событие, которое принимает в себя клик, и когда пользователь кликает на добавить задачу, то в массив добавляется новая задача, и эта задача создается в окошке (Список задач)

modalbtn1.addEventListener('click', (event) => {
   arr.push({id: id ,todo:input.value})
   id++
    console.log(arr)
    createToDo()
})



// функция, которая создает это самое окошко задач( да я знаю код огромный и наверное слишком тупой, но оно работает)

function createToDo(event){

    let ToDoWrapper = document.createElement('div');
    let ToDoId = document.createElement('div');
    let ToDoTitile = document.createElement('div');
    let divClose = document.createElement('div');
    
    let buttonRed = document.createElement('button');
    let buttonGreen = document.createElement('button');

    ToDoWrapper.classList.add('ToDoWrapper');
    ToDoId.classList.add('ToDo__id');
    ToDoTitile.classList.add('ToDo__title');
    divClose.classList.add('close');
    buttonRed.classList.add('btn-red');
    buttonRed.classList.add('btn');
    buttonRed.setAttribute('id', 'btn-red');
    buttonGreen.setAttribute('id', 'btn-green');
    buttonGreen.classList.add('btn-green');
    buttonGreen.classList.add('btn');

    buttonRed.innerText = "X";
    buttonGreen.innerText = "O";

    ToDoWrapper.appendChild(ToDoId);
    ToDoWrapper.appendChild(ToDoTitile);
    ToDoWrapper.appendChild(divClose);
    divClose.appendChild(buttonGreen);
    divClose.appendChild(buttonRed);
    
    
    ToDo.appendChild(ToDoWrapper)
    ToDoTitile.textContent = input.value
    ToDoId.textContent = id++
    input.value = "";

    buttonGreen.addEventListener('click', (event) => {
        ToDoTitile.style.textDecoration = "line-through"
        ToDoTitile.style.color = "green"
        ToDoWrapper.style.backgroundColor = "#63EA60"

        if(ToDoTitile.style.color = "green"){
            buttonGreen.remove()
        }
    })      

}




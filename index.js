// ADD LIST FUNCTION
const inputText = document.querySelector('input')
const value = document.querySelector('input').innerText
const saveButton = document.querySelector('.btn-simpan')
const todoBody = document.querySelector('.todo-body')

saveButton.addEventListener('click', function(){
    if (inputText.value == ''){
        alert('Input cannot be empty!')
    } else {
        document.querySelector('input').innerText = inputText.value
        const labelText = document.createTextNode(" " + inputText.value)

        //LABEL
        const createLabel = document.createElement('label')
        createLabel.setAttribute('for','todo')
        createLabel.appendChild(labelText)

        // CHECKBOX
        const createCheckbox = document.createElement('input')
        createCheckbox.setAttribute('type','checkbox')

        // DIV CONTAINER
        const createContainer = document.createElement('div') // tambah div container untuk todo list
        createContainer.classList.add('todo-list') // tambah class "todo-list" ke div to-do list
        createContainer.appendChild(createCheckbox)
        createContainer.appendChild(createLabel)

        // DELETE BUTTON
        const delButton = document.createElement('button')
        const delText = document.createTextNode('x')
        delButton.classList.add('todo-delete')
        delButton.appendChild(delText)

        // TODO LIST
        const createList = document.createElement('li')
        createList.appendChild(createContainer)
        createList.appendChild(delButton)

        // TODO BODY
        todoBody.appendChild(createList)
    }
    
})  


//DELETE FUNCTION
document.addEventListener('click', function(e){
    const todoDelete = e.target.classList.contains('todo-delete')
    const delButtons = document.querySelectorAll('.todo-delete')

    delButtons.forEach(delButton => {
        if(todoDelete === true){
            delButton.parentElement.remove()
        }
    });

})


//CHECK-DONE FUNCTION
const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const labelText = document.getElementsByName('label')

const toggleCheck = () => {
    labelText.classList.toggle('done')
}

checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('change', function () {
        if (checkBox.classList.contains('done')) {
          toggleCheck();
        }
      });  
});


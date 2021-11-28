let input = document.getElementById('enter-todo-input');
let btn = document.getElementById('add-todo-btn');
let ul = document.getElementById('ul');


function createTodoItem() {
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.classList.add('remove-todo');
    ul.appendChild(li);
    li.innerText = input.value;
    li.append(delBtn);
    li.classList.toggle("not-done");
}
btn.addEventListener('click', function(){
    if (!input.value) {
        alert('Error, please enter your task.')
    } else {
        createTodoItem();
        input.value = '';
    } 
});

ul.addEventListener('click', function(event){
    let i = event.target;
    if (i.tagName === 'LI') {
        i.classList.toggle("done");
    } else if (i.tagName === 'BUTTON') {
       i.closest('li').remove();
    }; 
});
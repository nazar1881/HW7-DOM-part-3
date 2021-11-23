let input = document.getElementById('inp');
let btn = document.getElementById('btn');
let ul = document.getElementById('ul');

btn.addEventListener('click', function(){
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.classList.add('remove-btn')
    if (!input.value){
        alert('Error, please enter your task.')
    }else {
        ul.appendChild(li);
        li.innerText = input.value;
        li.append(delBtn);
        li.classList.toggle("not-done");
        input.value = '';
    } 
});

ul.addEventListener('click', function(event){
    let i = event.target;
    if (i.tagName === 'LI'){
        i.classList.toggle("done")
    }else if (i.tagName === 'BUTTON'){
       i.closest('li').remove();
    }; 
});
// 'use strict';  
const inputText = document.getElementById('input_text');
const add = document.querySelector('#button_add');
const tasks = document.getElementById('tasks');


 
tasks.innerHTML = localStorage.getItem('text');
const deleteBtn = document.querySelectorAll(".delete");
 
for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function () {
        this.parentNode.remove();
        localStorage.removeItem('text');
    })
}
 

const tasksCross = document.querySelectorAll('.tasks');
for (let i = 0; i < tasksCross.length; i++) {
    tasksCross[i].onclick = function () {
        
        this.classList.toggle("completed")
    }
}



add.onclick = function () {
    if (inputText.value === '')
        alert('the message is not propperly filled')
    else {
        localStorage.setItem('text', tasks.innerHTML += ` 
        
           <div class="tasks ">     
                <span class="text">
                ${inputText.value}
                </span>
                <button class="tick">
                <i class="fa-solid fa-check"></i>
                </button>     
                <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
                </button>    
    
             </div>  
            ` );
         
        tasks.innerHTML = localStorage.getItem('text');
        
       
        inputText.value = '';
    }
    
    const deleteBtn = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', function () {
            this.parentNode.remove();
            localStorage.removeItem('text');
        })
    }
    
    const tasksCross = document.querySelectorAll('.tasks');
    for (let i = 0; i < tasksCross.length; i++) {
        tasksCross[i].onclick = function () {
            
            this.classList.toggle("completed")
        }
    }
};


 
let comments=document.querySelector(".chat-content");
let items=comments.children;
let template=document.querySelector('#message-template').content;
let button=document.querySelector(".chat-form-button");
let form=document.querySelector('.chat-form');
let newTemplate=template.querySelector('.chat-message');

let commentList=JSON.parse(localStorage.getItem('todo')) || [];
console.log(commentList)
let check=function(item, taskText){
    let buttonclose=item.querySelector(".chat-message-button");
    buttonclose.addEventListener('click', function(){
        commentList=commentList.filter((element)=>element!==taskText);
        updateLocalStorage();
        item.remove();
    })
}

for (let index = 0; index < commentList.length; index++) {
    let newcomment=newTemplate.cloneNode(true);
    let description=newcomment.querySelector(".chat-message-text");
    description.textContent=commentList[index];
    check(newcomment, commentList[index]);
    comments.appendChild(newcomment);
}

function updateLocalStorage(){
    localStorage.setItem('todo', JSON.stringify(commentList));
}

form.addEventListener('submit', handle);
function handle(evt){
    evt.preventDefault();
    let form=evt.target;
    let newcomment=newTemplate.cloneNode(true);
    let description=newcomment.querySelector(".chat-message-text");
    let taskText = form.elements.text.value;
    description.textContent=taskText;
    comments.appendChild(newcomment);
    commentList.push(taskText);
    check(newcomment, taskText);
    updateLocalStorage();
    form.reset();
}
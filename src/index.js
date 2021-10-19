
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        buildToDo(e.target.querySelector('#new-task-description').value)
        form.reset()
});
})

function buildToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  
  p.textContent = `${todo} `;
  btn.textContent = ' x';
  btn.addEventListener('click', handleDelete)

  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);


 
  // document.querySelector
}

function handleDelete(e){
  e.target.parentNode.remove()
}




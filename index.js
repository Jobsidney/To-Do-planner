let form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    console.log(e.target.todo.value)
    handleTask(e.target.todo.value)
    e.preventDefault();
    form.reset()
})

function handleTask(work){
    const p=document.createElement('p');
    p.innerText=`${work}  `;
    const item=document.querySelector('#todoDiv')
    item.appendChild(p)
    const btn=document.createElement('button');
    btn.setAttribute('id','#btn')
    btn.innerHTML='<i class = "fas fa-trash" ></i >'
    p.appendChild(btn)
    btn.addEventListener('click',(e)=>{e.target.parentNode.remove()})
}


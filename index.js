let form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    console.log(e.target.todo.value)
    handleTask(e.target.todo.value)

    e.preventDefault();


    //PUSH DATA TO DB
    // const dataB={title: e.target.todo.value,
    // content:e.target.descr.value}
    // function postTask(obj){
    //     fetch('http://localhost:3000/articles',{method: 'POST',headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(obj)})
    // }
    // postTask(dataB);
    // form.reset()
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


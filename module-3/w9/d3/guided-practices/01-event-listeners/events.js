// Your code here 
// basic first part
window.addEventListener('DOMContentLoaded',()=>{
    alert('the dom has loaded');
});

// basic second part

const redInput = document.getElementById('red-input');
//  use getElementById to get the value 

const changetoRed = (e)=>{
    // make the cbfunction

    let value = e.target.value.trim().toLowerCase();
    // get the ele value; delete the space 

    if(value === 'red'){
        redInput.style.backgroundColor = 'red';
        // css here
    }else{
        redInput.style.backgroundColor = 'transparent';
    }
}
redInput.addEventListener('input',changetoRed)
// listen the input event

//basic third part
const additem = document.getElementById('add-item');

const ul = document.querySelector('#section-2 >ul');

const addli =(e)=>{
    e.preventDefault();
    //stop the default thing

    const input = document.querySelector('#list-add');
    const inputValue = input.value;

    const newli = document.createElement('li');
    newli.innerText = inputValue;
    ul.appendChild(newli);

    input.value = "";
}
additem.addEventListener('click',addli);

//part 4 

const colorselect =document.getElementById('color-select');

const changecolor = (e) =>{

    const section3 = document.getElementById('section-3');

    section3.style.backgroundColor = e.target.value;

}

colorselect.addEventListener('change',changecolor);

//part 5

const removelisteners = document.getElementById('remove-listeners');

removelisteners.addEventListener('click',(e)=>{
    redInput.removeEventListener('input',changetoRed);
    additem.removeEventListener('click',addli);
    colorselect.removeEventListener('change',changecolor);

})












// Your code here 
// basic first part
window.addEventListener('DOMContentLoaded',()=>{
    alert('the dom has loaded');
});// this two can change to the end of this page

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

// BONUS TASKS:
  // 6. Re-add the removed event listeners when a specific button is clicked

  const reAddListenersButton = document.createElement("button");
  reAddListenersButton.innerText = "Re-add Listeners";
  document.body.appendChild(reAddListenersButton);
  
  const reAddAllListeners = () => {
    redInput.addEventListener('input',changetoRed);
    additem.addEventListener('click',addli);
    colorselect.addEventListener('change',changecolor);
  };
  reAddListenersButton.addEventListener("click", reAddAllListeners);

  // 7. Create a new section with a hover event
  const section5 = document.createElement("section");
  section5.id = "section-5";
  
  const hoverDiv = document.createElement("div");
  hoverDiv.innerText = "Hover over me!";
  hoverDiv.style.border = "1px solid black";
  hoverDiv.style.padding = "10px";
  
  section5.appendChild(hoverDiv);
  document.body.appendChild(section5);

  hoverDiv.addEventListener("mouseenter", () => {
    hoverDiv.innerText = "You are hovering over me!";
  });

  hoverDiv.addEventListener("mouseleave", () => {
    hoverDiv.innerText = "Hover over me!";
  });

  // 8. Create a global event listener for the space bar
  const handleSpaceBar = (e) => {
    if (e.code === "Space") {
      alert("Space bar was pressed!");
    }
  };
  window.addEventListener("keydown", handleSpaceBar);













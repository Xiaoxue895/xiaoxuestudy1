/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here 
        const breed = url.split('/')[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here 
        const gallery = document.querySelector('.gallery ul'); 

        const li = document.createElement('li');
        li.classList.add('dog-card');

        const img = document.createElement('img');
        img.src = url;
        img.alt = breed;
        
        const span = document.createElement('span');
        span.textContent = breed;

        li.appendChild(img);
        li.appendChild(span);


        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here 
        gallery.appendChild(li);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here 
    const gallery = document.querySelector('.gallery ul');
    const firstCard = gallery.querySelector('li:first-child');

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here 
    if (firstCard) {
        gallery.removeChild(firstCard);
    }

});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const gallery = document.querySelector('.gallery ul');
    const lastCard = gallery.querySelector('li:last-child'); 

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here 
    if (lastCard) {
        gallery.removeChild(lastCard);
    }
});

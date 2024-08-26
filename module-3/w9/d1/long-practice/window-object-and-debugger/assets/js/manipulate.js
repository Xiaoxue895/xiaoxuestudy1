export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here 
    document.title = "xiaoxue's Protfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here 
    document.querySelector('h1').innerText ="Xiaoxue";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here 
    const aboutMeSection = document.querySelector('.section p');
    aboutMeSection.innerText="I am a software engineer with a passion for developing innovative programs. I've got a wealth of experience in software development, coding, and problem-solving."
}

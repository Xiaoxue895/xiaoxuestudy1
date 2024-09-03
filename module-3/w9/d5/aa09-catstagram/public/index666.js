
let upVoteCount = 0;
let downVoteCount = 0;

// fetch the image  return the url
const fetchImage = async ()=>{
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    
    const data = await response.json();

    const catImageUlr = data[0].url;

    return catImageUlr;
}

//let me start with build the page

const bulidPage = ()=>{
    const body = document.querySelector("body");//find the body

    const heading = document.createElement("h1");//create the h1 in dom
    heading.innerText = "find a cute cat and say something";

    const newCatButton = document.createElement("button");//create a button to get a new cat
    newCatButton.setAttribute("id","new-cat");//let id = new-cat;
    newCatButton.innerText = ("click this");

    newCatButton.style.marginBottom = "5px";//style the new cat button;
   
    body.style.width = "100&";//style the body part
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.alignItems = "center";

    body.append(heading,newCatButton);//append these two ele to body;

    //we still need the image,vote,and comment part here
    buildImageContainer();
    BuildVotesContainer();
    buildCommentsContainer();

}

//after build the page we should bulid the image container
const buildImageContainer =()=>{
    const body = document.querySelector('body');

    const catImageContainer = document.createElement("div");

    catImageContainer.setAttribute("id","cat-image-container");

    body.appendChild(catImageContainer);
}

//from here we need the image, so we back to top to fetch the image
//and then make a function createimage

//then we can create image

const createImage = (imageUrl) => {
    const imageContainer = document.getElementById("cat-image-container");
  
    if (!imageContainer.children[0]) {
      
      const imageElement = document.createElement("img");
      imageElement.setAttribute("id", "cat-image");
      imageElement.setAttribute("src", imageUrl);
  
      //that not important now
      imageElement.style.width = "300px";
      imageElement.style.height = "300px";
      
      imageContainer.appendChild(imageElement);
    } else {
      // this shouldn't run for now since we don't have any listeners triggering another fetch call yet
      // a good hint though on how to approach only fetching once.
      alert("Cat Image Already Created, Refresh For New Cat :)");
    }
  };

  const fetchNewImageButton = () => {
    
    const newImageButton = document.getElementById("new-cat");
    
    const catImage = document.getElementById("cat-image");
    
    newImageButton.addEventListener("click", async () => {
      clearValuesOnFetch();// in the end of the code 

      const newCatImage = await fetchImage();// get the new url
      catImage.src = newCatImage;
    });
  };
  // that is the complete first day thing i guess
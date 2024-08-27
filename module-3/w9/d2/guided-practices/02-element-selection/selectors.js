const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here 
    const items = document.getElementsByClassName('seed');
    for(let item of items){
        console.log(item);
    }
    
    // 2. Get all seedless fruit elements
    // Your code here 
    const items2 = document.getElementsByClassName('seedless');
    for(let item2 of items2){
        console.log(item2);
    }

    // 3. Get first seedless fruit element
    // Your code here 

    const firstSeedless = document.querySelector('.seedless');
    console.log(firstSeedless);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here 
    const spans = document.querySelectorAll('span');
    const youSpan = Array.from(spans).find(span => span.textContent.includes("you"));
    console.log(youSpan);

    // 5. Get all children of element "wrapper"
    // Your code here 
    const wrapperChildren = document.getElementById('wrapper').children;
    console.log(wrapperChildren);



    // 6. Get all odd number list items in the list
    // Your code here 
    const oddItems = document.querySelectorAll('li:nth-child(odd)');
    console.log(oddItems);



    // 7. Get all even number list items in the list
    // Your code here 
    const evenItems = document.querySelectorAll('li:nth-child(even)');
    console.log(evenItems);


    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here 
    const companiesWithoutClass = document.querySelectorAll('li:not([class])');
    console.log(companiesWithoutClass);


    // 9. Get "Amazon" list element
    // Your code here 

    const amazonItem = Array.from(document.querySelectorAll('li')).find(li => li.textContent.includes("Amazon"));
    console.log(amazonItem);



    // 10. Get all unicorn list elements (not the image element)
    // Your code here 

    const unicornItems = document.querySelectorAll('li.unicorn');
    console.log(unicornItems);

}

window.onload = select;
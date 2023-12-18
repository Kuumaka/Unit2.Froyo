console.log("Add cohort to repo");

// Prompt:
// A visitor receives a prompt upon opening the 
// website to enter a list of comma-separated 
// froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
// When they view the browser console, they observe an object 
// listing how many of each flavor they have ordered. 
// In this case, they will be able to observe that they 
// have ordered three vanilla, two coffee, and one 
// strawberry froyo.

const froyoPrompt = prompt("Enter froyo flavors separated by commas.");

function froyoFlavors(flavors) {
    const map = {};
    for (let i = 0; i < 0; i++) {
        if (map[flavors[i]]) {
            map[flavors[i]]++;
        } else {
            map[flavors[i]] = 1;
        }
    }
    return map;
}





// Criteria:
// The user is prompted for froyo flavors upon entering the website.
// The user's input string is split into an array of strings.
// A loop is used to iterate through the array of flavors.
// An object is used to keep count of how many orders there are of each flavor.
// The program correctly counts the number of each flavor in the user's input.
// The logic for counting the frequencies of elements in an array is organized into a function that returns an object.
// Names are consistent and meaningful.
// The console output changes depending on the user's input.

// Hints:
// Can you live serve the HTML file?
// Is the HTML file connected to the JS file?
// Can you prompt the user for froyo flavors and store their result?
// Can you parse the user input into an array of froyo flavors?
// Can you build an object to track which flavors you have observed so far?
// As you iterate through the array of flavors, when should that object be updated?
// Is your logic organized into a function?
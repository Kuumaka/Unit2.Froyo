// vanilla,vanilla,vanilla,strawberry,coffee,coffee

function countFroyoFlavors() {
    let froyoPrompt = prompt("Enter froyo flavors separated by commas.");
    const froyoArr = froyoPrompt.split(',');
    const froyoCount = {};

    for (let i = 0; i < froyoArr.length; i++) {
        let currentFlavor = froyoArr[i];
        if (froyoCount.hasOwnProperty(currentFlavor)) {
            froyoCount[currentFlavor]++;
        } else {
            froyoCount[currentFlavor] = 1;
        }
    }
    console.log(froyoCount);
}
countFroyoFlavors();
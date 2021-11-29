function getReceipt() {
    //This intializes our string so it can get passed from
    //function to function,growing line by line into a full receipt
    var text1 = "<h3> You Ordered: </h3>";
    var runningTotal=0;
    var sizeTotal=0;
    var sizeArray=document.getElementsByClassName("size"); //this loop finds the chosen pizza size
    for (var i=0;i<sizeArray.length;i++) {
        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>"; //creates sentence to display what size pizza ordered
        }
    }
    if(selectedSize==="Personal Pizza") { //each if and else if statement is checking to see if that size pizza was chosen
        sizeTotal =6;                       //if it was, then the price is assigned
    }
    else if(selectedSize==="Slice Pizza") {
        sizeTotal = 2;
    }
    else if(selectedSize==="Medium Pizza") {
        sizeTotal =10;
    }
    else if(selectedSize==="Large Pizza") {
        sizeTotal=14;
    }
    else if(selectedSize==="Extra Large Pizza") {
        sizeTotal =16;
    }

    runningTotal=sizeTotal; //assigning price to another variable
    console.log(selectedSize+" = $" + sizeTotal + ".00"); //the next 3 lines are spitting out calculations to look at in the console
    console.log("size text1: " + text1);
    console.log("subtotal: $" +runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal,text1) { //this function results in the items purchased and total price displaying
    var toppingTotal = 0;
    var selectedTopping=[] //creating an array to put toppings that were selected in 
    var toppingArray=document.getElementsByClassName("toppings"); //getting all the elements with the class "toppings"
    for (var j=0; j<toppingArray.length; j++) { //looping through the array of toppings to only put ones that are checked in the array
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //pushing checked toppings to the array
            console.log("selected topping item: (" + toppingArray[j].value + ")"); //outputting to console
            text1 = text1 + toppingArray[j].value+"<br>" //adding onto this variable to show items chosen later on
        }
    }
    var toppingCount= selectedTopping.length; //establishing the # of toppings chosen
    if (toppingCount > 1) {
        toppingTotal = (toppingCount-1); //variable to keep cost of toppings as one is free
    }
    else {
        toppingTotal=0;  //if no toppings are chosen
    }
    runningTotal = (runningTotal +toppingTotal); //adding cost of pizza plus toppings
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+ " topping-1 free topping = " + "$" + toppingTotal + ".00");// showing calculation steps in the console
    console.log("topping text1: "+text1);
    console.log("Purchase Total: " + runningTotal + ".00" );
    document.getElementById("showText").innerHTML=text1;  //Putting our sentence of what the customer ordered on the screen
    document.getElementById("totalPrice").innerHTML = "<h3> Total: <strong>$" + runningTotal +".00" + "</strong></h3>"; //putting total cost on the screen

};
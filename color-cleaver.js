const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
let color1 = getInput(1)
let color2 = getInput(2)


if(color1 === undefined && color2 === undefined){
    console.log("You must submit atleast one color.")
} 

if(color2 === undefined){
    if( isValidSecondary(color1)){
        let results = colorDeconstructor(color1)
        console.log(color1 + " deconstructs into " + results + ".")
    }else {
        console.log("Please submit a valid secondary color")
        //make sure both are different valid primarys
        //construct colors
    }
}

else{
    if(isValidPrimary(color1) && isValidPrimary(color2)){
        if(color1 !== color2){
        let result = colorCombinator(color1, color2)
        console.log(color1 + " and " + color2 + " combined makes " + result)
    } else{
        console.log("Please enter two DIFFERENT primary colors")
    } 
}else{
    console.log("please enter two valid primary colors")
}
}

var get_sunshine = false;
var ounces_of_water = 11;

if(get_sunshine === true && ounces_of_water >= 10) {
    console.log("You have a happy plant");
} else if(get_sunshine === true || ounces_of_water >=10) {
    console.log("Your plant is alive");
} else {
    console.log("Your plant is dead.");
}


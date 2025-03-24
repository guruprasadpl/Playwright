// //Task 1: Function Declaration 
// function userProfile(name){
//     console.log("Hello "+name);
// }
// userProfile("justin");

// //Task 2: Arrow Function 
// let double = (number) =>
// {
//     returns = number*number,number
//     console.log(returns);
// }
// double(11);

// //Task 3: Anonymous Function
// let anonymous = function () {
//     setTimeout(() => {
//         console.log("This message is delayed by 2 seconds"); 
//     }, 2000);
// }
// anonymous();

//Task 4: Callback Function 
function getUserData(name,age,time,callback) {
    console.log("UserData");  
    setTimeout(() => {
        data(); 
    }, time);

    function data() {
        console.log(name);
        console.log(age);  
        callback();
    }
}

function success() {
    console.log("All done");
}
getUserData("justin",23,2000,success);

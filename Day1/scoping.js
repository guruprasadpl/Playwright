// const browser = "chrome";

// function browseris(){

//     let version 

//     if (browser.startsWith("chrome")) {

//         version = "10.2.30";
//         console.log(version);

//     }
//     console.log(version);
    

// }

// browseris();

// console.log(browser);


const browser = "safari";

function support() {

    let os ;
    let ios;

    if (browser.startsWith("edge")) {

        os = "Supported by windows";
        console.log(os);
        
        
    } else {

        ios = 'Supported by macos';
        console.log(ios);
        
    }
    console.log(browser);
    
    
}support();

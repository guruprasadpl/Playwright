function great (name, callback)
{
    console.log("This is new "+name);
    callback();
    
}
function second(){
    console.log("Second function");

}
great("print",second)


function movie (moviename,callback){
    console.log("Searching for the movie");
    
    setTimeout(() => {
        console.log("Loading "+moviename+ " now");
        callback();
        
    }, 2000);

}


function watch(){
    console.log("Watch the movie");
    
}
movie("barbie",watch)


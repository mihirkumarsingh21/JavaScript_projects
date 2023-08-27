const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (btn){
    
    btn.addEventListener("click", function (c) {
        

        if(c.target.id === "grey") {
           document.body.style.backgroundColor = c.target.id;
        }
        
        if(c.target.id === "white") {
            document.body.style.backgroundColor = c.target.id;
        }
        
        if(c.target.id === "blue") {
           document.body.style.backgroundColor = c.target.id;
        }
        
        if(c.target.id === "yellow") {
            document.body.style.backgroundColor = c.target.id;
        }

        if(c.target.id === "red") {
            document.body.style.backgroundColor = c.target.id;
        }
    })
})
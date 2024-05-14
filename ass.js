  

 //assignment3
   function ass(row){
    for(i=1;i<=row;i++){
        console.log("*".repeat(i));
    }
}
ass(6)
//assingment4
function n(row){
    for(i=6;i>=0;i--){
        console.log("*".repeat(i))
    }

}
n(6)
//assignment5
  function star(rows){
        for(i=1;i<=rows;i++){
            console.log(" ".repeat(rows-i)+"*".repeat(i))
        }
    for(let i=rows-1;i>=1;i--){
        console.log(" ".repeat(rows-i)+"*".repeat(i))
    }

    }
star(5)    
//assignment6
  function diamond(rows){
        for(i=1;i<=rows;i++){
            console.log(" ".repeat(rows-i)+"*".repeat(2*i-1))
        }
    for(let i=rows-1;i>=1;i--){
        console.log(" ".repeat(rows-i)+"*".repeat(2*i-1))
    }

    }    
diamond(5)
//assignment
function sev(row){
    console.log("*".repeat(7))
    for(i=1;i<=row;i++){
        console.log(" ".repeat(6)+"*".repeat(1));
    }
}
  sev(7) 
//assiggnment8
function rev(row){
    console.log("*".repeat(7))
    for(i=1;i<=row;i++){
        console.log("*".repeat(1));
    }
}
rev(7) 
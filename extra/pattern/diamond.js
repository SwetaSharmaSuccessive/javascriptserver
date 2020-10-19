<<<<<<< HEAD
function printDiamond(n){
    let str;
    for(let i=1; i<=n; i++){
    str = '';
    for(let k=1; k<=n-i; k++)
    {
    str += " ";
    }
    for(let j=1; j<=i; j++)
    {
    str += "* ";
    }
    console.log(str);
    str = "";
    }
    
    for(let i=n; i>0; i--){
    str = '';
    for(let k=n-i; k>0; k--)
    {
    str += " ";
    }
    for(let j=1; j<=i; j++)
    {
    str += "* ";
    }
    console.log(str);
    str = "";
    }
    
    
    }
    
    n = process.argv[2];
    printDiamond(n);
=======

const DiamondPattern = (rows)=>{ 
    
    if((rows>=2) &&( rows<= 10)){


        for(let i=1;i<=rows;i++){
            let sp="";
            for(let j=rows;j>=i;j--){
                sp=sp+" ";
            }
                
        for(let k=1;k<=i;k++){
            sp=sp+"* ";
        }
        console.log(sp); 
        }
            
    for(let i=rows;i>=1;i--){
        let sp="";
        for(let j=rows;j>=i;j--){
            sp=sp+" ";
                    
        }
        for(let k=i;k>=1;k--){
            sp=sp+"* ";
        }
            
        console.log(sp); 
        
    }
            
    }
    else{
        console.log("error: Something went wrong");
    }
}
 let y=process.argv[2];
     DiamondPattern(y);  
    
>>>>>>> f27a42bdbe808e67e3bbff9725fa607b4fc0f26c

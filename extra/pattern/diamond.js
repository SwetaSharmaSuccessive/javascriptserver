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
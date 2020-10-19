
let x=(checkNumber)=>{ 

    let result=0;
    while(checkNumber>0){
        let rem=checkNumber%10;
        result=result*10+rem;
        checkNumber=parseInt(checkNumber/10);
        
    }
    if(result==c){
        console.log("This Number is palindrome");
    }
    else{
        console.log("this number is not palindrome");
    }

}
let c=process.argv[2];
x(c);


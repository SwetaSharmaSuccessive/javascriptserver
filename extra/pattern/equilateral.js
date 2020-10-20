let EquilateralTriangle=(NoOfrow)=>{

    if((NoOfrow>=2) &&(NoOfrow<= 10)){ 
    for(let i=1;i<=NoOfrow;i++){
        for(let x=NoOfrow-1;x>=i;x--){
            process.stdout.write(" ");
        }
        for(let j=1;j<=i;j++){
            process.stdout.write("* ");

        }
        console.log();
    }
}
else{
    console.log("error: Something is wrong");
}
}
let y=process.argv[2];
EquilateralTriangle(y)

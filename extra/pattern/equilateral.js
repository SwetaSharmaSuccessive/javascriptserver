<<<<<<< HEAD
function Equilateral(NoOfrow){
=======
let EquilateralTriangle=(NoOfrow)=>{

    if((NoOfrow>=2) &&(NoOfrow<= 10)){ 
>>>>>>> f27a42bdbe808e67e3bbff9725fa607b4fc0f26c
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
<<<<<<< HEAD
let y=process.argv[2];
Equilateral(y)
=======
else{
    console.log("error: Something is wrong");
}
}
let y=process.argv[2];
EquilateralTriangle(y)
>>>>>>> f27a42bdbe808e67e3bbff9725fa607b4fc0f26c

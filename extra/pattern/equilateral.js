function Equilateral(NoOfrow){
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
let y=process.argv[2];
Equilateral(y)
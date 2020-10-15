function Equilateral(NoOfrow){
    for(var i=1;i<=NoOfrow;i++){
        for(var x=NoOfrow-1;x>=i;x--){
            process.stdout.write(" ");
        }
        for(var j=1;j<=i;j++){
            process.stdout.write("* ");

        }
        console.log();
    }
}
var y=process.argv[2];
Equilateral(y)
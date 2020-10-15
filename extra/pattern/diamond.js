let i;

function DiamondPattern(NoOfRows){
    for(i=1;i<=NoOfRows;i++){
        for(let space=NoOfRows-1;space>=i;space--){
            process.stdout.write(" ");
        }
        for(j=1;j<=i;j++){
            process.stdout.write("* ");
        }
        console.log();
    }
    for(let x=1;x<=NoOfRows;x++){
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
    if(i==NoOfRows+1){
        for(let i=1;i<=NoOfRows-1;i++){
            for(let space=1;space<=i;space++){
                process.stdout.write(" ");
            }
            for(j=i;j<=NoOfRows-1;j++){
                process.stdout.write("* ");
            }
            console.log();
        }
    }
}
DiamondPattern(5);
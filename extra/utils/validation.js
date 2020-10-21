let users=[
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },
    {
    traineeEmail: 'xyz@gmail.com',
    reviewerEmail: 'abc@gmail.com',
    },
    {
    traineeEmail: 'ftc@successive.tech',
    reviewerEmail: 'ftcre@successive.tech',
    },
    {
    traineeEmail: 'trainee2@successive.tech',
    reviewerEmail: 'reviewer2@successive.tech',
    },
    {
    traineeEmail: 'trainee3@successive.tech',
    reviewerEmail: 'reviewer3@successive.tech',
    }
    ]
    
    function validateEmail(email){
    let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let domain=email.split('@')[1];
    if(reg.test(email) && (domain=='successive.tech')){
        return true;
    }
    else{
        return false;
    }
    }
    
    
    function validateUsers(users){
    vuser=[];
    iuser=[];
    let icount=0;
    let vcount=0;
    users.forEach(({traineeEmail,reviewerEmail}) => {
    if(validateEmail(traineeEmail)&&validateEmail(reviewerEmail))
    {
    icount+=1;
    vuser.push({traineeEmail,reviewerEmail});
    return icount;
    }
    else
    {
    vcount+=1;
    iuser.push({traineeEmail,reviewerEmail});
    return vcount;
    }
    });
    
    
    console.log("Number of valid users:", icount);
    console.log("Number of Invalid users: ", vcount);
    console.log();
    console.log("valid users: ", vuser);
    console.log("Invalid users: ", iuser);
    console.log();
    
    
    }
    
    validateUsers(users);
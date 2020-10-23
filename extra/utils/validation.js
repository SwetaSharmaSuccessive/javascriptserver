import validateEmail from './helpers';
// const users = [
//     {
//     traineeEmail: 'trainee.S@successive.tech',
//     reviewerEmail: 'avinash.thube@successive.tech'
//     },
    
//     {
//     traineeEmail: 'trainee2.A@live.in' ,
//     reviewerEmail: 'reviewer2.B@successive.tech'
//     },
    
//     {
//     traineeEmail: 'trainee3.C@gmail.com',
//     reviewerEmail: 'reviewer3.D@successive.tech'
//     }
    
//     ];
    
 //  import {validateEmail} from './helpers' 
// const validateEmail = (email) => {
//     const regex = /\w+[.]\w+@successive.tech$/i;
//     return regex.test(email)
// }
    
    
const validateUsers = (user) =>{
    const validUsers = [];
    const invalidUsers = [];
    user.forEach(({traineeEmail, reviewerEmail}) => {
    validateEmail(traineeEmail) ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail)
    validateEmail(reviewerEmail) ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail)
    }
    )
    console.log(`There are ${validUsers.length} valid users:`, validUsers)
    console.log(`There are ${invalidUsers.length} invalid users:`, invalidUsers)
    
}

export default validateUsers;
    //validateUsers(users)
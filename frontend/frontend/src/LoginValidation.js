

const Validation = (values) => {
    let error = {}
    const email_pattern = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm
    //For password, minimum eight characters, at least one letter, one number and one special character:
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if(values.emailid.trim() === ''){
        error.emailid = 'Emailid should not be empty'
    }
    else if (!email_pattern.test(values.emailid)){
        error.emailid="Emailid didnt match"
    } 
    else {
        error.emailid= ''
    }

    if(values.password.trim() === ''){
        error.password = 'Password should not be empty'
    }
    else if (!password_pattern.test(values.password)){
        error.password="Password didnt match"
    } 
    else {
        error.password= ''
    }
    return error;
}
export default Validation
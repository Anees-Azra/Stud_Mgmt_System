

const Validation = (values) => {
    let error = {}
    const email_pattern = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm
    //For password, minimum eight characters, at least one letter, one number and one special character:
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if(values.fullname.trim() === ''){
        error.fullname = 'Name should not be empty'
    }
    else {
        error.fullname=''
    }

    if(values.dob === ''){
        error.dob = 'Date of Birth field should not be empty'
    }
    else {
        error.dob=''
    }



    if(values.emailid.trim() === ''){
        error.emailid = 'Emailid should not be empty'
    }
    else if (!email_pattern.test(values.emailid)){
        error.emailid="Emailid didnt match"
    } 
    else {
        error.emailid=''
    }

    if(values.password.trim() === ''){
        error.password = 'Password should not be empty'
    }
    else if (!password_pattern.test(values.password)){
        error.password="Password didnt match"
    } 
    else {
        error.password=''
    }

    if(values.role.trim() === ''){
        error.role='Role should not be empty'
    }
    else {
        error.role=''
    }

    if(values.roleid.trim() === ''){
        error.roleid = 'Roleid should not be empty'
    }
    else {
        error.uin=''
    }

    if(values.uin.trim() === ''){
        error.uin = 'UIN should not be empty'
    }
    else {
        error.uin=''
    }
    return error;
}
export default Validation
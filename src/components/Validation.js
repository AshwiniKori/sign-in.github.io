const Validation = (inputs) => {
    let errors = {}

    if(! inputs.name) {
        errors.name = "Name is required";
    }
    else if(inputs.name.length < 4) {
        errors.name = "Name must be more than 4 charecters";
    }

    if(! inputs.password) {
        errors.password = "Password is required";
    }
    else if(inputs.password.length < 9) {
        errors.password = "Password must be more than 8 charecters";
    }

    if(! inputs.email) {
        errors.email = "Email is required";
    }

    if(Object.keys(errors).length === 0 &&  (inputs.name !== "") && (inputs.email !== "") && (inputs.password !== "")){
        alert("Login Success");
    }

    return errors;
}

export default Validation;
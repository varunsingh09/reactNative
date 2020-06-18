export const handleValidation = (props) => {
    let fields = props.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    //console.log("fields===>", fields["zipcode"], "--")

    if (fields["kitchen_name"] === "" && fields["kitchen_name"] !== undefined) {
        formIsValid = false;
        errors["kitchen_name"] = "Kitchen name cannot be empty";
    }
    if (fields["address"] === "" && fields["address"] !== undefined) {
        formIsValid = false;
        errors["address"] = "Address cannot be empty";
    }
    if (fields["zipcode"] === "" && fields["zipcode"] !== undefined) {
        formIsValid = false;
        errors["zipcode"] = "Zipcode cannot be empty";
    }
    if (isNaN(fields["zipcode"]) && fields["zipcode"] !== "" && fields["zipcode"] !== undefined) {
        console.log('come')
        formIsValid = false;
        errors["zipcode"] = "Only number required";
    }
    if (fields["state"] === "" && fields["state"] !== undefined) {
        formIsValid = false;
        errors["state"] = "State cannot be empty";
    }
    if (fields["city"] === "" && fields["city"] !== undefined) {
        formIsValid = false;
        errors["city"] = "City cannot be empty";
    }
    if (fields["contact_no"] === "" && fields["contact_no"] !== undefined) {
        formIsValid = false;
        errors["contact_no"] = "Contact cannot be empty";
    }
    if (isNaN(fields["contact_no"]) && fields["contact_no"] !== "" && fields["contact_no"] !== undefined) {
        formIsValid = false;
        errors["contact_no"] = "Only number required";
    }

    //Email
    if (fields["email"] === "" && fields["email"] !== undefined) {
        formIsValid = false;
        errors["email"] = "Email Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined" && fields["email"] !== "") {
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
    }
    if (fields["password"] === "" && fields["password"] !== undefined) {
        formIsValid = false;
        errors["password"] = "Password Cannot be empty";
    }

    if (typeof fields["password"] !== "undefined" && fields["password"] !== "") {
        if (!fields["password"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["password"] = "Only letters";
        }
    }

    if (fields["confirm_password"] === "" && fields["confirm_password"] !== undefined) {
        formIsValid = false;
        errors["confirm_password"] = "Confirm password cannot be empty";
    }

    if (typeof fields["confirm_password"] !== "undefined" && fields["confirm_password"] !== "") {
        if (!fields["confirm_password"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["confirm_password"] = "Only letters";
        }
    }
    if ((fields["password"] !== fields["confirm_password"]) && (fields["confirm_password"] !== "" && fields["password"] !== "") && (fields["confirm_password"] !== undefined && fields["password"] !== undefined)) {
        formIsValid = false;
        errors["password"] = "Password did not match: Please try again...";
        errors["confirm_password"] = "Password did not match: Please try again...";
    }

    if (fields["agreement_policy"] === false) {
        formIsValid = false;
        errors["agreement_policy"] = "Please check terms and condition";

    }

    //this.setState({ errors: errors });
    return { errors: errors, formIsValid: formIsValid }
}


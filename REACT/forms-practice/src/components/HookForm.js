import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName=(e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length < 3)
            setFirstNameError("First name must be greater than 2 characters");
        else
            setFirstNameError("");
    }
    const handleLastName=(e) =>{
        setLastName(e.target.value);
        if(e.target.value.length < 3){
            setLastNameError("Last name must be greater than 2 characters");
        }
        else{
            setLastNameError("");
        }
    }
    const handleEmail=(e) =>{
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters");
        }
        else {
            setEmailError("");
        }
    }
    const handlePassword=(e) =>{
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword=(e) =>{
        setConfirmPassword(e.target.value)
        if(e.target.value == password){
            setConfirmPasswordError("");
        }
        else{
            setConfirmPasswordError("passwords must match");
        }
    }

    return(
        <form className='wrapper'>
            <div className='HookForm'>
                <div className='input'>
                    <label> firstname: </label>
                    <input value={firstName} onChange={handleFirstName}/>
                    {
                        firstNameError ?
                        <p>{firstNameError}</p>:
                        <></>
                    }
                </div>
                <div className='input'>
                    <label> lastName: </label>
                    <input value={lastName} onChange={handleLastName}></input>
                    {
                        lastNameError ?
                        <p>{lastNameError}</p>:
                        <></>
                    }
                </div>
                <div className='input'>
                    <label> email: </label>
                    <input value={email} onChange={handleEmail}></input>
                    {
                        emailError ?
                        <p>{emailError}</p>:
                        <></>
                    }
                </div>
                <div className='input'>
                    <label> password: </label>
                    <input value={password} onChange={handlePassword}></input>
                    {
                        passwordError ?
                        <p>{passwordError}</p>:
                        <></>
                    }
                </div>
                <div className='input'>
                    <label> confirmPassword: </label>
                    <input value={confirmPassword} onChange={handleConfirmPassword}></input>
                    {
                        confirmPasswordError ?
                        <p>{confirmPasswordError}</p>:
                        <></>
                    }
                </div>
            </div>
        </form>
    );
}
export default HookForm;

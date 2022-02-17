import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <form>
            <div className='HookForm'>
                <label> firstname:</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <label> lastName:</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <label> email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label> password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <label> confirmPassword:</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </div>
            <div>
                <div className='output'>
                    <label> firstname:</label>
                    <p>{firstName}</p>
                </div>
                <div className='output'>
                    <label> lastName:</label>
                    <p>{lastName}</p>
                </div>
                <div className='output'>
                    <label> email:</label>
                    <p>{email}</p>
                </div>
                <div className='output'>
                    <label> password:</label>
                    <p>{password}</p>
                </div>
                <div className='output'>
                    <label> confirmPassword:</label>
                    <p>{confirmPassword}</p>
                </div>
            </div>
        </form>
    );
}
export default HookForm;

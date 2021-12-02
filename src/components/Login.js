import { useContext, useState } from "react";
import { centralState } from '../App'
import { useHistory } from "react-router-dom"; 

export const Login = (props) => {
    //read the central state
    const cState = useContext(centralState);
    console.log(cState);

    //let us check the history
    const history = useHistory();
    console.log(history);

    //state
    const [formData, setFormData] = useState({
        email : 'tom@jerry.com',
        password : 'Password'
    });

    const handleInputChange =(e) =>{
        console.log(e.target.value);

        //make the copy
        const copy_formData = {...formData}
        //
        copy_formData[e.target.id] = e.target.value;
        //update the state
        setFormData(copy_formData)
    }

    const submitForm = (formSubmitEvent) =>{
        //default : postback (refresh)
        formSubmitEvent.preventDefault();
        //read the field
        console.log(formData);
        //validate the user
        if(cState.store.ValidUserEmail === formData.email 
            && 
            cState.store.ValidPassword === formData.password){
                const copy_state = {...cState.store}
                copy_state.IsLoggedIn = true;
                //set the new state
                cState.setStore(copy_state);
                //navigate to catalogue
                history.push('/catalogue');  //on successfull validaton
            }
    }

    return (
        <form style={{maxWidth: '50%'}} onSubmit={submitForm}>
            <h2> Current Login Status: {cState.store.IsLoggedIn? 'Yes':'No' }</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" 
                className="form-control" 
                value = {formData.email}
                onChange = {handleInputChange}
                id="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"
                value = {formData.password} 
                onChange = {handleInputChange}
                className="form-control" 
                id="password"/>
            </div>

            
            <button type="submit" className={cState.store.IsLoggedIn ? 'btn btn-success':"btn btn-primary"}>Login</button>
        </form>

    )
}


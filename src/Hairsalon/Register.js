
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



const Register = () => {

    const initilState = {
        username: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        salonName: "",
        salonBranch: "",
        salonCity: "",
        pincode: "",
        confrimpassword:"",
        isDelete: false
    }
    const [addState, setAddState] = useState(initilState)

    const nav = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddState({ ...addState, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reqBody = {
            username: addState.username,
            fullName: addState.fullName,
            email: addState.email,
            phoneNumber: addState.phoneNumber,
            password: addState.password,
            salonName: addState.salonName,
            salonBranch: addState.salonBranch,
            salonCity: addState.salonCity,
            pincode: addState.pincode,
            confrimpassword:addState.confrimpassword
        };
        axios.post('http://localhost:8097/Register', reqBody)
            .then((response) => {
                if (response.data) {

                    nav('/login')

                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (

        <>

            <div className="form">


                <div>
                    <aside>
                        <span>
                            Welcome To
                            <br></br>
                            Hair Salon
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOYqj0nGQtnQiJ4ke9p4xCDdDoklE9m6dpw&s" alt="" style={{ position: 'relative', right: '-2px', bottom: '20px' }} />
                        </span>
                    </aside>
                    <aside className='form1'>
                        <h1>
                            <span>
                                REGISTER AS USER
                            </span>
                        </h1>
                        <div>
                            <table  cellSpacing={'8px'} >

                                <tr>
                                    <td>
                                        <label htmlFor="userName">Username</label><br />
                                        <input type="text" name="username" id="username" placeholder='Enter Your Username' value={addState.username}
                                            onChange={(e) => handleChange(e)} />
                                    </td>
                                    <td>
                                        <label htmlFor="password">Password</label><br />
                                        <input type="password" name="password" value={addState.password} id="password" placeholder='Enter Your Password' onChange={(e) => handleChange(e)} />
                                    </td>
                                    

                                    
                                </tr>
                                <tr>
                                <td>
                                        <label htmlFor="FullName">FullName</label><br />
                                        <input type='text' name="fullName" id="fullName" placeholder='Enter Your Full Name' value={addState.fullName}
                                            onChange={(e) => handleChange(e)} />
                                    </td>
                                    <td>
                                        <label htmlFor="phone">Phone Number</label><br />
                                        <input type='text' name="phoneNumber" id="phoneNumber" placeholder='Enter Your Phone Number' maxLength={'10'} value={addState.phoneNumber}
                                            onChange={(e) => handleChange(e)} />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="email">Email</label><br />
                                        <input type="text" name="email" id="email" placeholder='Enter Your E-mail' value={addState.email}
                                            onChange={(e) => handleChange(e)} />
                                    </td>
                                    <td>
                                        <label htmlFor="SalonName">Salon Name</label><br />
                                        <input type="text" name="salonName" id="salonName" placeholder='Enter Your Salon Name'  value={addState.salonName}
                                            onChange={(e) => handleChange(e)} />
                                    </td>
                                </tr>



                                <tr>
                                    <td>
                                        <label htmlFor="SalonBranch">Salon Branch</label><br />
                                        <select name="salonBranch" id="salonBranch" value={addState.salonBranch} onChange={(e) => handleChange(e)}>
                                                <option value="" style={{fontSize:'15px',color:'black'}}>Select Salon Branch</option>
                                                <option value="branch1">Branch 1</option>
                                                <option value="branch2">Branch 2</option>
                                                <option value="branch3">Branch 3</option>
                                            </select>
                                    </td>
                                    <td>
                                        <label htmlFor="SalonCity">Salon City</label><br />
                                        <input type="text" name="salonCity" value={addState.salonCity} id="salonCity" placeholder='Enter Salon City' onChange={(e) => handleChange(e)} />
                                    </td>
                                </tr>



                                <tr>
                                    <td>
                                        <label htmlFor="Pincode">Pincode </label><br />
                                        <span id='sp'></span>
                                        <input type="Pincode" name="pincode" value={addState.pincode} id="pincode" placeholder='Enter PinCode' onChange={(e) => handleChange(e)} />
                                        </td>
                                        <td>
                                        <label htmlFor="password">Confirm Password</label><br />
                                        <input type="password" name="password" value={addState.confrimpassword} id="confirmpassword" placeholder='ReEnter Password' onChange={(e) => handleChange(e)} />
                                    </td>

                                    
                                </tr>

                            </table>
                            <br />
                            <button onClick={handleSubmit}>SIGN-UP</button>


                        </div>
                    </aside>
                </div>



            </div>

        </>
    )
}

export default Register
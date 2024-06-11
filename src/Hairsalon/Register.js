
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



const Register = () => {

    const initilState = {
        username: "",

        email: "",
        
        password: "",
       
        salonBranch: "",
       
        
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
            
            email: addState.email,
           
            password: addState.password,
           
            salonBranch: addState.salonBranch,
         
           
           
        };
        axios.post('http://localhost:8083/register', reqBody)
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
                                  
                                    

                                    
                                </tr>
                                <tr>
                                <td>
                                <label htmlFor="password">Password</label><br />
                                <input type="password" name="password" value={addState.password} id="password" placeholder='Enter Your Password' onChange={(e) => handleChange(e)} />
                                    </td>
                                   
                                </tr>

                                <tr>
                                    <td>
                                       
                                             <label htmlFor="password">Confirm Password</label><br />
                                             <input type="password" name="password"  id="confirmpassword" placeholder='ReEnter Password'  />
                                    </td>
                                   
                                </tr>



                                <tr>
                                    <td>
                                    <label htmlFor="email">Email</label><br />
                                        <input type="text" name="email" id="email" placeholder='Enter Your E-mail' value={addState.email}
                                            onChange={(e) => handleChange(e)} />
                                        
                                    </td>
                                    
                                </tr>



                                <tr>
                                    
                                        <td>
                                        <label htmlFor="SalonBranch">Salon Branch</label><br />
                                        <select name="salonBranch" id="salonBranch" value={addState.salonBranch} onChange={(e) => handleChange(e)}>
                                                <option value="" style={{fontSize:'15px',color:'black'}}>Select Salon Branch</option>
                                                <option value="branch1">Naturallook Bridal Studio - JPS Tower, Thally Main Road, near Vailankanni School, Hosur, Tamil Nadu 635109.</option>
                                                <option value="branch2">Naturallook Family Salon & Bridal Studio - VKP Towers, Denkanikotta Rd, opp. DSP Office, Hosur, Tamil Nadu 635109</option>
                                                <option value="branch3">Naturallook Family Salon & Bridal Studio - PRWM+HHG, Bagalur Rd, opp. Nggo's Busstop, Hosur, Avalapalli Hudco, Tamil Nadu 635109</option>
                                            </select>
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

import React from "react";
import axios from "axios";
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login(){
    const {register, handleSubmit,reset} = useForm()
    const navigate = useNavigate()




    const log=(data)=>{
        if (validate(data)){
          axios.post("http://localhost:5000/login",data)
          .then((res)=>{
            console.log(data)
                console.log(res.data)
                reset()
                toast.success('Login', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    navigate("/user")
          }).catch((error) => {
            console.log(error);
            const errorName = error.response.data || "Unknown Error";
            toast.error(`An Error Occurred: ${errorName}` , {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
          
        }
      }


const validate=(data)=>{
  
    if(data.email ==='' || data.email === null){
        toast.warning('Please Enter Email')
        return false;
    }
    if(data.password ==='' || data.password===null){
        toast.warning('Please Enter password')
        return false;
    }
    return true;
}





    return(
        <>
         
         <div className="container">
            <div className="row">
                <div className="col-sm-4"></div>
                {/* login start */}

                <div className="col-sm-4">
                  <div className="card">
                  <form onSubmit={handleSubmit(log)}>
               <div className="card-header"> <h2>User Login</h2>
</div>
                <div className="card-body">
                <div class="form-floating mb-3">
                        <input type="email" 
                        className="form-control" 
                        id="floatingInput"
                        name="email"
                        {...register('email')} 
                        placeholder="name@example.com"/>
                        <label for="floatingInput">Email</label>

                        </div>
                        <div className="form-floating">
                        <input type="password"
                        className="form-control"
                            id="floatingPassword"
                            name="password"
                            {...register('password')}
                            placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                        </div>
                </div>
                        <br />
                 <div className="card-footer">
                    
                  <button type="submit" className="btn btn-outline-success">Login</button>
              <Link to='register'>
              <button className="btn btn-outline-success">Resister </button>

              </Link>
                 </div>
                   </form>
                  </div>
                </div>

                {/* login end */}
                <div className="col-sm-4"></div>
            </div>
         </div>
        </>
    )
}

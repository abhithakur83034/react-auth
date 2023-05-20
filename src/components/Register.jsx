import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
export default function Register(){
    const { register , handleSubmit,reset } = useForm();


    

    const log=(data)=>{
        if (validate(data)){
          axios.post("http://localhost:5000/users",data)
          .then((res)=>{
                console.log(res.data)
                reset()
                toast.success('user registered successfully...', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
          }).catch((error)=>{
            console.log(error)
            toast.error('An Error Occurred while registering...', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          })
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
       

         <div className="card">
            <div className="row">
                <div className="col-sm-4"></div>
                {/*  start */}

                <div className="col-sm-4">
                <div className="card">
                <div className="card-header">
                <h2>User Register</h2>
                </div>

                <form onSubmit={handleSubmit(log)}>
                    
               <div className="card-body">
               <p>
                Email : <input type="email"
                className="form-control"
                name="email"
                {...register('email')} />
                </p>
                <p>
                    Password : 
                    <input type="password"
                    className="form-control"
                    name="password"
                    {...register('password')} />
                </p>
                <p>
                    Mobile : 
                    <input type="number"
                     className="form-control"
                     name="mobile"
                     {...register('mobile')}
                     />
                </p>
                <p>
                    Address :
                    <textarea name="address" {...register('address')} className="form-control" style={{resize:"none"}} ></textarea>
                </p>

                <input type="radio"
                 name="gender"
                 {...register('gender')}
                  value="male" />
                <label>Male</label>
                <input type="radio"
                 name="gender" 
                 {...register('gender')}
                 value="female" />
                <label>Female</label>
                <input type="radio"
                 name="gender"
                 {...register('gender')}
                 value="other" />
                <label>Other</label>


                             </div>
             <div className="card-footer">
                       
                
    <button type="submit" className="btn btn-outline-primary">Register</button>

<Link to='/'>
            <button className="btn btn-outline-success">Login </button>

            </Link>
             </div>
                </form>


                </div>
               
  </div>
                    

                {/* end */}
                <div className="col-sm-4"></div>
                </div>
            </div>
       
        </>
    )
}
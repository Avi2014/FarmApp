import { Link } from "react-router-dom";
import './reg.css'

const Register = ({registerUser, errors, message}) => {
    return (
        <div className="main">
            <div className="regcontainer" >
            <div className="details rounded-l-xl">
        <h1 className="text-[34px] underline decoration-2">Register</h1>
        <br />
        
        {errors && errors.map(error => <p>{error.message}</p>)}
        <p>{message && message}</p>
        <form onSubmit={registerUser}>
            <div>
                Role:
                <select name="role" id="role" required className="hover:cursor-pointer">
                    <option value="customer">Customer</option>
                    <option value="farmer">Farmer</option>
                </select>
            </div>
            <div className="inputthings">
                <input type="text" id="name" name="name" placeholder="Name" required className="rounded-md border-solid border-slate-300 border-[1.2px]  mx-1 p-[4px] focus:border-blue-500 active:border-[1.2px]"/>
            </div>
                {/* <hr /> */}
            <div className="inputthings">
                <input type="email" id="email" name="email" placeholder="Email" required className="rounded-md border-solid border-slate-300 border-[1.2px]  mx-1 p-[4px] focus:border-blue-500 active:border-[1.2px]"/>
            </div>
                {/* <hr /> */}
            <div className="inputthings">
                <input type="text" id="username" name="username" placeholder="Username" required className="rounded-md border-solid border-slate-300 border-[1.2px]  mx-1 p-[4px] focus:border-blue-500 active:border-[1.2px]"/>
            </div>
                {/* <hr /> */}
            <div className="inputthings">
                <input type="password" id="password" name="password" placeholder="Password" required className="rounded-md border-solid border-slate-300 border-[1.2px]  mx-1 p-[4px] focus:border-blue-500 active:border-[1.2px]"/>
            </div>
                {/* <hr /> */}
            <div className="inputthings">
                <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" required className="rounded-md border-solid border-slate-300 border-[1.2px]  mx-1 p-[4px] focus:border-blue-500 active:border-[1.2px]"/>
            </div>
                {/* <hr/> */}
            
            
                <br />            
            <div className="outerbutton">
                <input type="submit" value="Register" className="font-bold bg-blue-500 text-white w-[200px] h-10 px-2 py-2 rounded-lg border-slate-700 border-3  hover:bg-blue-600 hover:cursor-pointer" id="regbtn" />
            </div>
            <div id="loglink">
            <Link to="/login" className="text-blue-500 text-sm mx-[70px] justify-center hover:text-blue-700">Already a user? Login</Link>
            </div>
        </form>
        </div>
        <img src="https://static.vecteezy.com/system/resources/previews/000/655/234/original/farmers-working-in-farm-cartoons-vector.jpg" alt="" className="rounded-r-xl" id="img"/>
        </div>
        </div>
    );
}

export default Register;
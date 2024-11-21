import { Link } from "react-router-dom";
import './Login.css'

const Login = ({ handleClick }) => {
  return (
    <div className='root'>
      <div className="loginmain ">
        <div className="login rounded-r-[15px]">
          <h1 className="heading">Login</h1>
          <form onSubmit={handleClick}>
            <div>
              <input
              className="rounded-md border-solid border-slate-300 border-[1.2px]  mx-1 p-[4px] focus:border-blue-500 active:border-[1.2px] inputbox"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <input
              className="rounded-md border-solid border-slate-300 border-[1.2px]  mx-1 p-[4px] focus:border-blue-500 active:border-[1.2px] inputbox"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div>
              <input type="submit" value="Login" className="font-bold bg-blue-500 text-white w-[200px] h-10 px-2 py-2 rounded-lg border-slate-700 border-3  hover:bg-blue-600 mx-14 submitbox hover:cursor-pointer"/>
            </div>
            <Link to="/register"className="text-blue-500 text-sm mx-[70px] align-middle justify-center  hover:text-blue-700">New User? Register</Link>
          </form>
        </div>
        <div className="image rounded-l-[15px]"></div>
      </div>
    </div>
  );
};

export default Login;

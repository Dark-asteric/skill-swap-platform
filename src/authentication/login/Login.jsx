import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { logIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password).then(result => {
      const user = result.user;
      console.log(user);
      navigate(`${location.state ? location.state : '/'}`)
    })
      .catch(error => {
        setErrorMessage(error.message);
        toast.error(error.message);
      })
  }
  return (
    <>
      <Toaster position="top-center" />
      <div className="mt-20 px-10 flex justify-center min-h-screen items-center mx-auto">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
          <p className="text-center pt-5 font-semibold text-2xl">Login to your account</p>
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" required />
                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                {errorMessage && <p className="text-red-500 text-md">{errorMessage}</p>}
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                <p className="text-xl font-semibold text-center pt-5">Don't have an accout ? <Link to="/auth/register" className="text-red-600 ">Register</Link></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
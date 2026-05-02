import { use } from "react";
import { Link } from "react-router"
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

  const { createUser,setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);
    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <>
      <div className="mt-20 px-10 flex justify-center min-h-screen items-center mx-auto">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
          <p className="text-center pt-5 font-semibold text-2xl">Create an account</p>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Photo URL</label>
                <input type="text" name='photo' className="input" placeholder="Photo URL" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                <p className="text-xl font-semibold text-center pt-5">Already have an accout ? <Link to="/auth/login" className="text-red-600 ">Login</Link></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
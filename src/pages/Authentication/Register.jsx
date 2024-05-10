import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { updateProfile } from "firebase/auth";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const { createUser, signOut } = useContext(AuthContext)

  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()



  const handleRegister = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    console.log(name, email, photo, password, confirmPassword)


    setPasswordError("")

    if (password !== confirmPassword) {
      setPasswordError("Password did not match !!");
      return
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }


    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must be at least one uppercase letter.");
      return;
    }


    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must be at least one lowercase letter.");
      return;
    }


    //create user
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        toast.success('Registration Successfully');
        signOut();
        navigate("/login");


        //update profile

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo

        })
          .then(() => console.log('profile update'))
          .catch()


      })
      .catch(error => {
        console.error(error)

      })



  }




  return (
    <div className='flex justify-center items-center min-h-[]'>
      <div className='flex gap-10 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>


          <p className='mt-3 text-xl text-center text-gray-600 '>
            Sign Up  Here
          </p>




          <form onSubmit={handleRegister}>

            <div className='mt-4'>

              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Name
              </label>

              <input

                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>



            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4 relative'>

              <div className='flex justify-between'>

                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '

                >
                  Password
                </label>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                name='password'
                required
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'

              />
              <span className="absolute top-10 right-4" onClick={() => setShowPassword(!showPassword)}>
                {
                  showPassword ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                }
              </span>

            </div>
            <div className='mt-4 relative' >

              <div className='flex justify-between'>

                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '

                >
                  Confirm Password
                </label>
              </div>

              <input

                autoComplete='current-password'
                name='confirmPassword'

                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type={showPassword ? "text" : "password"}
              />

              <span className="absolute top-10 right-4" onClick={() => setShowPassword(!showPassword)}>
                {
                  showPassword ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                }
              </span>


            </div>

            <div className='mt-4'>

              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>

              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>

            
            {
                    passwordError && <p className="text-red-700 font-500">{passwordError}</p>
                }

            <div className='mt-6'>

              <button
                type='submit'
                className='w-full bg-[#3665b8] px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>

            </div>

          </form>




          <div className="mt-6 text-center font-500">
            <p className="text-center mt-2 poppins-medium">Do You Have An Account ? <Link className="text-red-500" to='/login'>Please Sign In</Link></p>
          </div>

          <span className='w-1/5 border-b  md:w-1/4'></span>


        </div>

        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'

          style={{
            backgroundImage: "url(https://i.ibb.co/1ZQkSYM/sign-up.jpg)",
          }}
        >

        </div>

      </div>
    </div>
  );
};

export default Register;
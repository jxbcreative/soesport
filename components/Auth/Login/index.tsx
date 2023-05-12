import Image from "next/image";
import LogoSoeSport from "../../../public/assets/bg-login.webp";
import MediaQuery from "../../MediaQuery";
import Link from "next/link";
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  return (
    <div>
      {isMobile ? (
        // Mobile device
        <div className="relative">
          <div>
            <Image
              src={LogoSoeSport}
              alt="logo-soesport"
              className="w-screen"
            />
          </div>
          <div className="bg-white px-8 pt-5 h-[69vh] rounded-t-[40px] w-full absolute top-52">
            <form className="mt-1">
              <div className="space-y-1 mb-3">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email" className="w-full bg-gray-100 focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-100 py-3 px-2 rounded-md"/>
              </div>
              <div className="space-y-1 mb-3">
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter your password" className="w-full bg-gray-100 focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-100 py-3 px-2 rounded-md"/>
              </div>  
              <div className="space-y-1 mb-10 flex">
                <br/>
                <p className="text-[13px] ml-auto">Forgot password</p>
              </div>  
              <div className="mb-3">
                <button className="bg-black text-white py-3 w-full rounded-md font-semibold">LOGIN NOW</button>
              </div>  
            </form>
            <p className="text-center font-medium my-5">Or</p>
            <div className="text-center">
              <button className="bg-gray-100 rounded-md p-2">
                <Link href={'https://google.com'}>
                  <FcGoogle className="text-2xl"/>
                </Link>
              </button>
            </div>
            <p className="text-center mt-10">Don't have an account? <Link className="text-blue-500 font-semibold" href={'/register'}>Register now</Link></p>
          </div>
        </div>
      ) : (
        // Desktop device
        <div></div>
      )}
    </div>
  );
};

export default Login;

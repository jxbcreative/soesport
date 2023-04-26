import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import MediaQuery from "../../MediaQuery";

const Register = () => {
  const isMobile = MediaQuery("(max-width: 600px)");

  return (
    <div>
      {isMobile ? (
        // Mobile View
        <div className="bg-black w-screen h-screen">
          <div className="pt-10">
            <div className="flex items-center space-x-28 px-5">
              <BsArrowLeft className="text-xl text-white" />
              <h2 className="font-semibold text-2xl text-center text-white">
                Sign up
              </h2>
            </div>
            {/* Form login mobile */}
            <div className="bg-white w-screen h-[100%] mt-7 pt-8 pb-8 rounded-tl-[70px]">
              <form className="px-8">
                <div className="mb-3 space-y-1">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-gray-100 py-2.5 px-2"
                  />
                </div>
                <div className="mb-3 space-y-1">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Enter Addrees"
                    className="w-full bg-gray-100 py-2.5 px-2"
                  />
                </div>
                <div className="mb-3 space-y-1">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full bg-gray-100 py-2.5 px-2"
                  />
                </div>
                <div className="mb-3 space-y-1">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="w-full bg-gray-100 py-2.5 px-2"
                  />
                </div>
                <div className="mb-3 space-y-1">
                  <label>Password</label>
                  <input
                    type="text"
                    placeholder="Enter password"
                    className="w-full bg-gray-100 py-2.5 px-2"
                  />
                </div>
                <div className="mb-3 space-y-1">
                  <label>Retry Password</label>
                  <input
                    type="text"
                    placeholder="Enter retry password"
                    className="w-full bg-gray-100 py-2.5 px-2"
                  />
                </div>
                <div className="mt-5">
                  <button className="bg-black rounded-md py-3 w-full text-center text-white font-semibold">
                    LOGIN NOW
                  </button>
                </div>
              </form>
              <p className="text-gray-500 text-center mt-3">
                I have account, <Link className="text-blue-500 font-semibold" href={"/login"}>
                  Login now
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Desktop
        <div></div>
      )}
    </div>
  );
};

export default Register;

import Image from "next/image";
import Link from "next/link";
import LogoSoeSport from "../../../public/logo-dailytodo.svg";
import MediaQuery from "../../MediaQuery";

const Register = () => {
  const isMobile = MediaQuery("(max-width: 600px)");

  return (
    <div>
      {isMobile ? (
        // Mobile View
        <div className="px-3 mt-10">
          <Image src={LogoSoeSport} alt="logo-soesport" className="w-12" />
          <div className="mt-5">
            <div className="space-y-2">
              <h2 className="font-semibold text-2xl">Create your account</h2>
              <p className="text-gray-400 text-[12px]">Register is free</p>
            </div>
            {/* Form login mobile */}

            <form className="mt-10">
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
              <div className="flex space-x-3">
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
              </div>
              <div className="mt-5">
                <button className="bg-black rounded-md py-3 w-full text-center text-white font-semibold">
                  CREATE NEW ACCOUNT
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-center mt-3">
              I have account,{" "}
              <Link className="text-blue-500 font-semibold" href={"/login"}>
                Login now
              </Link>
            </p>
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

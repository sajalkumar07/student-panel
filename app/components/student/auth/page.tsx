"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PinScreen from "./PinScreen/PinScreen";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

interface AuthService {
  getAccessToken(userIdentifier: any, passcode: any): Promise<any>;
}

const authService: AuthService & { [key: string]: any } = {
  getAccessToken: async (userIdentifier, passcode) => {
    try {
      const response = await fetch("https://api.liftu.tech/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "insomnia/2023.5.8",
        },
        body: JSON.stringify({
          userIdentifier,
          passcode,
        }),
      });

      if (response.status !== 200) {
        throw new Error(
          `Error getting access token: Status Code ${response.status}`
        );
      }

      const details = await response.json();
      return details.data.accessToken;
    } catch (error) {
      console.error(error);
      return "";
    }
  },
};

const Auth = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const router = useRouter();
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPinScreen, setShowPinScreen] = useState(false);
  //TODO: Session
  const { data: session } = useSession();

  if (session) {
    const idToken = session.idToken;
    if (idToken) {
      console.log(idToken);
    }
  }

  const loginView = () => {
    setShowSignup(false);
  };

  const signupView = () => {
    setShowSignup(true);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const accessToken = await authService.getAccessToken(
      loginEmail,
      loginPassword
    );
    if (accessToken) {
      router.push("/student/give-assessment/test-guide");
      localStorage.setItem("accessToken", accessToken);
      toast.success("Login successful");
    } else {
      toast.error("Login failed");
    }
  };
  //TODO: added handlesignup method
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSignup(false);
    setShowPinScreen(true);
    toast.success("Signup successful! Please enter your PIN.");
  };

  if (showPinScreen) {
    return <PinScreen name={name} email={signupEmail} phone={phone} />;
  }

  // const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   await signIn("google", {
  //     callbackUrl: "/student/give-assessment/test-guide",
  //   });
  // };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "18px",
            padding: "16px",
            minWidth: "300px",
          },
        }}
      />
      <div className="flex  lg:h-auto lg:w-[600px] w-[360px]">
        <div className="flex flex-col lg:w-full w-[360px] justify-center lg:mr-0  mr-5">
          <div className="flex mt-3 ">
            <div
              className={` ${
                showSignup
                  ? "text-[#424242] text-[24px] mt-2 opacity-50"
                  : "text-[#191C45] text-[32px] font-semibold"
              } pl-4 cursor-pointer`}
              onClick={loginView}
            >
              Login
            </div>
            <div
              className={` ${
                showSignup
                  ? "text-[#191C45] text-[32px] font-semibold"
                  : "text-[#424242] text-[24px] mt-2 opacity-50"
              } ml-4 pl-4 border-l border-[#CCCCCC] mb-4 cursor-pointer`}
              onClick={signupView}
            >
              Sign Up
            </div>
          </div>
          {showSignup ? (
            <form onSubmit={handleSignup} className="h-auto">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full  h-[60px] bg-white placeholder:text-black rounded-lg p-5 m-3 text-base"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full h-[60px] placeholder:text-black bg-white rounded-lg p-5 m-3"
              />
              <div className="w-full">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full h-[60px] placeholder:text-black bg-white rounded-lg p-5 m-3"
                />
              </div>
              <button className="w-full h-14 rounded-[36px] text-white text-xl mt-5 m-3 bg-[#191C45] mb-10 flex justify-center items-center">
                Next
              </button>
              <div className="flex justify-center">
                <div className="h-[1px] w-4/5 bg-[#CCCCCC]"></div>
              </div>
              <div className="flex justify-center items-center flex-col">
                {/* <button className="text-xl border border-[#B9B9B9] bg-white rounded-lg px-4 py-3 mt-8 content-center">
                  Continue with Google
                  <svg
                    className="inline ml-2 mb-1"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1568_667)">
                      <path
                        d="M8.86061 1.28943C6.46264 2.12131 4.39463 3.70024 2.96035 5.79431C1.52606 7.88838 0.801099 10.3872 0.891944 12.9237C0.98279 15.4603 1.88466 17.9008 3.46507 19.8869C5.04549 21.873 7.22115 23.3 9.67249 23.9582C11.6598 24.471 13.742 24.4935 15.74 24.0238C17.55 23.6173 19.2233 22.7476 20.5962 21.5001C22.0251 20.162 23.0623 18.4597 23.5962 16.5763C24.1764 14.5282 24.2797 12.3743 23.8981 10.2801H12.7381V14.9094H19.2012C19.0721 15.6478 18.7953 16.3525 18.3874 16.9814C17.9795 17.6102 17.449 18.1504 16.8275 18.5694C16.0384 19.0917 15.1487 19.443 14.2156 19.6007C13.2799 19.7747 12.3201 19.7747 11.3844 19.6007C10.4359 19.4048 9.53869 19.0134 8.74999 18.4513C7.48277 17.5543 6.53126 16.2799 6.03124 14.8101C5.52291 13.3126 5.52291 11.6893 6.03124 10.1919C6.38716 9.14234 6.97555 8.18669 7.75249 7.39631C8.6416 6.47521 9.76724 5.8168 11.0059 5.49333C12.2446 5.16985 13.5484 5.1938 14.7744 5.56256C15.7321 5.85641 16.6079 6.37008 17.3319 7.06256C18.0606 6.33756 18.7881 5.61068 19.5144 4.88193C19.8894 4.49006 20.2981 4.11693 20.6675 3.71568C19.5622 2.68728 18.265 1.887 16.85 1.36068C14.2732 0.425038 11.4537 0.399894 8.86061 1.28943Z"
                        fill="black"
                      />
                      <path
                        d="M8.86064 1.28937C11.4535 0.399224 14.273 0.423707 16.85 1.35874C18.2653 1.88864 19.5619 2.69277 20.6656 3.72499C20.2906 4.12624 19.895 4.50124 19.5125 4.89124C18.785 5.61749 18.0581 6.34124 17.3319 7.06249C16.6079 6.37001 15.7321 5.85635 14.7744 5.56249C13.5488 5.19244 12.2451 5.16711 11.0061 5.48926C9.76706 5.81141 8.64073 6.46861 7.75064 7.38874C6.9737 8.17912 6.38532 9.13477 6.02939 10.1844L2.14252 7.17499C3.53378 4.41604 5.94267 2.30566 8.86064 1.28937Z"
                        fill="#E33629"
                      />
                      <path
                        d="M1.11128 10.1561C1.32004 9.12063 1.66689 8.11792 2.14253 7.1748L6.0294 10.1917C5.52107 11.6891 5.52107 13.3124 6.0294 14.8098C4.7344 15.8098 3.43878 16.8148 2.14253 17.8248C0.952186 15.4554 0.589153 12.7557 1.11128 10.1561Z"
                        fill="#F8BD00"
                      />
                      <path
                        d="M12.7381 10.2783H23.8981C24.2797 12.3726 24.1764 14.5264 23.5963 16.5746C23.0623 18.458 22.0252 20.1602 20.5963 21.4983C19.3419 20.5196 18.0819 19.5483 16.8275 18.5696C17.4494 18.1501 17.9802 17.6094 18.3881 16.9798C18.796 16.3503 19.0726 15.6448 19.2013 14.9058H12.7381C12.7363 13.3646 12.7381 11.8214 12.7381 10.2783Z"
                        fill="#587DBD"
                      />
                      <path
                        d="M2.14062 17.8251C3.43687 16.8251 4.7325 15.8201 6.0275 14.8101C6.52851 16.2804 7.48138 17.5549 8.75 18.4513C9.54116 19.0107 10.4403 19.399 11.39 19.5913C12.3257 19.7653 13.2855 19.7653 14.2213 19.5913C15.1543 19.4336 16.044 19.0823 16.8331 18.5601C18.0875 19.5388 19.3475 20.5101 20.6019 21.4888C19.2292 22.737 17.5558 23.6073 15.7456 24.0144C13.7476 24.4841 11.6655 24.4616 9.67813 23.9488C8.10632 23.5291 6.63814 22.7893 5.36563 21.7757C4.01886 20.7062 2.91882 19.3587 2.14062 17.8251Z"
                        fill="#319F43"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1568_667">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button> */}
                {/* <button className="text-xl border border-[#B9B9B9] bg-white rounded-lg px-3 py-3 mt-8 md:w-auto">
                  Continue with LinkedIn
                  <svg
                    className="inline ml-2 mb-1"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.75 1.05917H2.25C1.80756 1.05467 1.3814 1.22586 1.06504 1.5352C0.74867 1.84453 0.56794 2.26674 0.5625 2.70917V22.2879C0.568923 22.7297 0.750087 23.1509 1.06634 23.4595C1.3826 23.768 1.8082 23.9387 2.25 23.9342H21.75C22.1925 23.9377 22.6183 23.7659 22.9345 23.4564C23.2507 23.1468 23.4316 22.7247 23.4375 22.2823V2.70354C23.4296 2.26241 23.2479 1.84222 22.9319 1.5343C22.6159 1.22639 22.1912 1.05564 21.75 1.05917Z"
                      fill="#0076B2"
                    />
                    <path
                      d="M3.94969 9.63354H7.34531V20.5592H3.94969V9.63354ZM5.64844 4.19604C6.0379 4.19605 6.41861 4.31156 6.74241 4.52797C7.06621 4.74438 7.31855 5.05197 7.4675 5.41182C7.61646 5.77167 7.65534 6.16762 7.57922 6.54957C7.5031 6.93152 7.31541 7.28231 7.03989 7.55757C6.76437 7.83283 6.4134 8.02019 6.03137 8.09594C5.64935 8.1717 5.25344 8.13244 4.89373 7.98314C4.53402 7.83385 4.22667 7.58121 4.01057 7.25721C3.79447 6.9332 3.67932 6.55238 3.67969 6.16292C3.68019 5.6411 3.88783 5.14082 4.25698 4.77202C4.62614 4.40321 5.12662 4.19604 5.64844 4.19604ZM9.47531 9.63354H12.7303V11.1335H12.7753C13.2291 10.2748 14.3353 9.36917 15.9872 9.36917C19.4259 9.36167 20.0634 11.6248 20.0634 14.5592V20.5592H16.6678V15.2435C16.6678 13.9779 16.6453 12.3485 14.9034 12.3485C13.1616 12.3485 12.8653 13.7285 12.8653 15.161V20.5592H9.47531V9.63354Z"
                      fill="white"
                    />
                  </svg>
                </button> */}
              </div>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="h-auto">
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full h-[60px] bg-white placeholder:text-black rounded-lg p-5 m-3 text-base"
                placeholder="Enter your email"
                required
              />
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter your 6 digit PIN"
                className="w-full h-[60px] placeholder:text-black bg-white rounded-lg p-5 m-3 mb-10"
                required
              />
              <p className="ml-8 mb-7 text-[#3C59B3] text-base cursor-pointer">
                <Link href={"/student/auth/recoveryMail"}>
                  Forgot your PIN?
                </Link>
              </p>
              <button
                type="submit"
                className="w-full h-14 rounded-[36px] text-white text-xl mt-5 m-3 bg-[#191C45] mb-10 flex justify-center items-center"
              >
                Next
              </button>
              <div className="flex justify-center">
                <div className="h-[1px] w-4/5 bg-[#CCCCCC]"></div>
              </div>
              <div className="flex justify-center items-center flex-col">
                {/* <button
                  onClick={handleGoogle}
                  className="text-xl border border-[#B9B9B9] bg-white w-fit rounded-lg px-4 py-3 mt-10 flex justify-center items-center"
                >
                  Continue with Google
                  <svg
                    className="inline ml-2 mb-1"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1568_667)">
                      <path
                        d="M8.86061 1.28943C6.46264 2.12131 4.39463 3.70024 2.96035 5.79431C1.52606 7.88838 0.801099 10.3872 0.891944 12.9237C0.98279 15.4603 1.88466 17.9008 3.46507 19.8869C5.04549 21.873 7.22115 23.3 9.67249 23.9582C11.6598 24.471 13.742 24.4935 15.74 24.0238C17.55 23.6173 19.2233 22.7476 20.5962 21.5001C22.0251 20.162 23.0623 18.4597 23.5962 16.5763C24.1764 14.5282 24.2797 12.3743 23.8981 10.2801H12.7381V14.9094H19.2012C19.0721 15.6478 18.7953 16.3525 18.3874 16.9814C17.9795 17.6102 17.449 18.1504 16.8275 18.5694C16.0384 19.0917 15.1487 19.443 14.2156 19.6007C13.2799 19.7747 12.3201 19.7747 11.3844 19.6007C10.4359 19.4048 9.53869 19.0134 8.74999 18.4513C7.48277 17.5543 6.53126 16.2799 6.03124 14.8101C5.52291 13.3126 5.52291 11.6893 6.03124 10.1919C6.38716 9.14234 6.97555 8.18669 7.75249 7.39631C8.6416 6.47521 9.76724 5.8168 11.0059 5.49333C12.2446 5.16985 13.5484 5.1938 14.7744 5.56256C15.7321 5.85641 16.6079 6.37008 17.3319 7.06256C18.0606 6.33756 18.7881 5.61068 19.5144 4.88193C19.8894 4.49006 20.2981 4.11693 20.6675 3.71568C19.5622 2.68728 18.265 1.887 16.85 1.36068C14.2732 0.425038 11.4537 0.399894 8.86061 1.28943Z"
                        fill="black"
                      />
                      <path
                        d="M8.86064 1.28937C11.4535 0.399224 14.273 0.423707 16.85 1.35874C18.2653 1.88864 19.5619 2.69277 20.6656 3.72499C20.2906 4.12624 19.895 4.50124 19.5125 4.89124C18.785 5.61749 18.0581 6.34124 17.3319 7.06249C16.6079 6.37001 15.7321 5.85635 14.7744 5.56249C13.5488 5.19244 12.2451 5.16711 11.0061 5.48926C9.76706 5.81141 8.64073 6.46861 7.75064 7.38874C6.9737 8.17912 6.38532 9.13477 6.02939 10.1844L2.14252 7.17499C3.53378 4.41604 5.94267 2.30566 8.86064 1.28937Z"
                        fill="#E33629"
                      />
                      <path
                        d="M1.11128 10.1561C1.32004 9.12063 1.66689 8.11792 2.14253 7.1748L6.0294 10.1917C5.52107 11.6891 5.52107 13.3124 6.0294 14.8098C4.7344 15.8098 3.43878 16.8148 2.14253 17.8248C0.952186 15.4554 0.589153 12.7557 1.11128 10.1561Z"
                        fill="#F8BD00"
                      />
                      <path
                        d="M12.7381 10.2783H23.8981C24.2797 12.3726 24.1764 14.5264 23.5963 16.5746C23.0623 18.458 22.0252 20.1602 20.5963 21.4983C19.3419 20.5196 18.0819 19.5483 16.8275 18.5696C17.4494 18.1501 17.9802 17.6094 18.3881 16.9798C18.796 16.3503 19.0726 15.6448 19.2013 14.9058H12.7381C12.7363 13.3646 12.7381 11.8214 12.7381 10.2783Z"
                        fill="#587DBD"
                      />
                      <path
                        d="M2.14062 17.8251C3.43687 16.8251 4.7325 15.8201 6.0275 14.8101C6.52851 16.2804 7.48138 17.5549 8.75 18.4513C9.54116 19.0107 10.4403 19.399 11.39 19.5913C12.3257 19.7653 13.2855 19.7653 14.2213 19.5913C15.1543 19.4336 16.044 19.0823 16.8331 18.5601C18.0875 19.5388 19.3475 20.5101 20.6019 21.4888C19.2292 22.737 17.5558 23.6073 15.7456 24.0144C13.7476 24.4841 11.6655 24.4616 9.67813 23.9488C8.10632 23.5291 6.63814 22.7893 5.36563 21.7757C4.01886 20.7062 2.91882 19.3587 2.14062 17.8251Z"
                        fill="#319F43"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1568_667">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button> */}
                {/* <button className="text-xl border border-[#B9B9B9] bg-white rounded-lg px-3 py-3 mt-10 md:w-auto">
                  Continue with LinkedIn
                  <svg
                    className="inline ml-2 mb-1"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.75 1.05917H2.25C1.80756 1.05467 1.3814 1.22586 1.06504 1.5352C0.74867 1.84453 0.56794 2.26674 0.5625 2.70917V22.2879C0.568923 22.7297 0.750087 23.1509 1.06634 23.4595C1.3826 23.768 1.8082 23.9387 2.25 23.9342H21.75C22.1925 23.9377 22.6183 23.7659 22.9345 23.4564C23.2507 23.1468 23.4316 22.7247 23.4375 22.2823V2.70354C23.4296 2.26241 23.2479 1.84222 22.9319 1.5343C22.6159 1.22639 22.1912 1.05564 21.75 1.05917Z"
                      fill="#0076B2"
                    />
                    <path
                      d="M3.94969 9.63354H7.34531V20.5592H3.94969V9.63354ZM5.64844 4.19604C6.0379 4.19605 6.41861 4.31156 6.74241 4.52797C7.06621 4.74438 7.31855 5.05197 7.4675 5.41182C7.61646 5.77167 7.65534 6.16762 7.57922 6.54957C7.5031 6.93152 7.31541 7.28231 7.03989 7.55757C6.76437 7.83283 6.4134 8.02019 6.03137 8.09594C5.64935 8.1717 5.25344 8.13244 4.89373 7.98314C4.53402 7.83385 4.22667 7.58121 4.01057 7.25721C3.79447 6.9332 3.67932 6.55238 3.67969 6.16292C3.68019 5.6411 3.88783 5.14082 4.25698 4.77202C4.62614 4.40321 5.12662 4.19604 5.64844 4.19604ZM9.47531 9.63354H12.7303V11.1335H12.7753C13.2291 10.2748 14.3353 9.36917 15.9872 9.36917C19.4259 9.36167 20.0634 11.6248 20.0634 14.5592V20.5592H16.6678V15.2435C16.6678 13.9779 16.6453 12.3485 14.9034 12.3485C13.1616 12.3485 12.8653 13.7285 12.8653 15.161V20.5592H9.47531V9.63354Z"
                      fill="white"
                    />
                  </svg>
                </button> */}
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;

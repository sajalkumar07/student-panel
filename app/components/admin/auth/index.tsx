"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CircleSpinner } from "react-spinners-kit";
import PinScreen from "./PinScreen/PinScreen";

interface AuthService {
  getAccessToken(userIdentifier: string, passcode: string): Promise<any>;
  signup(name: string, email: string, phone: string, passcode: string): any;
}

interface TAuthProps {
  showPinScreen: boolean;
  setShowPinScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthServiceLoginResponse {
  accessToken: string;
  error: string | unknown;
}
interface AuthServiceSignupResponse {
  error: string | unknown;
  message: string;
}

const authService: AuthService = {
  getAccessToken: async (userIdentifier, passcode) => {
    const responseObject: AuthServiceLoginResponse = {
      accessToken: "",
      error: "",
    };
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
      const details = await response.json();
      if (response.status !== 200) {
        throw new Error(`Error getting access token: ${details.data}`);
      }
      responseObject.accessToken = details.data.accessToken;
      return responseObject;
    } catch (error) {
      responseObject.error = error;
      return responseObject;
    }
  },

  // TODO: Method to sign up a new user
  signup: async (name: any, email: any, phone: any, passcode: any) => {
    const responseObject: AuthServiceSignupResponse = {
      error: "",
      message: "",
    };
    try {
      const response = await fetch("https://api.liftu.tech/api/v1/user/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "insomnia/2023.5.8",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          passcode,
        }),
      });
      const details = await response.json();
      console.log(details);
      if (response.status !== 200) {
        throw new Error(`Error signing up: ${details.message}`);
      }

      responseObject.message = details.message;
      return responseObject;
    } catch (error) {
      console.log(error);
      responseObject.error = error;
      return responseObject;
    }
  },
};

const Auth = ({ showPinScreen, setShowPinScreen }: TAuthProps) => {
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  const loginView = () => {
    setError("");
    setSuccess("");
    setShowSignup(false);
  };

  const signupView = () => {
    setError("");
    setSuccess("");
    setShowSignup(true);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const response = await authService.getAccessToken(
      loginEmail,
      loginPassword
    );
    if (response.accessToken) {
      setLoading(false);
      router.push("/admin");
      localStorage.setItem("accessToken", response.accessToken);
      setSuccess("Login successful");
    } else {
      setLoading(false);
      setError(response.error?.toString());
    }
  };

  const handleSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pin: string
  ) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const userData = await authService.signup(name, signupEmail, phone, pin);
    if (userData.message) {
      setLoading(false);
      setShowSignup(false);
      setShowPinScreen(false);
      setSuccess(userData.message);
    } else {
      setLoading(false);
      setShowPinScreen(false);
      setError(userData.error?.toString());
    }
  };

  return (
    <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
      {!showPinScreen && (
        <div className="w-full max-w-md">
          <div className="flex flex-row m-3">
            <div
              className={` ${
                showSignup
                  ? "text-[#424242] text-[16px] md:text-[24px] mt-2 opacity-50"
                  : "text-[#191C45] text-[20px] md:text-[32px] font-semibold"
              } pl-4 cursor-pointer`}
              onClick={loginView}
            >
              Login
            </div>
            <div
              className={` ${
                showSignup
                  ? "text-[#191C45] text-[20px] md:text-[32px] font-semibold"
                  : "text-[#424242] text-[16px] md:text-[24px] mt-2 opacity-50"
              } ml-4 pl-4 border-l border-[#CCCCCC] mb-4 cursor-pointer`}
              onClick={signupView}
            >
              Sign Up
            </div>
          </div>
          {showSignup ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowPinScreen(true);
              }}
              className=""
            >
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[60px] bg-white placeholder:text-black rounded-lg p-5 m-3 text-base"
                placeholder="Enter your name"
              />
              <input
                type="email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-[60px] placeholder:text-black bg-white rounded-lg p-5 m-3"
              />
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full h-[60px] placeholder:text-black bg-white rounded-lg p-5 m-3"
              />
              {error && (
                <p className="ml-4 text-red-500 text-sm sm:text-base">
                  {error}
                </p>
              )}
              {success && (
                <p className="ml-4 text-green-500 text-sm sm:text-base">
                  {success}
                </p>
              )}
              <button
                type="submit"
                className="w-full h-14 rounded-[36px] text-white text-xl mt-10 m-3 bg-[#191C45] mb-10 hover:bg-[#3C59B3]"
              >
                Next
              </button>
              <div className="flex justify-center">
                <div className="h-[1px] w-4/5 bg-[#CCCCCC]"></div>
              </div>
              <div className="flex justify-center">
                <button className="text-xl border border-[#B9B9B9] bg-white rounded-lg px-4 py-3 mt-10">
                  Continue with Google
                  <svg
                    className="inline ml-2"
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
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="h-auto">
              <input
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full h-[60px] bg-white placeholder:text-black rounded-lg p-5 m-3 text-base"
                placeholder="Enter your email/phone number"
              />
              <input
                type="password"
                value={loginPassword}
                maxLength={6}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter your 6 digit PIN"
                className="w-full h-[60px] placeholder:text-black bg-white rounded-lg p-5 m-3 mb-10"
              />
              {error && (
                <p className="ml-4 text-red-500 text-sm sm:text-base">
                  {error}
                </p>
              )}
              {success && (
                <p className="ml-4 text-green-500 text-sm sm:text-base">
                  {success}
                </p>
              )}
              <p
                className="ml-4 mb-7 text-[#3C59B3] text-base cursor-pointer"
                onClick={() => {
                  router.push("/admin/auth/forgotPassword");
                }}
              >
                Forgot your PIN?
              </p>
              <button
                type="submit"
                className="w-full h-14 rounded-[36px] text-white text-xl bg-[#191C45] flex justify-center items-center hover:bg-[#3C59B3]"
              >
                {loading ? <CircleSpinner /> : "Next"}
              </button>
              <div className="flex justify-center">
                <div className="h-[1px] w-4/5 bg-[#CCCCCC]"></div>
              </div>
              <div className="flex justify-center">
                <button className="text-xl border border-[#B9B9B9] bg-white rounded-lg px-4 py-3 mt-10">
                  Continue with Google
                  <svg
                    className="inline ml-2"
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
                </button>
              </div>
            </form>
          )}
        </div>
      )}
      {showSignup && showPinScreen && (
        <PinScreen handleSignup={handleSignup} showLoading={loading} />
      )}
    </div>
  );
};

export default Auth;

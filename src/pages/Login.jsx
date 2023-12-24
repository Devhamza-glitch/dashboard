import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";

function Login() {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("password");

  const passwordRef = useRef(null);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      navigate("/dashboard");
    },
  });

  function toggleInputType(e) {
    e.preventDefault();
    passwordRef.current.focus();
    if (inputType === "password") setInputType("text");
    else setInputType("password");
  }

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 text-gray-900">
      <div className="m-0 max-w-screen-2xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg lg:flex">
        <div className="p-6 sm:p-12 lg:w-1/2 xl:w-5/12">
          <div className="mx-auto max-w-max">
            <Link className="inline-block max-w-60" to="/dashboard">
              <img src="/assets/img/logo.png" />
            </Link>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-12 flex flex-col items-center"
          >
            <h1 className="text-2xl font-extrabold xl:text-3xl">Login</h1>
            <div className="mt-8 w-full flex-1">
              <div className="my-12 border-b text-center">
                <div className="inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600">
                  Or Login with e-mail
                </div>
              </div>

              <div>
                <div className="mb-9">
                  <div>
                    <span className="">
                      <label htmlFor="email" className="text-primary pl-2">
                        Email
                      </label>
                      <InputText
                        id="email"
                        name="email"
                        className="w-full rounded-md border border-gray-200 bg-gray-100 py-3 pl-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        value={formik.values.email}
                        onChange={(e) =>
                          formik.setFieldValue("email", e.target.value)
                        }
                      />
                    </span>
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="ml-3 mt-2 text-left text-red-400">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div>
                    <span>
                      <label htmlFor="password" className="text-primary pl-2">
                        Password
                      </label>
                      <InputText
                        id="password"
                        name="password"
                        type={inputType}
                        className="w-full rounded-md border border-gray-200 bg-gray-100 py-3 pl-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        ref={passwordRef}
                        value={formik.values.password}
                        onChange={(e) =>
                          formik.setFieldValue("password", e.target.value)
                        }
                      />
                      <button
                        className="absolute right-3 top-4  flex transform cursor-pointer items-center justify-center"
                        type="button"
                        onClick={toggleInputType}
                      >
                        {inputType === "text" && <i className="pi pi-eye"></i>}
                        {inputType === "password" && (
                          <i className="pi pi-eye-slash"></i>
                        )}
                      </button>
                    </span>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="ml-3 mt-2 text-left text-red-400">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                <Link
                  className="text-primary my-5 block text-center"
                  to="/forget"
                >
                  Forgot Password?
                </Link>
                <div className="mt-5">
                  <button className="bg-primary w-full rounded-md px-10 py-3 text-white">
                    Continue
                  </button>
                </div>
                <p className="mt-6 text-center text-xs text-gray-600">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="text-primary ml-1 border-b border-dotted border-gray-500 font-medium"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden flex-1 bg-indigo-100 text-center lg:flex">
          <div className="m-12 w-full bg-[url('/assets/img/signup-bg.svg')] bg-contain bg-center bg-no-repeat xl:m-16"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;

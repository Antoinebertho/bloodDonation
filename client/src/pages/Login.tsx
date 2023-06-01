import { loginUser }       from "../api/user"
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [type, setType] = useState("donneur");
  /*const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   loginUser(formData)
   };*/
  const onFinish = async (values) => {
    try {
      return await loginUser({ ...values, userType: type })
    } catch (err) {
      message.error(err.message)
    }
  }

  return (
      <section className="bg-white">
        <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="/">
              <span className="sr-only">Home</span>
              <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 100 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M50,0
              C50,0 100,60 100,100 
              C100,140 50,150 50,150 
              C50,150 0,140 0,100 
              C0,60 50,0 50,0 Z"
                    fill="#FF0000"
                />
              </svg>
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Blood Donation
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">Connexion</p>

            <form onSubmit={ onFinish } className="mt-8 grid grid-cols-6 gap-6">

                <div>
                  <input
                      type="radio"
                      name="typeOption"
                      value="donneur"
                      id="donneur"
                      className="peer hidden [&:checked_+_label_svg]:block"
                  />

                  <label
                      htmlFor="donneur"
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >
                    <svg
                        className="hidden h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">Doner</p>
                  </label>
                </div>

                <div>
                  <input
                      type="radio"
                      name="typeOption"
                      value="hopital"
                      id="hopital"
                      className="peer hidden [&:checked_+_label_svg]:block"
                  />

                  <label
                      htmlFor="hopital"
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >
                    <svg
                        className="hidden h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">Hopital</p>
                  </label>
                </div>

                <div>
                  <input
                      type="radio"
                      name="typeOption"
                      value="organisation"
                      id="organisation"
                      className="peer hidden [&:checked_+_label_svg]:block"
                  />

                  <label
                      htmlFor="organisation"
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >

                    <svg
                        className="hidden h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">Organisation</p>
                  </label>
                </div>


              <div className="col-span-6">
                <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={ formData.email }
                />
              </div>

              <div className="col-span-6">
                <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                >
                  Mot de passe
                </label>

                <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4 text-center ml-18">
                <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Connexion
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Pas de compte ?{ " " }
                  <a href="#" className="text-gray-700 underline">
                    Inscription
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </section>
);
};

export default Login;

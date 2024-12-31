import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { GlobalStyle } from "../Styles/globalStyles";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log("Form Values:", values);
        action.resetForm();
      },
    });

  console.log(errors);
  return (
    <>
      <GlobalStyle />
      <div className="fixed inset-0 bg-gray-100 flex justify-center items-center">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            Welcome!
          </h1>
          <p className="text-center text-xl text-gray-600 mb-10">
            Login to access Sigma School
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="block text-xl font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full mt-3 p-4 border rounded focus:outline-none focus:ring focus:ring-gray-300 text-lg"
              />
              {errors.email && touched.email && (
                <p className="text-lg text-red-600 font-bold mt-2">{errors.email}</p>
              )}
            </div>

            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-xl font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full mt-3 p-4 border rounded focus:outline-none focus:ring focus:ring-gray-300 text-lg"
              />
              {errors.password && touched.password && (
                <p className="text-lg text-red-600 font-bold mt-2">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gray-800 text-white text-xl font-bold rounded mt-8 hover:bg-gray-900 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-center text-lg mt-8 text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

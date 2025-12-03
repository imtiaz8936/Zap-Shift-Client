import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";

const Signin = () => {
  const { signIn, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    await signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        toast.success("Signin Successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "This field is required",
                maxLength: {
                  value: 30,
                  message: "Email cannot exceed 30 characters",
                },
                pattern: {
                  value: /@/,
                  message: "Email must contain an @ symbol",
                },
              })}
              className="input"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">
                {errors.email.message}
              </p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                  message:
                    "Password must contain one uppercase, one lowercase letter and one special character",
                },
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-2">
                {errors.password.message}
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signin;

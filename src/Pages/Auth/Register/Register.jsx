import React from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../Utils";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    const { name, image, email, password } = data;
    console.log({ name, image, email, password });
    const imageFile = image[0];
    const photo = await imageUpload(imageFile);
    console.log(photo);

    await createUser(email, password)
      .then((userCredential) => {
        updateUserProfile(name, photo)
          .then(() => {
            const user = userCredential.user;
            setUser(user);
            toast.success("SignUp Successful");
            navigate("/signin");
          })
          .catch((error) => {
            toast.error(error);
          });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="name"
              {...register("name", {
                required: true,
                maxLength: {
                  value: 20,
                  message: "Name cannot exceed 20 characters",
                },
              })}
              className="input"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
            )}

            <label className="label">Profile Image</label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="file-input"
            />
            {errors.image && (
              <p className="text-red-500 text-xs mt-2">
                {errors.image.message}
              </p>
            )}

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

export default Register;

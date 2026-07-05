import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    surName: "",
    middleName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handlChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(form);
    alert("Registration Successful");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center px-4 sm:px-8 lg:px-0 mt-10">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Create Account
        </h2>

        <div className="shadow-lg bg-gray-200 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="surName"
              placeholder="Surname"
              onChange={handlChange}
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              onChange={handlChange}
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handlChange}
              className="w-full border p-3 rounded"
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter Your Phone Number"
              onChange={handlChange}
              className="w-full border p-3 rounded"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlChange}
              className="w-full border p-3 rounded"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm Password"
              onChange={handlChange}
              className="w-full border p-3 rounded"
            />

            <button
              type="submit"
              className="w-full bg-green-500 py-3 rounded-lg hover:bg-green-800 text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;

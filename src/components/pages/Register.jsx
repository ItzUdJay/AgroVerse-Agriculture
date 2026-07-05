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
    console.log(form);
    alert("Registration Successful");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="justify-center items-center px-80  rounded-lg mt-10max-w-md mx-auto">
      <h2 className="text-3xl font-semibold">Create Account</h2>

      <div className="shadow-lg bg-gray-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="full name"
            placeholder="Surname"
            onChange={handlChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="full name"
            placeholder="Middle Name"
            onChange={handlChange}
            className="w-full border p-3 rounded "
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handlChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="phone number"
            placeholder="Enter Your Phone number"
            onChange={handlChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={handlChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="confirm password"
            placeholder="Confirm Password"
            onChange={handlChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className=" bg-green-500 py-4 px-4 rounded-lg border hover:bg-green-800 text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;

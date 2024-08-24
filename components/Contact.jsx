"use client";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";

import { sendContactforms } from "@/lib/api";

const Contact = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    text: "",
  });

  const [ error, setError ] = useState("");
  const [ respone, setResponse ] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(data);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if(data.firstname === "" | data.lastname === "" | data.email === "" | data.phonenumber === "" | data.text === ""){
      setResponse("");
      setError("Enter all required fields.")
    } else {
      setError("");
      setResponse("Awaiting");
      const response = await sendContactforms(data);
      console.log(response)
    }
    
    
  };

  return (
    <motion.div
      className="container h-[70vh] flex items-center justify-start py-10 my-8"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <form className="bg-black p-8 rounded-md">
        <h1 className="text-5xl text-white font-bold pb-4">Contact us</h1>
        <p className="text-white font-bold pb-4">
          Feel free to leave us a message
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="firstname"
            type="firstname"
            placeholder="Firstname"
            className="p-1 shadow-md text-black rounded-md"
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            name="lastname"
            type="lastname"
            placeholder="Lastname"
            className="p-1 shadow-md text-black rounded-md"
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-1 shadow-md text-black rounded-md"
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            name="phonenumber"
            type="phonenumber"
            placeholder="Phone number"
            className="p-1 shadow-md text-black rounded-md"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <Textarea
          name="text"
          placeholder="Leave a message"
          className="mt-6 text-black"
          onChange={(e) => onChangeHandler(e)}
        />
        <p className="text-red-700 p-0">{error}</p>
        <p className="text-green-700 p-0">{respone}</p>
        <button
          className="bg-white p-1 rounded-md text-black mt-6"
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;

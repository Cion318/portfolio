import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [messageCallout, setMessageCallout] = useState(
    "📧 Message Sent! I'll get back to you soon.",
  );
  const [sendInProgress, setSendInProgress] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSendInProgress(true);
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          setMessageCallout("📧 Message Failed to Send! 😵");
        }

        setSendInProgress(false);
        setMessageSent(true);
      })
      .catch((err) => {
        console.log(err);
        setMessageCallout("📧 Message Failed to Send! 😵");
        setSendInProgress(false);
        setMessageSent(true);
      });
  };

  return (
    <>
      <form className=" text-white" onSubmit={handleSubmit}>
        <div className="mb-12 mt-12 flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full pb-8 lg:me-4 lg:pb-0">
            <label className="" htmlFor="inputName">
              Name
            </label>
            <input
              className="mt-2 w-full rounded border border-solid border-bg-dark-50 bg-bg-dark-100 px-2 py-1 text-base text-text-dark-700 shadow transition duration-300 ease-in-out hover:border-skin-color focus:border-skin-color focus:outline-none"
              id="inputName"
              type="text"
              required
              onChange={handleNameChange}
            />
          </div>
          <div className="w-full pb-8 lg:mx-4 lg:pb-0">
            <label className="" htmlFor="inputEmail">
              E-Mail
            </label>
            <input
              className="mt-2 w-full rounded border border-solid border-bg-dark-50 bg-bg-dark-100 px-2 py-1 text-base text-text-dark-700 shadow transition duration-300 ease-in-out hover:border-skin-color focus:border-skin-color focus:outline-none"
              id="inputEmail"
              type="email"
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className="w-full pb-8 lg:ms-4 lg:pb-0">
            <label className="" htmlFor="inputSubject">
              Subject
            </label>
            <input
              className="mt-2 w-full rounded border border-solid border-bg-dark-50 bg-bg-dark-100 px-2 py-1 text-base text-text-dark-700 shadow transition duration-300 ease-in-out hover:border-skin-color focus:border-skin-color focus:outline-none"
              id="inputSubject"
              type="text"
              required
              onChange={handleSubjectChange}
            />
          </div>
        </div>

        <div className="mb-16 mt-12 flex flex-col items-center justify-center">
          <div className="mb-4 w-full">
            <label className="" htmlFor="inputMessage">
              Message
            </label>
            <textarea
              className="mt-2 h-40 w-full rounded border border-solid border-bg-dark-50 bg-bg-dark-100 px-2 py-1 text-base text-text-dark-700 shadow transition duration-300 ease-in-out hover:border-skin-color focus:border-skin-color focus:outline-none"
              id="inputMessage"
              required
              onChange={handleMessageChange}
            />
          </div>
          <div className="w-full text-center">
            <button
              className="w-full rounded-[6px] border border-skin-color bg-skin-color py-2 text-center font-poppins text-lg text-white duration-300 hover:bg-bg-dark-100 lg:w-1/3"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      <br />
      {messageSent && <p>{messageCallout}</p>}
    </>
  );
};

export default ContactForm;

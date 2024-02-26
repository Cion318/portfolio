import React from "react";

const ContactForm = () => {
  return (
    <form className=" text-white">
      <div className="mb-12 mt-12 flex flex-col items-center justify-between lg:flex-row">
        <div className="w-full pb-8 lg:me-4 lg:pb-0">
          <label className="" htmlFor="inputName">
            Name
          </label>
          <input
            className="mt-2 w-full rounded border border-solid border-bg-dark-50 bg-bg-dark-100 px-2 py-1 text-base text-text-dark-700 shadow transition duration-300 ease-in-out hover:border-skin-color focus:border-skin-color focus:outline-none"
            id="inputName"
            type="text"
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
  );
};

export default ContactForm;

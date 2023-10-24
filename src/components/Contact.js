import bg from "../../about.png"
import { useState } from "react";
const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
      setSubmitted(true);
  };
  if (submitted) {
    return (
      <>
        <div className="text-orange-600 text-center py-10 italic bg-slate-50 font-bold  text-5xl">Thank you!</div>
        <div className="text-orange-600 text-center py-10 italic bg-slate-50 font-bold  text-5xl">We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <div className="h-screen top-0 bg-gradient-to-br" style={{backgroundImage:`url(${bg})`}}
      
    >
    
       <div>
       <h1  className="text-orange-600 text-center py-10 italic bg-slate-50 font-bold  text-5xl" >
    We would love to hear from you!</h1>
          
       </div>
       <div className=" mt-5 flex flex-col 
      items-center justify-center" >
      <form
        className="bg-gray-200 w-5/12 shadow-md rounded px-8 pt-6 pb-8 mb-4"
       
        onSubmit={handleSubmit}
        
        
      >
        <div className="mb-3 pt-0 bg-gray-200">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-yellow-100 text-orange-800 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}


export default Contact;
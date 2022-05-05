import React, { useEffect, useState } from "react";



function Form() {
    const [email, setEmail] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const submit = async (e) => {
      e.preventDefault();
      let response = await fetch("/api/waitlist", {
          method: "POST",
          body: JSON.stringify({email: email})
      })
      if (response.ok) {
          setHasSubmitted(true);
      } else {
          setError(await response.text())
      }
  
  }

    // If the user successfully submitted their email,
    //   display a thank you message
    if (hasSubmitted) {
        return <div className={" -mt-36 "}>
            <span className={" -mt-12 dark:text-white"}>
                Thanks for signing up! We will be in touch soon.
            </span>
        </div>
    }

    // Otherwise, display the form
    return <form className={"-mt-40"} onSubmit={submit}>
        
        <input type="email" required placeholder="Email"
               className={[" bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 rounded border bg-opacity-50 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-white dark:text-white", ""].join(" ")}
               value={email} onChange={e => setEmail(e.target.value)}/>
        
        <button type="submit" className={["bg-gradient-to-r black hover:from-indigo-500 via-purple-500 hover:to-pink-500 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none rounded text-lg mx-1", ""].join(" ")}>
            Join Waitlist
        </button>
        
        {error ? <div className={""}>{error}</div> : null}
    </form>
}

export default Form;

function App() {
  return (
    /* contenedor verde claro */
    <div className="p-4 pt-7 bg-primary-green-200 min-w-screen min-h-screen  grid place-items-center">
      {/* contenedor blanco */}
      <div className="desktop:p-6.5  bg-neutral-white rounded-xl p-3 text-sm w-full max-w-[690px]">
        <h1 className="font-karla-bold text-primary-green-900 text-2xl p-1.5">
          Contact Us
        </h1>
        <form className="font-karla text-primary-green-900 mt-2">
          {/* contenedor de name y last name para tamaño escritorio */}
          <div className="flex flex-col desktop:flex-row desktop:max-w-2xl">
            {/* first name */}
            <div className="w-full">
              <div className="p-1 w-full pt-2 flex flex-col gap-2">
                <label htmlFor="name">
                  First Name <span className="text-primary-green-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="border cursor-pointer border-b-green w-full rounded-md p-2.5 pl-5 hover:border-primary-green-600"
                />
              </div>
              <span className="pl-1 text-primary-red hidden">
                This field es required
              </span>
            </div>

            {/* last name */}
            <div className="w-full">
              <div className="p-1 w-full pt-2 flex flex-col gap-2">
                <label htmlFor="last-name">
                  Last Name <span className="text-primary-green-600">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="border cursor-pointer border-b-green w-full rounded-md p-2.5 pl-5 hover:border-primary-green-600"
                />
              </div>
              <span className="pl-1 text-primary-red hidden">
                This field es required
              </span>
            </div>
          </div>
          {/* fin contenedor de name y last name para tamaño escritorio */}

          {/* email */}
          <div className="w-full">
            <div className="p-1 w-full pt-2 flex flex-col gap-2">
              <label htmlFor="email">
                Email Address<span className="text-primary-green-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email#example.com"
                className="border cursor-pointer border-b-green w-full rounded-md p-2.5 pl-5 placeholder:text-[16px] hover:border-primary-green-600"
              />
            </div>
            <span className="pl-1 text-primary-red hidden">
              please enter a valid email address
            </span>
          </div>
          {/* fin email */}

          {/* input type check one */}
          <fieldset className=" w-full mt-3 p-1">
            <legend className="mb-3.5 text-primary-green-900">
              Query Type <span className="text-primary-green-600">*</span>
            </legend>
            <div className="flex flex-col gap-3">
              <label htmlFor="general-enquiry" className="cursor-pointer">
                <div className="flex border border-b-green w-full rounded-md p-3 gap-3 hover:bg-primary-green-200 hover:border-primary-green-600">
                  <input
                    type="radio"
                    id="general-enquiry"
                    name="contact"
                    value="general-enquiry"
                    className="ml-2 accent-primary-green-600"
                  />
                  <span>General Enquiry</span>
                </div>
              </label>
              <label htmlFor="support-request" className="cursor-pointer">
                <div className="flex border border-b-green w-full rounded-md p-3 gap-3  hover:bg-primary-green-200 hover:border-primary-green-600">
                  <input
                    type="radio"
                    id="support-request"
                    name="contact"
                    value="support-request"
                    className="ml-2 accent-primary-green-600"
                  />
                  <span>Support Request</span>
                </div>
              </label>
            </div>
          </fieldset>
          {/* end input type check one */}

          {/* message */}
          <div className="w-full">
            <div className="p-1 w-full pt-2 flex flex-col gap-2">
              <label htmlFor="message">
                Message<span className="text-primary-green-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                className="border cursor-pointer border-b-green w-full rounded-md p-2.5 pl-5 hover:border-primary-green-600"
              ></textarea>
            </div>
            <span className="pl-1 text-primary-red hidden">
              This field is required
            </span>
          </div>
          {/* end message */}
        </form>
      </div>
    </div>
  );
}

export default App;

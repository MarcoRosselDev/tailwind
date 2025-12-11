import { useState, type FormEvent } from "react";

type BlurType = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  queryType: boolean;
  message: boolean;
  accept: boolean;
};

function App() {
  // bamos a trabajar con Formularios controlados para manejar los errores y spams con mensajes en rojo (por sobre los formularios no controlados)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [accept, setAccept] = useState(false);
  const [complete, setComplete] = useState(false);

  const [blurrr, setBlur] = useState<BlurType>({
    firstName: false,
    lastName: false,
    email: false,
    queryType: false,
    message: false,
    accept: false,
  });

  //const iterable = { firstName, lastName, email, queryType, message, accept };

  function handlerBlur(name: string) {
    setBlur((prev) => {
      return { ...prev, [name]: true };
    });

    // validamos que no falta niun input
    if (firstName && lastName && email && queryType && message && accept) {
      setComplete(true);
      console.log({ firstName, lastName, email, queryType, message, accept });
    } else {
      console.log("pleace complete the form!");
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // si falta algun input salir y activar los mensajes rojos necesarios

    setBlur({
      firstName: true,
      lastName: true,
      email: true,
      queryType: true,
      message: true,
      accept: true,
    });
  }

  return (
    /* contenedor verde claro */
    <div className="pt-7 pb-7 p-4 bg-primary-green-200 min-h-screen  flex items-center justify-center font-karla-regular">
      {/* mensaje success */}
      <div
        className={`bg-primary-green-900 w-auto max-w-[400px] h-auto absolute text-neutral-white top-6 p-5.5 rounded-xl ${
          complete ? "" : "hidden"
        }`}
      >
        <div className="flex gap-2">
          <img src="/images/icon-success-check.svg" alt="check image" />
          <h1 className="font-karla-bold">Message Sent!</h1>
        </div>
        <p className="text-sm mt-2">
          Thanks for completing the form, We'll be in touch soon!
        </p>
      </div>
      {/* end mensaje success */}
      {/* contenedor blanco */}
      <div className="desktop:p-6.5  bg-neutral-white rounded-xl p-3 text-sm w-full max-w-[600px] pb-5">
        <h1 className="font-karla-bold text-primary-green-900 text-2xl p-1.5">
          Contact Us
        </h1>
        <form
          className="font-karla text-primary-green-900 mt-2"
          onSubmit={handleSubmit}
        >
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
                  name="first-name"
                  onBlur={() => handlerBlur("firstName")}
                  className="border cursor-pointer border-b-green w-full rounded-md p-2.5 pl-5 hover:border-primary-green-600"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              {blurrr.firstName &&
                (firstName.length == 0 ? (
                  <span className="pl-1 text-primary-red">
                    This field es required
                  </span>
                ) : null)}
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
                  name="last-name"
                  onBlur={() => handlerBlur("lastName")}
                  onChange={(event) => setLastName(event.target.value)}
                  className="border cursor-pointer border-b-green w-full rounded-md p-2.5 pl-5 hover:border-primary-green-600"
                />
              </div>
              {blurrr.lastName &&
                (lastName.length == 0 ? (
                  <span className="pl-1 text-primary-red">
                    This field es required
                  </span>
                ) : null)}
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
                name="email"
                onBlur={() => handlerBlur("email")}
                onChange={(event) => setEmail(event.target.value)}
                className="border cursor-pointer border-b-green w-full rounded-md p-2.5 pl-5 placeholder:text-[16px] placeholder:text-white desktop:placeholder:text-primary-green-900 hover:border-primary-green-600"
              />
            </div>
            {blurrr.email &&
              (email.length == 0 ? (
                <span className="pl-1 text-primary-red">
                  please enter a valid email address
                </span>
              ) : null)}
          </div>
          {/* fin email */}

          {/* input type check one */}
          <fieldset className=" w-full mt-3 p-1">
            <legend className="mb-3.5 text-primary-green-900">
              Query Type <span className="text-primary-green-600">*</span>
            </legend>
            <div className="flex flex-col gap-3 desktop:flex-row">
              <label
                htmlFor="general-enquiry"
                className="cursor-pointer w-full"
              >
                <div className="flex border border-b-green w-full rounded-md p-3 gap-3 hover:bg-primary-green-200 hover:border-primary-green-600 has-checked:bg-primary-green-200 has-checked:border-primary-green-600 ">
                  <input
                    type="radio"
                    id="general-enquiry"
                    name="query-type"
                    value="general-enquiry"
                    className="ml-2 accent-primary-green-600"
                    onChange={(event) => setQueryType(event.target.value)}
                    onBlur={() => handlerBlur("queryType")}
                  />
                  <span>General Enquiry</span>
                </div>
              </label>
              <label
                htmlFor="support-request"
                className="cursor-pointer w-full"
              >
                <div className="flex border border-b-green w-full rounded-md p-3 gap-3  hover:bg-primary-green-200 hover:border-primary-green-600 has-checked:bg-primary-green-200 has-checked:border-primary-green-600">
                  <input
                    type="radio"
                    id="support-request"
                    name="query-type"
                    value="support-request"
                    className="ml-2 accent-primary-green-600"
                    onChange={(event) => setQueryType(event.target.value)}
                    onBlur={() => handlerBlur("queryType")}
                  />
                  <span>Support Request</span>
                </div>
              </label>
            </div>
            {blurrr.queryType &&
              (queryType.length == 0 ? (
                <p className="mt-3 text-primary-red">
                  Please select a query type
                </p>
              ) : null)}
          </fieldset>
          {/* end input type check one */}

          {/* message */}
          <div className="w-full mt-4">
            <div className="p-1 w-full pt-2 flex flex-col gap-2">
              <label htmlFor="message">
                Message <span className="text-primary-green-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                onChange={(event) => setMessage(event.target.value)}
                onBlur={() => handlerBlur("message")}
                className="border cursor-pointer border-b-green w-full rounded-md p-2.5 pl-5 hover:border-primary-green-600 resize-none h-55 desktop:h-23 font-karla-regular"
              ></textarea>
            </div>
            {blurrr.message &&
              (message.length == 0 ? (
                <span className="pl-1 text-primary-red">
                  This field is required
                </span>
              ) : null)}
          </div>
          {/* end message */}

          {/* check box */}
          <div className="w-full p-1">
            <label htmlFor="consent" className="cursor-pointer">
              <div className="flex w-full mt-7 ">
                <input
                  type="checkbox"
                  id="consent"
                  name="check-consent"
                  className="accent-primary-green-600"
                  onChange={() => setAccept((prev) => !prev)}
                  onBlur={() => handlerBlur("accept")}
                />
                <p className="ml-5">
                  I consent to being contacted by the team{" "}
                  <span className="text-primary-green-600">*</span>
                </p>
              </div>
            </label>
            {blurrr.accept &&
              (accept == false ? (
                <p className="mt-2 text-primary-red">
                  To submit this form, please consent to being contacted
                </p>
              ) : null)}
          </div>
          {/* end check box */}

          {/* submit button */}
          <div className="w-full p-1">
            <button
              type="submit"
              className="bg-primary-green-600 text-neutral-white w-full rounded-[9px] p-4 mt-6 cursor-pointer hover:bg-primary-green-900"
            >
              Submit
            </button>
          </div>
          {/* end submit button */}
        </form>
      </div>
    </div>
  );
}

export default App;

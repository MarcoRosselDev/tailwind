export default function Estados() {
  return (
    <div className="bg-blue-50 p-1.5 max-w-3xl mx-auto ">
      <form className="flex flex-col gap-1.5">
        <label htmlFor="name">name</label>
        <input
          type="text"
          className="peer border border-gray-700 w-full rounded-sm p-0.5 bg-blue-200 disabled:bg-red-400"
          name="name"
          placeholder="name..."
        />
        <p className="text-red-500 hidden peer-invalid:block">
          El nombre es incorrecto
        </p>

        <label htmlFor="email">email</label>
        <input
          type="email"
          className="border peer border-gray-700 w-full rounded-sm p-0.5 bg-blue-200 focus:outline-none focus:ring-1 focus:ring-green-500 invalid:focus:ring-red-600"
          name="email"
          id="email"
          placeholder="example@mail.com"
        />
        <p className="text-red-500 hidden peer-invalid:block">
          El correo es incorrecto
        </p>

        <button
          type="submit"
          className="border border-gray-700 bg-blue-500 hover:bg-blue-900 hover:text-amber-50 rounded-sm cursor-pointer"
        >
          submit
        </button>
      </form>
    </div>
  );
}

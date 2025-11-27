export default function Estados() {
  return (
    <div className="bg-blue-500 p-1.5 max-w-3xl mx-auto ">
      <form className="">
        <label htmlFor="name">name</label>
        <input type="text" name="name" />
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

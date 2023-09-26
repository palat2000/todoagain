function LoginPage() {
  return (
    <section className="flex flex-col gap-3 bg-white rounded-md p-4">
      <div>
        <label className="block mb-1 font-semibold" htmlFor="username">
          Username
        </label>
        <input
          className="bg-gray-100 w-full outline-none rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-400"
          type="text"
          id="username"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className="bg-gray-100 w-full outline-none rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-400"
          type="password"
          id="password"
        />
      </div>
      <button className="bg-blue-500 px-3 py-1.5 rounded-md active:bg-blue-700 text-white">
        Sign in
      </button>
    </section>
  );
}

export default LoginPage;

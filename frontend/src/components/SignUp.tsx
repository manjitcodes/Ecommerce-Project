
function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-5xl font-bold mb-4">
        CraftFund
      </h1>

      <h2 className="text-3xl font-semibold mb-6">
        Create Your Account
      </h2>

      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md"
        >
          Create Account
        </button>

        <p className="text-center mt-4">
          Already have an account? Login
        </p>

      </form>
    </div>
  );
}

export default SignUp;


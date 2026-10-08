
import cart from "../assets/cart.png";

const Login = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-100 p-4 pb-4 mb-22">
        <div className="text-3xl font-bold">Craftfund</div>

        <div className="text-lg font-bold">Explore</div>

        <div className="text-lg font-bold">Creators</div>

        <div className="text-lg font-bold">Categories</div>

        <div className="text-lg font-bold">How it works</div>

        <div className="text-lg font-bold">
          <img src={cart} className="w-6 h-6 inline-block mr-2" />
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Login
        </button>

        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Sign Up
        </button>
      </div>

      <h1 className="text-5xl font-bold mb-4 text-center">
        Welcome to CraftFund
      </h1>

      <p className="text-lg mb-8 text-center">
        Choose how you want to use your account
      </p>

      <div className="min-h-screen flex items-center justify-center">
        <div className="p-4 mt-18 mb-24 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Log IN
          </h2>

          <label className="block text-lg font-medium mb-2">
            Email:
          </label>

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full border-2 border-gray-400 rounded-md p-3 mb-5 text-lg focus:outline-none focus:border-blue-500"
          />

          <label className="block text-lg font-medium mb-2">
            Password:
          </label>

          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full border-2 border-gray-400 rounded-md p-3 mb-5 text-lg focus:outline-none focus:border-blue-500"
          />

          <p className="text-lg font-bold text-center">
            Choose account Type
          </p>

          <div className="flex justify-center space-x-4 mt-4 mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Continue as Supporter
            </button>

            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Continue as Creator
            </button>
          </div>

          <p className="text-lg text-center">
            Supporters join memberships and buy creator products.
            Creators publish and sell products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


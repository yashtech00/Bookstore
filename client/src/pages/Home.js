

export const Home =  () => {
  return (
    <div>
          <div className="flex justify-center items-center h-screen">
              <div>
        <h1 className="flex justify-center">Welvome to book store</h1>
        <div className="flex justify-center">
          <button className="p-4 m-4 bg-black text-white rounded-xl">
            <a href="/register">Register</a>
          </button>
          <button className="p-4 m-4 bg-black text-white rounded-xl">
            <a href="/login">Login</a>
          </button>
        </div>
              </div>
              </div>
    </div>
  );
};

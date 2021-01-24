const Home: React.FC<{}> = () => (
  <div className={"h-screen flex flex-col justify-center items-center"}>
    <span
      className={
        "flex flex-col justify-center items-center mb-12  duration-500 rounded hover:bg-black hover:text-white border-2 border-gray-100  shadow-lg cursor-pointer  w-1/2 p-2"
      }
    >
      <h1 className={"text-2xl font-serif font-light  mb-1"}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </h1>
      <h1 className={"text-2xl font-serif font-light  mb-1"}>
        abcdefghijklmnopqrstuvwxyz
      </h1>
      <h1 className={"text-2xl font-serif font-light "}>0987654321</h1>
    </span>
    <span
      className={
        "flex flex-col justify-center items-center mb-12  duration-500 rounded hover:bg-black hover:text-white border-2 border-gray-100  shadow-lg cursor-pointer  w-1/2 p-2"
      }
    >
      <h1 className={"text-2xl font-sans font-light  mb-1"}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </h1>
      <h1 className={"text-2xl font-sans font-light  mb-1"}>
        abcdefghijklmnopqrstuvwxyz
      </h1>
      <h1 className={"text-2xl font-sans font-light "}>0987654321</h1>
    </span>
    <span
      className={
        "flex flex-col justify-center items-center mb-12  duration-500 rounded hover:bg-black hover:text-white border-2 border-gray-100  shadow-lg cursor-pointer  w-1/2 p-2"
      }
    >
      <h1 className={"text-2xl font-mono font-light  mb-1"}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </h1>
      <h1 className={"text-2xl font-mono font-light  mb-1"}>
        abcdefghijklmnopqrstuvwxyz
      </h1>
      <h1 className={"text-2xl font-mono font-light "}>0987654321</h1>
    </span>
  </div>
);

export default Home;

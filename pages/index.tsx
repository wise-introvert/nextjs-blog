const Home: React.FC<{}> = () => (
  <div className={"h-screen flex flex-col justify-center items-center"}>
    <span
      className={
        "flex flex-col justify-center items-center mb-12  duration-500 rounded   hover:shadow-inner hover:border-0 hover:border-transparent    shadow-md cursor-pointer  w-5/6 md:w-1/2 py-6 p-2"
      }
    >
      <h1 className={"w-fulltext-xl md:text-2xl font-serif font-light  mb-1"}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </h1>
      <h1 className={"w-fulltext-xl md:text-2xl font-serif font-light  mb-1"}>
        abcdefghijklmnopqrstuvwxyz
      </h1>
      <h1 className={"w-fulltext-xl md:text-2xl font-serif font-light "}>
        0987654321
      </h1>
    </span>
    <span
      className={
        "flex flex-col justify-center items-center mb-12  duration-500 rounded   hover:shadow-inner hover:border-0 hover:border-transparent    shadow-md cursor-pointer  w-5/6 md:w-1/2 py-6 p-2"
      }
    >
      <h1 className={"w-fulltext-xl md:text-2xl font-sans font-light  mb-1"}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </h1>
      <h1 className={"w-fulltext-xl md:text-2xl font-sans font-light  mb-1"}>
        abcdefghijklmnopqrstuvwxyz
      </h1>
      <h1 className={"w-fulltext-xl md:text-2xl font-sans font-light "}>
        0987654321
      </h1>
    </span>
    <span
      className={
        "flex flex-col justify-center items-center mb-12  duration-500 rounded   hover:shadow-inner hover:border-0 hover:border-transparent    shadow-md cursor-pointer  w-5/6 md:w-1/2 py-6 p-2"
      }
    >
      <h1 className={"w-fulltext-xl md:text-2xl font-mono font-light  mb-1"}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </h1>
      <h1 className={"w-fulltext-xl md:text-2xl font-mono font-light  mb-1"}>
        abcdefghijklmnopqrstuvwxyz
      </h1>
      <h1 className={"w-fulltext-xl md:text-2xl font-mono font-light "}>
        0987654321
      </h1>
    </span>
  </div>
);

export default Home;

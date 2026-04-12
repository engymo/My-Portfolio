import React from "react";
import Form from "./Form";

const Connect = () => {
  return (
    <section
      id="Connect"
      className="container mx-auto px-4 mb-5"
    >
      {/* Title */}
      <div className='bg-[url(/TitleBG.webp)] bg-no-repeat bg-center bg-contain
     w-full h-[100px] my-[7%] flex items-center justify-center'>
        <h2 className="text-4xl text-center font-bold text-[#603F26] ">Connect
        </h2>
      </div>

      {/* Card */}
      <div className="grid gird-cols-1 md:grid-cols-2 items-center justify-between">

        <div>
          <img src="/Connect/ConnectForm.webp" className=" lg:w-[60%] w-[40%] mx-auto lg:mx-0" />
        </div>

        <div>
          <Form />
        </div>

      </div>
    </section>
  );
};

export default Connect;
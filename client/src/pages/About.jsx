import React from "react";
import { heroIllustration } from "../assets";

export default function About() {
  return (
    <div className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className=" flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-3xl font-bold mb-4 text-slate-800 ">
            About Vin Estate
          </h1>
          <p className="mb-4 text-slate-700">
            Vin Estate is a leading real estate agency that specializes in
            helping clients buy, sell, and rent properties in the most desirable
            neighborhoods. Our team of experienced agents is dedicated to
            providing exceptional service and making the buying and selling
            process as smooth as possible.
          </p>
          <p className="mb-4 text-slate-700">
            Our mission is to help our clients achieve their real estate goals
            by providing expert advice, personalized service, and a deep
            understanding of the local market. Whether you are looking to buy,
            sell, or rent a property, we are here to help you every step of the
            way.
          </p>
          <p className="mb-4 text-slate-700">
            Our team of agents has a wealth of experience and knowledge in the
            real estate industry, and we are committed to providing the highest
            level of service to our clients. We believe that buying or selling a
            property should be an exciting and rewarding experience, and we are
            dedicated to making that a reality for each and every one of our
            clients.
          </p>
        </div>
        <div>
          <img src={heroIllustration} />
        </div>
      </div>
    </div>
  );
}

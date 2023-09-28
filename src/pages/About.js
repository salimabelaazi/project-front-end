import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At WatchShop, you can guarantee you will find more watch brands than anywhere else.
           From the biggest designer brands, to the best of luxury and some hidden gems,
           we are the ultimate destination when searching for a watch for yourself or a loved one.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

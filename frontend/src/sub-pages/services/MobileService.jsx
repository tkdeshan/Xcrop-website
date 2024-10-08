import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import header from "../../constants/images/services/mobile.jpg";
import mobileImage from "../../constants/images/services/mobile2.jpg";
import mobile from "../../constants/images/services/app.png";
import ios from "../../constants/images/services/ios.png"; // First card image
import android from "../../constants/images/services/android.png"; // Second card image

const Mobile = () => {
  return (
    <div className="min-h-screen relative ">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={header}
          className="object-cover w-full h-full"
          alt="Mobile Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Mobile Development
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center py-10 px-4 lg:px-20">
        <h1 className="text-xl lg:text-3xl font-serif font-bold text-center mb-4">
          ISO-CERTIFIED MOBILE APP DEVELOPMENT COMPANY
        </h1>
        <p className="text-center text-base lg:text-lg mb-6">
          “Phoenix Soft Solutions is an ISO-certified Agile app development
          company in Australia,
          <br /> specialized in consulting, designing, and developing mobile
          apps for clients all over the world.
          <br /> We are convinced that we can manage any request and project
          nature of our clients, no matter
          <br /> what field your organization is in or what kind of market they
          are in.”
        </p>
        <img
          src={mobileImage}
          className="object-cover w-full max-w-4xl rounded-lg shadow-lg"
          alt="Mobile Development Process"
        />

        {/* Contact Us Button */}
        <Link to="/sub-pages/company/Contactus">
          <button className="mt-6 border-red-700 bg-red-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">
            CONTACT US NOW FOR A FREE QUOTE
          </button>
        </Link>

        {/* Title Below the Button */}
        <h2 className="mt-8 text-center text-xl lg:text-2xl font-semibold">
          THE SUPERIOR MOBILE APP DEVELOPMENT
          <br /> SERVICES WE OFFER
        </h2>
        {/* Red Underline */}
        <div className="w-24 h-1 bg-red-500 mt-2"></div>

        {/* Description */}
        <p className="mt-4 text-justify text-base lg:text-lg px-4 lg:px-20">
          The excellent services we have established for our clients are
          continually improving. Development, integration, and administration of
          mobile software applications are all a part of what we do. We
          constantly appreciate the understanding and strong relationship
          between Phoenix Soft Solutions and clients to produce the best
          potential outcomes, from conception and design through delivery and
          ongoing support.
        </p>

        {/* List of Services */}
        <ul className="mt-4 list-disc list-inside text-base lg:text-lg text-left">
          <li>iOS app development</li>
          <li>Custom Ipad app development</li>
          <li>Android app development</li>
          <li>UX/UI design</li>
          <li>Consulting and support throughout the project process</li>
          <li>Prototyping</li>
          <li>Monitoring and tracking power use</li>
          <li>Automated testing and QA</li>
          <li>After-sale service and care</li>
        </ul>
      </div>

      {/* New Section */}
      <div className="flex flex-col items-center justify-center py-10 px-4 lg:px-20 bg-gray-100">
        <h1 className="text-2xl lg:text-4xl font-serif font-bold text-center mb-4">
          HOW CAN WE ASSIST YOU WITH THE<br></br> SERVICES WE ARE OFFERING?
        </h1>
        {/* Red Underline */}
        <div className="w-24 h-1 bg-red-500 mt-2 mb-6"></div>

        {/* New Section Description */}
        <p className="text-center text-base lg:text-lg px-4 lg:px-20">
          We will undoubtedly deliver the best quality to corporate clients and
          end-users, better the target customers' experience, and bring many
          additional advantages to the company with the following service items.
        </p>

        {/* Card Section */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-10 mt-5">
          <div className="flex flex-col lg:flex-row items-center p-5">
            {/* Left Side: Description and List */}
            <div className="lg:w-2/3 p-6">
              <h2 className="text-xl font-semibold mb-4">
                iOS App Development
              </h2>
              <p className="text-base lg:text-lg mb-4 text-justify">
                When it comes to developing iPhone applications that are both
                easy to use and flexible, our top UI/UX designers are the best
                in the industry. To ensure that your vision becomes a reality,
                we have the necessary resources and skills. As a result, our
                customers may rest assured knowing that all of our iPhone app
                development methods adhere strictly to the tight iOS
                requirements.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Design and Development of iOS Applications</li>
                <li>Development of iPad Apps</li>
                <li>Development of Apple Watch apps</li>
                <li>App Development for Apple TV's App Clips</li>
              </ul>
            </div>
            {/* Right Side: Image */}
            <div className="lg:w-1/3">
              <img
                src={ios}
                alt="Mobile App Development"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center p-5">
            {/* Left Side: Image */}
            <div className="lg:w-1/3 w-full">
              <img
                src={android}
                alt="Custom App Development"
                className="object-cover w-ful h-auto" // Adjust h-auto as needed
              />
            </div>
            {/* Right Side: Description and List */}
            <div className="lg:w-2/3 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Android App Development
              </h2>
              <p className="text-base lg:text-lg mb-4">
                The number of individuals downloading Android apps has risen in
                tandem with the growing number of people using Android-based
                mobile devices. The top Android app development firm in
                Australia is here to help our clients remain on top of the
                latest industry trends and developments.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Development of Android Mobile Apps</li>
                <li>
                  Creation of mobile applications for Android TV, Tablet, and
                  Wearables
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Side: Description and List */}
            <div className="lg:w-2/3 p-6">
              <h2 className="text-xl font-semibold mb-4">
                App Development for Multiple Platforms
              </h2>
              <p className="text-base lg:text-lg mb-4 text-justify">
                By acquiring high-quality mobile apps that work across many
                platforms, you can serve your customers with an app that is
                compatible with their OS. From there, improve the convenience
                and speed for users when experiencing the service you provide.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Apps for iOS run on various platforms</li>
                <li>Apps for Android run on various platforms</li>
                <li>Applications may be used on any device</li>
              </ul>
            </div>
            {/* Right Side: Image */}
            <div className="lg:w-1/3">
              <img
                src={mobile}
                alt="Mobile App Development"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Wave Section */}
      <div className="relative bg-red-600 text-white py-16">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-red-600">
          <svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f8f7fa"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-lg mb-6 text-black">
            Contact us today to take your business to the next level with our
            expert mobile application development services. Let’s collaborate to
            create innovative solutions tailored to your needs.
          </p>
          <a href="/Company/Contactus" className="block">
            <button className="bg-white text-red-500 py-2 px-6 rounded-full font-semibold">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;

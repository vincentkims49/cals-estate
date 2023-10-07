import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import { heroImage } from "../assets";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import FeaturedCard from "../components/Featuredcard";
import Heading from "../common/Heading";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=6");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div
        className="h-screen relative flex flex-col items-center "
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
          <div className="text-blue-500 text-xs sm:text-sm">
            Welcome to Vin Estate
          </div>
          <h1 className="text-white font-bold text-3xl lg:text-6xl">
            Find your next <span className="text-blue-500">perfect</span>
            <br />
            place with ease
          </h1>
          <div className="text-blue-400 text-xs sm:text-sm">
            Vin Estate is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </div>
          <Link to={"/search"}>
            <button className="text-xs sm:text-sm  text-white font-bold inline-flex items-center justify-center px-5 py-3 mr-3 text-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 w-[200px]">
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 items-center'>
          <Heading title='Featured Property Types' subtitle='Find All Type of Property' />

          <FeaturedCard />
        </div>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-black-600 uppercase">
                Newest Deals
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more deas
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-black-600 uppercase">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-black-600 uppercase">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        <AboutUs />
      </div>
      <div className="download w-full  py-16 rounded-xl">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="textxl md:text-3xl font-bold">
            Download The VinEstate App
          </h1>
          <div className="flex space-x-5">
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <FaGooglePlay size={"1.5rem"} />
              <div>
                <p className="text-xs">Get ON</p>
                <h1 className="text-sm">Google Play</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <IoLogoAppleAppstore size={"1.5rem"} />
              <div>
                <p className="text-xs">Get ON</p>
                <h1 className="text-sm">App Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

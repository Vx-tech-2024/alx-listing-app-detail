import Pill from "@/components/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";
import bgImg from "@/public/assets/Home- Listing Page.png"; // or your hero image

export default function Home() {
  const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Beachfront"];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-4">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Pill Filters */}
      <div className="flex gap-3 flex-wrap p-6">
        {filters.map((item) => (
          <Pill key={item} label={item} />
        ))}
      </div>

      {/* Listing Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={property.image} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="text-xl font-bold">{property.name}</h3>
              <p className="text-gray-600">${property.price}/night</p>
              <p className="text-yellow-500 mt-2">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

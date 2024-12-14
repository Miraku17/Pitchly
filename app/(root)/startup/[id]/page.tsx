'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";
import Image from "next/image";

const StartupPitchPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(127); // Starting with a sample count

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prevCount => isLiked ? prevCount - 1 : prevCount + 1);
  };

  const samplePitch = {
    name: "EcoCart",
    author: {
      name: "Adrian Hajdin",
      username: "@adrianhajdin",
      avatar: "/api/placeholder/32/32",
    },
    category: "Education",
    description:
      "EcoCart is an innovative e-commerce platform designed for eco-conscious shoppers looking to make a positive environmental impact with their purchases.",
    details: [
      "We connect users with local businesses that offer eco-friendly, sustainable products across categories like home goods, fashion, beauty, and more.",
      "By partnering with small and medium-sized enterprises committed to sustainability, we aim to reduce carbon footprints and promote greener consumer choices.",
      "Our platform not only helps users find ethically sourced and environmentally responsible products but also offers features like carbon offset tracking, green certifications, and personalized sustainability goals.",
    ],
    mission:
      "Shop better, live better, and create a greener world—one purchase at a time.",
  };

  const similarStartup = {
    date: "20 May, 2023",
    author: "Steven Smith",
    title: "Geovalue",
    description:
      "A mobile app that helps users track and reduce their carbo and...",
    image: "/api/placeholder/240/160",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-primary min-h-[300px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex-col space-y-8">
        {/* image section */}
        <div className="relative w-full h-[500px]">
          <Image
            src="https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg"
            alt="Hero image"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
        {/* Pitch Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <img
                src="https://github.com/shadcn.png"
                alt={samplePitch.author.name}
                className="rounded-full h-16 w-16"
              />
              <div>
                <h3 className="font-semibold">{samplePitch.author.name}</h3>
                <p className="text-sm text-gray-600">
                  {samplePitch.author.username}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-5 py-3 rounded-full bg-primary/10 text-primary text-md font-bold">
              {samplePitch.category}
            </span>
          </div>
        </div>

        {/* Pitch Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{samplePitch.name}</h2>
          <p className="text-gray-700">{samplePitch.description}</p>
          <div className="space-y-4">
            {samplePitch.details.map((detail, index) => (
              <p key={index} className="text-gray-700">
                {detail}
              </p>
            ))}
          </div>
          <p className="font-medium text-primary">{samplePitch.mission}</p>
          
          {/* Like Button */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleLike}
              className={`flex items-center gap-2 transition-colors ${
                isLiked ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              <Heart 
                className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} 
              />
              <span className="font-medium">{likeCount}</span>
            </Button>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Similar Startups Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6">Similar startups</h3>
        </div>
      </section>
    </>
  );
};

export default StartupPitchPage;
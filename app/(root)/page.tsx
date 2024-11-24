import React from "react";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Zian Valles",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      _id: 1,
      description: "Developing autonomous robots for warehouse automation using advanced AI and computer vision.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Robotics",
      title: "AutoBot Logistics",
    },
    {
      _createdAt: new Date(),
      views: 127,
      author: {
        _id: 2,
        name: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      _id: 2,
      description: "Revolutionary sustainable food packaging made from biodegradable materials derived from seaweed.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      category: "Green Tech",
      title: "EcoWrap Solutions",
    },
    {
      _createdAt: new Date(),
      views: 89,
      author: {
        _id: 3,
        name: "Marcus Rodriguez",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      _id: 3,
      description: "AI-powered platform that helps small businesses optimize their digital marketing strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "MarTech",
      title: "SmartAds AI",
    },
    {
      _createdAt: new Date(),
      views: 203,
      author: {
        _id: 4,
        name: "Emma Watson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      _id: 4,
      description: "Mobile app connecting local farmers directly with consumers for fresh, organic produce delivery.",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "AgTech",
      title: "FarmConnect",
    },
    {
      _createdAt: new Date(),
      views: 156,
      author: {
        _id: 5,
        name: "Alex Kumar",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      _id: 5,
      description: "Blockchain-based platform for secure and transparent medical records management.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "HealthTech",
      title: "MedChain",
    },
    {
      _createdAt: new Date(),
      views: 167,
      author: {
        _id: 6,
        name: "Lisa Park",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      _id: 6,
      description: "Virtual reality platform for immersive remote team collaboration and workspace simulation.",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "VR/AR",
      title: "VirtualOffice",
    }
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}

import React from "react";
import { ProfileCard } from "../components/ProfileCard";
import { HackathonCard } from "../components/HackathonCard";
import { FilterBar } from "../components/FilterBar";
import { ConnectModal } from "../components/ConnectModal";
import { toast } from "@/hooks/use-toast";

const MOCK_HACKATHONS = [
  {
    id: 1,
    name: "TechTogether Boston",
    description: "An inclusive hackathon for gender-marginalized hackers!",
    date: "May 2-4, 2025",
    joined: true,
  },
  {
    id: 2,
    name: "Web3 Weekend",
    description: "Dive into decentralized apps and blockchain innovation.",
    date: "May 16-18, 2025",
    joined: false,
  },
  {
    id: 3,
    name: "EcoHack",
    description: "Build projects that help the environment.",
    date: "June 10-12, 2025",
    joined: false,
  },
];

const MOCK_PROFILES = [
  {
    id: 1,
    name: "Alice Chan",
    skills: ["React", "TypeScript", "UI/UX"],
    location: "Boston, MA",
    interests: ["Sustainability", "Fintech"],
    bio: "Front-end enthusiast. Looking for eco-project teammates!",
  },
  {
    id: 2,
    name: "Bob Patel",
    skills: ["Python", "APIs", "Data Science"],
    location: "San Francisco, CA",
    interests: ["Machine Learning", "Fintech"],
    bio: "Data wrangler. Passionate about code and community.",
  },
  {
    id: 3,
    name: "Sofia Lopez",
    skills: ["HTML", "CSS", "JS"],
    location: "Austin, TX",
    interests: ["Art", "Web3"],
    bio: "Design-minded coder, always up for creative hacks.",
  },
  {
    id: 4,
    name: "David Lee",
    skills: ["Rust", "Solidity", "React"],
    location: "Online/Remote",
    interests: ["Web3", "Open Source"],
    bio: "Remote dev, looking to join a global online team!",
  },
  {
    id: 5,
    name: "Arjun Singh",
    skills: ["JavaScript", "Node.js", "React"],
    location: "Bangalore, India",
    interests: ["Fintech", "AI"],
    bio: "Full-stack developer from India, interested in fintech and AI projects.",
  },
  {
    id: 6,
    name: "Neha Sharma",
    skills: ["JavaScript", "React", "CSS"],
    location: "Mumbai, India",
    interests: ["Fintech", "Healthcare"],
    bio: "Passionate about building fintech applications and healthcare solutions.",
  },
];

const skillList = [
  ...new Set(MOCK_PROFILES.flatMap((p) => p.skills)),
];
const locationList = [
  ...new Set(MOCK_PROFILES.map((p) => p.location)),
];
const interestList = [
  ...new Set(MOCK_PROFILES.flatMap((p) => p.interests)),
];

const Index: React.FC = () => {
  const [profiles, setProfiles] = React.useState(MOCK_PROFILES);
  const [hackathons, setHackathons] = React.useState(MOCK_HACKATHONS);

  const [filters, setFilters] = React.useState({
    skill: "",
    location: "",
    interest: "",
  });

  const [connectModalTo, setConnectModalTo] = React.useState<null | typeof MOCK_PROFILES[0]>(null);

  function handleConnect(profile: typeof MOCK_PROFILES[0]) {
    setConnectModalTo(profile);
  }

  function handleSendMessage(msg: string) {
    toast({
      title: "Request sent!",
      description: "Connection request sent (simulated) 🚀",
      duration: 3500,
    });
  }

  function handleToggleJoin(hackathon: typeof MOCK_HACKATHONS[0]) {
    setHackathons((hacks) =>
      hacks.map((h) =>
        h.id === hackathon.id ? { ...h, joined: !h.joined } : h
      )
    );
  }

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSkill =
      !filters.skill || profile.skills.includes(filters.skill);
    const matchesLocation =
      !filters.location || profile.location === filters.location;
    const matchesInterest =
      !filters.interest || profile.interests.includes(filters.interest);
    return matchesSkill && matchesLocation && matchesInterest;
  });

  return (
    <div className="min-h-screen bg-[#F1F0FB] pb-12">
      {/* HERO HEADER */}
      <div className="bg-gradient-to-br from-[#9b87f5] via-[#D3E4FD] to-[#F1F0FB] py-16 mb-6 shadow">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-gray-900 tracking-tight drop-shadow-lg">Web2 Teammate Finder</h1>
          <p className="text-lg text-gray-700 mb-5">
            Discover teammates for upcoming hackathons. Filter by skills, location, and interests — then connect instantly!
          </p>
          <a
            href="#profiles"
            className="inline-block px-6 py-3 rounded-full bg-[#9b87f5] text-white font-semibold shadow-lg hover:bg-[#7E69AB] transition mb-2"
          >
            Browse Teammates
          </a>
        </div>
      </div>

      {/* HACKATHONS */}
      <div className="max-w-5xl mx-auto px-3 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Hackathons</h2>
        <div className="flex flex-wrap gap-4">
          {hackathons.map((hack) => (
            <HackathonCard
              key={hack.id}
              hackathon={hack}
              onToggleJoin={handleToggleJoin}
            />
          ))}
        </div>
      </div>

      {/* FILTER & PROFILES */}
      <div className="max-w-5xl mx-auto px-3" id="profiles">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4 gap-3">
          <h2 className="text-2xl font-bold text-gray-800">Browse Teammates</h2>
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            options={{
              skills: skillList,
              locations: locationList,
              interests: interestList,
            }}
          />
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onConnect={handleConnect}
              />
            ))
          ) : (
            <div className="text-gray-500 py-10 text-center w-full">
              No teammates found for selected filters.
            </div>
          )}
        </div>
      </div>
      <ConnectModal
        open={!!connectModalTo}
        onClose={() => setConnectModalTo(null)}
        toProfile={connectModalTo}
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default Index;


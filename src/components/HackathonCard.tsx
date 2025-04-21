
import React from "react";

type Hackathon = {
  id: number;
  name: string;
  description: string;
  date: string;
  joined: boolean;
};

interface HackathonCardProps {
  hackathon: Hackathon;
  onToggleJoin: (hackathon: Hackathon) => void;
}

export const HackathonCard: React.FC<HackathonCardProps> = ({
  hackathon,
  onToggleJoin,
}) => (
  <div className="bg-[#D3E4FD] rounded-lg p-4 shadow flex flex-col justify-between border border-gray-100 w-full max-w-[320px] min-w-[210px]">
    <div>
      <div className="text-base font-bold text-gray-900">{hackathon.name}</div>
      <div className="text-xs text-gray-500 mb-2">{hackathon.date}</div>
      <div className="text-xs text-gray-700 mb-2">{hackathon.description}</div>
    </div>
    <button
      className={`mt-2 px-3 py-1 rounded font-bold text-xs ${
        hackathon.joined
          ? "bg-[#F2FCE2] text-green-700 border border-green-400"
          : "bg-[#9b87f5] text-white"
      } transition-all`}
      onClick={() => onToggleJoin(hackathon)}
    >
      {hackathon.joined ? "Joined" : "Join"}
    </button>
  </div>
);

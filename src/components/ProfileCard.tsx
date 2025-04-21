
import React from "react";

type Profile = {
  id: number;
  name: string;
  skills: string[];
  location: string;
  interests: string[];
  bio: string;
  avatar?: string;
};

interface ProfileCardProps {
  profile: Profile;
  onConnect: (profile: Profile) => void;
}

const COLORS = [
  "bg-[#9b87f5]",
  "bg-[#D946EF]",
  "bg-[#F2FCE2]",
  "bg-[#0EA5E9]",
  "bg-[#F97316]",
  "bg-[#6E59A5]",
];

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onConnect }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5 flex flex-col items-center gap-3 border border-gray-200 min-w-[250px] max-w-[320px] mx-auto">
      {profile.avatar ? (
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover shadow"
        />
      ) : (
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-violet-100 text-violet-700 font-bold text-xl shadow">
          {profile.name.charAt(0)}
        </div>
      )}
      <div className="text-lg font-semibold text-gray-800">{profile.name}</div>
      <div className="flex flex-wrap gap-2 justify-center">
        {profile.skills.map((skill, i) => (
          <span
            key={skill}
            className={`text-xs px-2 py-1 rounded ${COLORS[i % COLORS.length]} text-white`}
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-500">{profile.location}</div>
      <div className="flex flex-wrap gap-2 justify-center mb-2">
        {profile.interests.map((interest, i) => (
          <span
            key={interest}
            className="bg-[#F1F0FB] text-[0.75rem] px-2 py-1 rounded text-purple-700"
          >
            {interest}
          </span>
        ))}
      </div>
      <div className="text-xs text-gray-500 text-center mb-2">{profile.bio}</div>
      <button
        className="rounded bg-[#9b87f5] text-white px-4 py-1.5 font-semibold shadow hover:bg-[#7E69AB] transition-all"
        onClick={() => onConnect(profile)}
      >
        Connect
      </button>
    </div>
  );
};

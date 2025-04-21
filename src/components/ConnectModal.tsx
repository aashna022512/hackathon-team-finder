
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

interface ConnectModalProps {
  open: boolean;
  onClose: () => void;
  toProfile: Profile | null;
  onSend: (message: string) => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({
  open,
  onClose,
  toProfile,
  onSend,
}) => {
  const [msg, setMsg] = React.useState("");

  React.useEffect(() => {
    if (open) setMsg("");
  }, [open]);

  if (!open || !toProfile) return null;

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-[90vw] w-[340px] relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="text-lg font-bold mb-2">Connect with {toProfile.name}</div>
        <textarea
          className="border rounded w-full p-2 mb-3"
          rows={3}
          placeholder="Write a quick intro or reason to connect..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          className="w-full bg-[#9b87f5] text-white rounded px-4 py-2 font-semibold shadow disabled:opacity-50"
          onClick={() => {
            onSend(msg);
            onClose();
          }}
          disabled={msg.trim().length < 2}
        >
          Send Connection Request
        </button>
        <div className="text-xs mt-2 text-gray-600 text-center">
          (Messaging is simulated for this demo!)
        </div>
      </div>
    </div>
  );
};

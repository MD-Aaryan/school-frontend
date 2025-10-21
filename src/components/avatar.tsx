import React from "react";

type AvatarProps = {
  username: string;
  email: string;
  avatarUrl?: string;
  onLogout: () => void;
};

const Avatar: React.FC<AvatarProps> = ({ username, email, avatarUrl }) => {
  return (
    <div className="flex items-center space-x-3 cursor-pointer select-none">
      <img
        src={
          avatarUrl ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(
            username
          )}&background=0D8ABC&color=fff&rounded=true`
        }
        alt={`${username} avatar`}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="hidden sm:flex flex-col">
        <span className="text-xl text-gray-700 dark:text-gray-700 font-semibold truncate max-w-[150px]">
          {username}
        </span>
        <span className="text-xs text-gray-700 dark:text-gray-700 truncate max-w-[150px]">
          {email}
        </span>
      </div>
    </div>
  );
};

export default Avatar;

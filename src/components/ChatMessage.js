import React from "react";

const ChatMessage = ({ name, messsage }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user_avatar"
        className="h-8"
      />
      <span className="font-bold px-2">{name}</span>
      <span> {messsage} </span>
    </div>
  );
};

export default ChatMessage;

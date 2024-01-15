import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          messsage: makeRandomString(20) + "🤣",
        })
      );
      return () => clearInterval(interval);
    }, 2000);
  }, []);

  console.log(chatMessages, "chatMessages");

  return (
    <>
      <div className="bg-stone-100 rounded-lg h-[315px] ml-2 p-2 border border-black overflow-scroll flex flex-col-reverse">
        {chatMessages &&
          chatMessages.map((chat, index) => (
            <ChatMessage
              key={index}
              name={chat.name}
              messsage={chat.messsage}
            />
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Muthupandi",
              messsage: liveMessage,
            })
          );
        }}
        className="w-full p-2 ml-2 border border-black"
      >
        <input
          className="w-96 px-2"
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMessage}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

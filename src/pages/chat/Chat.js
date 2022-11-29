import React from "react";
import "./Chat.css";
import MessagesReceived from "./Messages";
import SendMessage from "./SendMessage";

const Chat = ({ socket, room, username }) => {
  return (
    <div className="chat-container">
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;

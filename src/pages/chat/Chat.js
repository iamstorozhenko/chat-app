import React from "react";
import MessagesReceived from "./Messages";
import SendMessage from "./SendMessage";
import RoomAndUsersColumn from "./RoomUsers";

const Chat = ({ socket, room, username }) => {
  return (
    <div className="chat-container">
      <RoomAndUsersColumn socket={socket} username={username} room={room} />
      <div className="oval"></div>
      <div className="oval2"></div>
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;

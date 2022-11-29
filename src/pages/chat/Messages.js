import { useState, useEffect } from "react";
import "./Messages.css";

const Messages = ({ socket }) => {
  const [messagesRecieved, setMessagesReceived] = useState([]);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });
    return () => socket.off("receive_message");
  }, [socket]);

  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
  return (
    <div className="message-column">
      {messagesRecieved.map((msg, i) => (
        <div className="message-wrapper" key={i}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="msg-meta">{msg.username}</span>
            <span className="msg-meta">
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p className="msg-text">{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Messages;

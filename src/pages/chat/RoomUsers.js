import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomAndUsers = ({ socket, username, room }) => {
  const [roomUsers, setRoomUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    socket.on("chatroom_users", (data) => {
      console.log(data);
      setRoomUsers(data);
    });

    return () => socket.off("chatroom_users");
  }, [socket]);

  const leaveRoom = () => {
    const __createdtime__ = Date.now();
    socket.emit("leave_room", { username, room, __createdtime__ });
    navigate("/", { replace: true });
  };

  return (
    <div className="roomAndUsersColumn">
      <h2 className="roomTitle">
        <span>Room: </span>
        {room}
      </h2>

      <div>
        {roomUsers.length > 0 && <h5 className="usersTitle">Users online:</h5>}
        <ul className="usersList" style={{ listStyleType: "none" }}>
          {roomUsers.map((user) => (
            <li
              style={{
                fontWeight: `${user.username === username ? "bold" : "normal"}`,
              }}
              key={user.id}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>
      <div className="btnLeaveWrapper">
        <button className="btnLeave" onClick={leaveRoom}>
          Leave
        </button>
      </div>
    </div>
  );
};

export default RoomAndUsers;

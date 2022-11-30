import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    }

    navigate("/chat", { replace: true });
  };

  return (
    <div className="container-wrapper">
      <div className="card-wrapper">
        <h1>Hello</h1>
        <div className="form-wrapper">
          <input
            className="main-input"
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />

          <select onChange={(e) => setRoom(e.target.value)}>
            <option>Select room</option>
            <option value="Sport">Sport</option>
            <option value="Gaming">Gaming</option>
            <option value="Politics">Politics</option>
            <option value="Talking">Talking</option>
          </select>

          <button className="main-button" onClick={joinRoom}>
            Join room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

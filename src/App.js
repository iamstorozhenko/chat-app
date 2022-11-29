import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import io from "socket.io-client";
import "./App.css";
import Chat from "./pages/chat/Chat";

const socket = io.connect("http://localhost:4444");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path="/chat"
            element={<Chat username={username} room={room} socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

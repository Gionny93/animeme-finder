import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Recommendations from "./pages/Recommendations";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Router>
        {/* <Banner /> */}
        <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;

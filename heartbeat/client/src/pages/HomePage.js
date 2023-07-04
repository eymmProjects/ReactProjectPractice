import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function HomePage() {
  const [searchText, setSearchText] = useState("");

  return (
    <Layout>
      <div className="grid px-20 sm:px-5 mt-5">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="border-2 h-10 w-full border-gray-300 px-5"
          placeholder="Search news"
        />
      </div>
    </Layout>
  );
}

export default HomePage;

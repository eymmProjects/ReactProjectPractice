import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-screen flex items-center sm:flex-col">
      {loading && <Spinner />}

      <h1>landing page</h1>
    </div>
  );
}

export default LandingPage;

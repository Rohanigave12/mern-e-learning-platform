import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";

const AdminDashbord = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState({});

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Layout>
      <div className="admin-container">
        <h1 className="admin-title">Dashboard Overview</h1>

        <div className="card-row">
          <div className="modern-card blue">
            <p>Total Courses</p>
            <h2>{stats.totalCoures}</h2>
          </div>

          <div className="modern-card purple">
            <p>Total Lectures</p>
            <h2>{stats.totalLectures}</h2>
          </div>

          <div className="modern-card green">
            <p>Total Users</p>
            <h2>{stats.totalUsers}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashbord;
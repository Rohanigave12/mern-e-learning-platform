import React, { useEffect, useState } from "react";
import "./users.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Layout from "../Utils/Layout";
import toast from "react-hot-toast";

const AdminUsers = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.mainrole !== "superadmin") return navigate("/");

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: { token: localStorage.getItem("token") },
      });
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id) => {
    if (confirm("Update this user role?")) {
      try {
        const { data } = await axios.put(
          `${server}/api/user/${id}`,
          {},
          { headers: { token: localStorage.getItem("token") } }
        );
        toast.success(data.message);
        fetchUsers();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <Layout>
      <div className="users-pro">
        <h1>User Management</h1>

        <div className="user-grid">
          {users.map((u, i) => (
            <div className="user-card" key={u._id}>
              <div className="avatar">
                {u.name.charAt(0).toUpperCase()}
              </div>

              <div className="user-info">
                <h3>{u.name}</h3>
                <p>{u.email}</p>

                <span className={`badge ${u.role}`}>
                  {u.role}
                </span>
              </div>

              <button onClick={() => updateRole(u._id)}>
                Change Role
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminUsers;
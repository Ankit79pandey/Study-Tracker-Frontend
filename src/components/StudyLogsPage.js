// StudyLogsPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StudyLogsPage() {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({ date: "", subject: "", topic: "", duration: "" });
  const [loading, setLoading] = useState(false);

  const fetchLogs = async () => {
    setLoading(true);
    const res = await axios.get("https://study-tracker-backend-utq2.onrender.com/api/logs");
    if(res.status==200){
      setLogs(res.data);
      console.log(res.data)
      setLoading(false);
    }
    else{
      alert("Something went wrong !")
    }
   
  };

  async function deleteLogsBySubject(_id) {
    try {
      const res = await axios.delete(`https://study-tracker-backend-utq2.onrender.com/api/logs`, {
        params: { _id } // Use `params` for query parameters
      });
      console.log(res.data);
      alert(res.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to delete logs");
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.post("https://study-tracker-backend-utq2.onrender.com/api/logs", form);
    setForm({ date: "", subject: "", topic: "", duration: "" });
    fetchLogs();
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="container">
      <h1>Study Tracker</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Topic"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Minutes"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Add Log"}
        </button>
      </form>

      <h2>Study Logs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", marginTop: 10 }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Subject</th>
              <th>Topic</th>
              <th>Duration (min)</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
  {logs.map((log, idx) => (
    <tr key={idx}>
      <td style={{ padding: "10px" }}>{log.date}</td>
      <td style={{ padding: "10px" }}>{log.subject}</td>
      <td style={{ padding: "10px" }}>{log.topic}</td>
      <td style={{ padding: "10px", textAlign: "center" }}>{log.duration}</td>
      <td style={{ padding: "10px", textAlign: "center" }}>
        <button className="delete-btn" onClick={() => deleteLogsBySubject(log._id)}>
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      )}
    </div>
  );
}

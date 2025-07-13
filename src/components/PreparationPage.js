// PreparationPlanPage.js
import React from "react";

export default function PreparationPlanPage() {
  return (
    <div className="container">
      <h1>6-Month Government Exam Preparation Plan</h1>

      <p>
        This 6-month strategy is designed for aspirants preparing for competitive government exams like SSC, UPSC,
        Banking, Railways, etc. It blends subject-wise planning, mock tests, revision, and technical tools for enhanced
        efficiency.
      </p>

      <h2>Month-wise Plan</h2>
      <ul>
        <li><b>Month 1:</b> Basic concepts of Maths, English Grammar, Static GK</li>
        <li><b>Month 2:</b> Advanced Maths, Comprehension Practice, Polity, History</li>
        <li><b>Month 3:</b> Mock Tests, Current Affairs Revision, Time-bound solving</li>
        <li><b>Month 4:</b> CSAT/Reasoning Deep Practice, Economy Basics, Notes Making</li>
        <li><b>Month 5:</b> Full-Length Tests, Identify Weak Areas, Fix Gaps</li>
        <li><b>Month 6:</b> Revision + Mock + Mental Preparation + Previous Year Papers</li>
      </ul>

      <h2>Technical Tips & Tools</h2>
      <ol>
        <li>Use mobile apps like Anki, Pocket, and Notion for daily revision and notes.</li>
        <li>Record yourself teaching a topic — great for retention.</li>
        <li>Use Pomodoro timers (25+5 method) for focused study sessions.</li>
        <li>Join Telegram channels/groups for daily quiz practice.</li>
        <li>Subscribe to YouTube channels for current affairs summaries.</li>
        <li>Store all notes digitally on Google Drive or Notion for easy access.</li>
      </ol>

      <a
        href="/Govt_Exam_6_Month_Plan.pdf"
        download
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: 5,
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        📄 Download Preparation Plan PDF
      </a>
    </div>
  );
}

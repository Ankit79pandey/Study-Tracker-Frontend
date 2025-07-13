function DownloadPDF() {
    return (
      <div style={{ marginTop: "20px" }}>
        <a
          href="/Govt_Exam_6_Month_Plan.pdf"
          download
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📄 Download 6-Month Preparation Plan (PDF)
        </a>
      </div>
    );
  }
  
  export default DownloadPDF;
  
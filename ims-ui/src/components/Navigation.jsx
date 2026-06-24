function Navigation({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="my-4 d-flex gap-3">

      <button
        className={
          activeTab === "purchase"
            ? "btn btn-success btn-lg"
            : "btn btn-outline-secondary btn-lg"
        }
        onClick={() => setActiveTab("purchase")}
      >
        Add Purchase Entry
      </button>

      <button
        className={
          activeTab === "report"
            ? "btn btn-success btn-lg"
            : "btn btn-outline-secondary btn-lg"
        }
        onClick={() => setActiveTab("report")}
      >
        Fetch Report
      </button>

    </div>
  );
}

export default Navigation;
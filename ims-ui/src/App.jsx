import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PurchaseEntry from "./pages/PurchaseEntry";
import FetchReport from "./pages/FetchReport";

function App() {
  const [activeTab, setActiveTab] = useState("purchase");

  return (
    <div className="container-fluid app-container">
      <Header />

      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "purchase" ? (
        <PurchaseEntry />
      ) : (
        <FetchReport />
      )}
    </div>
  );
}

export default App;
import { useState } from "react";

function FetchReport() {

  const [vendorId, setVendorId] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [reports, setReports] = useState([]);

  const handleReport = () => {
    console.log({
      vendorId,
      fromDate,
      toDate
    });

    // API call later
  };

  return (
    <div className="card shadow-lg p-4">

      <h2 className="mb-4">
        Fetch Report
      </h2>

      <div className="row">

        <div className="col-md-6">
          <label className="form-label">
            Vendor Name
          </label>

          <select
            className="form-select"
            value={vendorId}
            onChange={(e) =>
              setVendorId(e.target.value)
            }
          >
            <option value="">
              Select Vendor
            </option>

            <option value="1">
              Vendor 1
            </option>

            <option value="2">
              Vendor 2
            </option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">
            From Date
          </label>

          <input
            type="date"
            className="form-control"
            value={fromDate}
            onChange={(e) =>
              setFromDate(e.target.value)
            }
          />
        </div>

        <div className="col-md-6 mt-3">
          <label className="form-label">
            To Date
          </label>

          <input
            type="date"
            className="form-control"
            value={toDate}
            onChange={(e) =>
              setToDate(e.target.value)
            }
          />
        </div>

      </div>

      <button
        className="btn save-btn mt-4"
        onClick={handleReport}
      >
        Get Report
      </button>

      <div className="table-responsive mt-4">

        <table className="table table-bordered">

          <thead>

            <tr>
              <th>Purchase Id</th>
              <th>Vendor</th>
              <th>Category</th>
              <th>Type</th>
              <th>Brand</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>

          </thead>

          <tbody>

            {reports.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="text-center"
                >
                  No records found
                </td>
              </tr>
            ) : (
              reports.map((report) => (
                <tr key={report.purchaseId}>
                  <td>{report.purchaseId}</td>
                  <td>{report.vendorName}</td>
                  <td>{report.category}</td>
                  <td>{report.type}</td>
                  <td>{report.brandName}</td>
                  <td>{report.unit}</td>
                  <td>{report.quantity}</td>
                  <td>{report.amount}</td>
                  <td>{report.purchaseDate}</td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default FetchReport;
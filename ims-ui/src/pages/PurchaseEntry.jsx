function PurchaseEntry() {
  return (
    <div className="card shadow-lg p-4">

      <h2 className="mb-4">
        Add Purchase Entry
      </h2>

      <div className="row">

        <div className="col-md-6">

          <div className="mb-3">
            <label>Vendor Name</label>

            <select className="form-select">
              <option>Select vendor</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Material Type</label>

            <select className="form-select">
              <option>Select material type</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Unit</label>

            <select className="form-select">
              <option>Select unit</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Purchase Amount</label>

            <input
              type="number"
              className="form-control"
            />
          </div>

        </div>

        <div className="col-md-6">

          <div className="mb-3">
            <label>Material Category</label>

            <select className="form-select">
              <option>Cloth</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Brand Name</label>

            <input
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Quantity</label>

            <input
              type="number"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Purchase Date</label>

            <input
              type="date"
              className="form-control"
            />
          </div>

        </div>
      </div>

      <button className="btn save-btn">
        Save Purchase
      </button>

    </div>
  );
}

export default PurchaseEntry;
import React from "react";

export default function Orders() {
  return (
    <div className="col w-full flex-1">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="card-title">Recent Orders</h4>

            <a href="#!" className="btn btn-sm btn-soft-primary">
              <i className="bx bx-plus me-1"></i>Create Order
            </a>
          </div>
        </div>

        <div className="table-responsive table-centered">
          <table className="table mb-0">
            <thead className="bg-light bg-opacity-50">
              <tr>
                <th className="ps-3">Order ID.</th>
                <th>Date</th>
                <th>Product</th>
                <th>Customer Name</th>
                <th>Email ID</th>
                <th>Phone No.</th>
                <th>Address</th>
                <th>Payment Type</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="ps-3">
                  <a href="order-detail.html">#RB5625</a>
                </td>
                <td>29 April 2024</td>
                <td>
                  <img
                    src="assets/images/products/product-1(1).png"
                    alt="product-1(1)"
                    className="img-fluid avatar-sm"
                  />
                </td>
                <td>
                  <a href="#!">Anna M. Hines</a>
                </td>
                <td>anna.hines@mail.com</td>
                <td>(+1)-555-1564-261</td>
                <td>Burr Ridge/Illinois</td>
                <td>Credit Card</td>
                <td>
                  <i className="bx bxs-circle text-success me-1"></i>Completed
                </td>
              </tr>
              <tr>
                <td className="ps-3">
                  <a href="order-detail.html">#RB9652</a>
                </td>
                <td>25 April 2024</td>
                <td>
                  <img
                    src="assets/images/products/product-4.png"
                    alt="product-4"
                    className="img-fluid avatar-sm"
                  />
                </td>
                <td>
                  <a href="#!">Judith H. Fritsche</a>
                </td>
                <td>judith.fritsche.com</td>
                <td>(+57)-305-5579-759</td>
                <td>SULLIVAN/Kentucky</td>
                <td>Credit Card</td>
                <td>
                  <i className="bx bxs-circle text-success me-1"></i>Completed
                </td>
              </tr>
              <tr>
                <td className="ps-3">
                  <a href="order-detail.html">#RB5984</a>
                </td>
                <td>25 April 2024</td>
                <td>
                  <img
                    src="assets/images/products/product-5.png"
                    alt="product-5"
                    className="img-fluid avatar-sm"
                  />
                </td>
                <td>
                  <a href="#!">Peter T. Smith</a>
                </td>
                <td>peter.smith@mail.com</td>
                <td>(+33)-655-5187-93</td>
                <td>Yreka/California</td>
                <td>Pay Pal</td>
                <td>
                  <i className="bx bxs-circle text-success me-1"></i>Completed
                </td>
              </tr>
              <tr>
                <td className="ps-3">
                  <a href="order-detail.html">#RB3625</a>
                </td>
                <td>21 April 2024</td>
                <td>
                  <img
                    src="assets/images/products/product-6.png"
                    alt="product-6"
                    className="img-fluid avatar-sm"
                  />
                </td>
                <td>
                  <a href="#!">Emmanuel J. Delcid</a>
                </td>
                <td>emmanuel.delicid@mail.com</td>
                <td>(+30)-693-5553-637</td>
                <td>Atlanta/Georgia</td>
                <td>Pay Pal</td>
                <td>
                  <i className="bx bxs-circle text-primary me-1"></i>Processing
                </td>
              </tr>
              <tr>
                <td className="ps-3">
                  <a href="order-detail.html">#RB8652</a>
                </td>
                <td>18 April 2024</td>
                <td>
                  <img
                    src="assets/images/products/product-1(2).png"
                    alt="product-1(2)"
                    className="img-fluid avatar-sm"
                  />
                </td>
                <td>
                  <a href="#!">William J. Cook</a>
                </td>
                <td>william.cook@mail.com</td>
                <td>(+91)-855-5446-150</td>
                <td>Rosenberg/Texas</td>
                <td>Credit Card</td>
                <td>
                  <i className="bx bxs-circle text-primary me-1"></i>Processing
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card-footer border-top">
          <div className="row g-3">
            <div className="col-sm">
              <div className="text-muted">
                Showing
                <span className="fw-semibold">5</span>
                of
                <span className="fw-semibold">90,521</span>
                orders
              </div>
            </div>

            <div className="col-sm-auto">
              <ul className="pagination m-0">
                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="bx bx-left-arrow-alt"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

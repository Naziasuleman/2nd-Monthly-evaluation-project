import { Header } from "@components";
import { CompanyAvatar, Email, Phone, Edit, Delete, View } from "@images";
export const Companies = () => {
  return (
    <>
      <Header title="Companies" />
      <div
        className="rounded border table-div"
        style={{
          margin: "24px",
        }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Contact</th>
              <th>Tax registration number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="company-name d-flex gap-3 align-items-center">
                <img src={CompanyAvatar} />
                <p className="company-name">ABC Company</p>
              </td>
              <td>
                <div className="d-flex gap-2 align-items-center ">
                  <img src={Email} />
                  <p>dustin.wilson@example.com</p>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <img src={Phone} />
                  <p>(405) 555-0128</p>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-between gap-12">
                  <p>123-45-1485</p>
                  <div className="d-flex gap-12">
                    <img src={Edit} />
                    <img src={Delete} />
                    <img src={View} />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

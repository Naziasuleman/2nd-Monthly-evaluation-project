import { Header } from "@components";
export const Companies = () => {
  return (
    <>
      <Header title="Companies" />
      <div
        className="rounded border"
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC Company</td>
              <td>123-45-1485</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

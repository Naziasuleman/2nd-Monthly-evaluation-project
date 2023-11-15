export const Header = ({ title }) => {
  return (
    <header className={`bg-white border-bottom border-1 py-4 px-4`}>
      <div className="d-flex justify-content-between align-items-center gap-2">
        <div>
          <h4 className="fs-28 text-gray-900 fw-bold">{title}</h4>
        </div>
      </div>
    </header>
  );
};

export const CustomOption2 = ({ value, label }) => {
  return (
    <div className="option2">
      <p>{label}</p>
    </div>
  );
};

export const CustomOption1 = ({ value, label }) => {
  return (
    <div className="option1">
      <p>{value}</p>
    </div>
  );
};

export const CustomOption3 = ({ value, label }) => {
  return (
    <div className="option3">
      <h6>{value}</h6>
      <p>{label}</p>
    </div>
  );
};

export const Button = ({ bg = "#1E1E1E0F", text = "No text" }) => {
  const styleBg = {
    backgroundColor: bg,
    cursor: "pointer",
  };
  return (
    <div
      className={`px-[15px] py-[8px] text-[#1E1E1E] rounded-lg hover:opacity-85`}
      style={styleBg}
    >
      <h1>{text}</h1>
    </div>
  );
};

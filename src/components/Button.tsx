const Button = (props = { text: "Button" }) => {
  return (
    <div className="relative">
      <div className="absolute -left-[5px] -top-[5px] h-[30px] w-[100px] border-none bg-white text-center font-['DM_Sans',sans-serif] font-bold text-[#934713]">
        {props.text}
      </div>
      <div className="h-[30px] w-[100px] bg-[#934713]"></div>
    </div>
  );
};

export default Button;

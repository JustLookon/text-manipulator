import React from "react";

function Navbar(props) {
  const InDarkMode = () => {
    if (props.mode === "dark") {
      return "visible";
    } else {
      return "hidden";
    }
  };
  const setColor = (color) => () => {
    if (props.mode === "dark") {
      document.body.style.backgroundColor = color;
    }
    console.log("running setColor function!");
  };
  return (
    <div
      className={`flex justify-between px-3 bg-${props.mode} transition-all `}
    >
      <nav className={`navbar navbar-${props.mode} `}>
        <div className="container-fluid">
          <nav className="navbar-brand">Navbar</nav>
          <form className="d-flex" role="search"></form>
        </div>
      </nav>
      <div className="flex gap-4">
        <div className={` my-auto [&>*]:mx-2   ${InDarkMode()}`}>
          <button
            className="rounded-full p-[12px] bg-[#6b1c1c]"
            onClick={setColor("#6b1c1c")}
          ></button>
          <button
            className="rounded-full p-[12px] bg-[#652e18]"
            onClick={setColor("#652e18")}
          ></button>
          <button
            className="rounded-full p-[12px] bg-[#0b0e3b]"
            onClick={setColor("#0b0e3b")}
          ></button>
          <button
            className="rounded-full p-[12px] bg-[#010401]"
            onClick={setColor("#010401")}
          ></button>
          <button
            className="rounded-full p-[12px] bg-[#0b530b]"
            onClick={setColor("#0b530b")}
          ></button>
        </div>
        <div className="form-check form-switch my-auto">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggle}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            Enable Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

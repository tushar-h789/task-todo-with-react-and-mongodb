import "./header.css";

const Header = ({ title, count, color }) => {
  return (
      <div className=" w-[400px] flex justify-between p-4 px-4 rounded-lg bg-slate-100 ">
        <div className="flex items-center">
          <div id="border" className={color}></div>
          <h2 className="text-xl ml-2">{title}</h2>
        </div>
        <div className="">
        <button className="btn btn-outline btn-sm">{count}</button>
        </div>
      </div>
  );
};

export default Header;

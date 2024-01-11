import { RiAttachment2, RiWechatLine } from "react-icons/ri";
import Modal from "../Modal/Modal";

const Footer = () => {


  return (
    <div className="flex items-center gap-2">
        {/* footer photo start */}
      <div className="flex items-center gap-2">
        <img
          className="w-10 rounded-full"
          alt="Tailwind CSS Navbar component"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
        <img
          className="w-10 rounded-full"
          alt="Tailwind CSS Navbar component"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
      {/* footer photo end */}

      {/* count button */}
      <button className=" border-2 rounded-full p-[7px] bg-slate-100 hover:bg-slate-300">
        12+
      </button>

      {/* chat count */}
      <button className="flex items-center mr-2 btn">
        <RiWechatLine className="text-3xl" />
        <p>15</p>
      </button>

      {/* attachments add and count */}
      <div className="flex items-center gap-2 bg-slate-100 px-1 py-2 rounded-lg">
        <label>
        <RiAttachment2  className="text-3xl cursor-pointer" modal="my_modal_2"/>
        <input type="file" name="" id="" className="hidden"/>
        </label>
        {/* onClick={() => document.getElementById("my_modal_2").showModal()} */}
        <p>25</p>
        <Modal/>
      </div>

      {/* date show */}
      <div className="bg-slate-100">
        <input type="date" name="date" id="name" />
      </div>
    </div>
  );
};

export default Footer;

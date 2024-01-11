import { RiWechatLine } from "react-icons/ri";
import AttachmentFiles from "../AttachmentFiles/AttachmentFiles";

const Footer = () => {
  return (
    <div className="flex items-center gap-2 w-[500px]">
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
      <AttachmentFiles/>

      {/* date show */}
      <div className="bg-slate-100">
        <input type="date" name="date" id="name" />
      </div>
    </div>
  );
};

export default Footer;

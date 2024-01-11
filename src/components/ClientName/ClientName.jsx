import Content from "../Content/Content";

const ClientName = ({ clientName, myName }) => {
  return (
    <div>
      <div className=" flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <img
            className="w-10 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
          <h4 className="w-full">{clientName}</h4>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="w-10 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
          <h4 className="w-full">{myName}</h4>
        </div>
      </div>

      <Content fullText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, in culpa quo nostrum sapiente earum ab necessitatibus adipisci blanditiis!" />
    </div>
  );
};

export default ClientName;

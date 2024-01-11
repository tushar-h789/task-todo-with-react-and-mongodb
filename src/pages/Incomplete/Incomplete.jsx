import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";

const Incomplete = () => {
  return (
    <div className="w-[500px] relative border bg-slate-100 ">
      <div className="absolute">
      <Header title="Incomplete" color="bg-red-500" count="0" />
      </div>
      <div className=" h-screen my-16  overflow-x-hidden">
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
      </div>
    </div>
  );
};

export default Incomplete;

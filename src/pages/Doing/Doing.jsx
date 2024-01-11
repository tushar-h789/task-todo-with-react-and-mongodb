import Body from "../../components/Body/Body"
import Header from "../../components/Header/Header"

const Doing = () => {
  return (
    <div className="w-[500px] border bg-slate-100 ">
      <div className="absolute">
      <Header title="Doing" color="bg-orange-500" count="0" />
      </div>
      <div className=" h-screen my-16 overflow-auto overflow-x-hidden">
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
      </div>
    </div>
  )
}

export default Doing
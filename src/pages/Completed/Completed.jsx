import Body from "../../components/Body/Body"
import Header from "../../components/Header/Header"

const Completed = () => {
  return (
    <div className="w-[500px] relative border bg-slate-100 ">
      <div className="absolute">
      <Header title="Completed" count="0" />
      </div>
      <div className=" h-screen my-16 overflow-auto">
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

export default Completed
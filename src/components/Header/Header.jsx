import './header.css'

const Header = ({title, count, color}) => {
  return (
    <div className="w-[450px] border">
        <div className="w-[450px]  flex justify-between items-center p-4 px-4 rounded-lg">
          <div className='flex items-center justify-center'>
          <div id="border" className={color}></div>
        <h2 className="text-xl ml-2">{title}</h2>
          </div>
        <button className="btn btn-outline btn-sm">{count}</button>
        </div>
    </div>
  )
}

export default Header
import ClientName from '../../components/ClientName/ClientName'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Incomplete = () => {
  return (
    <div className="w-[500px] border bg-slate-100">
     <Header title='Incomplete' color='bg-red-500' count='0'/>
     <div className='m-2 bg-white p-2 rounded-lg'>

     <ClientName clientName='clientName' myName='Sadik Istiak' />
     <Footer/>
     </div>
    </div>
  )
}

export default Incomplete
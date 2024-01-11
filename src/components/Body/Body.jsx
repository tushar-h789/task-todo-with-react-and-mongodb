import ClientName from "../ClientName/ClientName"
import Footer from "../Footer/Footer"


const Body = () => {
  return (
    <div className="m-2 bg-white p-2 rounded-lg">
        <ClientName clientName="clientName" myName="Sadik Istiak" />
        <Footer />
      </div>
  )
}

export default Body
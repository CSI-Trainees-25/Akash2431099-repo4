import Footer from "../Components/Footer"
import Header from "../Components/Header"

function Payment() {
  return (
    <div className='bg-gray-200'>
        <Header/>
        <div className="flex px-7 gap-150 ">
          <div>
            <button className="text-2xl py-5 font-bold">←</button>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-5xl tracking-wider py-15">ERROR 404</h1>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Payment

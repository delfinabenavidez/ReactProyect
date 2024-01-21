import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center"> Sobre Nosotros</h1>
        <hr />
        <p className="lead text-center">
        Somos un equipo apasionado de individuos que comparten una visión común: fusionar la tecnología
         avanzada con la moda contemporánea. En nuestra selección de productos, encontrarán una cuidadosa
          curaduría que abarca desde los dispositivos tecnológicos más vanguardistas hasta las prendas de
           vestir y joyas más elegantes. Nos enorgullece ofrecer a nuestros clientes una experiencia de 
           compra única, donde cada producto cuenta una historia de innovación y estilo.
           ¡La excelencia es nuestro estándar! Desde la selección de productos hasta la entrega en su 
           puerta, nos esforzamos por brindar un servicio impecable y una experiencia de compra que supere
            todas las expectativas. Valoramos la confianza que depositan en nosotros nuestros clientes
             y nos esforzamos por ganarla y mantenerla con cada transacción.
        </p>

        <h2 className="text-center py-4"> Nuestros Productos </h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"> Ropa de Caballero </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"> Ropa de Dama </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"> Joyeria </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"> Electronica </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
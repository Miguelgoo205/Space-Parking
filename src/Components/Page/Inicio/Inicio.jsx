import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Img } from '../../UI/Img/Img'


export const Inicio = () => {
  return (
    <>
    <Header/>
    <hr></hr>
    <main>
        <div className='cont-info'>
            <section>
                <img src="https://res.cloudinary.com/miguelgo205/image/upload/v1678334925/SpaceParking/ISOMETRIC_CAR_PARKING_ebfpvy.jpg" alt="" />  
            </section>
            <aside>
                <h2>Welcome To <br /> <span>Space</span> Parking</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere iusto expedita nesciunt molestiae harum dolorum quod eaque esse tempore doloremque iste, quaerat neque? Repellendus tempora amet molestiae laboriosam officia?</p>
            </aside>
        </div>
            <h2 className='service' >About Our Services</h2>
        <div className='services1'>

            <div className="card">
                <h3>SpaceUser</h3>
                <Img styleImg='service-img' url="https://res.cloudinary.com/miguelgo205/image/upload/v1678346056/SpaceParking/concepto-de-servicio-uso-compartido-autom%C3%B3viles-hombre-en-l%C3%ADnea-elige-auto-para-compartir-carros-alquiler-carpool-viajes-ciudad-165740150_crpvmw.jpg"/>

                {/* <img className='' src="" alt="" /> */}

            </div>
            <div className="card">
                <h3>AdminParking</h3>
                <Img styleImg='service-img' url="https://res.cloudinary.com/miguelgo205/image/upload/v1678334537/SpaceParking/parking-icon-flat-style-isolated-on-white-background-free-vector_wo8zkr.jpg"/>
                {/* <img className='service-img' src="https://res.cloudinary.com/miguelgo205/image/upload/v1678334537/SpaceParking/parking-icon-flat-style-isolated-on-white-background-free-vector_wo8zkr.jpg" alt="" /> */}

            </div>

        </div>
    </main>
    </>
  )
}

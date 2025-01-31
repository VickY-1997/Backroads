import Title from "./Title"
import {Service} from '../Data.js'

const Services = () => {
  return (
    <>
         <section className="section services" id="services">
        <Title Title={"Our"} SubTitle={"Services"}/>

        

      <div className="section-center services-center">
      {Service.map((data) => {
          return (
            <article className="service" key={data.id}>
            <span className="service-icon"><i className={data.icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{data.title}</h4>
              <p className="service-text">
                {data.text}
              </p>
            </div>
          </article>
          )
        })} 
      </div>
    </section>
    </>
  )
}

export default Services

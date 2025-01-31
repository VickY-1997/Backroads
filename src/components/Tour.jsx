import Title from "./Title"
import { Tours } from "../Data"

const Tour = () => {
  return (
    <>
        <section className="section" id="tours">

        <Title Title={"Featured"} SubTitle={"tours"}/>

      <div className="section-center featured-center">

        {Tours.map((data) => {
          const {id, img, text, heading, details, subTitle, subText1, subText2} = data
          return (
                <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{text}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{heading}</h4>
                  </div>
                  <p>
                    {details}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span><i className="fas fa-map"></i></span> {subTitle}
                    </p>
                    <p>{subText1}</p>
                    <p>{subText2}</p>
                  </div>
                </div>
              </article>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Tour

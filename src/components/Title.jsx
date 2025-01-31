
const Title = (props) => {
   
    const { Title, SubTitle } = props

  return (
   <>
    <div className="section-title">
        <h2>{Title} <span>{SubTitle}</span></h2>
    </div>
   </>
  )
}

export default Title

import {Link} from "react-router-dom"
const CourseItem = props => {
    const {courseDetails} = props
    const {name, logoUrl,id} = courseDetails
    return (
        <Link to={`/courses/${id}`}>
      <div>
        <img src={logoUrl} alt={name} />
        <h1>{name}</h1>
      </div>
      </Link>
    )
  }
  export default CourseItem
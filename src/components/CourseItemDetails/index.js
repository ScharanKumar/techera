import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// import './index.css'

class CourseItemDetails extends Component {
  state = {courseData: {}}

  componentDidMount() {
    this.getCourseItemData()
  }

  getCourseItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    console.log(response)

    const data = await response.json()
    const {course_details}=data
    console.log(data.course_details)
   

    this.setState({courseData: course_details})
  }

  renderBlogItemDetails = () => {
    const {courseData} = this.state
    const {name,image_url,description} = courseData

    return (
      <div>
        <h1>{name}</h1>

        <div>
          <img src={image_url} alt={"website logo"} />
          <p>{description}</p>
        </div>

        
      </div>
    )
  }

  render() {
   

    return (
      <div>
        { (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default CourseItemDetails

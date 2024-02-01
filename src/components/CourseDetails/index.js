import {Component} from 'react'


// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CourseItem from '../CourseItem'

// import './index.css'

class CourseDetails extends Component {
  state = { courseData: []}

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const courses1 = await response.json()
    const {courses} = courses1

    const formattedData = courses.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      logoUrl: eachItem.logo_url,
    }))

    this.setState({courseData: formattedData})
  }

  render() {
    const {courseData} = this.state

    return (
      <div>
        { (
          
            <ul>
              {courseData.map(eachBlogItem => (
                <CourseItem
                  key={eachBlogItem.id}
                  courseDetails={eachBlogItem}
                />
              ))}
            </ul>
     
        )}
      </div>
    )
  }
}

export default CourseDetails

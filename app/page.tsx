'use client'

import Courses from './components/Courses'
import { useState, useEffect } from "react"
import LoadingPage from './loading'
import CourseSearch from './components/CourseSearch'

const Home = () => {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }


  return (
    <main>
      <div>
        <h1>Welcome to Traversery Media</h1>
        {/* <Courses /> */}
        <CourseSearch getSearchResults={(results: any) => setCourses(results)} />
        <Courses courses={courses} />
      </div>
    </main>
  )
}

export default Home
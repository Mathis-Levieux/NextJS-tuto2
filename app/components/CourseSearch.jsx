'use client'
import { useState } from "react"

const CourseSearch = ({ getSearchResults }) => {
    const [query, setQuery] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/courses/search?query=${query}`)
        const courses = await res.json()
        getSearchResults(courses)
    }

    return (
        <form onKeyUp={handleSubmit} className="search-form">
            <input
                className="search-input"
                type="text"
                placeholder="Search Courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}
export default CourseSearch
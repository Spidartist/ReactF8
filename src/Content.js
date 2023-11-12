import { useState, useEffect } from "react"


const lessons = [
    {
        id: 1,
        name: "JS1"
    },
    {
        id: 2,
        name: "JS2"
    },
    {
        id: 3,
        name: "JS3"
    }
]

function Content(){
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                "red":
                                "#333"  
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}    
            </ul>            
        </div>
    )
}

export default Content
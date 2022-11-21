import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/JavaScript.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'

const Skills = () => {
  const skillList = [
    HTML,
    JavaScript,
    CSS,
    ReactImg,
    Github,
    Tailwind,
    Mongo,
    Node
  ]

  return (
    <div className="w-full h-screen text-teal-600">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full px-16">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-300 text-teal-900">
            Skills
          </p>
          <p className="py-4">// 這些是我目前所會的技能</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillList.map(item => (
            <div className="shadow-md hover:scale-110 duration-300">
              <img className='w-30 mx-auto' src={item} alt="skill icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full h-screen max-w-[1024px] mx-auto">
      {/* container */}
      <div className="max-w-[964px] px-20 mx-auto flex flex-col justify-center h-full">
        <p className="text-violet-600 font-bold text-2xl">你好！我是</p>
        <h1 className="text-teal-600 text-6xl sm:px-0 sm:text-7xl font-bold">
          Wilson Chen
        </h1>
        <h2 className="text-3xl sm:text-5xl my-2 font-bold text-blue-600 ">
          我正在尋找前端/後端工程師職位！
        </h2>
        <div>
          <button className="text-cyan-700 border-cyan-700 my-6 border-2 py-3 px-6 hover:bg-cyan-700 hover:text-gray-300 font-bold duration-300">
            <Link className="flex items-center" to="/project">
              看看我的作品吧！
              <span>
                <HiArrowNarrowRight size={20} />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

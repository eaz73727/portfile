import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="w-full h-screen">
      <div className="sm:w-full w-[300px] mx-auto h-full flex-col flex justify-center items-center">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right">
            <p className="text-4xl inline font-bold border-b-4 border-gray-300 text-teal-900">
              關於我...
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 py-4">
          <div className="sm:text-right  text-4xl font-bold">
            <p className="text-teal-600">
              您好，我叫做<p className="text-cyan-900">Wilson Chen</p>
            </p>
            <p className="text-blue-800">
              我來自<span className="text-sky-500">高雄</span>，
              <p>
                現在居住在<span className="text-yellow-700">嘉義</span>。
              </p>
            </p>
          </div>
          <div className="text-2xl font-bold">
            <p className="text-cyan-700">
              於 2022年 2月初開始在
              <p className="text-orange-500 ">Alpha Camp</p>
              進修關於<span className="text-green-600">網頁開發</span>的知識<p>並且於 10月底修業完畢</p>
              <p>
                目前正致力於尋找：
                <p>
                  <span className="text-teal-800">前端</span> /{' '}
                  <span className="text-amber-800">後端</span> 工程師職位！
                </p>
              </p>
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div></div>
          <button className="flex justify-start pl-32">
            <a
              className="text-cyan-700 border-cyan-700 my-6 border-2 py-3 px-6 hover:bg-cyan-700 hover:text-gray-300 font-bold duration-300 flex items-center"
              href="mailto:eaz73727@gmail.com"
            >
              與我聯繫！
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About

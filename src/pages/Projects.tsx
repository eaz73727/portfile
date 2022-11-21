import simpleTwitter from '../assets/simpleTwitter.png'

const projects = () => {
  return (
    <div className="w-full h-screen text-teal-600">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full px-16">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-gray-300 text-teal-900">
            作品集
          </p>
          <p className="py-4">// 以下是我之前所做過的作品</p>
        </div>
        <div className="grid sm:grid-cols-2 bg-gray-300 shadow-md hover:scale-105 duration-300">
          <img className="object-cover p-3 hover:scale-105 duration-300" src={simpleTwitter} alt="" />
          <h1 className='p-3 font-bold text-4xl'>Simple Twitter</h1>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default projects

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
          <div>
            <img
              className="object-cover p-3 hover:scale-105 duration-300"
              src={simpleTwitter}
              alt=""
            />
          </div>
          <div>
            <h1 className="p-3 font-bold text-4xl">Simple Twitter</h1>
            <p className="p-3 text-2xl sm:text-xl text-teal-800">
              這項專案是由兩個前端與兩個後端所共同開發完成的前後端分離專案。專案內容為打造一個簡易版Twitter，網頁功能有基本的文章增刪改查，並且可以註冊並登入，與一般的社群網站類似。
              <p>
                而我在這次專案所負責的部分是後端 RESTful API 撰寫與Heroku部屬。
              </p>
            </p>
            <div className="grid grid-cols-2 m-6 text-2xl gap-4 text-end px-2">
              <div>
                <a
                  className="py-2 px-4 border-2 border-teal-600 rounded-full text-teal-600 hover:bg-teal-600 hover:text-gray-100 duration-150"
                  target="_blank"
                  href="https://hsiaooooooju.github.io/simple-twitter/#/users/signin"
                >
                  DEMO
                </a>
              </div>
              <div>
                <a
                  className="py-2 px-4 border-2 border-teal-600 rounded-full text-teal-600 hover:bg-teal-600 hover:text-gray-100 duration-150"
                  target="_blank"
                  href="https://github.com/eaz73727/twitter-api-2020"
                >
                  REPO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects

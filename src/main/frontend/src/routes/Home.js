// import { useEffect, useState } from 'react'
// import Movie from '../components/Movie'
import Homecate from '../components/Home/HomeCategory'
import HomeSearch from '../components/Home/HomeSearch'
import HomeMypage from '../components/Home/HomeMyPage'
import HomeBoard from '../components/Home/HomeBoard'
function Home() {
  // return <Homecomp />
  return (
      <div  className="flex-container center full">
        <div className="full-container flex">
          <HomeSearch />
          <div className="flex-container space-between post">
            <Homecate />
            <HomeBoard />
            <HomeMypage />
          </div>
          <div className="background-white full-container center ">
            <hr className="introduce-line" />
            <div className="text-left">
              <h7>제작자: 정수민, 최예송</h7>
            </div>

            <div className="introduce">
              <h1 className="bold">
                What’s wrong again?! 은 이런 프로그램 입니다.
              </h1>
              <h3>
                기여하신 문서의 저작권은 각 기여자에게 있으며, 각 기여자는
                기여하신 부분의 저작권을 갖습니다.
              </h3>
              <h3>
                개발자의 오류사전이지만 검증되지 않았거나, 편향적이거나, 잘못된
                서술이 있을 수 있습니다.
              </h3>
              <h3>
                여러분이 직접 개발과 관련된 문서를 고칠 수 있으며, 다른 사람의
                의견을 원할 경우 직접 토론을 발제할 수 있습니다.
              </h3>
            </div>
          </div>
        </div>
      </div>

  )
}
export default Home
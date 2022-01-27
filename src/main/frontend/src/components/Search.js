import Dropdown from 'react-bootstrap/Dropdown'
import '../css/Search.css'
import { Link } from 'react-router-dom'

const drop_style = {
  'border-bottom': '2px solid darkred',
  color: 'gray',
  'background-color': 'white',
  'border-color': 'aliceblue',
  'font-size': '25px',
}

function Search() {
  return (
    <div className="flex-container center full">
      {/* 검색창쪽 전체 컨테이너 */}
      <div className="full-container flex">
        <div className="full-container center">
          <div className="flex-container center">
            <div>
              <img className="img" src="img/logo1.jpg" />
            </div>
          </div>
          <div className="flex-container center">
            <div className="dropdown">
              <Dropdown>
                <Dropdown.Toggle
                  className="dropdown"
                  variant="success"
                  id="dropdown-basic"
                >
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">html</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">c/c++</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">c#</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <form className="form">
                <input
                  className="search"
                  type="search"
                  placeholder="     Search"
                  aria-label="Search"
                />
                <button className="search-button">Search</button>
              </form>
            </div>
            <div className="flex-container center">
              <button className="logout">logout</button>
            </div>
          </div>
        </div>

        <div className="flex-container space-between post">
          {/* 카테고리(메인좌측) */}
          <div className="full-container center category">
            <div className="full-container center">
              <h1 className="category-letter">Category</h1>
            </div>
            <div className="full-container center category-container">
              <div className="dropdown" id="category-dropdown">
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropdown"
                    variant="outline-light"
                    id="category-language"
                    style={drop_style}
                  >
                    Language
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">HTML</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">C/C++</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">C#</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">JAVA</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Python</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">PHP</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">JavaScript</Dropdown.Item>
                    <Dropdown.Item href="#/action-8">SQL</Dropdown.Item>
                    <Dropdown.Item href="#/action-9">XML</Dropdown.Item>
                    <Dropdown.Item href="#/action-10">R</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">
                      Objective-C
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="full-container center category-container">
              <div className="dropdown" id="category-dropdown">
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropdown"
                    variant="outline-light"
                    id="category-framework"
                    style={drop_style}
                  >
                    Framework
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Spring</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">ASP.NET</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Vue.js</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">React.js</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">jQuery</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Django</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Express</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="full-container center">
              <h2 className="category-bold">Debate</h2>
            </div>
            <div className="full-container center">
              <h2 className="category-bold">User Request</h2>
            </div>
          </div>
          <div className="box"></div>
          {/* 게시판 */}
          <div className="full-container center board">
            <div className="flex-container center">
              <div className="flex-container center">
                <div className="board-box">
                  <h3 className="category-letter">Recent Error</h3>
                  <hr className="line" />
                  <h5 className="contents">199 | EvalError()가 발생합니다.</h5>
                </div>
              </div>
              <div className="flex-container center">
                <div className="board-box">
                  <h3 className="category-letter">Hot Error</h3>
                  <hr className="line" />
                </div>
              </div>
            </div>
            <div className="flex-container center">
              <div className="flex-container center">
                <div className="board-box">
                  <h3 className="category-letter">Current Debate</h3>
                  <hr className="line" />
                </div>
              </div>
              <div className="flex-container center">
                <div className="board-box">
                  <h3 className="category-letter">User Request</h3>
                  <hr className="line" />
                </div>
              </div>
            </div>
          </div>
          <div className="box"></div>
          {/* 메인우측 */}
          <div className="full-container center mypage">
            <div className="mypage-box">
              <img className="user-img" src="img/user.png" />
              <h2>Login</h2>
            </div>
            <div className="mypage-box">
              <div className="full-container center">Notice</div>
              <hr className="mypage-line" />
              <h4 className="notice">post</h4>
              <h4 className="notice">comment</h4>
              <h4 className="notice">debate</h4>
            </div>
          </div>
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

export default Search

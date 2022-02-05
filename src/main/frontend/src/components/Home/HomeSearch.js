import Dropdown from 'react-bootstrap/Dropdown'
import '../../css/Search.css'
import { Link } from 'react-router-dom'

const drop_style = {
    'border-bottom': '2px solid darkred',
    color: 'gray',
    'background-color': 'white',
    'border-color': 'aliceblue',
    'font-size': '25px',
}

function HomeSearch() {
    return (
        <div>
            {/* 검색창쪽 전체 컨테이너 */}

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
                                placeholder="     에러를 검색하세요"
                                aria-label="HomeSearch"
                            />
                            <button className="search-button">Search</button>
                        </form>
                    </div>
                    <div className="flex-container center">
                        <button className="logout">logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSearch
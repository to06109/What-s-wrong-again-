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

function HomeCategory() {
    return (
        <div>
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
        </div>

    )
}

export default HomeCategory
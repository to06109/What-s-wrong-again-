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

function HomeBoard() {
    return (
        <div >
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
        </div>
    )
}

export default HomeBoard
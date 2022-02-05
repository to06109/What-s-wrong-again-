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

function HomeMypage() {
    return (
        <div>
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
    )
}

export default HomeMypage
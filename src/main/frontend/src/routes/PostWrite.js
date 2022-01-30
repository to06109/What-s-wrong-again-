import Editor from '../components/EditorPost'
import Homecate from '../components/Home/HomeCategory'
import HomeSearch from '../components/Home/HomeSearch'
import HomeMypage from '../components/Home/HomeMypage'

function PostWrite() {
  return(
      <div  className="flex-container center full">
        <div className="full-container flex">
          <HomeSearch />
          <div className="flex-container space-between post">
            <Homecate />
            <Editor />
            <div className="board-size">
              <HomeMypage />
            </div>
          </div>
        </div>
      </div>

  );

}
export default PostWrite
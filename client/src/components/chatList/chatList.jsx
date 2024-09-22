import { Link } from 'react-router-dom';
import './chatList.css';


const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>Dashboard</span>
        <Link to="/dashboard">Create a New Chat</Link>
        <hr/>
        <span className='title'>Recent Chats</span>
            <div className="list">
                <Link to="">Chat Title</Link>
                <Link to="">Chat Title</Link>
                <Link to="">Chat Title</Link>
                <Link to="">Chat Title</Link>
                <Link to="">Chat Title</Link>
                <Link to="">Chat Title</Link>
                <Link to="">Chat Title</Link>
            </div>
        <hr/>
        <span className='title'>Chat Folders</span>
            <div className="list">
                <Link to="">Chat Folder</Link>
                <Link to="">Chat Folder</Link>
                <Link to="">Chat Folder</Link>
            </div>
        <hr/>
        <div className="bottom">
        <div className="settings">
              <i className="fas fa-cog"></i>
              <span> Settings</span>
          </div>
        </div>
    </div>
  );
};

export default ChatList;
import { Link } from 'react-router-dom';
import './chatList.css';
import { useQuery } from "@tanstack/react-query";


const ChatList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });


  return (
    <div className='chatList'>
      <Link to="/dashboard" className="createNewChat">Create a New Chat</Link>
      <hr />
      <span className='title'>Recent Chats</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
            ? "Something went wrong!"
            : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <span className='title'>Chat Folders</span>
      <div className="folderlist">
        <div className="folderitem">
          <i class="fa-solid fa-folder"></i>
          <span>Sales</span>
        </div>
        <div className="folderitem">
          <i class="fa-solid fa-folder"></i>
          <span>Marketing</span>
        </div>
        <div className="folderitem">
          <i class="fa-solid fa-folder"></i>
          <span>Others</span>
        </div>
      </div>
      <hr />
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
import { useNavigate } from 'react-router-dom';
import './dashboardpage.css';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from '@clerk/clerk-react';  // Import Clerk's useUser hook

const Dashboardpage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useUser();  // Get user information from Clerk

  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = (text) => {
    if (!text) return;
    mutation.mutate(text);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    handleSubmit(text);
  };

  return (
    <div className='dashboardpage'>
      <div className="greetings">
        {/* Display the user's first name */}
        <h1>Hi, {user?.firstName || 'there'}.</h1>
        <h3>How can I assist you today?</h3>
      </div>
      <div className="texts">
        <div className="options">
          <div className="option" onClick={() => handleSubmit("Give me all the information about AMP Bank's accounts.")}>
            <span>Give me all the information about AMP Bank's accounts.</span>
          </div>
          <div className="option" onClick={() => handleSubmit("Can you provide the latest AMP Bank policy on home loan refinancing?")}>
            <span>Can you provide the latest AMP Bank policy on home loan refinancing?</span>
          </div>
          <div className="option" onClick={() => handleSubmit("Summarize the sales performance of AMP Bank's investment products for the past quarter.")}>
            <span>Summarize the sales performance of AMP Bank's investment products for the past quarter.</span>
          </div>
        </div>
      </div>
      <div className="formcontainer">
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." autoComplete="off" />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboardpage;

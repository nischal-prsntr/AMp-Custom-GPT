import { useNavigate } from 'react-router-dom';
import './dashboardpage.css';
import {useMutation, useQueryClient} from "@tanstack/react-query";

const Dashboardpage = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    mutation.mutate(text);
  };
  return (
    <div className='dashboardpage'>
      <div className="texts">
        <div className="options">
          <div className="option">
            <span>What mortgage products does AMP Bank offer, and what are their key features?</span>
          </div>
          <div className="option">
            <span>Can you provide the latest AMP Bank policy on home loan refinancing?</span>
          </div>
          <div className="option">
            <span>Summarize the sales performance of AMP Bank's investment products for the past quarter.</span>
          </div>
        </div>
      </div>
      <div className="formcontainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboardpage;

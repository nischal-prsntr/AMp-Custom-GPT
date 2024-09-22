import './dashboardpage.css'

const Dashboardpage = () => {
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
        <form>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboardpage
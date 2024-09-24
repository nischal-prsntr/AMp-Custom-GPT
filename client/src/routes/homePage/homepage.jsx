import './homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {

    return (
        <div className='homepage'>
            <div className="left">
                <img src="/logo.png" />
                <h3>Empower your work with our custom AI, powered by PipGPT. Designed for AMP Bank employees, this tool leverages your insights and data to streamline processes, enhance collaboration, and provide quick access to information. Your data, your AI—making banking smarter and more efficient for you! </h3>
                <Link to="/dashboard">Start Using</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="/Amp-ai.png" alt="" className="amplogo" />
                </div>
            </div>
        </div>
    )
}

export default Homepage
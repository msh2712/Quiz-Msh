import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import topiclist from './../Utils/Topiclist';


function Topic() {
    const location = useLocation();
    const navigate = useNavigate();
    const receivedData = location.state?.myData;
    const [mydata, setMydata] = useState([]);
    console.log(receivedData);


    useEffect(() => {
        if (receivedData) {
            const newdata = topiclist.filter((item) => item.topic === receivedData);
            setMydata(newdata);
        }
    }, []);

   const handleOnClick = useCallback(({ name: name, topic: topic }) => {
    navigate(`/quiz`, { state: { myData: { name: name, topic: topic  } } });
    localStorage.removeItem("score");
    localStorage.removeItem("selected");
}, [navigate]);


    if (mydata.length === 0) {
        return <div className="w-100 d-flex justify-content-center align-items-center">No topics found for this category.</div>;
    }

    return (
        <div className='w-100 d-flex justify-content-center flex-column align-items-center mb-3'>
            <div className="navbar">
                <div className='textlogo'>Msh<span className='mshcolour'>quiz</span></div>
            </div>
            <div className="row g-3 ms mt-3">
                {mydata.map((tech  , ind) => (
                    <div key={ind} className="col-12 col-sm-6 col-lg-4">
                        <div onClick={() => handleOnClick({ name: tech.topic, topic: tech.topicname})} className="msh">
                            <div className={`${tech.css} text mb-1 css`}>{tech.icon}</div>
                            <span className="h4 an">{tech.topicname}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Topic;

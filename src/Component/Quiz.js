import { useLocation, useNavigate } from "react-router-dom";
import topicdata from './../Component/topicdata';
import { useEffect, useState, useCallback, useMemo } from "react";
import logo from "./icon";

const Quiz = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const receivedData = location.state?.myData;
    const [quizEnd, setQuizEnd] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(() => {
        return parseInt(localStorage.getItem("quizCurrentIndex")) || 0;
    });
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);;

    const newdata = useMemo(() => topicdata.filter((item) => item.topic === receivedData), [receivedData]);
    const logos = useMemo(() => logo.find((item) => item.topic === receivedData) || null, [receivedData]);
    const scorepercentage = Math.round((score / newdata.length) * 100)

    console.log(score);

    useEffect(() => {
        if (score) {
            localStorage.setItem("score", score);
            if (score && parseInt(score) < newdata.length) {
                setScore(parseInt(score));
            }
        }
    }, [score]);

    useEffect(() => {
        setScore(localStorage.getItem("score"))
        setSelectedAnswer(localStorage.getItem("selected"))
    }, [])

    // useEffect(() => {
    //     if (receivedData && newdata.length > 0) {
    //         const savedIndex = localStorage.getItem("quizCurrentIndex");
    //         if (savedIndex && parseInt(savedIndex) < newdata.length) {
    //             setCurrentIndex(parseInt(savedIndex));
    //         }
    //         const score = localStorage.getItem("score")
    //         if (score && parseInt(score) < newdata.length) {
    //             setScore(parseInt(score));
    //         }

    //     }
    // }, [receivedData, newdata.length]);


    const handleOptionClick = useCallback(
        (option) => {
            if (!selectedAnswer) {
                setSelectedAnswer(option);
                localStorage.setItem("selected", option);
            }
        },
        [selectedAnswer]
    );

    const handleNextClick = useCallback(() => {
        if (selectedAnswer) {
            if (newdata[currentIndex]?.answer === selectedAnswer) {
                setScore((prevScore) => prevScore + 1);
            }

            if (currentIndex + 1 < newdata.length) {
                const newIndex = currentIndex + 1;
                setCurrentIndex(newIndex);
                setSelectedAnswer(null);
                localStorage.setItem("quizCurrentIndex", newIndex);
            } else {
                setQuizEnd(true);
                localStorage.removeItem("quizCurrentIndex");
            }
            localStorage.removeItem("selected");
        }
    }, [selectedAnswer, currentIndex, newdata]);

    const handleclick = useCallback(() => {
        localStorage.removeItem("quizCurrentIndex");
        localStorage.removeItem("score");
        navigate("/", { replace: true });
    }, [navigate]);

    const handleRetry = useCallback(() => {
        setCurrentIndex(0);
        setScore(0);
        setQuizEnd(false);
        setSelectedAnswer(null);
        localStorage.removeItem("quizCurrentIndex");
        localStorage.removeItem("score");
    }, []);

    return (
        <div className="quizbody">
            <div className={`${logos?.class} h1 logoofquiz`}>{logos?.icon}</div>
            <span className="home" onClick={handleclick}>HOME</span>

            {!quizEnd ? (
                newdata.length > 0 ? (
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h6
                            className="qui"

                        >
                            <a>Q. </a>
                            {newdata[currentIndex]?.question}
                        </h6>
                        {newdata[currentIndex]?.options.map((option, idx) => (
                            <p
                                key={idx}
                                className={`ans px-3 
                                    ${selectedAnswer === option ? 'selected' : ''} 
                                    ${selectedAnswer === option && option === newdata[currentIndex]?.answer ? "right" : ""} 
                                    ${selectedAnswer === option && option !== newdata[currentIndex]?.answer ? "falseanswer" : ""} 
                                    ${selectedAnswer && option === newdata[currentIndex]?.answer ? 'right' : ''}`}
                                onClick={() => handleOptionClick(option)}
                                style={{ pointerEvents: selectedAnswer ? "none" : "auto" }}
                            >
                                {option}
                            </p>
                        ))}
                        <button
                            className="btn"
                            onClick={handleNextClick}
                            disabled={!selectedAnswer}
                        >
                            SUBMIT
                        </button>
                    </div>
                ) : (
                    <p>Loading quiz...</p>
                )
            ) : (
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <h2 className="result mt-2">"Quiz complete! Well done on completing the challenge!"</h2>
                    <h2 className="result mb-3">Your score is {score}/{newdata.length}</h2>

                    <div class="col-md-3 col-sm-6">
                        <div class="progress yellow">
                            <span class="progress-left">
                                <span class={`progress-bar ${scorepercentage < 60 ? "red" : "blue"}`}></span>
                            </span>
                            <span class="progress-right">
                                <span class={`progress-bar ${scorepercentage < 60 ? "red" : "blue"}`}></span>
                            </span>
                            <div class={`progress-value ${scorepercentage < 60 ? "red" : "blue"}`}><span className="text" >{scorepercentage}%</span></div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button className="btn me-3" onClick={handleRetry}>RETRY</button>
                        <button className="btn" onClick={handleclick}>HOME</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import logo from "./icon";

const Quiz = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const receivedData = location.state?.myData;
    const { name, topic } = receivedData || {};
    const [quizEnd, setQuizEnd] = useState(false);
    const [quizData, setQuizData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(() => { return parseInt(localStorage.getItem("quizCurrentIndex")) || 0; });
    const [score, setScore] = useState(() => { return parseInt(localStorage.getItem("score")) || 0; });
    const [selectedAnswer, setSelectedAnswer] = useState(localStorage.getItem("selected") || null);
    const scorepercentage = Math.round((score / quizData.length) * 100);
    const logos = useMemo(() => logo.find((item) => item.name === name) || null, [name]);


    useEffect(() => {
        const loadQuizData = async () => {
            try {
                const dataModule = await import(`../Utils/${name}.js`);
                console.log("Data Module Loaded:", dataModule);

                if (!dataModule || !dataModule.default) {
                    console.error("Invalid data module or missing default export.");
                    return;
                }
                const filteredData = dataModule.default.filter(item => item.topic === topic);
                console.log("Filtered Quiz Data:", filteredData);

                setQuizData(filteredData);
            } catch (error) {
                console.error("Error loading quiz data:", error);
            }
        };

        if (receivedData) {
            loadQuizData();
        }
    }, [receivedData, name, topic]);

    const handleOptionClick = useCallback((option) => {
        if (!selectedAnswer) {
            setSelectedAnswer(option);
            localStorage.setItem("selected", option);
        }
    }, [selectedAnswer]);

    const handleNextClick = useCallback(() => {
        if (selectedAnswer) {
            if (quizData[currentIndex]?.answer === selectedAnswer) {
                setScore(prevScore => prevScore + 1);
                localStorage.setItem("score", score + 1);
            }
            if (currentIndex + 1 < quizData.length) {
                const nextIndex = currentIndex + 1;
                setCurrentIndex(nextIndex);
                localStorage.setItem("quizCurrentIndex", nextIndex);
                setSelectedAnswer(null);
                localStorage.removeItem("selected");
            } else {
                setQuizEnd(true);
                localStorage.removeItem("quizCurrentIndex");
            }
        }
    }, [selectedAnswer, currentIndex, quizData, score]);

    const handleHomeClick = useCallback(() => {
        localStorage.removeItem("quizCurrentIndex");
        localStorage.removeItem("score");
        localStorage.removeItem("selected");
        navigate("/", { replace: true });
    }, [navigate]);

    const handleRetry = useCallback(() => {
        setCurrentIndex(0);
        setScore(0);
        setQuizEnd(false);
        setSelectedAnswer(null);
        localStorage.removeItem("quizCurrentIndex");
        localStorage.removeItem("score");
        localStorage.removeItem("selected");
    }, []);

    return (
        <div className="quizbody mb-3">
            <div className={`${logos?.class} h1 logoofquiz`}>{logos?.icon}</div>
            <span className="home" onClick={handleHomeClick}>HOME</span>

            {!quizEnd ? (
                quizData.length > 0 ? (
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h6 className="qui">
                            <span className="pe-1">{currentIndex + 1}. </span> {quizData[currentIndex]?.question}
                        </h6>
                        {quizData[currentIndex]?.options.map((option, idx) => (
                            <p
                                key={idx}
                                className={`ans px-3 
                                    ${selectedAnswer === option ? 'selected' : ''} 
                                    ${selectedAnswer === option && option === quizData[currentIndex]?.answer ? "right" : ""} 
                                    ${selectedAnswer === option && option !== quizData[currentIndex]?.answer ? "falseanswer" : ""} 
                                    ${selectedAnswer && option === quizData[currentIndex]?.answer ? 'right' : ''}`}
                                onClick={() => handleOptionClick(option)}
                                style={{ pointerEvents: selectedAnswer ? "none" : "auto" }}
                            >
                                {option}
                            </p>
                        ))}
                        <button className="btn" onClick={handleNextClick} disabled={!selectedAnswer}>
                            SUBMIT
                        </button>
                    </div>
                ) : (
                    <p>Loading quiz...</p>
                )
            ) : (
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <h2 className="result mt-2">"Quiz complete! Well done on completing the challenge!"</h2>
                    <h2 className="result mb-3">Your score is {score}/{quizData.length}</h2>

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
                        <button className="btn" onClick={handleHomeClick}>HOME</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;

import { useState } from "react";
import { Data } from "./Data";
import { toast, ToastContainer } from "react-toastify";

const QuizComponents = () => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const handleInput = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (!selectedOption) return toast.error('Must be select an option');

        if (selectedOption === Data[index].ans) {
            setScore((prev) => prev + 1);
        }

        if (index < Data.length - 1) {
            setIndex((prev) => prev + 1);
            setSelectedOption("");
        } else {
            setShowScore(true);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
            setSelectedOption("");  
        }
    };

    const reset = () => {
        setIndex(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(""); 
    };

    return (
        <div>
            <div className="text-center py-16 container bg-[#3f405a40] rounded-lg my-8">
                <h3>Quiz</h3>
                <p className="md:w-2/4 sm:w-4/5 mx-auto leading-[17px]">
                    Challenge yourself with coding quizzes, improve problem-solving, and compete with the community to earn rewards!
                </p>
            </div>

            <div className="bg-[#3f405a40] max-w-3xl p-8 mx-auto my-20 rounded-xl shadow-lg">
                {showScore ? (
                    <div className="text-center">
                        <p className="text-2xl font-bold text-white">
                            Your Score: {score} / {Data.length}
                        </p>
                        <button
                            onClick={reset}
                            className="mt-4 w-36 h-10 text-lg bg-custom-primary text-white rounded-lg"
                        >
                            Try Again
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="text-center">
                            <h1 className="text-xl font-bold text-white">Q: {Data[index].q}</h1>
                        </div>

                        <div className="mt-4">
                            {["a", "b", "c", "d"].map((option) => (
                                <label key={option} className="flex items-center cursor-pointer">
                                    <input
                                        name="select"
                                        type="radio"
                                        onChange={handleInput}
                                        className="w-6 cursor-pointer"
                                        value={Data[index][option]}
                                        checked={selectedOption === Data[index][option]}
                                        required
                                    />
                                    <p className="ml-2 text-lg text-white">
                                        {option.toUpperCase()} : {Data[index][option]}
                                    </p>
                                </label>
                            ))}
                        </div>

                        <div className="text-center mt-6 flex justify-between">
                            <button
                                onClick={handlePrevious}
                                className={`w-36 h-10 text-lg bg-custom-primary text-white rounded-lg ${
                                    index === 0 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                disabled={index === 0}
                            >
                                Pre
                            </button>

                            <button
                                onClick={handleNext}
                                className="w-36 h-10 text-lg bg-custom-primary text-white rounded-lg"
                            >
                                {index === Data.length - 1 ? "Finish" : "Next"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizComponents;

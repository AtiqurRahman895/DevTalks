import { Link } from "react-router";

const QuestionCard = ({ question }) => {
  return (
    <div
      key={question.id}
      className="py-6 px-4 bg-custom-half-gray border border-custom-half-gray rounded-lg space-y-2"
    >
      <Link
        to="#"
        className="text-custom-primary hover:underline cursor-pointer"
      >
        <h5>{question.title}</h5>
      </Link>

      <div className="flex justify-between flex-wrap items-center gap-x-6 gap-y-3">
        <div className="text-custom-gray flex gap-2">
          <Link to="/profile">
            <b className="cursor-pointer hover:underline">
              👤 {question.user}
            </b>
          </Link>
          <span>⏳{question.time}</span>
        </div>

        <div className="flex gap-2">
          {question.categories.map((category, index) => (
            <b
              key={index}
              className="px-3 py-1 bg-custom-primary hover:bg-custom-half-primary border border-custom-primary rounded-full shadow-sm transition"
            >
              {category}
            </b>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

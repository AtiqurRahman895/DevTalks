import { Link } from "react-router";
import useGetRelativeTime from "../../Hooks/useGetRelativeTime";
import { FaRegClock, FaRegUser } from "react-icons/fa";

const QuestionCard = ({ question }) => {
  const formatRelativeTime= useGetRelativeTime()

  return (
    <div
      // key={question.id}
      className="py-6 px-4 bg-custom-half-gray border border-custom-half-gray rounded-lg space-y-2"
    >
      <Link
        to={`/question/${question._id}`}
        className="text-custom-primary hover:underline cursor-pointer"
      >
        <h5 className="">{question.title}</h5>
      </Link>

      <div className="flex justify-between flex-wrap items-center gap-x-6 gap-y-3">

        <div className="text-custom-gray flex flex-wrap gap-3">

          <Link to={`/profile/${question.askerEmail}`} className="flex items-center gap-1">
              <FaRegUser className="text-white" />
              <b className="cursor-pointer hover:underline">
              {question.asker}
              </b>
          </Link>

          <div className="flex items-center gap-1">
            <FaRegClock className="text-white" />
            <span>{formatRelativeTime(question.createdAt)}</span> {/* Relative time */}
          </div>
          
        </div>

        <div className="flex gap-2">
          {question.tags.map((tag, index) => (
            <Link
              to={`/questions?tag=${tag}`}
              key={index}
              className="px-3 py-1 font-bold bg-custom-primary hover:bg-custom-half-primary border border-custom-primary rounded-full shadow-sm transition"
            >
              {tag}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default QuestionCard;

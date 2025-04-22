import { Link } from "react-router";
import useGetRelativeTime from "../../Hooks/useGetRelativeTime";
import { FaRegClock, FaRegUser } from "react-icons/fa";

const BlogCard = ({blog, showImage=false}) => {
  const formatRelativeTime= useGetRelativeTime()
    return (
        <div
            className={`border border-custom-half-gray rounded-lg h-auto ${showImage&&"!bg-[linear-gradient(175deg,rgba(0,0,0,1)0%,rgba(55,55,55,.3)75%);]"}`}
        >
            {
                (showImage) &&(
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full aspect-[3/2] object-cover object-center rounded-t-lg"
                    />
                )
            }

            <div className={`py-6 px-4 space-y-2 ${showImage||"!bg-[linear-gradient(175deg,rgba(0,0,0,1)0%,rgba(55,55,55,.3)75%);]"}`}>

                <Link to={`/blog/${blog._id}`} className="text-custom-primary hover:underline cursor-pointer">
                    <h5 className="">{blog.title}</h5>
                </Link>

                <div className="text-custom-gray flex flex-wrap gap-3">

                    <Link to={`/profile/${blog.authorEmail}`} className="flex items-center gap-1">
                        <FaRegUser className="text-white" />
                        <b className="cursor-pointer hover:underline">
                            {blog.author}
                        </b>
                    </Link>

                    <div className="flex items-center gap-1">
                        <FaRegClock className="text-white" />
                        <span>{formatRelativeTime(blog.createdAt)}</span> {/* Relative time */}
                    </div>

                </div>
            </div>

      </div>
    );
};

export default BlogCard;
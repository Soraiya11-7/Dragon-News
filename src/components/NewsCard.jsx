
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = (props={}) => {
    const {news} = props || {};

    const {
      _id,
        author,
        title,
        thumbnail_url,
        details,
        rating,
        total_view,
        others_info,
      } = news;
    

  return (
    <div className="card bg-base-100 border rounded-lg">
      {/* Author Info */}
      <div className="flex items-center p-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-12  h-full rounded-full object-contain"
        />
        <div className="ml-3">
          <h3 className="text-sm font-semibold">{author.name}</h3>
          <p className="text-xs text-gray-500">{author?.published_date?.split(' ')[0]}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <BsBookmark className="text-gray-500 hover:text-blue-500 cursor-pointer" />
          <AiOutlineShareAlt className="text-gray-500 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="w-full h-48 object-cover rounded my-3"
        />
        <p className="text-sm text-gray-600 mb-3">
          {details.length > 100 ? details.substring(0, 100) + "..." : details}{" "}
          <Link to={`/news/${_id}`} className="text-blue-500 cursor-pointer">Read More</Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        {/* Rating */}
        <div className="flex items-center">
          <AiFillStar className="text-yellow-500" />
          <span className="text-sm font-semibold ml-1">{rating.number}</span>
        </div>
        {/* Views */}
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-1">{total_view}</span>
          views
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


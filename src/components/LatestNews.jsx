import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 justify-center bg-gray-100 p-2">
            <h2 className="bg-rose-600 text-base-100 px-2 py-1 ">Latest</h2>
            <Marquee pauseOnHover={true} speed={100} className="space-x-6">
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
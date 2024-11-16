import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    // console.log(news);
    return (
        <div>
           
            <h3 className="font-semibold mb-3">Dragon News Home</h3>
            <h2 className="text-gray-400 text-sm">{news.length} news found in this category</h2>
            <div>
                {
                    news.map(singleNews => 
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                    )
                }

            </div>
        </div>
    );
};

export default CategoryNews;
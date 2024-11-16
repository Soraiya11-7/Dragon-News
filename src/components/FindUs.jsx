import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-5">
            <h2 className="font-semibold mb-3">Find Us</h2>

            <div className="join flex join-vertical w-full *:bg-gray-50 ">
                <button className="btn join-item justify-start "><FaFacebook></FaFacebook> facebook</button>
                <button className="btn join-item justify-start "><FaTwitter></FaTwitter>  Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
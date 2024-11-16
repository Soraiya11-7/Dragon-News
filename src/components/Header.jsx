
import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-4'>
            <div>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400'>Lorem ipsum dolor sit</h2>
            <h2>{moment().format("dddd, MMMM Do YYYY")}</h2>
        </div>
    );
};

export default Header;
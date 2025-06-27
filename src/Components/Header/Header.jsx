import mainLogo from '../../assets/logo.png';

const Header = ({freeCredit}) => {
    return (
        <div className='flex justify-between items-center py-2'>
            <img className='w-12 md:w-16' src={mainLogo} alt="Logo-img" />
            <div className='flex gap-5 items-center'>
                <ul className='hidden md:block'>
                    <div className='flex gap-5 font-semibold'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Fixture</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Schedules</a></li>
                    </div>
                </ul>
                <button className='bg-amber-100 rounded px-4 py-2 font-bold md:text-lg'>Total = {freeCredit} Tk</button>
            </div>
        </div>
    );
};

export default Header;
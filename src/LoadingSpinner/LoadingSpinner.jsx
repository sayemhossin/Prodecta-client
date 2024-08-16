import { PiSpinnerBallFill } from "react-icons/pi";
const LoadingSpinner = ({ smallHeight }) => {
    return (
        <div
        className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
        flex 
        flex-col 
        justify-center 
        items-center `}
      >
        <PiSpinnerBallFill  className="animate-spin" size={100} color='#FF9100' />
      </div>
    );
};

export default LoadingSpinner;
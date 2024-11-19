import Button from '@mui/material/Button';
import { FaArrowAltCircleDown } from "react-icons/fa";
const CountryDropdown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className='label'>Your Location</span>
          <span className='name'>India</span>
        </div>
        <span className='ml-auto'><FaArrowAltCircleDown /></span>
      </Button>
    </>
  );
};
export default CountryDropdown;

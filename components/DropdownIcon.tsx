import 'bootstrap/dist/css/bootstrap.min.css';


import { DropdownButton, Dropdown } from 'react-bootstrap';

function DropdownIcon() {
  return (
	<select
  className="border rounded-full w-24 h-12"
  onChange={(e) => {
    const selectedOption = e.target.value;
    if (selectedOption === "MHTCET") {
      window.location.href = "/Mock"; // redirect to /option1
    } else if (selectedOption === "option2") {
      window.location.href = "/option2"; // redirect to /option2
    } else if (selectedOption === "option3") {
      window.location.href = "/option3"; // redirect to /option3
    }
  }}
>
  <option value="" className='text-center text-2xl font-serif outline-none'>Quiz</option>
  <option value="MHTCET">MHTCET</option>
  <option value="option2">NEET</option>
  <option value="option3">GRE</option>
</select>

  
  );
}



export default DropdownIcon;
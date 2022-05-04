import PropTypes from "prop-types";
import { useState } from 'react';

const Hello = ({name, age, bgColor}) => {
  const futureAge = age ? parseInt(age) + 1 : "no info";

  const [clicked, setClicked] = useState(false);

  const clickedMark = clicked ? "X" : " ";

  return (
    <h1 className="title" 
        onClick={() => setClicked(!clicked)}
        style={{ backgroundColor: bgColor }}
    >
      [{clickedMark}] {name} is from Lisbon. (age in 1 year: {futureAge})
    </h1>
  );
};

export default Hello ;

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

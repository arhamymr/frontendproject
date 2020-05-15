import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, ...props }) => {
  return (
    <i className="material-icons" {...props}>
      {name}
    </i>
  );
};


Icon.propTypes = {
	name:  PropTypes.string,
}

export default Icon
import React from "react";
import PropTypes from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} loading="lazy" />
      <p>{title}</p>
    </div>
  );
};

GifItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;

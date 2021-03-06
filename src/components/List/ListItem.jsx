﻿import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ listItem, deleteListItem }) => {
  return (
    <div className="col-12 mb-3 border">
      <div className="row">
        <div className="col-11">
          <p className="mt-3">{listItem.text}</p>
        </div>
        <div className="col-1">
          <button
            type="button"
            className="close py-2"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => deleteListItem(listItem)}
          >
            <div aria-hidden="true">&times;</div>
          </button>
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  listItem: PropTypes.any,
  deleteListItem: PropTypes.func
}

export default ListItem;
import React from "react";
import classnames from "classnames";
import styles from "./masterdetail.module.css";
import flagAvatar from "../../images/flag.png";
import PropTypes from "prop-types";

const MasterDetailSideBarTab = ({ sampleOrder, selectSampleOrder }) => {
  return (
    <button
      onClick={() => selectSampleOrder(sampleOrder)}
      type="button"
      className={classnames(
        "list-group-item",
        "list-group-item-action",
        styles.sidebarText
      )}
    >
      <img src={ sampleOrder.imageSrc ? sampleOrder.imageSrc : flagAvatar} alt="Flag" height="40" width="40" className="mr-3" />
      {sampleOrder.title}
    </button>
  );
}

MasterDetailSideBarTab.propTypes = {
  sampleOrder: PropTypes.any,
  selectSampleOrder: PropTypes.func
}

export default MasterDetailSideBarTab;
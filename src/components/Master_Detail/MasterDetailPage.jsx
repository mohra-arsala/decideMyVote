import React from "react";
import classnames from "classnames";
import styles from "./masterdetail.module.css";
import PropTypes from "prop-types";

const MasterDetailPage = ({ textSampleData }) => {
  const {
    longDescription,
    title,
    runningFor,
    party,
    endorsements,
  } = textSampleData;
  return (
    <div className="col">
      <div className={classnames("row", styles.heading)}>
        <div className="col">
          <h3 className="ml-3 mb-4">{title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-12 ml-3 mb-5 mt-3">
          <p className={styles.title}>Running For</p>
          <p>{runningFor}</p>
          <p className={styles.title}>Party</p>
          <p>{party}</p>
          <p className={styles.title}>Endorsements</p>
          <p>{endorsements}</p>
          <p className={styles.title}>Description</p>
          <p>{longDescription}</p>
        </div>
      </div>
    </div>
  );
}

MasterDetailPage.propTypes = {
  textSampleData: PropTypes.any
}

export default MasterDetailPage;
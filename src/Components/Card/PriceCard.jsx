import React from 'react';
import './Card.css';

const PriceCard = ({ title, price, user, storage, projects, access, project, support, domain, report }) => {
  // Function to render features based on the user type
  const renderProjectFeature = () => {
    if (user === "single-user") {
      return (
      <>
      
      <li><i className="fa-solid fa-x"></i> {project}</li>
      <li><i className="fa-solid fa-x"></i> {support}</li>
          <li><i className="fa-solid fa-x"></i> {domain}</li>
          <li><i className="fa-solid fa-x"></i> {report}</li>

      </>
      );
    } else if(user ==="5 Users") {
      return (<div>
        <li><i className="fa-solid fa-check"></i> {project}</li>
        <li><i className="fa-solid fa-check"></i> {support}</li>
          <li><i className="fa-solid fa-check"></i> {domain}</li>
          <li><i className="fa-solid fa-x"></i> {report}</li>

      </div>);
    }
    else {
      return (<div>
        <li><i className="fa-solid fa-check"></i> {project}</li>
        <li><i className="fa-solid fa-check"></i> {support}</li>
          <li><i className="fa-solid fa-check"></i> {domain}</li>
          <li><i className="fa-solid fa-check"></i> {report}</li>

      </div>);
    }
  };

  return (
    <div className='main'>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" id="title">{title}</h5>
        <h1 className="card-title" id="price">{price}</h1>
        <hr />
        <ul className="Card-text" type="none">
          <li><i className="fa-solid fa-check"></i>  {user}</li>
          <li><i className="fa-solid fa-check"></i> {storage}</li>
          <li><i className="fa-solid fa-check"></i> {projects}</li>
          <li><i className="fa-solid fa-check"></i> {access}</li>
          {renderProjectFeature()} {          }
                  </ul>
        <a href="#" className="btn btn-primary">Subscribe</a>
      </div>
    </div>
    </div>
  );
};

export default PriceCard;

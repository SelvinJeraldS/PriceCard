import React from 'react';
import PriceCard from './Components/Card/PriceCard';

const App = () => {
  const priceCardsData = [
    {
      title: "FREE",
      price: "$0 / month",
      user: "single-user",
      storage: "50Gb Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      project: "Unlimited Private projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Report"
    },
    {
      title: "Plus",
      price: "$9 / month",
      user: "5 Users",
      storage: "50Gb Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      project: "Unlimited Private projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Report"
    },
    {
      title: "Pro",
      price: "$49 / month",
      user: "Unlimited Users",
      storage: "50Gb Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      project: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Report"
    }
  ];

  return (
    <div className="card-group">
      {priceCardsData.map((data, index) => (
        <PriceCard
          key={index}
          title={data.title}
          price={data.price}
          user={data.user}
          storage={data.storage}
          projects={data.projects}
          access={data.access}
          project={data.project}
          support={data.support}
          domain={data.domain}
          report={data.report}
          // user={data.user} // Pass user type as prop
        />
      ))}
    </div>
  );
};

export default App;

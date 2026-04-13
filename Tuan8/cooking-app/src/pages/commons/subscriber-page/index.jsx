import React from "react";
import AllAccessIncludes from './AllAccessIncludes'
import ChefSubscription from './ChefSubscription'
import HeroSubscribe from './HeroSubscribe'
const SubscriberPage = () => {
  return (
    <div className="px-8">
      <HeroSubscribe />
      <AllAccessIncludes />
      <ChefSubscription />
    </div>
  );
};

export default SubscriberPage;
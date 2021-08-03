import React from "react";

interface HomePageFC extends React.FC {
  pageTitle?: string;
}

const HomePage: HomePageFC = () => {
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

HomePage.pageTitle = "Página inicial";

export default HomePage;

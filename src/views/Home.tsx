import React from "react";
import warrior from "../graphics/warrior.jpg";

export const Home = () => (
  <>
    <h1 className="article__title">Wellcome to the warrior fight arena!</h1>
      <img className="article__img" src={warrior} alt="" />
      <h3 className="article__sub-title">Are you sure you are brave enough for a fight? Add your warrior then with
        certain attributes and test yourself!
        <a className="article__link" href="/warrior/add-form"> Register a new
          warrior
        </a>
      </h3>
  </>
);

import React from "react";
import warrior from "../graphics/warrior.jpg";
import {Link} from "react-router-dom";

export const Home = () => (
  <>
    <h1 className="article__title">Wellcome to the warrior fight arena!</h1>
      <img className="article__img" src={warrior} alt="" />
      <h3 className="article__sub-title">Are you sure you are brave enough for a fight? Add your warrior then with
        certain attributes and test yourself!
        <Link to="/warrior/add-form" className="article__link"> Register a new
          warrior
        </Link>
      </h3>
  </>
);

import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../views/Home";
import {HallOfFame} from "../views/HallOfFame";
import {FightForm} from "../views/FightForm";
import {AddForm} from "../views/AddForm";
import {ListAllWarriors} from "../views/ListAllWarriors";
import {NotFoundView} from "../views/NotFoundView";

export const Main = () => (
    <article className="article">
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/warrior/add-form' element={<AddForm/>} />
            <Route path='/arena/fight-form' element={<FightForm/>} />
            <Route path='/hall-of-fame' element={<HallOfFame/>} />
            <Route path='/warrior' element={<ListAllWarriors/>} />
            <Route path='/*' element={<NotFoundView />} />
        </Routes>
    </article>
);

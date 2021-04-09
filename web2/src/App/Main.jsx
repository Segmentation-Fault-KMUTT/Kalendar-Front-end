import { Button } from "../Component";
/*import { useEffect, useState } from "react";*/
import Calendar from "./Calendar";
import { v4 as uuid } from "uuid";
import React, { useContext, useEffect, useRef, useState } from "react";

const AppContext = React.createContext(null);

const TopBar = () => {
  const { fn } = useAppContext();

  return (
    <div className="row m-0">
      <div className="col-5 my-auto">
        <div className="row">
          {[
            {
              el: (
                <Button>
                  <i className="fas fa-user-circle fs-60px"></i>
                </Button>
              ),
            },
            {
              el: (
                <Button
                  onClick={() => {
                    alert("Open Month and Year picker!");
                  }}
                >
                  <div className="fw-light fs-5">
                    <i className="fas fa-calendar pe-2"></i>April 2021
                  </div>
                </Button>
              ),
            },
            {
              el: (
                <Button
                  onClick={() => {
                    fn.goToday();
                  }}
                  color="blue4"
                >
                  Today
                </Button>
              ),
            },
          ].map((v) => (
            <div key={uuid()} className="col-auto my-auto">
              {v.el}
            </div>
          ))}
        </div>
      </div>
      <div className="col my-auto">
        <Button to="/">
          <div className="fw-bold fs-2 x">Kalendar</div>
        </Button>
      </div>
      <div className="col-5 my-auto">
        <div className="row">
          <div className="col"></div>
          {[
            {
              icon: "fas fa-calendar-alt",
              onClick: () => {},
            },
            {
              icon: "fas fa-cog",
              onClick: () => {},
            },
            {
              icon: "fas fa-search",
              onClick: () => {},
            },
            {
              icon: "fas fa-share",
              onClick: () => {},
            },
            {
              icon: "fas fa-plus-circle",
              onClick: () => {},
            },
          ].map((v) => (
            <div key={uuid()} className="col-auto">
              <Button onClick={v.onClick}>
                <i className={`${v.icon} fs-40px`}></i>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const useAppContext = () => {
  const { fn, events } = useContext(AppContext);
  return {
    fn,
    events,
  };
};

const Main = () => {
  const fn = useRef({});
  const events = useRef({ list: [] });
  const [eventsLoaded, setEventsLoaded] = useState(false);
  useEffect(() => {
    events.current.list = [
      { title: "The Title 1", start: "2021-04-08T22:00:00.000Z", end: "2021-04-09T05:00:00.000Z" },
      { title: "The Title 2", start: "2021-04-09T17:00:00.000Z", end: "2021-04-10T17:00:00.000Z" },
      { title: "The Title 3", start: "2021-04-09T17:00:00.000Z", end: "2021-04-10T17:00:00.000Z" },
    ];
    setEventsLoaded(true);
    //console.log(events.current);
    // eslint-disable-next-line
  }, []);
  return (
    <AppContext.Provider value={{ fn: fn.current, events: events.current }}>
      <div className="pt-4">
        <div className="mx-auto" style={{ width: "1024px" }}>
          <TopBar />
          <div className="pt-3">{eventsLoaded ? <Calendar /> : <></>}</div>
        </div>
      </div>
    </AppContext.Provider>
  ); //fas fa-share
};

export default Main;
export { useAppContext };

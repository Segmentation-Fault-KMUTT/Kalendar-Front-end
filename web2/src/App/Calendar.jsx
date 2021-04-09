import { Button } from "../Component";
import { useEffect, useRef, useState } from "react";
//import { Draggable } from "@shopify/draggable";
//import "@interactjs/actions/drag";
//import interact from "@interactjs/interact";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
//import "fullcalendar/"
import { useAppContext } from "./Main";

const Calendar = () => {
  const { fn, events } = useAppContext();
  const calendarRef = useRef(null);
  const calendarAPI = useRef(undefined);

  useEffect(() => {
    //console.log(events.current);
    calendarAPI.current = calendarRef.current.getApi();

    fn.goToday = () => {
      calendarAPI.current.today();
    };
    fn.changeView = (view) => {
      calendarAPI.current.changeView(view);
    };
    //calendarAPI.current.next();

    // eslint-disable-next-line
  }, []);
  //console.log(view);
  return (
    <div>
      <div className="bg-kl-dark p-3 rounded-3" style={{}}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="540px"
          headerToolbar={{
            /*false*/ start: "prev",
            center: "title",
            end: "next",
          }}
          editable={true}
          eventsSet={(eventsList) => {
            events.list = eventsList.map((v) => {
              return {
                title: v.title,
                start: new Date(v.start),
                end: new Date(v.end),
              };
            });

            //} catch {}
          }}
          events={events.list}
        />
      </div>
    </div>
  );
};

const ViewControl = ({ current = "Month", changeView = (view) => {} }) => {
  return (
    <div className="row">
      <div className="col" />
      {["Day", "Week", "Month"].map((v) => (
        <div key={v} className="col-auto my-auto">
          <Button
            color={current === v ? "pink" : ""}
            className="w-100px"
            onClick={() => {
              changeView(v);
            }}
          >
            {v}
          </Button>
        </div>
      ))}
      <div className="col" />
    </div>
  );
};

const getFullCalendarView = (view) => {
  return [
    { view: "Month", full: "dayGridMonth" },
    { view: "Week", full: "timeGridWeek" },
    { view: "Day", full: "timeGridDay" },
  ].find((v) => v.view === view).full;
};

const MainCalendar = () => {
  const [currentView, setCurrentView] = useState("Month");
  const { fn } = useAppContext();

  /* Method */
  const changeViewFn = (v) => {
    setCurrentView(v);
  };
  useEffect(() => {}, []);
  useEffect(() => {
    if (currentView && fn.changeView) {
      fn.changeView(getFullCalendarView(currentView));
    }
    // eslint-disable-next-line
  }, [currentView]);
  return (
    <div>
      <div className="no-select">
        <Calendar view={currentView} />
      </div>
      <div className="pt-3">
        <ViewControl
          current={currentView}
          changeView={(v) => {
            changeViewFn(v);
          }}
        />
      </div>
    </div>
  );
};

export default MainCalendar;

import React, {useEffect, useState} from "react";
import Calendar from "@/app/component/Calendar";
import EventCarousel from "@/app/component/EventCarousel";
import {Event} from "../../../Laviree/laviree/sanity/types/componentTypes";
const FacebookCalendar = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

    useEffect(() => {
        const pageId = 'your-page-id';
        const accessToken = 'your-access-token';

        fetch(`https://graph.facebook.com/${pageId}/events?access_token=${accessToken}`)
            .then(response => response.json())
            .then(data => {
                setEvents(data.data);
                setFilteredEvents(data.data);
            });
    }, []);

    const handleDayClick = (day:number) => {
        const filteredEvents = events.filter(event => {
            const eventDate = new Date(event.start_time);
            return eventDate.getDate() === day;
        });
        setFilteredEvents(filteredEvents);
    };
    return (
        <div style={{ display: 'flex' }}>
            <div style={{width: '25%'}}>
            <Calendar events={events} onDayClick={handleDayClick} />
            </div>
            <EventCarousel events={filteredEvents} />
        </div>
    );
}
export default FacebookCalendar;
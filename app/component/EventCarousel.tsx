import React from 'react';
import {Event} from "../../../Laviree/laviree/sanity/types/componentTypes";

interface CarouselProps {
    events: Event[];
}

const Carousel: React.FC<CarouselProps> = ({events}) => {
    if(!events) return (<></>);
    return (<>
            <h2>Events</h2>
            <div>
                {/* Render events in a carousel */}
                {events.map(event => (
                    <div key={event.id}>
                        <h3>{event.name}</h3>
                        {event.cover && <img src={event.cover.source} alt={event.name}/>}
                        <p>{event.description}</p>
                    </div>
                ))}

            </div>
        </>
    )
}
export default Carousel;
import axios from 'axios';

const API_URL = 'api/events/';

// Create a new event

const createEvent = async (eventData) => {
    const response = await axios.post(API_URL, eventData);
    return response.data;
}

// Get all events

const getAllEvents = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

// Delete an event

const deleteEvent = async (eventId) => {
    const response = await axios.delete(API_URL + eventId);
    return response.data;
}

const eventService = {
    createEvent,
    getAllEvents,
    deleteEvent
}

export default eventService;
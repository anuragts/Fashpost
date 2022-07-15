import axios from 'axios';

const API_URL = 'api/events/';

// Create a new event

const createEvent = async (eventData,token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, eventData,config);
    return response.data;
}

// Get all events

const getAllEvents = async (token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL,config);
    return response.data;
}

// Delete an event

const deleteEvent = async (eventId,token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + eventId, config);
    return response.data;
}

const eventService = {
    createEvent,
    getAllEvents,
    deleteEvent
}

export default eventService;
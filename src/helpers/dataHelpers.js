import { eventUrl } from "../config";

export const dataFetch = (eventId) =>
  fetch(`${eventUrl}?eventid=${eventId}`)
    .then((res) => res.json())
    .catch((err) => console.log("error", err));

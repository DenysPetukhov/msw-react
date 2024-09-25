import { http, bypass, HttpResponse } from "msw";
import { modifiedType, eventUrl } from "../config";

export const handlers = [
  http.get(eventUrl, async ({ request }) => {
    const url = new URL(request.url);
    const fetchType = localStorage.getItem("fetchType");

    switch (fetchType) {
      case modifiedType:
        const data = await fetch(bypass(url)).then((response) =>
          response.json()
        );

        return HttpResponse.json({
          ...data,
          additionalData: ["anyData"],
        });
      default:
        return HttpResponse.json({
          fakeData: true,
        });
    }
  }),
];

## WhosPlaying
A web-app to quickly find local concerts in your current location or search for concerts in other locations.

### Background / About
The initial goal behind this application was to create a very quick, simple, and visually appealing interface to see who's playing concerts in your current location. The original idea was to restrict it to only your current location, and only for the current day or next day. This scope was expanded to include a search feature to allow for the ability to search other locations, and an option to see who's playing up to a week out from the current date. Clicking on an event from the list will route the user to a detail view for that event where they can see more information about the artists performing, get directions to the venue, or find tickets to the show.

### APIs Used
- SeatGeek API
- Google Maps Geocode API
- Google Maps Embed API

### Primary JavaScript Technoligies Used
- React
- React Router
- Redux
- Moment
- Webpack

### Next Steps
I would like to use another API such as [Musikki](https://music-api.musikki.com/) to get more detailed information on the artists playing at each show, such as band bios, images, start year, recent releases, etc. I would also like to add the ability to click the pins on the map to see the name of the venue and which artists will be playing at that venue in the specified time range.

### Screenshots

#### Main view:
![screenshot1](https://raw.githubusercontent.com/dstock48/whosplaying/master/screenshots/whosplaying1.png)

#### Event Detail view:
![screenshot2](https://raw.githubusercontent.com/dstock48/whosplaying/master/screenshots/whosplaying2.png)
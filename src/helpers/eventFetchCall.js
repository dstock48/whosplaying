import apiKey from '../apiKey'

const today = new Date();
const todayDate = today.getDate();

const getEventData = () => {
  fetch(`https://api.seatgeek.com/2/events?client_id=${apiKey}=true&range=12mi&type=concert&per_page=25&datetime_local.lte=2017-07-${todayDate + 2}`)
    .then(data => data.json())
    .then(data => data.events)

    .then(data => data.map(event => {
      const names = event.performers.map(perf => perf.short_name)
      const genres = event.performers.map(perf => {
      if (perf.genres) {
        const mappedGenres = perf.genres.map(genre => genre.name)
        return mappedGenres
      } else {
        return 'no genre data'
      }

      })
      return {
        performers: {
          names,
          genres
        },
        date: event.datetime_local
      }
    }))

    .then(data => console.dir(data))
}

export default getEventData;

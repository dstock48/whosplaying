const cleanEventData = (data) => {
  const cleanedData = data.events
  .map(event => {
    const primaryArtist = event.performers.find(perf => perf.primary === true)
    const supportingArtists = event.performers.filter(perf => perf.primary !== true)
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
        genres,
        primary: primaryArtist.short_name,
        supporting: supportingArtists.map(artist => artist.short_name)
      },
      date: event.datetime_local,
      venue: {
        name: event.venue.name,
        address1: event.venue.address,
        address2: event.venue.extended_address,
        location: event.venue.location
      },
      avgPrice: event.stats.average_price,
      url: event.url
    }
  })

  return cleanedData;
}

export default cleanEventData;

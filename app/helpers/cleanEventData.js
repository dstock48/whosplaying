const cleanEventData = (data) => {
  const cleanedData = data.events
  .map(event => {
    const primaryArtist = event.performers.find(perf => perf.primary === true)
    const supportingArtists = event.performers.filter(perf => perf.primary !== true)
    const names = event.performers.map(perf => perf.short_name.split('/').join(' - '))
    const genres = event.performers.reduce((acc, perf) => {
      if (perf.genres) {
        const mappedGenres = perf.genres.map(genre => genre.name)
        acc[perf.short_name.split('/').join(' - ')] = mappedGenres
      } else {
        acc[perf.short_name.split('/').join(' - ')] = ['no genre data']
      }
      return acc
    }, {})

    return {
      performers: {
        names,
        genres,
        primary: primaryArtist.short_name.split('/').join(' - '),
        supporting: supportingArtists.map(artist => artist.short_name.split('/').join(' - '))
      },
      date: event.datetime_local,
      venue: {
        name: event.venue.name,
        address1: event.venue.address,
        address2: event.venue.extended_address,
        location: event.venue.location
      },
      url: event.url,
      id: event.id
    }
  })

  return cleanedData;
}

export default cleanEventData;

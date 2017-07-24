import * as actions from './index';

describe('actions', () => {

  it('should create an action to set current location', () => {
    const location = 'Wantagh, NY';
    const expectedAction = {
      type: 'LOCATION_CHANGE',
      location: 'Wantagh, NY'
    }
    expect(actions.setCurrentLocation(location)).toEqual(expectedAction)
  });

  it('should create an action to set event data', () => {
    const events = [
      {
        "performers": {
          "names": [
            "SF1"
          ],
          "genres": [
            [
              "Hip-Hop",
              "Rap"
            ]
          ],
          "primary": "SF1",
          "supporting": []
        },
        "date": "2017-07-23T15:00:00",
        "venue": {
          "name": "Globe Hall",
          "address1": "4483 Logan St",
          "address2": "Denver, CO 80216",
          "location": {
            "lon": -104.983,
            "lat": 39.7781
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/sf1-tickets/denver-colorado-globe-hall-2-2017-07-23-3-pm/concert/3895146"
      },
      {
        "performers": {
          "names": [
            "The String Cheese Incident",
            "Grant Farm"
          ],
          "genres": [
            [
              "Pop",
              "Rock"
            ],
            "no genre data"
          ],
          "primary": "The String Cheese Incident",
          "supporting": [
            "Grant Farm"
          ]
        },
        "date": "2017-07-23T17:00:00",
        "venue": {
          "name": "Red Rocks Amphitheatre",
          "address1": "18300 West Alameda Parkway",
          "address2": "Morrison, CO 80465",
          "location": {
            "lon": -105.203,
            "lat": 39.6752
          }
        },
        "avgPrice": 87,
        "url": "https://seatgeek.com/the-string-cheese-incident-with-grant-farm-tickets/morrison-colorado-red-rocks-amphitheatre-2017-07-23-5-pm/concert/3775187"
      },
      {
        "performers": {
          "names": [
            "Lifehouse",
            "Switchfoot"
          ],
          "genres": [
            [
              "Pop",
              "Rock",
              "Alternative"
            ],
            [
              "Pop",
              "Rock",
              "Alternative"
            ]
          ],
          "primary": "Lifehouse",
          "supporting": [
            "Switchfoot"
          ]
        },
        "date": "2017-07-23T18:00:00",
        "venue": {
          "name": "Fillmore Auditorium",
          "address1": "1510 Clarkson Street",
          "address2": "Denver, CO 80218",
          "location": {
            "lon": -104.977,
            "lat": 39.7404
          }
        },
        "avgPrice": 100,
        "url": "https://seatgeek.com/lifehouse-with-switchfoot-tickets/denver-colorado-fillmore-auditorium-2017-07-23-6-pm/concert/3831537"
      },
      {
        "performers": {
          "names": [
            "Demun Jones",
            "Bryan Thomas"
          ],
          "genres": [
            [
              "Country",
              "Folk"
            ],
            "no genre data"
          ],
          "primary": "Demun Jones",
          "supporting": [
            "Bryan Thomas"
          ]
        },
        "date": "2017-07-23T19:00:00",
        "venue": {
          "name": "Marquis Theater",
          "address1": "2009 Larimer Street",
          "address2": "Denver, CO 80205",
          "location": {
            "lon": -104.993,
            "lat": 39.7534
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/demun-jones-with-bryan-thomas-tickets/denver-colorado-marquis-theater-2017-07-23-7-pm/concert/3910840"
      },
      {
        "performers": {
          "names": [
            "Gladys Knight"
          ],
          "genres": [
            [
              "Pop",
              "Soul",
              "Rnb"
            ]
          ],
          "primary": "Gladys Knight",
          "supporting": []
        },
        "date": "2017-07-23T19:30:00",
        "venue": {
          "name": "Hudson Gardens",
          "address1": "6115 South Santa Fe Drive",
          "address2": "Littleton, CO 80120",
          "location": {
            "lon": -105.021,
            "lat": 39.6058
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/gladys-knight-tickets/littleton-colorado-hudson-gardens-2017-07-23-7-30-pm/concert/3850300"
      },
      {
        "performers": {
          "names": [
            "Brendan James"
          ],
          "genres": [
            [
              "Pop",
              "Rock",
              "Folk"
            ]
          ],
          "primary": "Brendan James",
          "supporting": []
        },
        "date": "2017-07-23T20:00:00",
        "venue": {
          "name": "Bluebird Theater",
          "address1": "3317 East Colfax Ave.",
          "address2": "Denver, CO 80206",
          "location": {
            "lon": -104.948,
            "lat": 39.7404
          }
        },
        "avgPrice": 77,
        "url": "https://seatgeek.com/brendan-james-16-tickets/denver-colorado-bluebird-theater-2017-07-23-8-pm/concert/3786211"
      },
      {
        "performers": {
          "names": [
            "Wake The Bat"
          ],
          "genres": [
            "no genre data"
          ],
          "primary": "Wake The Bat",
          "supporting": []
        },
        "date": "2017-07-23T20:00:00",
        "venue": {
          "name": "Larimer Lounge",
          "address1": "2721 Larimer Street",
          "address2": "Denver, CO 80205",
          "location": {
            "lon": -104.984,
            "lat": 39.7598
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/wake-the-bat-tickets/denver-colorado-larimer-lounge-2017-07-23-8-pm/concert/3929942"
      },
      {
        "performers": {
          "names": [
            "Lee DeWyze",
            "Brad Byrd"
          ],
          "genres": [
            [
              "Pop",
              "Rock",
              "Alternative",
              "Folk"
            ],
            "no genre data"
          ],
          "primary": "Lee DeWyze",
          "supporting": [
            "Brad Byrd"
          ]
        },
        "date": "2017-07-23T20:00:00",
        "venue": {
          "name": "The Soiled Dove Underground",
          "address1": "1949 Market St.",
          "address2": "Denver, CO 80230",
          "location": {
            "lon": -104.994,
            "lat": 39.7533
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/lee-dewyze-with-brad-byrd-tickets/denver-colorado-the-soiled-dove-underground-2017-07-23-8-pm/concert/3885535"
      },
      {
        "performers": {
          "names": [
            "Jason Eady",
            "Courtney Patton"
          ],
          "genres": [
            [
              "Country",
              "Folk"
            ],
            [
              "Country",
              "Folk"
            ]
          ],
          "primary": "Jason Eady",
          "supporting": [
            "Courtney Patton"
          ]
        },
        "date": "2017-07-23T20:00:00",
        "venue": {
          "name": "The Walnut Room",
          "address1": "3131 Walnut Street",
          "address2": "Denver, CO 80205",
          "location": {
            "lon": -104.98,
            "lat": 39.7643
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/jason-eady-with-courtney-patton-tickets/denver-colorado-the-walnut-room-2017-07-23-8-pm/concert/3894243"
      },
      {
        "performers": {
          "names": [
            "Necrot"
          ],
          "genres": [
            "no genre data"
          ],
          "primary": "Necrot",
          "supporting": []
        },
        "date": "2017-07-23T20:30:00",
        "venue": {
          "name": "Hi-Dive",
          "address1": "7 S. Broadway",
          "address2": "Denver, CO 80223",
          "location": {
            "lon": -104.988,
            "lat": 39.7163
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/necrot-tickets/denver-colorado-hi-dive-2017-07-23-8-30-pm/concert/3908294"
      },
      {
        "performers": {
          "names": [
            "Youngest of Elders"
          ],
          "genres": [
            "no genre data"
          ],
          "primary": "Youngest of Elders",
          "supporting": []
        },
        "date": "2017-07-23T21:00:00",
        "venue": {
          "name": "Streets of London Pub",
          "address1": "1501 East Colfax Ave.",
          "address2": "Denver, CO 80218",
          "location": {
            "lon": -104.969,
            "lat": 39.7401
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/youngest-of-elders-tickets/denver-colorado-streets-of-london-pub-2017-07-23-9-pm/concert/3933845"
      },
      {
        "performers": {
          "names": [
            "Silent On Fifth Street"
          ],
          "genres": [
            "no genre data"
          ],
          "primary": "Silent On Fifth Street",
          "supporting": []
        },
        "date": "2017-07-24T18:00:00",
        "venue": {
          "name": "Hermans Hideaway",
          "address1": "1578 South Broadway",
          "address2": "Denver, CO 80210",
          "location": {
            "lon": -104.988,
            "lat": 39.688
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/silent-on-fifth-street-tickets/denver-colorado-hermans-hideaway-2017-07-24-6-pm/concert/3885522"
      },
      {
        "performers": {
          "names": [
            "Lyle Lovett"
          ],
          "genres": [
            [
              "Country",
              "Rock",
              "Folk"
            ]
          ],
          "primary": "Lyle Lovett",
          "supporting": []
        },
        "date": "2017-07-24T19:00:00",
        "venue": {
          "name": "Red Rocks Amphitheatre",
          "address1": "18300 West Alameda Parkway",
          "address2": "Morrison, CO 80465",
          "location": {
            "lon": -105.203,
            "lat": 39.6752
          }
        },
        "avgPrice": 138,
        "url": "https://seatgeek.com/lyle-lovett-tickets/morrison-colorado-red-rocks-amphitheatre-2017-07-24-7-pm/concert/3808611"
      },
      {
        "performers": {
          "names": [
            "3TEETH"
          ],
          "genres": [
            [
              "Alternative"
            ]
          ],
          "primary": "3TEETH",
          "supporting": []
        },
        "date": "2017-07-24T19:00:00",
        "venue": {
          "name": "Marquis Theater",
          "address1": "2009 Larimer Street",
          "address2": "Denver, CO 80205",
          "location": {
            "lon": -104.993,
            "lat": 39.7534
          }
        },
        "avgPrice": 39.5,
        "url": "https://seatgeek.com/3teeth-tickets/denver-colorado-marquis-theater-2017-07-24-7-pm/concert/3889052"
      },
      {
        "performers": {
          "names": [
            "Sabrina Carpenter"
          ],
          "genres": [
            [
              "Pop",
              "Rock"
            ]
          ],
          "primary": "Sabrina Carpenter",
          "supporting": []
        },
        "date": "2017-07-24T19:00:00",
        "venue": {
          "name": "Paramount Theatre",
          "address1": "1621 Glenarm",
          "address2": "Denver, CO 80202",
          "location": {
            "lon": -104.99,
            "lat": 39.7444
          }
        },
        "avgPrice": 73,
        "url": "https://seatgeek.com/sabrina-carpenter-tickets/denver-colorado-paramount-theatre-1-2017-07-24-7-pm/concert/3865342"
      },
      {
        "performers": {
          "names": [
            "The English Beat",
            "Howard Jones",
            "Men Without Hats",
            "Modern English",
            "Paul Young",
            "Retro Futura"
          ],
          "genres": [
            [
              "Pop",
              "Rock",
              "Alternative"
            ],
            [
              "Pop",
              "Rock",
              "Alternative"
            ],
            [
              "Pop",
              "Rock"
            ],
            [
              "Pop",
              "Rock",
              "Alternative",
              "Classic Rock"
            ],
            [
              "Pop",
              "Rock",
              "Hard Rock"
            ],
            [
              "Pop",
              "Rock"
            ]
          ],
          "primary": "Retro Futura",
          "supporting": [
            "The English Beat",
            "Howard Jones",
            "Men Without Hats",
            "Modern English",
            "Paul Young"
          ]
        },
        "date": "2017-07-24T19:00:00",
        "venue": {
          "name": "Bellco Theatre",
          "address1": "700 14th Street",
          "address2": "Denver, CO 80207",
          "location": {
            "lon": -104.995,
            "lat": 39.7434
          }
        },
        "avgPrice": 93.5,
        "url": "https://seatgeek.com/retro-futura-men-without-hats-with-howard-jones-and-paul-young-and-the-english-beat-and-modern-english-tickets/denver-colorado-bellco-theatre-2017-07-24-7-pm/concert/3779572"
      },
      {
        "performers": {
          "names": [
            "Flagship",
            "In The Valley Below"
          ],
          "genres": [
            [
              "Pop",
              "Rock"
            ],
            [
              "Pop",
              "Rock",
              "Alternative"
            ]
          ],
          "primary": "In The Valley Below",
          "supporting": [
            "Flagship"
          ]
        },
        "date": "2017-07-24T20:00:00",
        "venue": {
          "name": "Larimer Lounge",
          "address1": "2721 Larimer Street",
          "address2": "Denver, CO 80205",
          "location": {
            "lon": -104.984,
            "lat": 39.7598
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/in-the-valley-below-with-flagship-tickets/denver-colorado-larimer-lounge-2017-07-24-8-pm/concert/3883194"
      },
      {
        "performers": {
          "names": [
            "Sports"
          ],
          "genres": [
            [
              "Rock"
            ]
          ],
          "primary": "Sports",
          "supporting": []
        },
        "date": "2017-07-24T20:00:00",
        "venue": {
          "name": "Lost Lake Lounge",
          "address1": "3602 E. Colfax Ave.",
          "address2": "Denver, CO 80206",
          "location": {
            "lon": -104.945,
            "lat": 39.74
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/sports-tickets/denver-colorado-lost-lake-lounge-2017-07-24-8-pm/concert/3853961"
      },
      {
        "performers": {
          "names": [
            "Monday Night Menagerie"
          ],
          "genres": [
            "no genre data"
          ],
          "primary": "Monday Night Menagerie",
          "supporting": []
        },
        "date": "2017-07-24T20:00:00",
        "venue": {
          "name": "Cervantes' Other Side",
          "address1": "2637 Welton St.",
          "address2": "Denver, CO 80205",
          "location": {
            "lon": -104.979,
            "lat": 39.7544
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/monday-night-menagerie-tickets/denver-colorado-cervantes-other-side-2017-07-24-8-pm/concert/3901269"
      },
      {
        "performers": {
          "names": [
            "Vinyl Mondays"
          ],
          "genres": [
            "no genre data"
          ],
          "primary": "Vinyl Mondays",
          "supporting": []
        },
        "date": "2017-07-24T21:00:00",
        "venue": {
          "name": "Hi-Dive",
          "address1": "7 S. Broadway",
          "address2": "Denver, CO 80223",
          "location": {
            "lon": -104.988,
            "lat": 39.7163
          }
        },
        "avgPrice": null,
        "url": "https://seatgeek.com/vinyl-mondays-tickets/denver-colorado-hi-dive-2017-07-24-9-pm/concert/3913166"
      }
    ]
    const expectedAction = {
      type: 'EVENT_DATA',
      events: events
    }
    expect(actions.eventData(events)).toEqual(expectedAction)
  });

  it('should create an action to set latitude and longitude  data', () => {
    const latLongObj = { "lat": 42.88644679999999, "lng": -78.8783689 }
    const expectedAction = {
      type: 'LAT_LONG',
      latLongObj: latLongObj
    }
    expect(actions.LatLong(latLongObj)).toEqual(expectedAction)
  });

});

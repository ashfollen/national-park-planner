# National Park Planner

The National Park Planner allows you to browse a list of National Parks and plan your trip. The app will include lodging, activities, and dining options. There will be a calendar feature to which you can add your trip details, and a summary of trip selections. The purpose of this app is to encourage users to get outside and explore the beauty of the National Park Service. 


## User Stories

* As a user, I want to be able to create an account, so I can log in and use the app.
* As a user, I want to be able to browse a listing of the National Parks. 
* As a user, I want to be able to find and schedule lodging from a list of options at National Parks.
* As a user, I want to be able to find and schedule dining reservations at National Parks. 
* As a user, I want to be able to find and schedule activities at National Parks. 
* As a user, I want to be able to add my plans to a calendar. 
* As a user, I want to be able to view my choices in a trip summary. 
* As a user, I want to be able to filter my views by National Park. 


## Models and Relationships

### User

A `User` has many `Reservations`

* id
* username
* password_digest

### Reservations

A `Reservation` belongs to an `Activity`
A `Reservation` belongs to a `Date`
A `Reservation` belongs to a `User`

* id
* name 
* date_id
* user_id
* activity_id

### Activities 
An `Activity` has many `Dates`
An `Activity` belongs to a `Park`
An `Activity` has many `Reservations`

* id 
* name 
* park_id
* category

### Parks 

A `Park` has many `Activities` 

* id
* location

### Months
A `Month` has many `Dates` 
A `Month` has many `Days` through `Dates` 

* id
* month

### Dates
A `Date` belongs to a `Month`
A `Date` belongs to a `Day`
A `Date` has many `Reservations`

* id 
* month_id
* day_id

### Days 
A `Day` has many `Dates`
A `Day` has many `Months` through `Dates`

* id
* day 

## API

### GET /users

Returns a list of all users. Response JSON looks like this:

```json
{ 
  id: 111,
  username: "johndoe",
  password_digest: "XXXXX",
}
```

### GET /parks

Returns a list of all parks. Response JSON looks like this:

```json
{ 
  id: 111,
  name: "Yosemite",
  activities: {
        id: 54, 
        name: "Hike to Half Dome",
        category: "What to Do"
        park_id: 111,
        },
}
```

### GET /reservations

Returns a list of all reservations. Response JSON looks like this:

```json
{ 
   id: 5
   date_id: 54
   user_id: 3
   activity_id: 35
}
```

### POST /reservations 

Creates a new reservation. Response JSON looks like this:

```json
{ 
   id: 5
   date_id: 54
   user_id: 3
   activity_id: 35
}
```

### GET /dates

Returns a list of all dates. Response JSON looks like this:

```json
{ 
   id: 4
   month_id: 1
   day_id: 28
}
```

## Wireframe / Mockup

src/images/Home.png

src/images/Activities.png

src/images/Calendar.png







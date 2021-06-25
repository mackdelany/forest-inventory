# Mack Delany and his forests

Howdy and thanks for stopping by!

This repository provides a webservice showcasing my favorite forests (and a few other places with trees and magical memories).

## Getting started

To run the service pull the repositary to a local machine and build/start the service with docker-compose:

```
git clone https://github.com/mackdelany/forest-inventory.git
cd forest-inventory
docker-compose up
```

After a few minutes the service should be avaliable at http://0.0.0.0

## What I'd do differently with more time

First of all this was so much fun. There are approximately 2 million things I'd add/fix, but he's a quick rundown of the most important:

### I wouldn't make the client ask the server for the entire DB

I felt naughty calling a GetAllForests endpoint. Rest assured I wouldn't do this in a normal-and-not-fun-dummy-exercise universe.

### GeoJSON

I wanted to store GeoJSON in the DB for each forest... then render these in the detail page on MapBox. Run outta time on this one.

### PostgresSQL

I'd use Postgres for the DB. SQLite was great to get going but Postgres is more likely to be used in production.

### Design

There a bunch of design issues left, it kills me to leave them, but dimishing returns... some of what I would fix though:

- I'd standardize image sizes and widths/heights
- I'd find/design/procure fun icons for the health metrics
- I'd get someone with fresh eyes to play with the service to find holes... people don't do this enough!
- I'd design/style custom components (where needed) instead of using the bootstrap library the entire time
- I'd use Pachama brand colours / logos / favicons / fonts / iconography -- brand is important!

### Long descriptions

I wish I had time to write all of these myself! I also wanted to go dig out old photos of me to use as the images... but alas.

### I'd add the search/filter

I thought about doing this, but schedules are tight and this is bonus scope..... and it's always good to have engineers that stick to scope right? ;)

### I'd use Machine Learning to estimate the carbon stock of each forest

Easier said than done this one!

- cloud stuff
- permissions/auth on db
- add a sort to forest db thing
- revisit health metrics data type
- get brand colors
- look at postgres
- permissions on db
- favicon / logos / brand colors
- cloud

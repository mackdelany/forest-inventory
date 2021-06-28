# Mack Delany and his forests

Howdy and thanks for stopping by!

This is a webservice showcasing my favorite forests (and a few other places with trees and magical memories).

You can see the live web service at https://forests.mackdelany.com/

## Getting started

To run the service pull the repos to a local machine and build/start the service with docker-compose:

```
git clone https://github.com/mackdelany/forest-inventory.git
cd forest-inventory
docker-compose up
```

After a few minutes the service should be on `localhost` (http://0.0.0.0)

## Running tests

Simply run the `./run-tests` shell script in the root directory, you may need to make the file executable:

```
chmod +x ./run-tests.sh
./run-tests.sh
```

## What I'd do with more time

First of all this was so much fun. There are approximately 2 million things I'd add/fix, but he's a quick rundown of the most important:

### I wouldn't make the client ask the server for the entire DB

I felt naughty calling a GetAllForests endpoint. Rest assured I wouldn't do this in a normal-and-not-fun-dummy-exercise universe.

### GeoJSON

I wanted to store GeoJSON in the DB for each forest... then render these in the detail page on MapBox. Run outta time on this one.

### PostgresSQL

I'd use Postgres for the DB. SQLite was great to get going but Postgres is more likely to be used in production.

### Security

I would add auth to the DB, and I would store access tokens / auth details / other credentials securely with envorinment variables.

### Design

There a bunch of design issues left, it kills me to leave them, but dimishing returns... some of what I would fix though:

- I'd standardize image sizes and widths/heights
- I'd ensure all of the white titles of the images are easily readable (some aren't)
- I'd find/design/procure fun icons for the health metrics
- I'd get someone with fresh eyes to play with the service to find holes... people don't do this enough!
- I'd design/style custom components (where needed) instead of using the bootstrap library the entire time (would also get my code reviewed == best learning in my opinion!)
- I'd use Pachama brand colours / logos / favicons / fonts / iconography -- brand is important!

### I'd figure out why the MapBox 3D terrain features isn't working from a container

This one bugged me when I saw it wasn't working in production. I <3 MapBox terrain so it pains me that I messed it up somehow.

### Long descriptions

I wish I had time to write all of these myself! I also wanted to go dig out old photos of me to use as the images... but alas.

### I'd add the search/filter

I thought about doing this, but schedules are tight and this is bonus scope..... and it's always good to have engineers that stick to scope right? ;)

### I'd use Machine Learning to estimate the carbon stock of each forest

Easier said than done this one! ;)

---

Was there anything I missed? An obvious mistake I made? I'd love to hear if so!

---

And some more points I realized I should have included while thinking about it over the weekend....

### I would have written more tests

I had 3 unit tests for the server, none for the client. Definitely not optimal test coverage!

### I should have added commentary around DB design

In the pursuit of velocity I used SQLite with one table and simple data types, I wouldn't have done this in production. For example, I made forest type a string - which would be error prone (what happens if someone accidently uses Restoration instead of Reforestation?).. this would have been better as an ENUM which was one of the trade offs of using SQLite ie SQLite doesn't have ENUMs but Postgres does.

### I would have optimised the application for mobile views

A few @media css statements would have gone a long way on the detail page!

### I would have been more disciplined around commenting where I'd made a hack and why

For example, line 29 in Map.tsx looks like this: `zoom: area < 100000 ? 12 : 9,` which clearly is not much help to anyone... I should have noted that this was a hack that worked well for the forests I chose... and that it wasn't a magic formula that would work for future forests.

### I would have completed READMEs in the /client and /server folders

I <3 simple, short, explainable documentation and fell a little short on my own standards there.

### I would have calculated realistic carbon stock + change values

Something simple like 700 t * area would have been more realistic than me tapping random numbers like I did!

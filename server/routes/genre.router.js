const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
  // Add query to get all genres
  console.log('made it to get genre in router', req.body.movieID);

  const sqlText = `
    SELECT
      "movies"."title",
      ARRAY_AGG("genres"."name")
    FROM "movies"
    JOIN "movies_genres"
      ON "movies_genres"."movie_id" = "movies"."id"
    JOIN "genres"
      ON "genres"."id" = "movies_genres"."genre_id"
    WHERE "movies"."id" = $1
    GROUP BY "movies"."title";
  `;

  const sqlParams = [
    req.body.movieID
  ];

  pool.query(sqlText, sqlParams)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('genre get failure', error);
      res.sendStatus(500);
    });

});

module.exports = router;
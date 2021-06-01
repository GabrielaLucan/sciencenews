import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import localStrategy from '../app/_auth/local.js';
import jwtStrategy from '../app/_auth/jwt.js';

import usersRouter from '../app/users/routes.js';
import teamsRouter from '../app/teams/routes.js';
import tasksRouter from '../app/tasks/routes.js';
import eventsRouter from '../app/events/routes.js';

export default function initExpress(app) {
  app.use(cors());
  app.options('*', cors());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());

  passport.use(localStrategy);
  passport.use(jwtStrategy);

  app.use('/api', usersRouter);
  app.use('/api', teamsRouter);
  app.use('/api', tasksRouter);
  app.use('/api', eventsRouter);

  app.use((req, res, next) => {
    req.resources = req.resources || {};
    next();
  });
}

/**
      Primary configuration file for Redux infrastructure.

  Redux keeps the majority of its configurable aspects in what they dub a 'Store'.

  We configure three of these pieces:
    - the reducers that describe how state changes
    - the initial state
    - a suite of middleware which acts on dispatched actions.

  Our initial state has structure but is empty of all but the types of data
  we expct and has been used as a development tool to we build new features.
  
  We have three reducers (user, ride, and routing) which define the main branches
  of our application state and are combined to represent our app's entire state
  tree. User state stores information related to the client's account, such as
  their friends list, profile image, and whether they are logged in. The Ride
  state represents the core service of our application - riders, drivers, directions,
  and connecting them all together. Routing is used to synchronize a Redux
  representation of the browser's history.

  We implement middleware to handle authentication, client-to-server socket
  communication, async http server-client communication, and history synchronization.
  The auth and socket components were built by our team while the history and
  thunk middleware were imported from libraries.

  Middleware in general is such a fun and useful pattern and we should look for
  additional opportunities to utilize it.
**/

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { socket, socketMiddleware } from './socketConfig';
import { authMiddleware } from './authConfig';

import routeReducer from '../reducers/route';
import userReducer from '../reducers/user';
import rideReducer from '../reducers/ride';

import InitialState from '../initialState';

const reducersWithRouter = combineReducers({
  user: userReducer,
  ride: rideReducer,
  routing: routeReducer,
});

const historyMiddleware = routerMiddleware(browserHistory);

export const store = createStore(
  reducersWithRouter,
  fromJS(InitialState),
  applyMiddleware(
    authMiddleware,
    historyMiddleware,
    socketMiddleware(socket),
    thunkMiddleware
  )
);

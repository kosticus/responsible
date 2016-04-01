import { connect } from 'react-redux';
import { curry } from 'ramda';
import { Grid, Row} from 'react-bootstrap';
import { intersectionWith, eqBy, prop } from 'ramda';

import * as rideAction from '../actionCreators/ride';

import { RiderItem } from '../components/RiderItem';
import * as rideActions from '../actionCreators/ride';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function List({ ride, user, onRiderClick, }) {

  let _riders = ride.riders.map(function (rider) {
    return user.friends
      .find((friend) => friend.user_id === rider.user_id)
      .location = rider.location;
  });

  // let _riders = R.map(R.map(R.eqProps('user_id')))(user.friends, ride.riders);

  return (
    <div className="riderListDiv">
      <Grid>
        <Row>
          {
            _riders.map(function (friendRider) {
              return (<RiderItem
                key={friendRider.user_id}
                onRiderItemClick={onRiderClick.bind(null, user, friendRider)}
                {...friendRider}
              />);
            })
          }
        </Row>
      </Grid>
    </div>
  );
};

const mapStateToProps = function (state) {
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onRiderClick: function (user, rider) {
      let filteredDriverProps = {
        user_id: user.user_id,
        location: user.location,
      };

      let filteredRiderProps = {
        user_id: rider.user_id,
        location: rider.location,
      };

      dispatch(rideAction.acceptRide(filteredDriverProps, filteredRiderProps));
    },
  };
};

export const RiderItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

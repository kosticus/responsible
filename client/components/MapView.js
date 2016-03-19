import React from 'react';
import { GoogleMapLoader, GoogleMap , Marker, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux'

<<<<<<< a47a807a5e4dc1fe4dbd2209bfec07a9542fb0fb

    //clearWatch()    watchPosition()    getCurrentPosition()
    // navigator.geolocation.getCurrentPosition(GoogleMap, errorError);

const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
    origin: {lat:41.8507300, lng:-87.6512600},
    destination: {lat:41.8525800, lng:-87.6514100},
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      onDirectionsResult(result);
      console.log('these are results', result)
      console.log('these are status', status)
      }
    )


//  return (
//    <div className='map'>
//       <GoogleMapLoader
//       containerElement={ <div style={{ height: '70%' }} /> }
//       googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
//       {directions ? <DirectionsRenderer directions={directions} /> : null}
//       </GoogleMap> }
//       />
//     </div>
//  );
// };







function Map ({ match, location, onMapView, directions }) {
  return match ? 
  (
=======
var location = {}
var options = {timeout:6000};

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function (data, err, options) {
    location.lat = data.coords.latitude;
    location.lng = data.coords.longitude;
	console.log('Rider Time Summoned:', new Date(data.timestamp))
})}

    //clearWatch()    watchPosition()    getCurrentPosition()
    // navigator.geolocation.getCurrentPosition(GoogleMap, errorError);

export function MapView(props) {
  return (
>>>>>>> added geolocation and timestamps for riders summoning drivers
    <div className='map'>
      <GoogleMapLoader
      ref={(map) => console.log('map data1', map)}
      containerElement={ <div style={{ height: '70%' }} /> }
<<<<<<< a47a807a5e4dc1fe4dbd2209bfec07a9542fb0fb
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
      {directions ? <DirectionsRenderer directions={directions} /> : null}
=======
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={{ lat: location.lat, lng: location.lng }}>
>>>>>>> added geolocation and timestamps for riders summoning drivers
      </GoogleMap> }
      />
    </div>
  )
  :
  (
    <div className='map'>
      <GoogleMapLoader
      ref={(map) => console.log('map data1', map)}
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
      </GoogleMap> }
      />
    </div>
  );
};

const mapDispatchToProps = function (dispatch) {
  return {
    onMapView() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: { location },
          destination: {lat:41.8525800, lng:-30.6514100},
          travelMode: google.maps.TravelMode.DRIVING
        },
        function(result, status) {
          // dispatch(result);
          console.log('these are results', result);
          console.log('these are status', status);
        }
      );
    },
  };
};

// const DirectionsService = new google.maps.DirectionsService();
//     DirectionsService.route(
//     {
//     origin: { location },
//     destination: {lat:41.8525800, lng:-87.6514100},
//       travelMode: google.maps.TravelMode.DRIVING,
//     }, 
//     function (result, status) {
//       console.log('these are results', result)
//       console.log('these are status', status)
//     }
//     )


export const MapView = connect(
  null,
  mapDispatchToProps
)(Map);




// function Github({ onGithubClick = nullFn, }) {
//   return (
//     <div className='GitHubButton' onClick={onGithubClick}>
//       <button className='GithubButton btn'>Github</button>
//     </div>
//   );
// }

// const mapDispatchToProps = function (dispatch) {
//   return {
//     onGithubClick() {
//       var user;
//       OAuth.popup('github', { cache: true })
//         .done(function (githubToken) {
//           githubToken.me()
//             .done(function (me) {
//               console.log('found myself, finally:', me);

//               user = {
//                 username: me.alias,
//                 first_name: me.name.split(' ')[0],
//                 last_name: me.name.split(' ')[1],
//                 avatar: me.avatar,
//                 verifyBy: me.id,
//                 token: githubToken.access_token,
//               };

//               dispatch(userAction.fetchUserInfo(user));
//             });
//         })
//         .fail(function (err) {
//           console.log('error', err);
//         });
//     },
//   };
// };

// export const GithubButton = connect(
//   null,
//   mapDispatchToProps
// )(Github);









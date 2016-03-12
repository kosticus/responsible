import {DriverItem} from './DriverItem';

export function DriverItemList({ drivers }) {
  return (
    <div className="driverList">
      {
        drivers.map(function (driver) {
          return <DriverItem {...driver} />;
        })
      }
    </div>
  );
};

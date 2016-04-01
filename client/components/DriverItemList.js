import {DriverItem} from './DriverItem';

export function DriverItemList({ drivers }) {
  return (
    <div className="driverList">
      {
        drivers.map((driver) => <DriverItem {...driver} />)
      }
    </div>
  );
};

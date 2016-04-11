import { UserImage } from './UserImage';
import { Button, Col } from 'react-bootstrap';

export function RiderItem({ avatar, name, onRiderItemClick }) {
  return (
    <Col xs={4} md={4} className="RiderItem">
      <div className="riderItemDiv">
        <UserImage imageType="riderImage" className="riderItemImage" avatar={avatar} />
        <div className="riderItemDescDiv">
          <h5 className="riderItemDesc">{name}</h5>
          <p>
            <Button bsStyle="primary" bsSize="small" className="riderItemButton"
              onClick={onRiderItemClick}
            >Pick Up</Button>
          </p>
        </div>
      </div>
    </Col>
  );
};

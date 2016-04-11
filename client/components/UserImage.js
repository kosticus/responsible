import { Grid, Row, Col, Image } from 'react-bootstrap';

export function UserImage({ avatar, imageType }) {
  return (
    <div className="avatar">
    {
        <Grid>
          <Row>
            <Col>
              {
                imageType === 'portrait' ?
                  <Image className="imagePortrait" src={ avatar } circle />
                  : imageType === 'icon' ?
                    <Image className="imageIcon" src={ avatar } circle />
                    : imageType === 'riderImage' ?
                       <Image className="mediumImage" src={ avatar } circle />
                       : <div>Missing Image Type</div>
              }
            </Col>
          </Row>
        </Grid>
    }
    </div>
  );
}

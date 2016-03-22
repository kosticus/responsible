require('../../public/styles/styles.css');

export function ConfirmLocationButton({
  confirmLocation,
}) {
  return (
    <div className='ConfirmLocation' onClick={confirmLocation}>
			<section className='hero is-success'>
				<div className='hero-content4'>
					<h2 className='button is-success'>
					Confirm Ride!
					</h2>
				</div>
      </section>
    </div>
  );
}

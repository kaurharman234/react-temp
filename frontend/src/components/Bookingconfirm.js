import React from 'react'

const Bookingconfirm = ({title}) => {
  return (
    <div>
      
	<title>{title}</title>
	<section className="pt-s5 pb-s5 overlay-wrap" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="images/bg/bg-1.jpg">
		<div className="container overlay-container pt-s2 pb-s5">
			<div className="pb-s5">
				<div className="hero-section-container-tl w-100 h-100 d-flex justify-content-center align-items-center">
					<div className="text-center mb-s2">
						<div className="mt-s3 text-white">
							<h6>Find best airport parking deals</h6>
						</div>
						<div className="mt-s1 mb-s5 text-white">
							<h1 className="animated-headline letters type mb-s2 text-white text-size-20--xs text-size-30--sm">
								<span className="headline-wrapper text-cherry text-capitalize">
									<b className="is-visible">Compare Multiple providers</b>
									<b>Lowest prices</b>
									<b>Secure Booking Process</b>
									<b>A brand you can trust</b>
								</span>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div> {/* /CONTAINER */}
		<div className="overlay bg-v9-dark"></div>
	</section> {/* /SECTION */}

	<section className="bg-v5-light pt-s3 pb-s3">
		<div className="quote-setting container">
			<div className="bg-white p-s3 bs-solid bc-light bw-s1 rounded-s2 box-shadow-v1-s5">
				<form className="quote-hr">
					<div className="row">
                        <div className="col-lg-2">
                            <div className="form-group tooltip_error">
                                <label for="airport_id">Airport</label>
                                <select className="form-control rounded-s5 text-size-12">
                                    <option value="bristol">Bristol</option>
                                    <option value="exeter">Exeter</option>
                                    <option value="east-midlands">East Midlands</option>
                                    <option value="luton">Luton</option>
                                    <option value="manchester">Manchester</option>
                                </select>
                            </div>
                        </div>
						<div className="col-lg-4">
							<label>Drop off Date Time</label>
							<div className="form-row">
								<div className="form-group col-md-6">
									<input type="date" className="form-control text-size-12 rounded-s5 bc-v1-dark"/>
								</div>
								<div className="form-group col-md-3 col-sm-6">
									<select className="form-control rounded-s5 text-size-12">
										<option value="00">00</option>
										<option value="01">01</option>
										<option value="02">02</option>
										<option value="03">03</option>
										<option value="04">04</option>
										<option value="05">05</option>
										<option value="06">06</option>
										<option value="07">07</option>
										<option value="08">08</option>
										<option value="09">09</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
									</select>
								</div>
								<div className="form-group col-md-3 col-sm-6">
									<select className="form-control rounded-s5 text-size-12">
										<option value="00">00</option>
										<option value="05">05</option>
										<option value="10">10</option>
										<option value="15">15</option>
										<option value="20">20</option>
										<option value="25">25</option>
										<option value="30">30</option>
										<option value="35">35</option>
										<option value="40">40</option>
										<option value="45">45</option>
										<option value="50">50</option>
										<option value="55">55</option>
									</select>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<label>Arrival Date Time</label>
							<div className="form-row">
								<div className="form-group col-md-6">
									<input type="date" className="form-control text-size-12 rounded-s5 bc-v1-dark"/>
								</div>
								<div className="form-group col-md-3 col-sm-6">
									<select className="form-control rounded-s5 text-size-12">
										<option value="00">00</option>
										<option value="01">01</option>
										<option value="02">02</option>
										<option value="03">03</option>
										<option value="04">04</option>
										<option value="05">05</option>
										<option value="06">06</option>
										<option value="07">07</option>
										<option value="08">08</option>
										<option value="09">09</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
									</select>
								</div>
								<div className="form-group col-md-3 col-sm-6">
									<select className="form-control rounded-s5 text-size-12">
										<option value="00">00</option>
										<option value="05">05</option>
										<option value="10">10</option>
										<option value="15">15</option>
										<option value="20">20</option>
										<option value="25">25</option>
										<option value="30">30</option>
										<option value="35">35</option>
										<option value="40">40</option>
										<option value="45">45</option>
										<option value="50">50</option>
										<option value="55">55</option>
									</select>
								</div>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="form-row">
								<div className="form-group col-md-12">
									<button type="submit" className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 mt-30 rounded-s5 mb-s1 btn-block">Get Quote</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div> {/* /CONTAINER */}
		<div className="container pt-s4">
			
			<div className="bg-white p-20">
			<div className="row" >
				<div className="col-lg-8 col-md-12">

					<div className="row" v-if="record.booking_edit == 1">
						<div className="col-md-12">
							<a href="booking.html" className="btn btn-sm btn-warning">Edit</a>
						</div>
						<div className="col-md-12">
							<h3 className="text-uppercase text-size-20 text-bold-600 mt-20 mb-12">Your Information</h3>
						</div>
						<div className="col-md-12">
							<div className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Email</div>
								<div>john@gmail.com</div>
							</div>
							<div className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Name</div>
								<div>John Doe</div>
							</div>
							<div className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Mobile #</div>
								<div>0123456789</div>
							</div>
							<div className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Post Code</div>
								<div>879879</div>
							</div>
						</div>
						<div className="col-md-12">
							<h3 className="text-uppercase text-size-20 text-bold-600 mt-20 mb-12">Travel Details</h3>
						</div>
						<div className="col-md-12">
							<div className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Do you know travel details?</div>
								<div>Yes</div>
							</div>
							<div v-if="record.know_travel_detail == 1" className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Depart Terminal</div>
								<div>Terminal 1</div>
							</div>
							<div v-if="record.know_travel_detail == 1" className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Outbound Flight</div>
								<div>Null</div>
							</div>
							<div v-if="record.know_travel_detail == 1" className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Arrival Terminal</div>
								<div>Terminal 2</div>
							</div>
							<div v-if="record.know_travel_detail == 1" className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Inbound Flight</div>
								<div>Null</div>
							</div>
						</div>
						<div className="col-md-12">
							<h3 className="text-uppercase text-size-20 text-bold-600 mt-20 mb-12">Vehicle Details</h3>
						</div>
						<div className="col-md-12">
							<div className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Do you know vehicle details?</div>
								<div>Yes</div>
							</div>
							<div v-if="record.know_vehical_detail == 1" className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Make</div>
								<div>Honda</div>
							</div>
							<div v-if="record.know_vehical_detail == 1" className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Model</div>
								<div>2019</div>
							</div>
							<div v-if="record.know_vehical_detail == 1" className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Colour</div>
								<div>cherry</div>
							</div>
							<div v-if="record.know_vehical_detail == 1" className="d-flex justify-content-between bs-solid bc-light bw-s1 mt-0 bl-0 br-0 pt-10 pb-10">
								<div>Registration</div>
								<div>Reg1212</div>
							</div>
						</div>
					</div>

					<button className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover mt-30">Confirm Booking</button>

				</div>
				<div className="col-lg-4 col-md-12">
					<div data-plugin-sticky data-plugin-options="{'minWidth': 991, 'containerSelector': '.modalcontentsticky', 'padding': {'top': 110}}">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="bg-white text-center bs-solid bc-light bw-s1 p-35">
									<div>
										<img className="max-w--200" src="images/parkings/parking-1.png" alt="Bristol Parking Spaces"/>
									</div>
									<div className="w-100 mt-15">
										<span className="bg-v7-warning pt-5 pb-5 pl-20 pr-20 text-dark rounded-s2">Meet & Greet Service</span>
									</div>
									<h4 className="mt-24 mb-0">Bristol Parking Spaces</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white">
						<table className="w-100 text-size-12">
							<tr className="bs-solid bc-light bw-s1 mt-0 bl-0 br-0">
								<td className="p-8">Location</td>
								<td className="p-8 text-right">Exeter</td>
							</tr>
							<tr className="bs-solid bc-light bw-s1 mt-0 bl-0 br-0">
								<td className="p-8">Drop-Off Date</td>
								<td className="p-8 text-right">31, Jan 2019</td>
							</tr>
							<tr className="bs-solid bc-light bw-s1 mt-0 bl-0 br-0">
								<td className="p-8">Drop-Off Time</td>
								<td className="p-8 text-right">03:00</td>
							</tr>
							<tr className="bs-solid bc-light bw-s1 mt-0 bl-0 br-0">
								<td className="p-8">Pick-Up Date</td>
								<td className="p-8 text-right">03, Feb 2019</td>
							</tr>
							<tr className="bs-solid bc-light bw-s1 mt-0 bl-0 br-0">
								<td className="p-8">Pick-Up Time</td>
								<td className="p-8 text-right">03:00</td>
							</tr>
							<tr className="bs-solid bc-light bw-s1 mt-0 bl-0 br-0">
								<td className="p-8">Days</td>
								<td className="p-8 text-right">3</td>
							</tr>
							<tr className="bs-solid bc-light bw-s1 mt-0 bl-0 br-0">
								<td className="p-8">Booking Quote</td>
								<td className="p-8 text-right text-size-18 text-bold-600">$32.40</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			</div>

		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

    </div>
  )
}

export default Bookingconfirm

import React from 'react'

const Booking = ({title}) => {
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

						<div className="row" v-if="record.booking_edit == 0">
							<div className="col-md-12">
								<h4>Your Information</h4>
								<div className="row">
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Email Address<span className="text-danger">*</span></label>
										<input type="email" name="email" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Confirm Email Address<span className="text-danger">*</span></label>
										<input type="email" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="row">
											<div className="form-group col-lg-4 col-md-4">
												<label className="text-size-12 text-bold-500">Title<span className="text-danger">*</span></label>
												<select v-model="record.title_id" className="form-control text-size-12 bg-light rounded-0 pt-9 pb-8">
													<option value="">-- select --</option>
													<option value="mr">Mr.</option>
													<option value="mr">Mrs.</option>
													<option value="mr">Miss.</option>
													<option value="mr">Ms.</option>
												</select>
											</div>
											<div className="form-group col-lg-8 col-md-8">
												<label className="text-size-12 text-bold-500">First Name<span className="text-danger">*</span></label>
												<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
											</div>
										</div>
									</div>
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Last Name<span className="text-danger">*</span></label>
										<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
								</div>
								<div className="row">
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Mobile Number<span className="text-danger">*</span></label>
										<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Post Code<span className="text-danger">*</span></label>
										<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
								</div>
								<hr/>
								<h4>Travel Details</h4>
								<p>Do you know travel details?</p>
								<div className="row">
									<div className="form-group col-md-3">
										<select className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark">
											<option value="1">Yes</option>
											<option value="0">No</option>
										</select>
									</div>
								</div>
								<div className="row" v-if="record.know_travel_detail == 1">
									<div className="form-group col-md-6">
										<div className="row">
											<div className="col-md-6">
												<label className="text-size-12 text-bold-500">Depart Terminal<span className="text-danger">*</span></label>
												<select v-model="record.departterminal_id" className="form-control text-size-12 bg-light rounded-0 pt-9 pb-8">
													<option value="terminal-1">Terminal 1</option>
													<option value="terminal-2">Terminal 2</option>
													<option value="terminal-3">Terminal 3</option>
												</select>
											</div>
											<div className="col-md-6">
												<label className="text-size-12 text-bold-500">Outbound Flight</label>
												<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
											</div>
										</div>
									</div>
									<div className="form-group col-md-6">
										<div className="row">
											<div className="col-md-6">
												<label className="text-size-12 text-bold-500">Arrival Terminal<span className="text-danger">*</span></label>
												<select className="form-control text-size-12 bg-light rounded-0 pt-9 pb-8">
													<option value="terminal-1">Terminal 1</option>
													<option value="terminal-2">Terminal 2</option>
													<option value="terminal-3">Terminal 3</option>
												</select>
											</div>
											<div className="col-md-6">
												<label className="text-size-12 text-bold-500">Inbound Flight</label>
												<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
											</div>
										</div>
									</div>
								</div>
								<hr/>
								<h4>Vehicle Details</h4>
								<p>Do you know vehicle details?</p>
								<div className="row">
									<div className="form-group col-md-3">
										<select className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark">
											<option value="1">Yes</option>
											<option value="0">No</option>
										</select>
									</div>
								</div>
								<div className="row" v-if="record.know_vehical_detail == 1">
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Make<span className="text-danger">*</span></label>
										<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Model<span className="text-danger">*</span></label>
										<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
								</div>
								<div className="row" v-if="record.know_vehical_detail == 1">
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Colour<span className="text-danger">*</span></label>
										<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
									<div className="form-group col-md-6">
										<label className="text-size-12 text-bold-500">Registration<span className="text-danger">*</span></label>
										<input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
									</div>
								</div>
								<hr/>
								<div className="row mt-10">
									<div className="col-md-12">
										<input type="checkbox" value="1"/> <span>On making payment you agree to Parking Ltd.</span>
									</div>
								</div>
								<button className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover mt-15">Confirm Booking</button>
							</div>
						</div>

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

export default Booking

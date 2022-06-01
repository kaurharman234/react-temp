import PropsTypes from 'prop-types'
const dashboard = ({title}) => {
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
			<div className="row">
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover">
						<div className="d-flex align-items-center mb-s2">
							<div className="mr-s2">
								<div className="text-size-s1 rounded-s3 bg-cherry text-white text-center h--40 w--40 d-flex justify-content-center align-items-center box-shadow-v2-s3-child--hover">
									<i className="icon-paper-plane"></i>
								</div>
							</div>
							<div>
								<h2 className="text-size-18 text-bold-600 m-0">Exclusive Prices</h2>
							</div>
						</div>
						<p className="m-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover">
						<div className="d-flex align-items-center mb-s2">
							<div className="mr-s2">
								<div className="text-size-s1 rounded-s3 bg-cherry text-white text-center h--40 w--40 d-flex justify-content-center align-items-center box-shadow-v2-s3-child--hover">
									<i className="icon-equalizer"></i>
								</div>
							</div>
							<div>
								<h2 className="text-size-18 text-bold-600 m-0">Expert Customer Support</h2>
							</div>
						</div>
						<p className="m-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover">
						<div className="d-flex align-items-center mb-s2">
							<div className="mr-s2">
								<div className="text-size-s1 rounded-s3 bg-cherry text-white text-center h--40 w--40 d-flex justify-content-center align-items-center box-shadow-v2-s3-child--hover">
									<i className="icon-screen-desktop"></i>
								</div>
							</div>
							<div>
								<h2 className="text-size-18 text-bold-600 m-0">Customer Satisfaction</h2>
							</div>
						</div>
						<p className="m-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
					</div>
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

	<section className="bg-dark-g pt-s5 pb-s5">
		<div className="container">
			<div className="mb-80 text-center">
				<h6 className="text-bold-700 text-cherry">Airport Parking</h6>
				<h2 className="text-bold-700 text-white">Airport Parking in 3 Simple Steps</h2>
				<div className="mb-s3">
					<hr className="mb-0 bc-v1-dark"/>
					<hr className="w--60 bs-solid bc-cherry bw-s5 bt-0 bl-0 br-0 mt-0"/>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 mb-60--md mb-60--sm mb-60--xs box-shadow-parent--hover mt--parent--hover">
						<div className="bg-white text-center pt-s4 bs-solid bc-light bw-s1 position-relative">
							<div className="hero-section-container-tl w-100 mt--s4 mt--s5-child">
								<img className="w--100 rounded-circle bs-solid bc-white bw-s5 box-shadow-v2-s3-child--hover" src="images/steps/step-1.png" alt="Departure & Arrival Details"/>
							</div>
							<div className="p-s2 mt-s2 mb-s2">
								<span className="text-cherry text-bold-600">Step 1</span>
								<h5 className="mt-s1 mb-0 text-bold-600">Departure & Arrival Details</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 mb-60--md mb-60--sm mb-60--xs box-shadow-parent--hover mt--parent--hover">
						<div className="bg-white text-center pt-s4 bs-solid bc-light bw-s1 position-relative">
							<div className="hero-section-container-tl w-100 mt--s4 mt--s5-child">
								<img className="w--100 rounded-circle bs-solid bc-white bw-s5 box-shadow-v2-s3-child--hover" src="images/steps/step-2.png" alt="Your & Vehicle Detail"/>
							</div>
							<div className="p-s2 mt-s2 mb-s2">
								<span className="text-cherry text-bold-600">Step 2</span>
								<h5 className="mt-s1 mb-0 text-bold-600">Your & Vehicle Detail</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 mb-60--md mb-60--sm mb-60--xs box-shadow-parent--hover mt--parent--hover">
						<div className="bg-white text-center pt-s4 bs-solid bc-light bw-s1 position-relative">
							<div className="hero-section-container-tl w-100 mt--s4 mt--s5-child">
								<img className="w--100 rounded-circle bs-solid bc-white bw-s5 box-shadow-v2-s3-child--hover" src="images/steps/step-3.png" alt="Payment Detail"/>
							</div>
							<div className="p-s2 mt-s2 mb-s2">
								<span className="text-cherry text-bold-600">Step 3</span>
								<h5 className="mt-s1 mb-0 text-bold-600">Payment Detail</h5>
							</div>
						</div>
					</div>
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

	<section className="bg-white pt-s5 pb-s5">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12 col-sm-12">
					<div className="row">
						<div className="col-md-12">
							<div>
								<h4 className="text-bold-700">Testimonials</h4>
								<hr className="mt-0 mb-s1 bc-v1-dark"/>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="owl-carousel owl-theme owl-nav-bg show-nav-title" data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 1}, '768': {'items': 1}, '979': {'items': 1}, '1199': {'items': 1}}, 'margin': 10, 'loop': false, 'nav': true, 'dots': false}">
										<div>
											<div className="mt-s2 mb-s2 box-shadow-parent--hover">
												<div>
													<p className="mb-s1 text-size-s2 font-italic">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan.</p>
												</div>
												<div className="d-flex mt-s2 ml-20">
													<div className="rounded-circle h--45 w--45 mr-s2 d-flex justify-content-center align-items-center box-shadow-v2-s3-child--hover">
														<img className="w-100 rounded-circle bs-solid bc-light bw-s3" src="images/testimonials/user-1.jpg" alt="Testimonials"/>
													</div>
													<div>									
														<span className="text-bold-600 text-dark d-block">John Doe</span>
														<span className="text-size-s1 text-muted">Google Inc.</span>
													</div>
												</div>
											</div>
										</div>
										<div>
											<div className="mt-s2 mb-s2 box-shadow-parent--hover">
												<div>
													<p className="mb-s1 text-size-s2 font-italic">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan.</p>
												</div>
												<div className="d-flex mt-s2 ml-20">
													<div className="rounded-circle h--45 w--45 mr-s2 d-flex justify-content-center align-items-center box-shadow-v2-s3-child--hover">
														<img className="w-100 rounded-circle bs-solid bc-light bw-s3" src="images/testimonials/user-2.jpg" alt="Testimonials"/>
													</div>
													<div>									
														<span className="text-bold-600 text-dark d-block">Steve Jobs</span>
														<span className="text-size-s1 text-muted">Supper Inc.</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> {/* /ROW */}
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12">
					<div className="mb-s2 mt-s3--md mt-s3--sm mt-s3--xs">
						<h4 className="text-bold-700">Type of Parking</h4>
						<hr className="mt-0 mb-s1 bc-v1-dark"/>
					</div>
					<div className="accordion" id="accordion-acc7">
						<div className="card border-none bg-none">
							<div id="headingOne-acc7-1">
								<h5 className="mb-s1">
									<button className="btn btn-link btn-block text-size-s1 text-bold-600 text-dark rounded-0 text-left bg-v5-light bg-cherry--active text-white--active text-cherry--hover active collapsed pt-s1 pl-s2 pr-s2 pb-s1" type="button" data-toggle="collapse" data-target="#collapseOne-acc7-1" aria-expanded="true" aria-controls="collapseOne-acc7-1">
										<span className="mr-s1">
											<span>
												<i className="fa fa-plus hide"></i>
												<i className="fa fa-minus show"></i>
											</span>
										</span>
										Meet and Greet
									</button>
								</h5>
							</div>

							<div id="collapseOne-acc7-1" className="collapse show" aria-labelledby="headingOne-acc7-1" data-parent="#accordion-acc7">
								<div className="card-body pt-s2 pb-s2">
									<p>No parking stress, no hassle! Leave and pick your car from airport terminal. Professional & insured chauffeurs will greet you at the airport and safely park your car. Compare the cheapest meet and greet rates from trusted parking suppliers.</p>
								</div>
							</div>
						</div>
						<div className="card border-none bg-none">
							<div id="headingTwo-acc7-2">
								<h5 className="mb-s1">
									<button className="btn btn-link btn-block text-size-s1 text-bold-600 text-dark rounded-0 text-left bg-v5-light bg-cherry--active text-white--active text-cherry--hover collapsed pt-s1 pl-s2 pr-s2 pb-s1" type="button" data-toggle="collapse" data-target="#collapseTwo-acc7-2" aria-expanded="false" aria-controls="collapseTwo-acc7-2">
										<span className="mr-s1">
											<span>
												<i className="fa fa-plus hide"></i>
												<i className="fa fa-minus show"></i>
											</span>
										</span>
										Park and Ride
									</button>
								</h5>
							</div>
							<div id="collapseTwo-acc7-2" className="collapse" aria-labelledby="headingTwo-acc7-2" data-parent="#accordion-acc7">
								<div className="card-body pt-s2 pb-s2">
									<p>The most affordable & convenient way to park your car in our close to the airport car parks. Save money by comparing unbeatable park and ride offers at UK airports.</p>
								</div>
							</div>
						</div>
						<div className="card border-none bg-none">
							<div id="headingThree-acc7-3">
								<h5 className="mb-s1">
									<button className="btn btn-link btn-block text-size-s1 text-bold-600 text-dark rounded-0 text-left bg-v5-light bg-cherry--active text-white--active text-cherry--hover collapsed pt-s1 pl-s2 pr-s2 pb-s1" type="button" data-toggle="collapse" data-target="#collapseThree-acc7-3" aria-expanded="false" aria-controls="collapseThree-acc7-3">
										<span className="mr-s1">
											<span>
												<i className="fa fa-plus hide"></i>
												<i className="fa fa-minus show"></i>
											</span>
										</span>
										On Site Airport Parking
									</button>
								</h5>
							</div>
							<div id="collapseThree-acc7-3" className="collapse" aria-labelledby="headingThree-acc7-3" data-parent="#accordion-acc7">
								<div className="card-body pt-s2 pb-s2">
									<p>We have cheap offers for on-site parking at all major UK airports. Compare our prices and save up to 60% on booking UK airport parking now. Trusted by thousands of satisfied customers, our airport parking offers are simply unbeatable.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

    </div>
  )
}
dashboard.defaultProps = {
	title:'Index'
}
dashboard.propsTypes = {
	title:PropsTypes.String
}
export default dashboard

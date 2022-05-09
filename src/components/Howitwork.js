const Howitwork = ({title}) => {
  return (
    <div>
	<title>{title}</title>
      
	{/* BREADCRUMB */}
	<section className="bg-cherry pt-s3 pb-s3 text-white">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="d-lg-flex text-center">
						<div className="align-self-center mb-0--lg mb-s1--md mb-s1--sm mb-s1--xs">
							<h3 className="text-bold-400 text-size-s2 m-0 text-white">How it Works</h3>
						</div>
						<div className="ml-auto align-self-center">
							<ol className="breadcrumb d-flex justify-content-center m-0 bg-none text-size-s1 p-0">
								<li className="breadcrumb-item"><a className="text-white" href="index.html">Home</a></li>
								<li className="breadcrumb-item" aria-current="page">How it Works</li>
							</ol>
						</div>
					</div>
				</div>
			</div> {/* ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}
	{/* /BREADCRUMB */}

	<section className="bg-white pt-100 pb-s1">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover mt--parent--hover">
						<div className="bg-v5-light text-center pt-s4 bs-solid bc-light bw-s1 position-relative">
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
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover mt--parent--hover">
						<div className="bg-v5-light text-center pt-s4 bs-solid bc-light bw-s1 position-relative">
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
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover mt--parent--hover">
						<div className="bg-v5-light text-center pt-s4 bs-solid bc-light bw-s1 position-relative">
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
				<div className="col-lg-12 col-md-12">
					<div className="mb-s2">
						<h3 className="text-bold-700 text-dark text-capitalize">Booking</h3>
					</div>
					<p>Etiam elit eros, fermentum eu magna iaculis, maximus pretium nunc. Curabitur ullamcorper laoreet sapien at convallis. Cras imperdiet maximus quam ut elementum. Aliquam euismod elit mattis viverra condimentum. Suspendisse bibendum in nisi quis finibus.</p>
					<ul className="mt-s3 mb-s3">
						<li className="mb-6">
							<div className="d-flex align-items-center">
								<span className="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
									<i className="icon-arrow-right"></i>
								</span>
								<p className="m-0">Departure and Arrival Dates and Time.</p>
							</div>
						</li>
						<li className="mb-6">
							<div className="d-flex align-items-center">
								<span className="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
									<i className="icon-arrow-right"></i>
								</span>
								<p className="m-0">Departure and Arrival terminal.</p>
							</div>
						</li>
						<li className="mb-6">
							<div className="d-flex align-items-center">
								<span className="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
									<i className="icon-arrow-right"></i>
								</span>
								<p className="m-0">Contact Details.</p>
							</div>
						</li>
						<li className="mb-6">
							<div className="d-flex align-items-center">
								<span className="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
									<i className="icon-arrow-right"></i>
								</span>
								<p className="m-0">Vehicle's Details.</p>
							</div>
						</li>
						<li className="mb-6">
							<div className="d-flex align-items-center">
								<span className="bg-cherry text-white h--20 w--20 d-flex justify-content-center align-items-center text-size-8 rounded-circle mr-s2">
									<i className="icon-arrow-right"></i>
								</span>
								<p className="m-0">Payment Method (PayPal, Debit or Credit Cards).</p>
							</div>
						</li>
					</ul>
					<p>Etiam elit eros, fermentum eu magna iaculis, maximus pretium nunc. Curabitur ullamcorper laoreet sapien at convallis. Cras imperdiet maximus quam ut elementum. Aliquam euismod elit mattis viverra condimentum. Suspendisse bibendum in nisi quis finibus.</p>
					<div className="mb-s2">
						<h3 className="text-bold-700 text-dark text-capitalize">Departure</h3>
					</div>
					<p>Suspendisse vehicula ut lectus scelerisque finibus. Donec ac scelerisque ante. Fusce ornare nibh et diam ultricies, et venenatis leo venenatis. Proin convallis vel nunc et tincidunt. Cras vel consectetur leo. Morbi volutpat dolor urna, eget semper dolor finibus condimentum. Duis porta ante felis, id malesuada erat gravida ac. Proin ullamcorper ipsum eu faucibus venenatis. Ut in sem et mi placerat consectetur non nec sapien. Suspendisse vehicula ut lectus scelerisque finibus. Donec ac scelerisque ante. Fusce ornare nibh et diam ultricies.</p>
					<div className="mb-s2">
						<h3 className="text-bold-700 text-dark text-capitalize">Arrival</h3>
					</div>
					<p>Suspendisse vehicula ut lectus scelerisque finibus. Donec ac scelerisque ante. Fusce ornare nibh et diam ultricies, et venenatis leo venenatis. Proin convallis vel nunc et tincidunt. Cras vel consectetur leo. Morbi volutpat dolor urna, eget semper dolor finibus condimentum. Duis porta ante felis, id malesuada erat gravida ac. Proin ullamcorper ipsum eu faucibus venenatis. Ut in sem et mi placerat consectetur non nec sapien.</p>
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

    </div>
  )
}

export default Howitwork

import React from 'react'

const Contact = ({title}) => {
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
							<h3 className="text-bold-400 text-size-s2 m-0 text-white">Contact Us</h3>
						</div>
						<div className="ml-auto align-self-center">
							<ol className="breadcrumb d-flex justify-content-center m-0 bg-none text-size-s1 p-0">
								<li className="breadcrumb-item"><a className="text-white" href="index.html">Home</a></li>
								<li className="breadcrumb-item" aria-current="page">Contact Us</li>
							</ol>
						</div>
					</div>
				</div>
			</div> {/* ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}
	{/* /BREADCRUMB */}

	<section className="bg-v5-light pt-s2 pb-s2">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover">
						<div className="d-flex">
							<div className="mr-s2">
								<div className="text-size-s2 rounded-circle bg-cherry text-white text-center h--70 w--70 d-flex justify-content-center align-items-center box-shadow-v2-s3 box-shadow-v3-s3-child--hover">
									<i className="icon-phone"></i>
								</div>
							</div>
							<div>
								<h2 className="text-size-18 text-bold-600">Call Us</h2>
								<p className="m-0">+(211) 354-5565</p>
								<p className="m-0">+(201) 343-4545</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover">
						<div className="d-flex">
							<div className="mr-s2">
								<div className="text-size-s2 rounded-circle bg-cherry text-white text-center h--70 w--70 d-flex justify-content-center align-items-center box-shadow-v2-s3 box-shadow-v3-s3-child--hover">
									<i className="icon-envelope-open"></i>
								</div>
							</div>
							<div>
								<h2 className="text-size-18 text-bold-600">Email Us</h2>
								<p className="m-0">admin@email.com</p>
								<p className="m-0">info@email.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12">
					<div className="mt-s2 mb-s2 box-shadow-parent--hover">
						<div className="d-flex">
							<div className="mr-s2">
								<div className="text-size-s2 rounded-circle bg-cherry text-white text-center h--70 w--70 d-flex justify-content-center align-items-center box-shadow-v2-s3 box-shadow-v3-s3-child--hover">
									<i className="icon-calendar"></i>
								</div>
							</div>
							<div>
								<h2 className="text-size-18 text-bold-600">Working Hours</h2>
								<p className="m-0">Mon-Sat 09:00 - 19:00</p>
								<p className="m-0">Sun 10:00 - 13:00</p>
							</div>
						</div>
					</div>
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

	<section className="bg-white pt-s5 pb-s5">
		<div className="container">
			<div className="mb-s4">
				<h6 className="text-bold-700 text-cherry">Get In Touch</h6>
				<h2 className="text-bold-700 text-dark text-capitalize">What can we help you with?</h2>
				<hr className="w--60 bs-solid bc-cherry bw-s5 bt-0 bl-0 br-0 mt-s2 ml-0"/>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-6">
					<form>
						<div className="form-row">
							<div className="form-group col-md-6">
								<input type="text" className="form-control bg-light text-size-12 pt-16 pb-16 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark" placeholder="Name"/>
							</div>
							<div className="form-group col-md-6">
								<input type="email" className="form-control bg-light text-size-12 pt-16 pb-16 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark" placeholder="Email"/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-12">
								<input type="text" className="form-control bg-light text-size-12 pt-16 pb-16 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark" placeholder="Subject"/>
							</div>
						</div>
						<div className="form-group">
							<textarea className="form-control bg-light text-size-12 pt-16 pb-16 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark" rows="5" placeholder="Your Message"></textarea>
						</div>
						<button type="submit" className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-s5 pt-12 pb-12 pl-s3 pr-s3 mt-s1 mb-s1 btn-block">Send Message</button>
					</form>
				</div>
				<div className="col-lg-6 col-md-6">
					<div className="bs-solid bc-v1-dark bw-s1 p-s1">
						{/* Google Maps - Go to the bottom of the page to change settings and map location. */}
						<div id="googlemaps" className="min-h--300"></div>
					</div>
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

    </div>
  )
}

export default Contact

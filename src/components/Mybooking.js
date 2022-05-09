import React from 'react'

const Mybooking = ({title}) => {
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
							<h3 className="text-bold-400 text-size-s2 m-0 text-white">My Bookings</h3>
						</div>
						<div className="ml-auto align-self-center">
							<ol className="breadcrumb d-flex justify-content-center m-0 bg-none text-size-s1 p-0">
								<li className="breadcrumb-item"><a className="text-white" href="index.html">Home</a></li>
								<li className="breadcrumb-item" aria-current="page">My Bookings</li>
							</ol>
						</div>
					</div>
				</div>
			</div> {/* ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}
	{/* /BREADCRUMB */}

	<section className="bg-white pt-s5 pb-s5">
		<div className="container">
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="search" id="withreference" value="withreference" checked=""/>
                            <label className="form-check-label text-size-16 mb-10" for="withreference">
                                Yes, I have Booking Reference.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="search" id="withoutreference" value="withoutreference"/>
                            <label className="form-check-label text-size-16 mb-10" for="withoutreference">
                                No, I do not have Booking Reference.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="search" id="logindetail" value="logindetail"/>
                            <label className="form-check-label text-size-16 mb-10" for="logindetail">
                                Yes, I do have Customer Login Detail.
                            </label>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <div className="mb-30">
                                <h3 className="text-bold-700 text-dark">Search Booking By Reference No</h3> 
                                <div className="mb-s3">
                                    <hr className="mb-0 bc-v1-dark"/>
                                    <hr className="w--60 bs-solid bc-cherry bw-s5 bt-0 bl-0 br-0 mt-0 ml-0"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="text-size-12 text-bold-500">Booking Reference<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
                                    <small className="d-block">Enter Booking Reference e.g QV-0000-00</small>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="text-size-12 text-bold-500">Email Address<span className="text-danger">*</span></label>
                                    <input type="email" name="email" className="form-control bg-light text-size-12 pt-8 pb-8 pl-20 pr-20 text-bold-600 rounded-0 bc-v1-dark"/>
                                    <small className="d-block">Enter Email Address used at the time of Booking</small>
                                </div>
                            </div>

                            <button className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover mt-10">Search Booking(s)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

    </div>
  )
}

export default Mybooking

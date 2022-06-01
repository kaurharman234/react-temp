import React from 'react'

const Blog = ({title}) => {
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
							<h3 className="text-bold-400 text-size-s2 m-0 text-white">Blog</h3>
						</div>
						<div className="ml-auto align-self-center">
							<ol className="breadcrumb d-flex justify-content-center m-0 bg-none text-size-s1 p-0">
								<li className="breadcrumb-item"><a className="text-white" href="index.html">Home</a></li>
								<li className="breadcrumb-item" aria-current="page">Blog</li>
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
			<div className="row">
				{/* SIDEBAR */}
				<div className="col-lg-3 col-md-12 col-sm-12">
					<div className="mb-s3">
						<div className="input-group">
							<input type="text" className="form-control bc-v1-dark text-size-s1 br-0" placeholder="Search"/>
							<div className="input-group-append">
								<button className="btn bg-none text-dark bs-solid bc-v1-dark bl-0" type="button"><i className="icon-magnifier text-size-12"></i></button>
							</div>
						</div>
					</div>
					<div className="mb-s3">
						<div className="mb-20">
							<h6 className="text-bold-700">Recent Posts</h6>
							<hr className="mb-0 bs-double bc-v1-dark bw-s4 bt-0 bl-0 br-0"/>
						</div>
						<ul>
							<li>
								<div className="mb-s2">
									<div className="d-flex">
										<div className="mr-s2">
											<a href="#"><img className="w--70 img-responsive" src="images/news/thumb/1-100x70.jpg" alt="News"/></a>
										</div>
										<div>
											<h6 className="text-bold-600 text-size-15"><a className="text-dark text-cherry--hover" href="#">With one of Australia largest and comprehensive</a></h6>
											<ul className="list-inline text-size-10 text-bold-600 text-v5-dark mt-s1">
												<li className="list-inline-item">
													<i className="icon-clock"></i> &nbsp;Jun 01, 2018
												</li>
												<li className="list-inline-item text-size-10">/</li>
												<li className="list-inline-item">
													<i className="icon-bubbles"></i>
													<a className="text-v5-dark text-cherry--hover" href="#">12</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li><hr className="bs-dashed bc-v1-dark"/></li>
							<li>
								<div className="mb-s2">
									<div className="d-flex">
										<div className="mr-s2">
											<a href="#"><img className="w--70 img-responsive" src="images/news/thumb/2-100x70.jpg" alt="News"/></a>
										</div>
										<div>
											<h6 className="text-bold-600 text-size-15"><a className="text-dark text-cherry--hover" href="#">Aliquam lorem ante, dapibus in, viverra quis</a></h6>
											<ul className="list-inline text-size-10 text-bold-600 text-v5-dark mt-s1">
												<li className="list-inline-item">
													<i className="icon-clock"></i> &nbsp;Jun 01, 2018
												</li>
												<li className="list-inline-item text-size-10">/</li>
												<li className="list-inline-item">
													<i className="icon-bubbles"></i>
													<a className="text-v5-dark text-cherry--hover" href="#">12</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li><hr className="bs-dashed bc-v1-dark"/></li>
							<li>
								<div>
									<div className="d-flex">
										<div className="mr-s2">
											<a href="#"><img className="w--70 img-responsive" src="images/news/thumb/3-100x70.jpg" alt="News"/></a>
										</div>
										<div>
											<h6 className="text-bold-600 text-size-15"><a className="text-dark text-cherry--hover" href="#">Ut enim ad minima veniam, quis nostrum</a></h6>
											<ul className="list-inline text-size-10 text-bold-600 text-v5-dark mt-s1">
												<li className="list-inline-item">
													<i className="icon-clock"></i> &nbsp;Jun 01, 2018
												</li>
												<li className="list-inline-item text-size-10">/</li>
												<li className="list-inline-item">
													<i className="icon-bubbles"></i>
													<a className="text-v5-dark text-cherry--hover" href="#">12</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="mb-s3">
						<div className="mb-20">
							<h6 className="text-bold-700">Testimonials</h6>
							<hr className="mb-0 bs-double bc-v1-dark bw-s4 bt-0 bl-0 br-0"/>
						</div>
						<div className="row mt-s2 mb-s2">
							<div className="col-lg-12 col-sm-12">
								<div className="owl-carousel owl-theme owl-nav-bordered owl-nav-circle owl-dots-inside-top-right mt-s1 mb-s1" data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 1}, '768': {'items': 1}, '979': {'items': 1}, '1199': {'items': 1}}, 'margin': 10, 'loop': false, 'nav': false, 'dots': true}">
									<div>
										<div className="mb-s3 box-shadow-parent--hover">
											<div>
												<div className="bg-v5-light bs-solid bc-light bw-s1 pt-s3 pb-s3 pl-s3 pr-s3">
													<p className="mt-s1 mb-s1 font-italic">Donec eleifend, nulla eu dapibus malesuada, nisi elit interdum ipsum, a feugiat est erat nec libero.</p>
												</div>
											</div>
											<div className="d-flex mt-s3 ml-s3">
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
										<div className="mb-s3 box-shadow-parent--hover">
											<div>
												<div className="bg-v5-light bs-solid bc-light bw-s1 pt-s3 pb-s3 pl-s3 pr-s3">
													<p className="mt-s1 mb-s1 font-italic">Donec eleifend, nulla eu dapibus malesuada, nisi elit interdum ipsum, a feugiat est erat nec libero.</p>
												</div>
											</div>
											<div className="d-flex mt-s3 ml-s3">
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
									<div>
										<div className="mb-s3 box-shadow-parent--hover">
											<div>
												<div className="bg-v5-light bs-solid bc-light bw-s1 pt-s3 pb-s3 pl-s3 pr-s3">
													<p className="mt-s1 mb-s1 font-italic">Donec eleifend, nulla eu dapibus malesuada, nisi elit interdum ipsum, a feugiat est erat nec libero.</p>
												</div>
											</div>
											<div className="d-flex mt-s3 ml-s3">
												<div className="rounded-circle h--45 w--45 mr-s2 d-flex justify-content-center align-items-center box-shadow-v2-s3-child--hover">
													<img className="w-100 rounded-circle bs-solid bc-light bw-s3" src="images/testimonials/user-3.jpg" alt="Testimonials"/>
												</div>
												<div>									
													<span className="text-bold-600 text-dark d-block">Mary Jane</span>
													<span className="text-size-s1 text-muted">Apple Inc.</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> {/* /ROW */}
					</div>
				</div> {/* /SIDEBAR */}
				<div className="col-lg-9 col-md-12 col-sm-12">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="mb-s2 bg-v5-light">
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<div className="match-height d-flex justify-content-center align-items-center">
											<div>
												<a href="#"><img className="img-responsive" src="images/news/1-720x435.jpg" alt="News"/></a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="match-height pt-s3 pb-s3 pl-s3--md pl-s3--sm pl-s3--xs pr-s3">
											<ul className="list-inline text-size-s1 text-bold-600 mb-6">
												<li className="list-inline-item">
													by John Doe
												</li>
												<li className="list-inline-item text-size-10">|</li>
												<li className="list-inline-item">
													May 10, 2018
												</li>
											</ul>
											<h2 className="text-size-20 text-bold-600 text-capitalize mb-12"><a className="text-cherry text-dark--hover" href="#">Phasellus porta eunisi</a></h2>
											<p className="mb-s1">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan...</p>
											<div className="mt-20">
												<a className="btn bg-cherry text-white text-bold-600 text-size-12 rounded-0 bs-solid bc-cherry bw-s2 box-shadow-v1-s3--hover pt-4 pb-4 pl-12 pr-12" href="#">Read More <i className="fa fa-long-arrow-alt-right ml-5"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="mt-s2 mb-s2 bg-v5-light">
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<div className="match-height d-flex justify-content-center align-items-center">
											<div>
												<a href="#"><img className="img-responsive" src="images/news/2-720x435.jpg" alt="News"/></a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="match-height pt-s3 pb-s3 pl-s3--md pl-s3--sm pl-s3--xs pr-s3">
											<ul className="list-inline text-size-s1 text-bold-600 mb-6">
												<li className="list-inline-item">
													by John Doe
												</li>
												<li className="list-inline-item text-size-10">|</li>
												<li className="list-inline-item">
													May 10, 2018
												</li>
											</ul>
											<h2 className="text-size-20 text-bold-600 text-capitalize mb-12"><a className="text-cherry text-dark--hover" href="#">vehicula lacus nunc</a></h2>
											<p className="mb-s1">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan...</p>
											<div className="mt-20">
												<a className="btn bg-cherry text-white text-bold-600 text-size-12 rounded-0 bs-solid bc-cherry bw-s2 box-shadow-v1-s3--hover pt-4 pb-4 pl-12 pr-12" href="#">Read More <i className="fa fa-long-arrow-alt-right ml-5"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="mt-s2 mb-s2 bg-v5-light">
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<div className="match-height d-flex justify-content-center align-items-center">
											<div>
												<a href="#"><img className="img-responsive" src="images/news/3-720x435.jpg" alt="News"/></a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="match-height pt-s3 pb-s3 pl-s3--md pl-s3--sm pl-s3--xs pr-s3">
											<ul className="list-inline text-size-s1 text-bold-600 mb-6">
												<li className="list-inline-item">
													by John Doe
												</li>
												<li className="list-inline-item text-size-10">|</li>
												<li className="list-inline-item">
													May 10, 2018
												</li>
											</ul>
											<h2 className="text-size-20 text-bold-600 text-capitalize mb-12"><a className="text-cherry text-dark--hover" href="#">semper velit benetis</a></h2>
											<p className="mb-s1">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan...</p>
											<div className="mt-20">
												<a className="btn bg-cherry text-white text-bold-600 text-size-12 rounded-0 bs-solid bc-cherry bw-s2 box-shadow-v1-s3--hover pt-4 pb-4 pl-12 pr-12" href="#">Read More <i className="fa fa-long-arrow-alt-right ml-5"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="mt-s2 mb-s2 bg-v5-light">
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<div className="match-height d-flex justify-content-center align-items-center">
											<div>
												<a href="#"><img className="img-responsive" src="images/news/4-720x435.jpg" alt="News"/></a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="match-height pt-s3 pb-s3 pl-s3--md pl-s3--sm pl-s3--xs pr-s3">
											<ul className="list-inline text-size-s1 text-bold-600 mb-6">
												<li className="list-inline-item">
													by John Doe
												</li>
												<li className="list-inline-item text-size-10">|</li>
												<li className="list-inline-item">
													May 10, 2018
												</li>
											</ul>
											<h2 className="text-size-20 text-bold-600 text-capitalize mb-12"><a className="text-cherry text-dark--hover" href="#">Sodales Lacinia Magna</a></h2>
											<p className="mb-s1">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan...</p>
											<div className="mt-20">
												<a className="btn bg-cherry text-white text-bold-600 text-size-12 rounded-0 bs-solid bc-cherry bw-s2 box-shadow-v1-s3--hover pt-4 pb-4 pl-12 pr-12" href="#">Read More <i className="fa fa-long-arrow-alt-right ml-5"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12 col-md-12">
							<div className="mt-s2 mb-s2 bg-v5-light">
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<div className="match-height d-flex justify-content-center align-items-center">
											<div>
												<a href="#"><img className="img-responsive" src="images/news/5-720x435.jpg" alt="News"/></a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="match-height pt-s3 pb-s3 pl-s3--md pl-s3--sm pl-s3--xs pr-s3">
											<ul className="list-inline text-size-s1 text-bold-600 mb-6">
												<li className="list-inline-item">
													by John Doe
												</li>
												<li className="list-inline-item text-size-10">|</li>
												<li className="list-inline-item">
													May 10, 2018
												</li>
											</ul>
											<h2 className="text-size-20 text-bold-600 text-capitalize mb-12"><a className="text-cherry text-dark--hover" href="#">Eget Ornare Vivamus</a></h2>
											<p className="mb-s1">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan...</p>
											<div className="mt-20">
												<a className="btn bg-cherry text-white text-bold-600 text-size-12 rounded-0 bs-solid bc-cherry bw-s2 box-shadow-v1-s3--hover pt-4 pb-4 pl-12 pr-12" href="#">Read More <i className="fa fa-long-arrow-alt-right ml-5"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> {/* /ROW */}
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="d-flex justify-content-between align-items-center mt-s4">
								<div>
									<nav>
										<ul className="list-inline">
											<li className="list-inline-item m-0 float-left"><a className="page-link text-size-s1 rounded-0 p-s2 text-dark bg-cherry--active text-white--active bc-cherry--active" href="#">Previous</a></li>
											<li className="list-inline-item m-0 float-left"><a className="page-link text-size-s1 rounded-0 p-s2 text-dark bg-cherry--active text-white--active bc-cherry--active active" href="#">1</a></li>
											<li className="list-inline-item m-0 float-left"><a className="page-link text-size-s1 rounded-0 p-s2 text-dark bg-cherry--active text-white--active bc-cherry--active" href="#">2</a></li>
											<li className="list-inline-item m-0 float-left"><a className="page-link text-size-s1 rounded-0 p-s2 text-dark bg-cherry--active text-white--active bc-cherry--active" href="#">3</a></li>
											<li className="list-inline-item m-0 float-left"><a className="page-link text-size-s1 rounded-0 p-s2 text-dark bg-cherry--active text-white--active bc-cherry--active" href="#">Next</a></li>
										</ul>
									</nav>
								</div>
								{/* <div>
									Page 1 to 10
								</div> */}
							</div>
						</div>
					</div> {/* /ROW */}
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

    </div>
  )
}

export default Blog

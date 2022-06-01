const Meetgreet = ({title}) => {
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
							<h3 className="text-bold-400 text-size-s2 m-0 text-white">Meet and Greet</h3>
						</div>
						<div className="ml-auto align-self-center">
							<ol className="breadcrumb d-flex justify-content-center m-0 bg-none text-size-s1 p-0">
								<li className="breadcrumb-item"><a className="text-white" href="index.html">Home</a></li>
								<li className="breadcrumb-item" aria-current="page">Meet and Greet</li>
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
				<div className="col-lg-12 col-md-12">
					<div className="mb-s2">
						<h3 className="text-bold-700 text-dark text-capitalize">Valet Car Parking</h3>
					</div>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat.</p>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.</p>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
					<div className="mb-s2">
						<h3 className="text-bold-700 text-dark text-capitalize">Convenient</h3>
					</div>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
					<div className="mb-s2">
						<h3 className="text-bold-700 text-dark text-capitalize">Efficient Service</h3>
					</div>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
					<div className="mb-s2">
						<h3 className="text-bold-700 text-dark text-capitalize">Competitive</h3>
					</div>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
				</div>
			</div> {/* /ROW */}
		</div> {/* /CONTAINER */}
	</section> {/* /SECTION */}

    </div>
  )
}

export default Meetgreet

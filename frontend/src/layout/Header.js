import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      	<div className="main-header header-shadow cherry-header">
	    <div className="bg-cherry">
	        <div className="container">
	            <div className="row">
	                <div className="col-lg-6 col-md-12">
	                    <div className="text-white mt-10 text-center--md text-center--sm text-center--xs">
	                        Helpline 012345-XXXXX
	                    </div>
	                </div>
	                <div className="col-lg-6 col-md-12">
	                    <div className="text-right text-center--md text-center--sm text-center--xs">
	                        <span className="text-white mt-8 pl-20 pr-20 d-inline-block">
	                            Welcome <span className="text-bold-600">John Doe</span>
	                        </span>
	                        <Link to="/Parking" className="btn btn-white text-cherry text-size-11 text-bold-600 mt-5 mb-5 mt-10--md mb-10--md mt-10--sm mb-10--sm mt-10--xs mb-10--xs text-uppercase"><i className="zmdi zmdi-account-o text-size-15 mr-6 float-left mt-1"></i> My Bookings</Link>
	                        <Link to="/Parking" className="btn btn-white text-cherry text-size-11 text-bold-600 mt-5 mb-5 mt-10--md mb-10--md mt-10--sm mb-10--sm mt-10--xs mb-10--xs text-uppercase mx-2"><i className="zmdi zmdi-power text-size-15 mr-6 float-left mt-1"></i> Logout</Link>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
		<div className="container">

			<div className="main-header-container">

				<div className="logo" data-mobile-logo="images/logo/logo-dark.png" data-sticky-logo="images/logo/logo-dark.png">
					<Link to="/Parking"><img src="images/logo/logo-dark.png" alt="logo"/></Link>
				</div> {/* /LOGO */}

				<div className="burger-menu">
					<div className="line-menu line-half first-line"></div>
					<div className="line-menu"></div>
					<div className="line-menu line-half last-line"></div>
				</div> {/* /BURGER MENU */}

				<nav className="main-menu menu-caret menu-hover-2 submenu-top-border submenu-scale">
					<ul>
						<li className="current-menu"><Link to="/" >Home</Link></li>
						<li><a>Parkings</a>
							<ul>
								<li><Link to="/Parking">Parkings</Link></li>
								<li><Link to="/Booking">Booking</Link></li>
								<li><Link to="/Bookingconfirm">Booking Confirm</Link></li>
							</ul>
						</li>
						<li><Link to="/Howitwork" >How it Works</Link></li>
						<li><Link to="/about">About Us</Link>
							<ul>
								<li><Link to="/Meetgreet">Meet & Greet</Link></li>
								<li><Link to="/Testimonials">Testimonials</Link></li>
							</ul>
						</li>
						<li><Link to="/blog">Blog</Link></li>
						{/* <li><Link to="/faq">FAQs</Link></li> */}
						<li><Link to="/Contact">Contact Us</Link></li>
					</ul>
				</nav> {/* NAVIGATION MENU */}

			</div> {/* /HEADER CONTAINER */}

		</div> {/* /CONTAINER */}
	</div> {/* /HEADER */}
    </div>
  )
}

export default Header

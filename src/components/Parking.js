import React from 'react'

const Parking = ({title}) => {
  return (
    <>
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
</div>{/* /CONTAINER */}
<div className="overlay bg-v9-dark"></div>
</section>
{/* /SECTION */}

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
</div>{/* /CONTAINER */}
<div className="container pt-s4">
    <div className="row pl-16">
        <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="row">
                <div className="col-lg-12 col-md-6 position-relative">
                    <div className="mb-s2 box-shadow-v1-s2--hover position-relative">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="bg-white hero-section-parent d-flex justify-content-center position-relative align-items-center bs-solid bc-light bw-s1 match-height min-h--260--md min-h--260--sm min-h--260--xs">
                                    <div>
                                        <img className="max-w--200" src="images/parkings/parking-1.png" alt="Bristol Parking Spaces"/>
                                    </div>
                                    <div className="hero-section-container-bl w-100 d-flex align-items-center justify-content-center">
                                        <span className="bg-v7-warning pt-5 pb-5 pl-20 pr-20 text-dark rounded-tl-s2 rounded-tr-s2">Meet & Greet Service</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 p-0">
                                <div className="bg-white pt-s3 pl-s3 pr-s3 pb-s3 match-height">
                                    <div className="ribbon ribbon-top-left"><span className="bg-cherry text-white box-shadow-v2-s3">Offer</span></div>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="text-size-30 mt-s3 mb-18">$28.80 <del>$36</del></div>
                                            <div className="star-rating star-rating-s2 text-cherry mb-6" title="0.00 Rating"><span className="w-0"></span></div>
                                            <h2 className="text-size-20 text-bold-600 text-capitalize mb-8">Bristol Parking Spaces</h2>
                                            <h6 className="text-cherry">Meet & Greet at Terminal</h6>
                                            <span>Non-Flex, Cannot be Cancelled</span>
                                            <div className="mt-20">
                                                <a href="booking.html" className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover">Book Now</a>
                                                <a className="btn bg-warning text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover" data-toggle="modal" data-target=".more-info">More Info</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12">
                                            <ul className="row mt-20 mb-15">
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-1.png" alt="24 Hours Patrols"/>
                                                    24 Hours Patrols
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-2.png" alt="CCTV Cameras"/>
                                                    CCTV Cameras
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-3.png" alt="Fencing"/>
                                                    Fencing
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-4.png" alt="You Keep Your Keys"/>
                                                    You Keep Your Keys
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-5.png" alt="Secure Barrier"/>
                                                    Secure Barrier
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-6.png" alt="24 Hours Patrolled"/>
                                                    24 Hours Patrolled
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-7.png" alt="Disability Friendly"/>
                                                    Disability Friendly
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /ROW */}
                    </div>

                   {/* MODEL */}
                    <div className="modal fade text-xs-left modal-xl more-info" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
                        <div className="modal-dialog modal_xl" role="document">
                            <div className="modal-content modalcontentsticky">
                                <button type="button" className="close btn-primary text-white site_model_close_btn bg-danger" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-9 col-md-9">
                                            <div>
                                                <div className="nav nav-pills mb-s3 bg-v5-light p-10" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <a className="nav-link btn bg-none text-size-s1 text-bold-600 text-dark text-white--active bg-cherry--active rounded-0 hover-buzz-out text-left active" id="tab-1-1-tab" data-toggle="pill" href="#tab-1-1" role="tab" aria-controls="tab-1-1" aria-selected="true">Overview</a>
                                                    <a className="nav-link btn bg-none text-size-s1 text-bold-600 text-dark text-white--active bg-cherry--active rounded-0 hover-buzz-out text-left" id="tab-2-1-tab" data-toggle="pill" href="#tab-2-1" role="tab" aria-controls="tab-2-1" aria-selected="false">Return Procedure</a>
                                                    <a className="nav-link btn bg-none text-size-s1 text-bold-600 text-dark text-white--active bg-cherry--active rounded-0 hover-buzz-out text-left" id="tab-3-1-tab" data-toggle="pill" href="#tab-3-1" role="tab" aria-controls="tab-3-1" aria-selected="false">Drop-Off Procedure</a>
                                                    <a className="nav-link btn bg-none text-size-s1 text-bold-600 text-dark text-white--active bg-cherry--active rounded-0 hover-buzz-out text-left" id="tab-4-1-tab" data-toggle="pill" href="#tab-4-1" role="tab" aria-controls="tab-4-1" aria-selected="false">Terms & Conditions</a>
                                                    <a className="nav-link btn bg-none text-size-s1 text-bold-600 text-dark text-white--active bg-cherry--active rounded-0 hover-buzz-out text-left" id="tab-5-1-tab" data-toggle="pill" href="#tab-5-1" role="tab" aria-controls="tab-5-1" aria-selected="false">Important</a>
                                                    <a className="nav-link btn bg-none text-size-s1 text-bold-600 text-dark text-white--active bg-cherry--active rounded-0 hover-buzz-out text-left" id="tab-6-1-tab" data-toggle="pill" href="#tab-6-1" role="tab" aria-controls="tab-6-1" aria-selected="false">Reviews</a>
                                                </div>
                                                <div className="tab-content w-100" id="v-pills-tabContent">
                                                    <div className="tab-pane fade show active" id="tab-1-1" role="tabpanel" aria-labelledby="tab-1-1-tab">
                                                        <h5>Why Use Bristol Parking Spaces ?</h5>
                                                        <p>The chauffeur will collect & return your car at Short Stay Car park.</p>
                                                        <ul className="text-v6-dark mb-15">
                                                            <li></li>
                                                            <li>Fully insured chauffeurs</li>
                                                            <li>Ideal for families and business travellers</li>
                                                            <li>Leave your keys</li>
                                                            <li>Short walk to terminal.</li>
                                                            <li>You will be met at the terminal by an APH Chauffeur.</li>
                                                        </ul>
                                                        <hr/>
                                                        <p>Donec eleifend, nulla eu dapibus malesuada, nisi elit interdum ipsum, a feugiat est erat nec libero. Sed lacus enim, laoreet sit amet metus vitae, congue laoreet ligula. Sed rutrum justo vitae gravida ultricies. Aliquam erat volutpat. Sed consequat purus et odio lobortis, eget lacinia mauris ultricies. Vestibulum dictum mattis nisl, eu malesuada sapien iaculis eget. Maecenas euismod turpis nec viverra faucibus.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-2-1" role="tabpanel" aria-labelledby="tab-2-1-tab">
                                                        <p className="text-justify">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan. Pellentesque egestas arcu elementum neque finibus iaculis. Vivamus bibendum, metus sit amet fermentum maximus, quam mi euismod felis, pulvinar vehicula lacus nunc eget augue. Nullam tincidunt, sapien eu tristique vestibulum, arcu ipsum eleifend sapien, eu dictum lectus elit ac risus. Nullam congue, ante non porta euismod, velit neque rhoncus velit, eget aliquet massa velit quis tellus. In et augue luctus, sollicitudin sem vitae, hendrerit quam. Aenean vehicula lectus enim, vel tempor arcu luctus sed. Nunc tempus fermentum leo, quis semper velit venenatis eget. Proin id leo non magna imperdiet faucibus et ut ipsum. Praesent convallis placerat velit ut imperdiet. Sed nec consequat felis. Duis odio sem, consectetur vitae ultrices vel, vulputate id sapien. Maecenas posuere ligula non accumsan sagittis. Morbi elementum bibendum ipsum, ac venenatis leo faucibus vel.</p>

                                                        <p>Donec eleifend, nulla eu dapibus malesuada, nisi elit interdum ipsum, a feugiat est erat nec libero. Sed lacus enim, laoreet sit amet metus vitae, congue laoreet ligula. Sed rutrum justo vitae gravida ultricies. Aliquam erat volutpat. Sed consequat purus et odio lobortis, eget lacinia mauris ultricies. Vestibulum dictum mattis nisl, eu malesuada sapien iaculis eget. Maecenas euismod turpis nec viverra faucibus.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-3-1" role="tabpanel" aria-labelledby="tab-3-1-tab">
                                                        <p className="text-justify">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan. Pellentesque egestas arcu elementum neque finibus iaculis. Vivamus bibendum, metus sit amet fermentum maximus, quam mi euismod felis, pulvinar vehicula lacus nunc eget augue. Nullam tincidunt, sapien eu tristique vestibulum, arcu ipsum eleifend sapien, eu dictum lectus elit ac risus. Nullam congue, ante non porta euismod, velit neque rhoncus velit, eget aliquet massa velit quis tellus. In et augue luctus, sollicitudin sem vitae, hendrerit quam. Aenean vehicula lectus enim, vel tempor arcu luctus sed. Nunc tempus fermentum leo, quis semper velit venenatis eget. Proin id leo non magna imperdiet faucibus et ut ipsum. Praesent convallis placerat velit ut imperdiet. Sed nec consequat felis. Duis odio sem, consectetur vitae ultrices vel, vulputate id sapien. Maecenas posuere ligula non accumsan sagittis. Morbi elementum bibendum ipsum, ac venenatis leo faucibus vel.</p>

                                                        <p>Donec eleifend, nulla eu dapibus malesuada, nisi elit interdum ipsum, a feugiat est erat nec libero. Sed lacus enim, laoreet sit amet metus vitae, congue laoreet ligula. Sed rutrum justo vitae gravida ultricies. Aliquam erat volutpat. Sed consequat purus et odio lobortis, eget lacinia mauris ultricies. Vestibulum dictum mattis nisl, eu malesuada sapien iaculis eget. Maecenas euismod turpis nec viverra faucibus.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-4-1" role="tabpanel" aria-labelledby="tab-4-1-tab">
                                                        <p className="text-justify">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan. Pellentesque egestas arcu elementum neque finibus iaculis. Vivamus bibendum, metus sit amet fermentum maximus, quam mi euismod felis, pulvinar vehicula lacus nunc eget augue. Nullam tincidunt, sapien eu tristique vestibulum, arcu ipsum eleifend sapien, eu dictum lectus elit ac risus. Nullam congue, ante non porta euismod, velit neque rhoncus velit, eget aliquet massa velit quis tellus. In et augue luctus, sollicitudin sem vitae, hendrerit quam. Aenean vehicula lectus enim, vel tempor arcu luctus sed. Nunc tempus fermentum leo, quis semper velit venenatis eget. Proin id leo non magna imperdiet faucibus et ut ipsum. Praesent convallis placerat velit ut imperdiet. Sed nec consequat felis. Duis odio sem, consectetur vitae ultrices vel, vulputate id sapien. Maecenas posuere ligula non accumsan sagittis. Morbi elementum bibendum ipsum, ac venenatis leo faucibus vel.</p>

                                                        <p>Donec eleifend, nulla eu dapibus malesuada, nisi elit interdum ipsum, a feugiat est erat nec libero. Sed lacus enim, laoreet sit amet metus vitae, congue laoreet ligula. Sed rutrum justo vitae gravida ultricies. Aliquam erat volutpat. Sed consequat purus et odio lobortis, eget lacinia mauris ultricies. Vestibulum dictum mattis nisl, eu malesuada sapien iaculis eget. Maecenas euismod turpis nec viverra faucibus.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-5-1" role="tabpanel" aria-labelledby="tab-5-1-tab">
                                                        <p className="text-justify">Morbi sodales lacinia magna eget ornare. Vivamus ac posuere neque. Phasellus porta eu nisi eget accumsan. Pellentesque egestas arcu elementum neque finibus iaculis. Vivamus bibendum, metus sit amet fermentum maximus, quam mi euismod felis, pulvinar vehicula lacus nunc eget augue. Nullam tincidunt, sapien eu tristique vestibulum, arcu ipsum eleifend sapien, eu dictum lectus elit ac risus. Nullam congue, ante non porta euismod, velit neque rhoncus velit, eget aliquet massa velit quis tellus. In et augue luctus, sollicitudin sem vitae, hendrerit quam. Aenean vehicula lectus enim, vel tempor arcu luctus sed. Nunc tempus fermentum leo, quis semper velit venenatis eget. Proin id leo non magna imperdiet faucibus et ut ipsum. Praesent convallis placerat velit ut imperdiet. Sed nec consequat felis. Duis odio sem, consectetur vitae ultrices vel, vulputate id sapien. Maecenas posuere ligula non accumsan sagittis. Morbi elementum bibendum ipsum, ac venenatis leo faucibus vel.</p>

                                                        <p>Donec eleifend, nulla eu dapibus malesuada, nisi elit interdum ipsum, a feugiat est erat nec libero. Sed lacus enim, laoreet sit amet metus vitae, congue laoreet ligula. Sed rutrum justo vitae gravida ultricies. Aliquam erat volutpat. Sed consequat purus et odio lobortis, eget lacinia mauris ultricies. Vestibulum dictum mattis nisl, eu malesuada sapien iaculis eget. Maecenas euismod turpis nec viverra faucibus.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-6-1" role="tabpanel" aria-labelledby="tab-6-1-tab">
                                                       {/* REVIEW */}
                                                        <div className="bs-dashed bc-v1-dark bw-s1 p-18 rounded-s2 bg-v6-light p-18 mb-12">
                                                            <div className="row">
                                                                <div className="col-md-3 text-center">
                                                                    <div>John Doe</div>
                                                                    <div>
                                                                        <div className="star-rating star-rating-s3 text-cherry mb-8 mt-15 m-auto" title="4 Start">
                                                                            <span className="w-80"></span>
                                                                        </div>
                                                                        <span>Rating 4 / 5</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                                                                    </div>
                                                                    <div className="row text-size-12 pt-10 mt-10">
                                                                        <div className="col-md-6">Confirmed Purchase: 13, January 2019</div>
                                                                        <div className="col-md-6 text-right text-left--xs text-left--sm">Reviewed: 19, January 2019</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                       {/* /REVIEW */}
                                                       {/* REVIEW */}
                                                        <div className="bs-dashed bc-v1-dark bw-s1 p-18 rounded-s2 bg-v6-light p-18 mb-12">
                                                            <div className="row">
                                                                <div className="col-md-3 text-center">
                                                                    <div>John Doe</div>
                                                                    <div>
                                                                        <div className="star-rating star-rating-s3 text-cherry mb-8 mt-15 m-auto" title="4 Start">
                                                                            <span className="w-80"></span>
                                                                        </div>
                                                                        <span>Rating 4 / 5</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                                                                    </div>
                                                                    <div className="row text-size-12 pt-10 mt-10">
                                                                        <div className="col-md-6">Confirmed Purchase: 13, January 2019</div>
                                                                        <div className="col-md-6 text-right text-left--xs text-left--sm">Reviewed: 19, January 2019</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                       {/* /REVIEW */}
                                                       {/* REVIEW */}
                                                        <div className="bs-dashed bc-v1-dark bw-s1 p-18 rounded-s2 bg-v6-light p-18 mb-12">
                                                            <div className="row">
                                                                <div className="col-md-3 text-center">
                                                                    <div>John Doe</div>
                                                                    <div>
                                                                        <div className="star-rating star-rating-s3 text-cherry mb-8 mt-15 m-auto" title="4 Start">
                                                                            <span className="w-80"></span>
                                                                        </div>
                                                                        <span>Rating 4 / 5</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                                                                    </div>
                                                                    <div className="row text-size-12 pt-10 mt-10">
                                                                        <div className="col-md-6">Confirmed Purchase: 13, January 2019</div>
                                                                        <div className="col-md-6 text-right text-left--xs text-left--sm">Reviewed: 19, January 2019</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                       {/* /REVIEW */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <div>
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
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="bg-v5-light pt-s3 pl-s3 pr-s3 pb-s3 position-relative">
                                                            <div className="ribbon ribbon-top-left"><span className="bg-cherry text-white box-shadow-v2-s3">Offer</span></div>
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className="text-size-30 mt-s3 mb-18">$28.80 <del>$36</del></div>
                                                                    <div className="star-rating star-rating-s2 text-cherry mb-6" title="0.00 Rating"><span className="w-0"></span></div>
                                                                    <h2 className="text-size-20 text-bold-600 text-capitalize mb-8">Bristol Parking Spaces</h2>
                                                                    <h6 className="text-cherry">Meet & Greet at Terminal</h6>
                                                                    <span>Non-Flex, Cannot be Cancelled</span>
                                                                    <div className="mt-20">
                                                                        <a href="booking.html" className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover">Book Now</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">
                                                                    <ul className="row mt-20 mb-15">
                                                                        <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                                            <img className="w--30" src="images/icons/icon-1.png" alt="24 Hours Patrols"/>
                                                                            24 Hours Patrols
                                                                        </li>
                                                                        <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                                            <img className="w--30" src="images/icons/icon-2.png" alt="CCTV Cameras"/>
                                                                            CCTV Cameras
                                                                        </li>
                                                                        <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                                            <img className="w--30" src="images/icons/icon-3.png" alt="Fencing"/>
                                                                            Fencing
                                                                        </li>
                                                                        <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                                            <img className="w--30" src="images/icons/icon-4.png" alt="You Keep Your Keys"/>
                                                                            You Keep Your Keys
                                                                        </li>
                                                                        <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                                            <img className="w--30" src="images/icons/icon-5.png" alt="Secure Barrier"/>
                                                                            Secure Barrier
                                                                        </li>
                                                                        <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                                            <img className="w--30" src="images/icons/icon-6.png" alt="24 Hours Patrolled"/>
                                                                            24 Hours Patrolled
                                                                        </li>
                                                                        <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                                            <img className="w--30" src="images/icons/icon-7.png" alt="Disability Friendly"/>
                                                                            Disability Friendly
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   {/* /MODEL */}

                    <div className="mb-s2 box-shadow-v1-s2--hover position-relative">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="bg-white hero-section-parent d-flex justify-content-center position-relative align-items-center bs-solid bc-light bw-s1 match-height min-h--260--md min-h--260--sm min-h--260--xs">
                                    <div>
                                        <img className="max-w--200" src="images/parkings/parking-2.png" alt="Maple Manor Parking"/>
                                    </div>
                                    <div className="hero-section-container-bl w-100 d-flex align-items-center justify-content-center">
                                        <span className="bg-v7-warning pt-5 pb-5 pl-20 pr-20 text-dark rounded-tl-s2 rounded-tr-s2">Meet & Greet Service</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 p-0">
                                <div className="bg-white pt-s3 pl-s3 pr-s3 pb-s3 match-height">
                                    <div className="ribbon ribbon-top-left"><span className="bg-cherry text-white box-shadow-v2-s3">Offer</span></div>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="text-size-30 mt-s3 mb-18">$42.40 <del>$55</del></div>
                                            <div className="star-rating star-rating-s2 text-cherry mb-6" title="5.00 Rating"><span className="w-100"></span></div>
                                            <h2 className="text-size-20 text-bold-600 text-capitalize mb-8">Maple Manor Parking</h2>
                                            <h6 className="text-cherry">Meet & Greet at Terminal</h6>
                                            <span>Non-Flex, Cannot be Cancelled</span>
                                            <div className="mt-20">
                                                <a href="booking.html" className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover">Book Now</a>
                                                <a className="btn bg-warning text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover" data-toggle="modal" data-target=".more-info">More Info</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12">
                                            <ul className="row mt-20 mb-15">
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-1.png" alt="24 Hours Patrols"/>
                                                    24 Hours Patrols
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-2.png" alt="CCTV Cameras"/>
                                                    CCTV Cameras
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-3.png" alt="Fencing"/>
                                                    Fencing
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-4.png" alt="You Keep Your Keys"/>
                                                    You Keep Your Keys
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-5.png" alt="Secure Barrier"/>
                                                    Secure Barrier
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-6.png" alt="24 Hours Patrolled"/>
                                                    24 Hours Patrolled
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-7.png" alt="Disability Friendly"/>
                                                    Disability Friendly
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /ROW */}
                    </div>
                    <div className="mb-s2 box-shadow-v1-s2--hover position-relative">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="bg-white hero-section-parent d-flex justify-content-center position-relative align-items-center bs-solid bc-light bw-s1 match-height min-h--260--md min-h--260--sm min-h--260--xs">
                                    <div>
                                        <img className="max-w--200" src="images/parkings/parking-3.png" alt="Bristol Parking Spaces"/>
                                    </div>
                                    <div className="hero-section-container-bl w-100 d-flex align-items-center justify-content-center">
                                        <span className="bg-v7-warning pt-5 pb-5 pl-20 pr-20 text-dark rounded-tl-s2 rounded-tr-s2">Meet & Greet Service</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 p-0">
                                <div className="bg-white pt-s3 pl-s3 pr-s3 pb-s3 match-height">
                                    <div className="ribbon ribbon-top-left"><span className="bg-cherry text-white box-shadow-v2-s3">Offer</span></div>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="text-size-30 mt-s3 mb-18">$24.20 <del>$36</del></div>
                                            <div className="star-rating star-rating-s2 text-cherry mb-6" title="4.00 Rating"><span className="w-80"></span></div>
                                            <h2 className="text-size-20 text-bold-600 text-capitalize mb-8">Bristol Parking Spaces</h2>
                                            <h6 className="text-cherry">Meet & Greet at Terminal</h6>
                                            <span>Non-Flex, Cannot be Cancelled</span>
                                            <div className="mt-20">
                                                <a href="booking.html" className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover">Book Now</a>
                                                <a className="btn bg-warning text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover" data-toggle="modal" data-target=".more-info">More Info</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12">
                                            <ul className="row mt-20 mb-15">
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-1.png" alt="24 Hours Patrols"/>
                                                    24 Hours Patrols
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-2.png" alt="CCTV Cameras"/>
                                                    CCTV Cameras
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-3.png" alt="Fencing"/>
                                                    Fencing
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-4.png" alt="You Keep Your Keys"/>
                                                    You Keep Your Keys
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-5.png" alt="Secure Barrier"/>
                                                    Secure Barrier
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-6.png" alt="24 Hours Patrolled"/>
                                                    24 Hours Patrolled
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-7.png" alt="Disability Friendly"/>
                                                    Disability Friendly
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /ROW */}
                    </div>
                    <div className="mb-s2 box-shadow-v1-s2--hover position-relative">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="bg-white hero-section-parent d-flex justify-content-center position-relative align-items-center bs-solid bc-light bw-s1 match-height min-h--260--md min-h--260--sm min-h--260--xs">
                                    <div>
                                        <img className="max-w--200" src="images/parkings/parking-4.png" alt="Paige Airport Parking"/>
                                    </div>
                                    <div className="hero-section-container-bl w-100 d-flex align-items-center justify-content-center">
                                        <span className="bg-v7-warning pt-5 pb-5 pl-20 pr-20 text-dark rounded-tl-s2 rounded-tr-s2">Meet & Greet Service</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 p-0">
                                <div className="bg-white pt-s3 pl-s3 pr-s3 pb-s3 match-height">
                                    <div className="ribbon ribbon-top-left"><span className="bg-cherry text-white box-shadow-v2-s3">Offer</span></div>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="text-size-30 mt-s3 mb-18">$30.00 <del>$40</del></div>
                                            <div className="star-rating star-rating-s2 text-cherry mb-6" title="4.00 Rating"><span className="w-80"></span></div>
                                            <h2 className="text-size-20 text-bold-600 text-capitalize mb-8">Paige Airport Parking</h2>
                                            <h6 className="text-cherry">Meet & Greet at Terminal</h6>
                                            <span>Non-Flex, Cannot be Cancelled</span>
                                            <div className="mt-20">
                                                <a href="booking.html" className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover">Book Now</a>
                                                <a className="btn bg-warning text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover" data-toggle="modal" data-target=".more-info">More Info</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12">
                                            <ul className="row mt-20 mb-15">
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-1.png" alt="24 Hours Patrols"/>
                                                    24 Hours Patrols
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-2.png" alt="CCTV Cameras"/>
                                                    CCTV Cameras
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-3.png" alt="Fencing"/>
                                                    Fencing
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-4.png" alt="You Keep Your Keys"/>
                                                    You Keep Your Keys
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-5.png" alt="Secure Barrier"/>
                                                    Secure Barrier
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-6.png" alt="24 Hours Patrolled"/>
                                                    24 Hours Patrolled
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-7.png" alt="Disability Friendly"/>
                                                    Disability Friendly
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /ROW */}
                    </div>
                    <div className="mb-s2 box-shadow-v1-s2--hover position-relative">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="bg-white hero-section-parent d-flex justify-content-center position-relative align-items-center bs-solid bc-light bw-s1 match-height min-h--260--md min-h--260--sm min-h--260--xs">
                                    <div>
                                        <img className="max-w--200" src="images/parkings/parking-5.png" alt="Skypark Park & Ride"/>
                                    </div>
                                    <div className="hero-section-container-bl w-100 d-flex align-items-center justify-content-center">
                                        <span className="bg-v7-warning pt-5 pb-5 pl-20 pr-20 text-dark rounded-tl-s2 rounded-tr-s2">Meet & Greet Service</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 p-0">
                                <div className="bg-white pt-s3 pl-s3 pr-s3 pb-s3 match-height">
                                    <div className="ribbon ribbon-top-left"><span className="bg-cherry text-white box-shadow-v2-s3">Offer</span></div>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="text-size-30 mt-s3 mb-18">$30.00 <del>$40</del></div>
                                            <div className="star-rating star-rating-s2 text-cherry mb-6" title="4.00 Rating"><span className="w-80"></span></div>
                                            <h2 className="text-size-20 text-bold-600 text-capitalize mb-8">Skypark Park & Ride</h2>
                                            <h6 className="text-cherry">Meet & Greet at Terminal</h6>
                                            <span>Non-Flex, Cannot be Cancelled</span>
                                            <div className="mt-20">
                                                <a href="booking.html" className="btn bg-cherry text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover">Book Now</a>
                                                <a className="btn bg-warning text-white text-shadow-s1 text-uppercase text-bold-600 text-size-s1 rounded-0 pt-8 pb-8 pl-20 pr-20 box-shadow-v1-s3--hover" data-toggle="modal" data-target=".more-info">More Info</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12">
                                            <ul className="row mt-20 mb-15">
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-1.png" alt="24 Hours Patrols"/>
                                                    24 Hours Patrols
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-2.png" alt="CCTV Cameras"/>
                                                    CCTV Cameras
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-3.png" alt="Fencing"/>
                                                    Fencing
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-4.png" alt="You Keep Your Keys"/>
                                                    You Keep Your Keys
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-5.png" alt="Secure Barrier"/>
                                                    Secure Barrier
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-6.png" alt="24 Hours Patrolled"/>
                                                    24 Hours Patrolled
                                                </li>
                                                <li className="col-lg-12 col-md-12 col-sm-12 mt-6 mb-6">
                                                    <img className="w--30" src="images/icons/icon-7.png" alt="Disability Friendly"/>
                                                    Disability Friendly
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /ROW */}
                    </div>
                </div>
            </div>{/* /ROW */}
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12">
            <div data-plugin-sticky data-plugin-options="{'minWidth': 991, 'containerSelector': '.container', 'padding': {'top': 110}}">
                <div className="bg-white box-shadow-v1-s3 position-relative">
                    <div className="bg-cherry pt-8 pb-8 pl-20 pr-20 text-white text-center text-size-20 text-bold-600">
                        Your Quote Detail
                    </div>
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
                    </table>
                </div>
            </div>
        </div>
    </div>{/* /ROW */}

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
    </div>{/* /ROW */}

</div>{/* /CONTAINER */}
</section>

    </>
  )
}

export default Parking

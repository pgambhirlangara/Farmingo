const Welcome = () => {
    return (
        <div>
            <div className="bigimg">
                <div className="info">Buy locally from farmers and access a B2B digital marketplace that offers fair food trade.</div>
                <div className="buttons">
                    <div className="signup"><buttons className="Signup">SignUp</buttons></div>
                    <div className="signin"><buttons className="Signin">SignIn</buttons></div>

                </div>
                <div className="forgetpassword"> <a href="#">Forgot Password</a></div>
            </div>
            <div className="infodiv">
                <div className="image1"><h2>Secure Payment</h2>
                    Integrated and secure platform payment processes
                </div>
                <div className="image2"><h2>Unlimited Access</h2>
                    Unlimited access to global market from anywhere, at anytime
                </div>
                <div className="image3"><h2>User-friendly platform</h2>
                    A user-friendly platform that generates market opportunity for farmers and industry buyers.
                </div>
            </div>
            <div className="image_and_info">
                <div className="info1"><h1>DO YOU WORK AS A LOCAL FARMER? HERE'S WHY YOU SHOULD JOIN US</h1>
                    <div className="blackline"></div>
                    <div className="info2">As a farmer, you sell directly to customers rather than through distributors. We market your brand,
                        handle orders, and more, all while you benifit from an online presence that will help you build a loyal customer base. You are paid directly and instantly
                        into your merchant account.
                    </div>
                    <div className="blackline"></div>
                    <div className="buttonjoin"><button className='joinbtn'>Join Us</button></div>
                </div>
                <div className="imageandinfo">


                    <h2>EXPERIENCE THE BEST THAT YOUR LOCAL FARMERY HAS TO OFFER </h2>
                    <p>FarminGo is excited to announce the opening of our first location inside of Canada in South Vancouver, as well as the trade
                        of local and fresh produce from your local farmers.
                    </p>


                </div>
            </div>

            <div className="gridform">
                <div className="HEADING"><h1>CUSTOMERS LOVE US</h1></div>
                <div className="containers">

                    <div className="grid1">
                        <div className="rating12">

                            <h3>Jorge Avetino</h3>
                            <p>Amazing</p>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                        </div>


                    </div>
                    <div className="grid2">
                        <div className="rating12">

                            <h3>Oscar Hierro</h3>
                            <p>Easy to follow!</p>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                        </div>
                    </div>
                    <div className="grid3">
                        <div className="rating12">

                            <h3>Antonioi Gallardo</h3>
                            <p>Love it!</p>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                        </div>
                    </div>
                    <div className="grid4">
                        <div className="rating12">

                            <h3>Marcia Rubio</h3>
                            <p>I found new customers!</p>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                            <span id='star' class="fa fa-star checked"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
import { useInView } from "./view"
export default function Footer(){
     
      const { ref, isVisible } = useInView({ threshold: 0.8 });

    return(
        <>
        <div className="footer">
            <div className="fhead"></div>
            <div className="footimg"> </div>
            <div className={`endhead  ${isVisible ? "show":""}`} ref={ref}><h2>Ready for Takeoff</h2></div>



            <div className="fdetails">
                <div className="link">
                    <div className="links">
                        <div className="linksh">product</div>
                        <div className="linkn">faq</div>
                        <div className="linkn">pricing</div>
                        <div className="linkn">about</div>
                        <div className="linkn">contact us</div>

                    </div>


                    <div className="links">
                          <div className="linksh">resource</div>
                        <div className="linkn">documentation</div>
                        <div className="linkn">affiliate program</div>
                        <div className="linkn">system status</div>
                        <div className="linkn">blog</div>





                    </div>
                    <div className="links">
                        <div className="linksh">information</div>
                        <div className="linkn">promotion</div>
                        <div className="linkn">information</div>
                        <div className="linkn">testimonial</div>
                        <div className="linkn"></div>
                    </div>


                </div>


                <div className="contact">
                    <div className="email">
                        <input type="text" placeholder="stay connected"/>
                        <button className="emailbtn" >get started</button>

                    </div>
                    <div className="social">
                        <div className="socials">
                            <img src="src/icons/8f24c284378a0920e6df15c87c4b9b59.png" width={"24px"}/>
                        </div>
                        <div className="socials">
                             <img src="src/icons/51bab9bb7867de27a68b9ea14ae8f8b3.png" width={"24px"}/>
                        </div>
                        <div className="socials">
                             <img src="src/icons/793cb64aaae69d1dd1b478336fd1b42e.png" width={"24px"}/>
                        </div>
                        <div className="socials">
                             <img src="src/icons/f973c01f1a95ba549a2e54b60a0e90a1.png"  width={"24px"}/>
                        </div>

                    </div>


                </div>
                



                 </div>



        </div>


        </>
    )
}
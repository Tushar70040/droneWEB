import { useInView } from "./view";
export default function Product(){

        const { ref, isVisible } = useInView({ threshold: 0.5 });


    return(

    
        <>
        <div className={`pcontainer ${isVisible ? "show":""}`} ref={ref}>

            <div className="acces"><h1> stunning accessories</h1></div>
            <hr className="line"/>
            <div className="grid">
            <div className="box box1">
                <div className="gimg1"></div>
                <div className="gdetails1">
                    <div className="gdh">wide-angles lens</div>
                    <div className="gdc"> compatible with the mavic 3 pro hasselbald</div>
                
                </div>



            </div>
            <div className="box box2">
                <div className="gdetails">
                     <div className="gdh">512 gb storage</div>
                    <div className="gdc">Large onboard memory allows extended high-resolution video recording and photo storage without frequent data transfers.</div>
                </div>
                 <div className="gimg2"></div>




            </div>
            <div className="box box3">
                 <div className="gimg3"></div>
                <div className="gdetails">
                     <div className="gdh">Live Camera Display</div>
                    <div className="gdc">Shows real-time drone camera footage on the controller</div>
                </div>


            </div>
            <div className="box box4">
                 
                <div className="gdetails4">
                     <div className="gdh">High-Capacity Battery</div>
                    <div className="gdc">Provides extended flight time for longer missions</div>
                </div>
                <div className="gimg4"></div>


            </div>

            </div>
           
        </div>
        </>
    )
}
import { useInView } from "./view"
export default function Hero() {

    
  const { ref, isVisible } = useInView({ threshold: 0.5 });

    return (
        <>
            <div className="conhero">
                <div className={`herocon ${isVisible ? "show" : ""}`} ref={ref}>

                    <div className="heroimg">

                    </div>
                    <div className="herotext">
                        <div className="fill"> unlock</div>
                        creative freedom

                    </div>


                </div>


            </div>
        </>
    )
}
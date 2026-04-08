import { useInView } from "./view"
export default function Detail(){

    const {ref,isVisible} = useInView({threshold:0.5});

   
    return(
        <>
        <div className="det">
            <div className={`about ${isVisible ? "show":""}`} ref={ref}>
                <h1 className="h1">dji mavic 3 series</h1>
                The DJI Mavic drone is a compact and foldable aerial device designed for high-quality photography and videography, offering powerful performance in a portable form. It features advanced camera technology capable of capturing sharp photos and smooth 4K videos, along with intelligent flight systems such as GPS positioning, obstacle avoidance, and automatic Return-to-Home for safe and stable flying. With long battery life and smart flight modes like ActiveTrack and QuickShots, the DJI Mavic is suitable for beginners and professionals alike, making it an ideal choice for travel, creative filmmaking, and aerial exploration.


            </div>
            <div className="aboutimg">
                <div className="photo">PHOTOGRAPHIC</div>
                <div className="abtimg"></div>

                
            </div>
        </div>
        </>
    )
}
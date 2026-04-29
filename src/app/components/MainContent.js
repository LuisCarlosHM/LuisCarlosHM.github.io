import TypingEffect from "./TypingEffect";
import Portfolio from "./Portfolio";
import Certificates from "./Certificates";

const MainContent = () => {
    return (
        <div className="main_content container">
            <div className="hero_image">
               <div className="hero_image__background">
               </div>
               <div className="hero_image__background_content">
                    <div className="hero_image__content">
                        <div className="hero_image__content__title">
                            <h1><TypingEffect typingData={["<code>Crafting Digital Landscapes</code>"]}/></h1>
                        </div>
                    </div>
               </div>
            </div>

            <Portfolio />
            <Certificates />
        </div>
    );
}

export default MainContent;

import Typewriter from 'typewriter-effect';
import './index.scss';
const Home = () => {
    return(
        <div className ="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br/> I'm Yike<br />

                    <Typewriter />
                
                </h1>

            </div>

        </div>
    )
};
export default Home;
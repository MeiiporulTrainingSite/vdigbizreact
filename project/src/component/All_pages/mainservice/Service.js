import './service.css';
import analytics from './icons/Analytics.jpg'
import appdev from './icons/App-dev.jpg';
import mobdev from './icons/mobile-dev.jpg';
import consulting from './icons/consulting.jpg';
import proddev from './icons/Prod-dev.jpg';
import appmaintain from './icons/App-maintain.jpg';
import Div from '../../Div/div';
import { Link } from 'react-router-dom';

function Service() {
    return (
        <div>
            <Div className="service_page">
                <h1>Services</h1>
            </Div>
            <div className='servicecontent'>
                <h1>We love what we offer</h1>
                <p>Innovation. Collaboration. Interoperability. Scale. Speed. These elements are necessary to meet the demands of increased synergies and greater return on investment. The amalgamation of technology and healthcare in transforming the future is multifaceted, and embracing openness ─ in platforms, technology and culture and this is a key to getting where we need to go. Our tools and processes are designed to work for today and think for tomorrow. </p>
            </div>

            <div className='servicecontainer'>

                <section className='service_maincontent'>

                    <div className='row'>
                        <div className='column'>
                            <div className='card'>
                                <Link to="/analytics">
                                    <div className='icon-wrapper'>
                                        <img src={analytics} alt='analytics' />
                                    </div> </Link>
                                    <h3>Analytics</h3>
                                    <p>Our services help clients use data and analytics to create new business models and revenue streams – all while ensuring security, quality and regulatory compliance of data.</p>
                               
                            </div>
                        </div>
                        <div className='column'>
                            <div className='card'>
                                <Link to="/application_dev">
                                    <div className='icon-wrapper'>
                                        <img src={appdev} alt='appdev' />
                                    </div></Link>
                                    <h3>Application Development</h3>
                                    <p>Provide scalable enterprises application development including web, desktop, cloud-based, distributed
                                        and real-time applications and solutions.</p>
                                
                            </div>
                        </div>
                        <div className='column'>
                            <div className='card'>
                                <Link to="/mobile_app">
                                    <div className='icon-wrapper'>
                                        <img src={mobdev} alt='mobdev' />
                                    </div></Link>
                                    <h3>Mobile Development</h3>
                                    <p>Expertise in delivering scalable, interactive, innovative & robust and foster with the emerging trends of different mobile platforms.
                                        .</p>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='card'>
                                <Link to="/consulting">
                                    <div className='icon-wrapper'>
                                        <img src={consulting} alt='consulting' />
                                    </div></Link>
                                    <h3>Consulting</h3>
                                    <p>Focus on our clients critical issues and opportunities through strategy, management, performance improvement,
                                        technology, information security, digital transformation and advanced analytics.</p>
                                
                            </div>
                        </div>
                        <div className='column'>
                            <div className='card'>
                                <Link to="/product">
                                    <div className='icon-wrapper'>
                                        <img src={proddev} alt='proddev' />
                                    </div></Link>
                                    <h3>Product Development</h3>
                                    <p>Understands product development to its core and provide high-quality product development services
                                        and incorporate new methodologies to offer software product development benefits to our clients.</p>
                                
                            </div>
                        </div>
                        <div className='column'>
                            <div className='card'>
                                <Link to="/applicationMaintenance">
                                    <div className='icon-wrapper'>
                                        <img src={appmaintain} alt='appmaintain' />
                                    </div>  </Link>
                                    <h3>Application Maintenance</h3>
                                    <p>Enhancing functionality, building and deploying new versions, creating customized solutions to mitigate defects and debugging of the applications</p>
                              
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}
export default Service;
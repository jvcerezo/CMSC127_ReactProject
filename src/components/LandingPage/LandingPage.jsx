import './LandingPage.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import React, { useState } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';

function LandingPage() {
    const [backgroundImage, setBackgroundImage] = useState('background-1');

    const handleRightClick = () => {
      if (backgroundImage === 'background-1') {
        setBackgroundImage('background-2');
      } else if (backgroundImage === 'background-2') {
        setBackgroundImage('background-3');
      } else if (backgroundImage === 'background-3') {
        setBackgroundImage('background-1');
    }};
  
    const handleLeftClick = () => {
      if (backgroundImage === 'background-3') {
        setBackgroundImage('background-2');
      } else if (backgroundImage === 'background-2') {
        setBackgroundImage('background-1');
      }else if (backgroundImage === 'background-1') {
        setBackgroundImage('background-3');
    }};
  
    return (
      <div className="app">
        <div className={`background ${backgroundImage}`}>
          <div className="info">
            <h1 className="title">Technological Integration In Clinical Assessments</h1>
            <p className="description">Labtica offers fast and accurate testing of your Complete Blood Count (CBC) results. Simply upload your CBC report and provide your personal information to receive valuable insights into your health status. Our platform is secure and easy to use, ensuring your privacy and confidentiality. Try Labtica today for reliable CBC testing!</p>
            <button className="start-button">
              <p className="start-text">Get started</p>
            </button>
            <div className="footer"></div>
          </div>
          <div className="reliable">
            <p>Reliable</p>
          </div>
          <div className="right-button" onClick={handleRightClick}>
            <IoIosArrowDroprightCircle />
          </div>
          <div className="left-button" onClick={handleLeftClick}>
            <IoIosArrowDropleftCircle />
          </div>
        <div className="check1"><AiFillCheckCircle/></div><div className="check2"><AiFillCheckCircle/></div><div className="check3"><AiFillCheckCircle/></div><div className="check4"><AiFillCheckCircle/></div>
        <div className="fast">
          <p>Fast</p>
        </div>
        <div className="accurate">
          <p>Accurate</p>
        </div>
        <div className="personalize">
          <p>Personalized</p>
        </div>
          <div className="about-cbc">
          <h2>About CBC</h2>
        </div>
  
        <div className="learn-about-cbc">
          <p>Learn about CBC</p>
  
          <div className="new-element"></div>
          <div className="red-blood-cell-pic"></div>
          <div className="red-blood-cell">
          <h2>Red Blood Cell</h2>
          </div>
          <div><p className="red-blood-cell-info">This measures the number of red blood cells in a given volume of blood. It is used to evaluate the body's oxygen-carrying capacity and to diagnose anemia and other blood disorders.</p></div>
         
          <div className="new-element2"></div>
          <div className="hemoglobin-level-pic"></div>
          <div className="hemoglobin-level">
          <h2>Hemoglobin Level</h2>
          </div>
          <div><p className="hemoglobin-level-info">This measures the amount of hemoglobin in a given volume of blood. It is used to diagnose anemia and to monitor treatment for it.</p></div>
         
          <div className="new-element3"></div>
          <div className="white-blood-cell-pic"></div>
          <div className="white-blood-cell">
          <h2>White Blood Cell</h2>
          </div>
          <div><p className="white-blood-cell-info">This measures the amount of hemoglobin in a given volume of blood. It is used to diagnose anemia and to monitor treatment for it.</p></div>
         
          <div className="new-element4"></div>
          <div className="hematocrit-level-pic"></div>
          <div className="hematocrit-level">
          <h2>Hematocrit Level</h2>
          </div>
          <div><p className="hematocrit-level-info">This measures the percentage of red blood cells in a given volume of blood. It is used to evaluate the body's oxygen-carrying capacity and to diagnose anemia and other blood disorders.</p></div>
          <div className="new-element5"></div>
          <div className="platelet-count-pic"></div>
          <div className="platelet-count">
          <h2>Platelet Count</h2>
          </div>
          <div><p className="platelet-count-info">This measures the number of platelets in a given volume of blood. It is used to diagnose bleeding disorders and to monitor treatment with blood-thinning medications.</p></div>
         
          <div className="new-element6"></div>
          <div className="mch-concentration-pic"></div>
          <div className="mch-concentration">
          <h2>Mean Corpuscular Hemoglobin Concentration</h2>
          </div>
          <div><p className="mch-info">This measures the concentration of hemoglobin in each red blood cell. It is used to diagnose different types of anemia.</p></div>
        
          <div className="new-element7"></div>
          <div className="mean-corpuscular-volume-pic"></div>
          <div className="mean-corpuscular-volume">
          <h2>Mean Corpuscular Volume (MCV)</h2>
          </div>
          <div><p className="mean-corpuscular-volume-info">This measures the average size of red blood cells. It is used to diagnose different types of anemia.</p></div>
    
          <div className="new-element8"></div>
          <div className="mean-corpuscular-hemoglobin-pic"></div>
          <div className="mean-corpuscular-hemoglobin">
          <h2>Mean Corpuscular Hemoglobin (MCH)</h2>
          </div>
          <div><p className="mean-corpuscular-hemoglobin-info">This measures the average amount of hemoglobin in each red blood cell. It is used to diagnose different types of anemia.</p></div>
       
          <div className="new-element9"></div>
          <div className="DWBCC-pic"></div>
          <div className="DWBCC">
          <h2>Differential White Blood Cell Count</h2>
          </div>
          <div><p className="DWBCC-info">This measures the percentage of different types of white blood cells in a given volume of blood. It is used to diagnose infections, inflammatory conditions, and blood disorders.</p></div>
  
          <div className="new-element10"></div>
          <div className="Red-BCDW-pic"></div>
          <div className="Red-BCDW">
          <h2>Red Blood Cell Distribution Width</h2>
          </div>
          <div><p className="Red-BCDW-info">This measures the variation in size of red blood cells. It is used to diagnose different types of anemia.</p></div>
          <div className="footer2"></div>
          <div className="footer2-info">
          <h2>Technological Integration In Clinical Assessments</h2>
          </div>
  
          <div className="message-container">
           <input className="message-input" type="text" placeholder="Create a message" />
           <button className="send-button">Send</button>
          </div>
          <div className="footer2-1-info">
          <p>At Labtica, we pride ourselves on providing excellent customer service. Our team of knowledgeable and friendly representatives are always here to assist you with any questions or concerns you may have.</p>
          <p>If you need help using our platform or have any technical difficulties, please don't hesitate to reach out to us. You can contact us through email, phone, or by visiting our office during business hours. We are committed to ensuring your satisfaction with our service and are always striving to improve.</p>
          <p>Thank you for choosing Labtica for your CBC testing needs. We value your trust and look forward to providing you with the best possible service.</p>
        </div>
          <div className="language"><h3>Language</h3></div>
          <div className="contact-us"><h3>Contact us</h3></div>
          <div className="contact-info">
          <p>Email: info@labtica.com</p>
            <p>Phone: (+63) 93 0308-5413</p>
            <p>Address: 123 Quirino Avenue, Davao City, Philippines</p>
             <p>Feel free to reach out to us with any questions or concerns you may have. We look forward to hearing from you!</p>
          </div>
          <div className="socials"><h3>Socials</h3></div>
          <div className="socials-info"><ul>
                <li> facebook.com/Labtica</li>
                <li> twitter.com/Labtica</li>
                <li> instagram.com/Labtica</li>
                <li> linkedin.com/company/Labtica</li>
              </ul></div>
          <div class="language-selector">
         
          <div className="language-dropdown">
           <select>
            <option value="en">EN</option>
             <option value="fr">FR</option>
             <option value="es">ES</option>
           </select>
         </div>
  
  
         <div className="facebook"><FaFacebook/></div>
         <div className="twitter"><BsTwitter/></div>
         <div className="instagram"><BsInstagram/></div>
         <div className="linkedin"><BsLinkedin/></div>
          <div className="footer3"></div>
          <div className="footer3-info">
          <p>© 2023 CBI Group Company. All right reserved.</p>
          </div>
          
        </div>
        </div>
      </div>
      </div>
    );
  }

export default LandingPage;
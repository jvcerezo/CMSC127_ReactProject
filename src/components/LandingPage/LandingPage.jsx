import React, {useState} from 'react';

const LandingPage = () => {
    return (
<div class="landing">
    <div class="up">
      <div class="relative-wrapper-one">
        <div class="main-logo">
          <img
             alt=""
             class="main-logo-2"
             src="https://static.overlay-tech.com/assets/63988130-e8fe-46b0-b155-057f244b7024.svg"
             />
        </div>
        <p class="">LabTICA</p>
      </div>
      <p class="home">Home</p>
      <p class="test">Test</p>
      <p class="about">About</p>
      <img
        alt=""
        class="vector"
        src="https://static.overlay-tech.com/assets/7a034b21-2443-40b8-ac38-d1391fcf6211.svg"
      />
      <p class="help">Help</p>
      <img
        alt=""
        class="vector-two"
        src="https://static.overlay-tech.com/assets/ef429e42-d1d0-4a4b-9b39-427266e07247.svg"
      />
      <p class="login">Login</p>
    </div>
    <img
      alt=""
      class="about-cbc"
      src="https://static.overlay-tech.com/assets/2ba208fc-e3cc-4e89-b428-929a5d7f9c60.svg"
    />
    <p class="learn-about-cbc">AYAW KOL</p>
    <div class="flex-wrapper-eighteen">
      <div class="flex-wrapper-ten">
        <img
          alt=""
          class="num-2"
          src="https://static.overlay-tech.com/assets/155e210a-d4eb-4d14-abc5-4e87b9dbf988.png"
        />
        <div class="relative-wrapper-two">
          <p class="this-measures-the-number-of-red-blood-ce">
            This measures the number of red blood cells in a
            given volume of blood. It is used to evaluate the
            body&#039;s oxygen-carrying capacity and to
            diagnose anemia and other blood disorders.
          </p>
          <p class="red-blood-cell">Red Blood Cell</p>
        </div>
      </div>
      <div class="flex-wrapper-nine">
        <img
          alt=""
          class="num-1"
          src="https://static.overlay-tech.com/assets/c72b38e5-dd6e-40ba-aa6f-890dd42f6d5c.png"
        />
        <div class="flex-wrapper-twenty-three">
          <p class="white-blood-cell">White Blood Cell</p>
          <p class="this-measures-the-number-of-white-blood">
            This measures the number of white blood cells in a
            given volume of blood. It is used to evaluate the
            body&#039;s immune system and to diagnose
            infections and diseases.
          </p>
        </div>
      </div>
    </div>
    <div class="flex-wrapper-nineteen">
      <div class="flex-wrapper-eight">
        <img
          alt=""
          class="num-4"
          src="https://static.overlay-tech.com/assets/fea246eb-bbcb-4ae1-8a32-7e8b9ff2b005.png"
        />
        <div class="flex-wrapper-twenty-four">
          <p class="white-blood-cell">Hemoglobin Level</p>
          <p class="this-measures-the-amount-of-hemoglobin-i">
            This measures the amount of hemoglobin in a given
            volume of blood. It is used to diagnose anemia and
            to monitor treatment for it.
          </p>
        </div>
      </div>
      <div class="flex-wrapper-eleven">
        <img
          alt=""
          class="num-3"
          src="https://static.overlay-tech.com/assets/5e1a5a14-8ffe-4fc1-835c-d55fa4e641fe.png"
        />
        <div class="relative-wrapper-three">
          <p class="hematocrit-level">Hematocrit Level</p>
          <p class="this-measures-the-percentage-of-red-bloo">
            This measures the percentage of red blood cells in
            a given volume of blood. It is used to evaluate
            the body&#039;s oxygen-carrying capacity and to
            diagnose anemia and other blood disorders.
          </p>
        </div>
      </div>
    </div>
    <div class="flex-wrapper-nineteen">
      <div class="flex-wrapper-twelve">
        <img
          alt=""
          class="num-5"
          src="https://static.overlay-tech.com/assets/5aee7803-d6a1-4302-8915-58907ffd516e.png"
        />
        <div class="flex-wrapper-twenty-five">
          <p class="white-blood-cell">Platelet count</p>
          <p class="this-measures-the-number-of-platelets-in">
            This measures the number of platelets in a given
            volume of blood. It is used to diagnose bleeding
            disorders and to monitor treatment with
            blood-thinning medications.
          </p>
        </div>
      </div>
      <div class="relative-wrapper-eight">
        <p class="mean-corpuscular-hemoglobin-concentratio">
          Mean Corpuscular Hemoglobin Concentration
        </p>
        <div class="flex-wrapper-fifteen">
          <img
            alt=""
            class="num-1"
            src="https://static.overlay-tech.com/assets/67004afd-a2d2-47ad-9569-87e25494d44c.png"
          />
          <p class="this-measures-the-concentration-of-hemog">
            This measures the concentration of hemoglobin in
            each red blood cell. It is used to diagnose
            different types of anemia.
          </p>
        </div>
      </div>
    </div>
    <div class="flex-wrapper-nineteen">
      <div class="flex-wrapper-fourteen">
        <img
          alt=""
          class="bigstock-160855883"
          src="https://static.overlay-tech.com/assets/ce532620-0825-4ae5-807b-e867494a1732.png"
        />
        <div class="flex-wrapper-twenty-seven">
          <p class="mean-corpuscular-volume-mcv">
            Mean Corpuscular Volume (MCV)
          </p>
          <p class="this-measures-the-average-size-of-red-bl">
            This measures the average size of red blood cells.
            It is used to diagnose different types of anemia.
          </p>
        </div>
      </div>
      <div class="flex-wrapper-thirteen">
        <img
          alt=""
          class="num-6"
          src="https://static.overlay-tech.com/assets/f1615b56-284d-4d92-8340-092a2a5826ed.png"
        />
        <div class="flex-wrapper-twenty-four">
          <p class="mean-corpuscular-volume-mcv">
            Mean Corpuscular Hemoglobin (MCH)
          </p>
          <p class="this-measures-the-average-amount-of-hemo">
            This measures the average amount of hemoglobin in
            each red blood cell. It is used to diagnose
            different types of anemia.
          </p>
        </div>
      </div>
    </div>
    <div class="flex-wrapper-eighteen">
      <div class="flex-wrapper-sixteen">
        <div class="relative-wrapper-five">
          <div class="frame-1"></div>
          <img
            alt=""
            class="num-7"
            src="https://static.overlay-tech.com/assets/27bcd86b-925c-46d2-ac54-76583881f477.png"
          />
        </div>
        <div class="flex-wrapper-twenty-eight">
          <p class="differential-white-blood-cell-count">
            Differential White Blood Cell Count:
          </p>
          <p class="this-measures-the-percentage-of-differen">
            This measures the percentage of different types of
            white blood cells in a given volume of blood. It
            is used to diagnose infections, inflammatory
            conditions, and blood disorders.
          </p>
        </div>
      </div>
      <div class="flex-wrapper-seventeen">
        <img
          alt=""
          class="num-8"
          src="https://static.overlay-tech.com/assets/9c3e8125-6568-412f-9f99-417ba37a438e.png"
        />
        <div class="flex-wrapper-twenty-nine">
          <p class="red-blood-cell-distribution-width">
            Red Blood Cell Distribution Width
          </p>
          <p class="this-measures-the-variation-in-size-of-r">
            This measures the variation in size of red blood
            cells. It is used to diagnose different types of
            anemia.
          </p>
        </div>
      </div>
    </div>
    <div class="relative-wrapper-six">
      <div class="flex-wrapper-five">
        <img
          alt=""
          class="technological-integration-in-clinical-a"
          src="https://static.overlay-tech.com/assets/0170ac76-3691-470f-ae5f-6bd1dd87ce11.svg"
        />
        <div class="flex-wrapper-thirty">
          <div class="button-left">
            <div class="ellipse-200"></div>
            <div class="expand-left">
              <img
                alt=""
                class="vector-9"
                src="https://static.overlay-tech.com/assets/4c7e9e12-76b2-4aeb-99fc-1347100361d9.svg"
              />
            </div>
          </div>
          <img
            alt=""
            class="labtica-offers-fast-and-accurate-testing"
            src="https://static.overlay-tech.com/assets/79f4afd5-34bd-417e-ac84-30e2d1fee280.svg"
          />
          <div class="button-left">
            <div class="ellipse-201"></div>
            <div class="expand-right">
              <img
                alt=""
                class="vector-9"
                src="https://static.overlay-tech.com/assets/0dd83000-dd1b-4116-a524-78e05db678be.svg"
              />
            </div>
          </div>
        </div>
        <div class="flex-wrapper-six">
          <img
            alt=""
            class="get-started"
            src="https://static.overlay-tech.com/assets/e6f52ba0-5739-4cc5-83e1-cb5fbb132b05.svg"
          />
        </div>
      </div>
      <div class="flex-wrapper-seven">
        <img
          alt=""
          class="testing-your-cbc-is-essential-for-detect"
          src="https://static.overlay-tech.com/assets/40022414-dea1-417d-9c27-ea65ce4c7c5c.svg"
        />
      </div>
    </div>
    <div class="relative-wrapper-seven">
      <div class="rectangle-4036"></div>
      <div class="contact-info">
        <div class="flex-wrapper-thirty-one">
          <img
            alt=""
            class="technological-integration-in-clinical-a-two"
            src="https://static.overlay-tech.com/assets/5d181098-4ccf-4c55-8891-6a426cc2eb96.svg"
          />
          <div class="flex-wrapper-three">
            <img
              alt=""
              class="create-a-message"
              src="https://static.overlay-tech.com/assets/ec250f38-ef2f-4c17-95df-f8ea37c19185.svg"
            />
            <div class="flex-wrapper-four">
              <img
                alt=""
                class="send"
                src="https://static.overlay-tech.com/assets/54216718-0e9c-4dde-a34d-3fe2d78a83cb.svg"
              />
            </div>
          </div>
        </div>
        <div class="flex-wrapper-thirty-two">
          <img
            alt=""
            class="at-labtica-we-pride-ourselves-on-provid"
            src="https://static.overlay-tech.com/assets/27bd26d2-530e-4f65-a952-160dcaf6da5e.svg"
          />
          <div class="flex-wrapper-thirty-four">
            <img
              alt=""
              class="contact-us"
              src="https://static.overlay-tech.com/assets/f742a4e4-f7a9-4b86-bdc0-2d725e34be9e.svg"
            /><img
              alt=""
              class="email-info-com-phone-63"
              src="https://static.overlay-tech.com/assets/b18d8ebc-070a-4b4d-9d85-94a24362fe5f.svg"
            /><img
              alt=""
              class="socials"
              src="https://static.overlay-tech.com/assets/0e72acc8-b567-44b4-a4de-6350611a4cc6.svg"
            />
          </div>
        </div>
        <div class="flex-wrapper-thirty-three">
          <div class="flex-wrapper-thirty-five">
            <img
              alt=""
              class="language"
              src="https://static.overlay-tech.com/assets/9b19d8cd-6530-49c5-86c2-e1739a4bad92.svg"
            />
            <div class="relative-wrapper-four">
              <div class="flex-wrapper-two">
                <div>
                </div>
              </div>
              <p class="en">EN</p>
            </div>
          </div>
          <div class="flex-wrapper-thirty-six">
            <img
              alt=""
              class="facebook-original"
              src="https://static.overlay-tech.com/assets/8d61413f-2201-47f2-8e57-181d3c0e31a3.svg"
            /><img
              alt=""
              class="vector-three"
              src="https://static.overlay-tech.com/assets/7468c61c-38b5-4762-b77e-164aabd70bb6.svg"
            /><img
              alt=""
              class="instagram-original"
              src="https://static.overlay-tech.com/assets/5de743d1-a98c-4d1c-adff-a0be8c88806a.svg"
            />
            <div class="linked-in-original">
            </div>
          </div>
          <img
            alt=""
            class="facebook-com-labtica-twitter-com-labtica"
            src="https://static.overlay-tech.com/assets/f9c2faa6-3bb9-48e6-b8eb-a36e284bf813.svg"
          />
        </div>
        <div class="flex-wrapper-one">
          <img
            alt=""
            class="num-2023-cpb-group-company-all-right-rese"
            src="https://static.overlay-tech.com/assets/a91c29ee-1f15-466b-96f8-41c4d740f7ba.svg"
          />
        </div>
      </div>
    </div>
  </div>
);
}

export default LandingPage;
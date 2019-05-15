// team
import Michael_Woods from "../img/Michael_Woods.jpg";
import Josh_Turow from "../img/Josh_Turow.jpg";
import Gennady_Yanovsky from "../img/Gennady_Yanovsky.jpeg";
import Kelly_Feist from "../img/Kelly_Feist.jpg";

import small_Michael_Woods from "../img/small_Michael_Woods.jpg";
import small_Josh_Turow from "../img/small_Josh_Turow.jpg";
import small_Gennady_Yanovsky from "../img/small_Gennady_Yanovsky.jpg";
import small_Kelly_Feist from "../img/small_Kelly_Feist.jpg";

export let teamPhotos = () => {
  if (screen.width < 900) {
    teamPhotos = [
      small_Michael_Woods,
      small_Josh_Turow,
      small_Gennady_Yanovsky,
      small_Kelly_Feist
    ];
  } else {
    teamPhotos = [Michael_Woods, Josh_Turow, Gennady_Yanovsky, Kelly_Feist];
  }
};
teamPhotos();
window.onorientationchange = teamPhotos;
window.addEventListener("resize", teamPhotos);

export const teamStory = [
  "Michael Woods is the founder and president of Baywood Capital Corporation.  A native Californian, Michael grew up in San Francisco and received his Bachelor of Arts degree in Finance from San Francisco State University. He has recognized the human value to business by developing close relationships with staff, partners and property owners. This synergistic approach creates a work environment that is personally and financially rewarding. His creative spirit has led him to dedicating more of his energy and time to projects like his developing eco-resort Avalon Springs, that foster prosperity while supporting health, wellness, and balance. Michael, the board's past chairman, now serves on the board of directors of Visit Napa Valley whose mission is to protect and enhance the Napa Valley’s position in North America. Michael, his wife Stephanie and their daughter, Indie, make their home in Calistoga.",
  "Josh Turow is Vice President of Commercial Operations and is in charge of commercial and residential properties. Josh has been with Baywood since 2001. He brings an array of knowledge in all facets of the business, from real estate owners transactions and leasing to construction and consulting. Forming and maintaining excellent relationships with tenants, vendors and real estate professionals have been a key to the success of Baywood. Josh prides himself on excellent customer service.",
  "Gennady Yanovsky has represented buyers and sellers throughout the San Francisco Bay Area for the almost 15 years. A true professional, Gennady's clients value his warm, approachable demeanor, easy going nature and honesty. Gennady prides himself on his thoroughness to detail, focused energy and continual support which he provides to each client. He understands that a real estate transaction can be emotional  and he works hard to ensure that his clients experience a smooth transaction. A resident of Northern California for nearly 30 years, Gennady has first-hand knowledge of the nuances and unique aspects of each and every of the many eclectic communities and neighborhoods that his clients seek. Originally a native of Odessa, Ukraine - Gennady permanently moved to Northern California in 1989 and speaks fluent English and Russian. He finds the best aspects of the Bay Area to be the diversification of both the environment and the people of California along with their positive attitude toward life. He holds a Dual Bachelor's Degree in Molecular Cellular and Developmental Biology as well as Computer Science from University of California Santa Cruz. Prior to joining Baywood Capital, Gennady was a Solutions Consultant for various very well established Silicon Valley Companies in addition to representing real estate clients to this day.",
  "Kelly Feist is Property Management bookkeeping expert. Kelly has had her own business doing the books with an emphasis in Property Management for 11 years and brings her expertise and diligence to Baywood Capital. Kelly is also in the process of obtaining her Real Estate license with an emphasis in Property Management. Kelly has an array of skills that range from day to day operations to contract negotiation and vendor relations above and beyond her stellar bookkeeping and accounting skills. Kelly is kind and compassionate and handles tenant and client relationships with professionalism and understanding. Her diligence means that nothing falls through the cracks. When it comes time to wrap up the end of year accounting for our properties, Kelly is a 1099 expert and works with countless accountants to make sure all of your income and expenses are captured accurately and timely for ease of tax preparation. Due to Kelly's previous experience in the legal field, she is also very competent in contract negotiations, legal filing and handling issues that arise in that arena. We are very lucky to call Kelly Feist part of our team here at Baywood."
];

// servises
import accounting from "../img/accounting.jpg";
import maintenance from "../img/maintenance.jpg";
import marketing from "../img/marketing.jpg";
import bookkeeping from "../img/bookkeeping.jpg";

import small_accounting from "../img/small_accounting.jpg";
import small_maintenance from "../img/small_maintenance.jpg";
import small_marketing from "../img/small_marketing.jpg";
import small_bookkeeping from "../img/small_bookkeeping.jpg";

export const servicesDescription = {
  accounting:
    "We pride ourselves on consistency and accurate accounting. Precise, timely financial reporting and control are essential to efficient building operations. Baywood's accounting department is staffed by trained and skilled professionals. Our services include budgeting, financial and operational reporting, monitoring and control of accounts payable, receivables and bank reconciliations.  Our organized personnel know the intimate details of each building, thus bringing a qualitative and quantitative control to each accounting function. Baywood’s management and accounting departments work with ownership to produce achievable annual budgets for each building. Baywood’s communication and accounting skills lead to faster, correct record keeping which is the foundation to effective management.",
  marketing:
    "Baywood Capital draws upon more than 40 years of experience in the income property investment field.<br /><br /> Our marketing strategy begins the moment a tenant vacates one of our properties. Whether it’s a residential, commercial or retail property, Baywood utilizes a variety of resources to welcome new tenants to our properties.<br /><br /> These methods include:<br /> &#9745; telephoning our many business and professional contacts <br />&#9745; telephoning our existing tenants<br />&#9745; use traditional flyers, signs and internet marketing.<br />&#9745; contacting professional real estate organizations to cast our message to a wider audience.<br /><br /> With an ever changing marketplace, Baywood also uses creative methods, for example, we might try to fill a vacancy by negotiate a lease extension with an existing tenant who is contemplating an expansion.  In the residential market, we keep ahead of the competition by maintaining and constantly updating our properties so that we always have a very desirable product.  We also use forward thinking methods of marketing, such as social networking and mobile networking.  The blend of marketing techniques and expertise in what has provided the landlords we represent a consistent occupancy rate of more than 90%.",
  maintenance:
    "Baywood has experience in the full spectrum of real estate maintenance. From fixing a drain to the extensive remodeling of a vacant unit we have done it all. We are able to provide professional, cost effective and time efficient property maintenance for any type of property, large or small. Our long term established relationships with contractors and vendors are our most valuable asset. Baywood professionally provides all of the services necessary to keep each of our properties safe and sound. Regular inspections of both the interior and exterior of a building are an essential part of eliminating potential issues before they strike. We employ a staff of on-site managers, handymen and on call vendors who are dispatched on a regular basis. We find this to be a highly cost effective way to minimize expensive issues that might arise otherwise. Performing routine maintenance and investing in building improvements enables the properties we manage to preserve and enhance their value.",
  bookkeeping:
    "Baywood provides comprehensive, professional financial reporting for our property portfolio, including accounts payable/receivable, payroll processing, daily cash management, and financial statement preparation."
};

export let servicesPhotos = () => {
  if (screen.width < 900) {
    servicesPhotos = {
      accounting: small_accounting,
      maintenance: small_maintenance,
      marketing: small_marketing,
      bookkeeping: small_bookkeeping
    };
  } else {
    servicesPhotos = {
      accounting,
      maintenance,
      marketing,
      bookkeeping
    };
  }
};
servicesPhotos();
window.onorientationchange = servicesPhotos;
window.addEventListener("resize", servicesPhotos);

// image slider
import gal1 from "../img/gal-1-large.jpg";
import gal2 from "../img/gal-2-large.jpg";
import gal3 from "../img/gal-3-large.jpg";
import gal4 from "../img/gal-4-large.jpg";
import gal5 from "../img/gal-5-large.jpg";
import gal6 from "../img/gal-6-large.jpg";
import gal7 from "../img/gal-7-large.jpg";
import gal8 from "../img/gal-8-large.jpg";
import gal9 from "../img/gal-9-large.jpg";
import gal10 from "../img/gal-10-large.jpg";
import gal11 from "../img/gal-11-large.jpg";
import gal12 from "../img/gal-12-large.jpg";
import gal13 from "../img/gal-13-large.jpg";
import gal14 from "../img/gal-14-large.jpg";

import gal1Medium from "../img/gal-1-medium.jpg";
import gal2Medium from "../img/gal-2-medium.jpg";
import gal3Medium from "../img/gal-3-medium.jpg";
import gal4Medium from "../img/gal-4-medium.jpg";
import gal5Medium from "../img/gal-5-medium.jpg";
import gal6Medium from "../img/gal-6-medium.jpg";
import gal7Medium from "../img/gal-7-medium.jpg";
import gal8Medium from "../img/gal-8-medium.jpg";
import gal9Medium from "../img/gal-9-medium.jpg";
import gal10Medium from "../img/gal-10-medium.jpg";
import gal11Medium from "../img/gal-11-medium.jpg";
import gal12Medium from "../img/gal-12-medium.jpg";
import gal13Medium from "../img/gal-13-medium.jpg";
import gal14Medium from "../img/gal-14-medium.jpg";

import gal1Small from "../img/gal-1-small.jpg";
import gal2Small from "../img/gal-2-small.jpg";
import gal3Small from "../img/gal-3-small.jpg";
import gal4Small from "../img/gal-4-small.jpg";
import gal5Small from "../img/gal-5-small.jpg";
import gal6Small from "../img/gal-6-small.jpg";
import gal7Small from "../img/gal-7-small.jpg";
import gal8Small from "../img/gal-8-small.jpg";
import gal9Small from "../img/gal-9-small.jpg";
import gal10Small from "../img/gal-10-small.jpg";
import gal11Small from "../img/gal-11-small.jpg";
import gal12Small from "../img/gal-12-small.jpg";
import gal13Small from "../img/gal-13-small.jpg";
import gal14Small from "../img/gal-14-small.jpg";

export let galArr = () => {
  if (screen.width < 300) {
    galArr = {
      "gal-1": gal1Small,
      "gal-2": gal2Small,
      "gal-3": gal3Small,
      "gal-4": gal4Small,
      "gal-5": gal5Small,
      "gal-6": gal6Small,
      "gal-7": gal7Small,
      "gal-8": gal8Small,
      "gal-9": gal9Small,
      "gal-10": gal10Small,
      "gal-11": gal11Small,
      "gal-12": gal12Small,
      "gal-13": gal13Small,
      "gal-14": gal14Small
    };
  } else if (screen.width < 1000) {
    galArr = {
      "gal-1": gal1Medium,
      "gal-2": gal2Medium,
      "gal-3": gal3Medium,
      "gal-4": gal4Medium,
      "gal-5": gal5Medium,
      "gal-6": gal6Medium,
      "gal-7": gal7Medium,
      "gal-8": gal8Medium,
      "gal-9": gal9Medium,
      "gal-10": gal10Medium,
      "gal-11": gal11Medium,
      "gal-12": gal12Medium,
      "gal-13": gal13Medium,
      "gal-14": gal14Medium
    };
  } else {
    galArr = {
      "gal-1": gal1,
      "gal-2": gal2,
      "gal-3": gal3,
      "gal-4": gal4,
      "gal-5": gal5,
      "gal-6": gal6,
      "gal-7": gal7,
      "gal-8": gal8,
      "gal-9": gal9,
      "gal-10": gal10,
      "gal-11": gal11,
      "gal-12": gal12,
      "gal-13": gal13,
      "gal-14": gal14
    };
  }
};
galArr();
window.onorientationchange = galArr;
window.addEventListener("resize", galArr);

// form
export const contactForm = `
<div class="popup__contact">
  <div class="popup__top">
    <span class="popup__close">×</span>
  </div>
    <div class="popup__wrapper">
      <h3 class="heading-3 popup__heading">Contact Us for more information</h3>
      <form class="popup__form" method="post" action="https://baywood.herokuapp.com/api/send">
        <label for="name">Name<span class="popup__span">*</span></label>
        <input class="popup__input" type="text" id="name" placeholder="Please provide your full name" name="name" required pattern="[A-Za-z ]{3,25}">

        <label for="email">Email<span class="popup__span">*</span></label>
        <input class="popup__input" type="email" id="email" placeholder="Please provide your email" name="email" required>

        <label for="number">Phone Number</label>
        <input class="popup__input" type="text" id="number" name="phone" placeholder="Please provide your phone number">

        <label for="comment">Comment</label>
        <textarea class="popup__input" id="comment" name="message" placeholder="Type here..."></textarea>

        <div id="html_element" style="margin: 2rem 0; position: inherit;"></div>

        <p><span class="popup__span">*</span> Indicates required field</p>
        <input type="submit" id="submitBtn" class="btn" value="Contact Us" disabled>
      </form>
      
      <div class="popup__map">
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" 
          src="https://maps.google.com/maps?q=330%20Primrose%20Road%2C%20Suite%20606%20-%20Burlingame%2C%20CA%2094010&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.emojilib.com"></a></div><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div>
        </div>
    </div>
</div>
`;

// lazy loading
import gal1Loading from "../img/gal-1.jpg";
import gal2Loading from "../img/gal-2.jpg";
import gal3Loading from "../img/gal-3.jpg";
import gal4Loading from "../img/gal-4.jpg";
import gal5Loading from "../img/gal-5.jpg";
import gal6Loading from "../img/gal-6.jpg";
import gal7Loading from "../img/gal-7.jpg";
import gal8Loading from "../img/gal-8.jpg";
import gal9Loading from "../img/gal-9.jpg";
import gal10Loading from "../img/gal-10.jpg";
import gal11Loading from "../img/gal-11.jpg";
import gal12Loading from "../img/gal-12.jpg";
import gal13Loading from "../img/gal-13.jpg";
import gal14Loading from "../img/gal-14.jpg";

import gal1Mobile from "../img/gal-1-mobile.jpg";
import gal2Mobile from "../img/gal-2-mobile.jpg";
import gal3Mobile from "../img/gal-3-mobile.jpg";
import gal4Mobile from "../img/gal-4-mobile.jpg";
import gal5Mobile from "../img/gal-5-mobile.jpg";
import gal6Mobile from "../img/gal-6-mobile.jpg";
import gal7Mobile from "../img/gal-7-mobile.jpg";
import gal8Mobile from "../img/gal-8-mobile.jpg";
import gal9Mobile from "../img/gal-9-mobile.jpg";
import gal10Mobile from "../img/gal-10-mobile.jpg";
import gal11Mobile from "../img/gal-11-mobile.jpg";
import gal12Mobile from "../img/gal-12-mobile.jpg";
import gal13Mobile from "../img/gal-13-mobile.jpg";
import gal14Mobile from "../img/gal-14-mobile.jpg";

import prop1 from "../img/prop-1.jpg";
import prop2 from "../img/prop-2.png";
import prop3 from "../img/prop-3.png";
import prop4 from "../img/prop-4.png";
import prop5 from "../img/prop-5.png";
import prop6 from "../img/prop-6.jpg";
import prop7 from "../img/prop-7.jpg";
import prop8 from "../img/prop-8.png";

export let lazyLoadImges = () => {
  if (screen.width < 1000) {
    lazyLoadImges = {
      "gal-1": gal1Mobile,
      "gal-2": gal2Mobile,
      "gal-3": gal3Mobile,
      "gal-4": gal4Mobile,
      "gal-5": gal5Mobile,
      "gal-6": gal6Mobile,
      "gal-7": gal7Mobile,
      "gal-8": gal8Mobile,
      "gal-9": gal9Mobile,
      "gal-10": gal10Mobile,
      "gal-11": gal11Mobile,
      "gal-12": gal12Mobile,
      "gal-13": gal13Mobile,
      "gal-14": gal14Mobile
    };
  } else {
    lazyLoadImges = {
      "gal-1": gal1Loading,
      "gal-2": gal2Loading,
      "gal-3": gal3Loading,
      "gal-4": gal4Loading,
      "gal-5": gal5Loading,
      "gal-6": gal6Loading,
      "gal-7": gal7Loading,
      "gal-8": gal8Loading,
      "gal-9": gal9Loading,
      "gal-10": gal10Loading,
      "gal-11": gal11Loading,
      "gal-12": gal12Loading,
      "gal-13": gal13Loading,
      "gal-14": gal14Loading
    };
  }
};

lazyLoadImges();
window.onorientationchange = lazyLoadImges;
window.addEventListener("resize", lazyLoadImges);

export let lazyPropImages = {
  "prop-1": prop1,
  "prop-2": prop2,
  "prop-3": prop3,
  "prop-4": prop4,
  "prop-5": prop5,
  "prop-6": prop6,
  "prop-7": prop7,
  "prop-8": prop8
};

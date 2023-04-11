import abhimg from "./../images/abhishek.jpeg";
import gurimg from "./../images/gurunath.jpeg";
import madimg from "./../images/madhu.jpg";
import surimg from "./../images/surender.jpg";
import tejimg from "./../images/tejonath.jpeg";


export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const teamData = [
  {
    id: 1,
    imageurl: surimg,
    name: "Dr. Surender Varma",
    desig:"Director, IT & Research",
    linkedin: "https://in.linkedin.com/in/surender-varma-gadhiraju-721a368a.com",
    description: "Dr. Surender Varma has diverse experience in research and application of AI-ML in building autonomous solutions.\n He has previously worked for Dupont (@Hyderabad) and Here Technologies (@Mumbai) as a technical leader of data science projects and innovations.\
    \n In terms of academics, Surender is an alumni of IIT Roorkee (Masters) and IIT Bombay (PhD). \n In the recent past, he has been working on applications of machine learning and data analytics to Fintech domain. \
    \b Surender has successfully built equity portfolios and relevant easy to use apps. ",
    email:"surender@gmail.com",
  },
  {
    id: 2,
    imageurl: tejimg,
    name: "Tejonath",
    desig:"Director, Finance & Compliance",
    linkedin: "https://www.linkedin.com/in/ca-tejonath-gunturu-a7b5791b",
    description: "I am a detail-oriented, astute professional with over 15+ years of experience in \
    Finance & Accounts, Budgeting, Forecasting, Auditing, Financial Planning, Analysis, Direct Taxation, \
    Statutory Compliances, Corporate Finance, and Financial Reporting. A Certified Chartered Accounting professional, \
    with proven strategic proprietorship & entrepreneurship skills in financial system implementations for P&L scenario \
    improvement, cost-reduction, automation and tax strategies for surpassing fiscal performance.",
    email:"tejonath@gmail.com",
  },
  {
    id: 3,
    imageurl: madimg,      
    name: "Madhu Menon",
    desig:"Director, Remmitance Services",
    linkedin: "https://www.linkedin.com/in/madhu-menon-5a748314",
    description: "Madhu Some text about the Madhu sir",
    email:"madhu@gmail.com",
  },
  {
    id: 4,
    imageurl: gurimg,
    name: "Gurunath",
    desig:"Consultant, Client Relationships",
    linkedin: "https://www.linkedin.com/in/gurunathan-chandramouli-28736215",
    description: "A diligent and enthusiastic person of over 3 decades experience in stockbroking and stock exchanges. \
    A friendly and approachable personal, able to elicit client needs in order to advise on appropriate investments and solutions. \
    Passion for investment ideas are contagious as the benefits to investors and their family members are advised. An investment is almost inevitable!!",
    email:"guru@gmail.com",
  },
  {
    id: 5,
    imageurl: abhimg,
    name: "Abhishek Kodilkar",
    desig:"Consultant, Digital Technology",
    linkedin: "https://www.linkedin.com/mwlite/in/abhishekak",
    description: "abhishek text about abhishek..",
    email:"abhishek@gmail.com",
  },
 

];

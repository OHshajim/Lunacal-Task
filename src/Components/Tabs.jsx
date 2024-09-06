import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabsPart = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>About</Tab>
          <Tab>Experiences</Tab>
          <Tab>Recommended</Tab>
        </TabList>

        <TabPanel>
          <div className="overflow-y-scroll cursor-all-scroll h-[250px]">
            <h3 className="text-lg text-zinc-400">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years, where I specialize in
              providing personalized solutions to help businesses streamline
              their processes and achieve their goals.
              <br />
              <br />I was born and raised in Albany, NY, but I’ve been living in
              Santa Carla for the past 10 years with my wife Tiffany and our
              energetic 4-year-old twin daughters, Emma and Ella. They’re just
              starting school, which means my mornings are quite busy,
              especially between 9-10 AM, as I handle school drop-offs. Outside
              of work, I’m an avid hiker and love spending time outdoors. I’m
              also passionate about keeping up with the latest advancements in
              tech and enjoy attending industry conferences whenever I get the
              chance. On the weekends, I like to volunteer at local community
              events and stay active with my family. I'm excited to help you
              harness the full potential of Salesforce to transform your
              business and look forward to building a strong partnership!
            </h3>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="overflow-y-scroll cursor-all-scroll h-[250px]">
          <h3 className="text-lg text-zinc-400 ">
            I have over 3 years of experience working at Salesforce, where I’ve
            had the opportunity to assist a wide range of businesses in
            optimizing their operations through customized solutions. Throughout
            my time here, I’ve worked closely with clients to understand their
            unique needs and challenges, ensuring that the solutions we provide
            align with their long-term goals.
            <br />
            <br />
            My role involves everything from identifying business pain points to
            implementing seamless integrations that enhance workflow efficiency.
            Additionally, I stay updated on the latest Salesforce features and
            innovations, which allows me to deliver value-driven results to help
            clients thrive in an ever-evolving digital landscape. My experience
            in sales and client relations has not only sharpened my
            problem-solving skills but also deepened my passion for helping
            businesses grow.
          </h3>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="overflow-y-scroll cursor-all-scroll h-[250px]">
          <h3 className="text-lg text-zinc-400 ">
            My role involves everything from identifying business pain points to
            implementing seamless integrations that enhance workflow efficiency.
            Additionally, I stay updated on the latest Salesforce features and
            innovations, which allows me to deliver value-driven results to help
            clients thrive in an ever-evolving digital landscape. My experience
            in sales and client relations has not only sharpened my
            problem-solving skills but also deepened my passion for helping
            businesses grow.
            <br />
            <br />I was born and raised in Albany, NY, but I’ve been living in
            Santa Carla for the past 10 years with my wife Tiffany and our
            energetic 4-year-old twin daughters, Emma and Ella. They’re just
            starting school, which means my mornings are quite busy, especially
            between 9-10 AM, as I handle school drop-offs. Outside of work, I’m
            an avid hiker and love spending time outdoors. I’m also passionate
            about keeping up with the latest advancements in tech and enjoy
            attending industry conferences whenever I get the chance. On the
            weekends, I like to volunteer at local community events and stay
            active with my family. I'm excited to help you harness the full
            potential of Salesforce to transform your business and look forward
            to building a strong partnership!
          </h3>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsPart;

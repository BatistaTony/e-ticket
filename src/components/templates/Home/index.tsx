import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import PeopleYouMayKnow from "@/components/organisms/PeopleYouMayKnow";
import Post from "@/components/organisms/Post";

const HomeTemplate = () => {
  return (
    <div className="pb-10">
      <Navbar />
      <div className="grid grid-cols-[30%_70%]">
        <div className="w-[100%] ">
          <PeopleYouMayKnow />
        </div>

        <div className="w-full pt-10 flex flex-col gap-10">
          {[1, 2, 3, 4].map((item) => (
            <Post
              key={item}
              authorAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgKnRGHPC_HSqeO4lUvjyxHaTxrmc-uIeiw&usqp=CAU"
              name="SAPO SABIO"
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quibusdam culpa dicta quas atque aperiam asperiores itaque earum,
             soluta minus accusamus provident suscipit consequatur sed cum 
             maxime, quidem accusantium, omnis tempore officia id nisi cumque?
              Debitis laboriosam ipsum aspernatur accusantium explicabo aliquid
              maxime exercitationem ea voluptate! Eos voluptates consequatur 
              nemo aliquid.`}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomeTemplate;

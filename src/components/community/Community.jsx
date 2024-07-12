import React from "react";
import CommunityImg from "../../assets/image/home/CommunityImg.png";
import User from "../../assets/image/home/User.png";
import twitter from "../../assets/icons/twitter.png";
import Tick from "../../assets/icons/Tick.png";
import Commit from "../../assets/icons/Commit.png";
import Share from "../../assets/icons/Share.png";
import Like from "../../assets/icons/Like.png";
import Download from "../../assets/icons/Download.png";

const Community = () => {
  const cardsData = [
    {
      name: "Lorem Ipsum",
      handle: "@loremipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat @Loremipsum",
      hashtags: ["#Lorem ipsum", "#Lorem ipsum"],
      commits: 320,
      shares: 220,
      likes: "1556k",
      downloads: "",
    },
    {
      name: "Lorem Ipsum",
      handle: "@loremipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat @Loremipsum",
      hashtags: ["#Lorem ipsum", "#Lorem ipsum"],
      commits: 320,
      shares: 220,
      likes: "1556k",
      downloads: "",
    },
    {
      name: "Lorem Ipsum",
      handle: "@loremipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat @Loremipsum",
      hashtags: ["#Lorem ipsum", "#Lorem ipsum"],
      commits: 320,
      shares: 220,
      likes: "1556k",
      downloads: "",
    },
    {
      name: "Lorem Ipsum",
      handle: "@loremipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat @Loremipsum",
      hashtags: ["#Lorem ipsum", "#Lorem ipsum"],
      commits: 320,
      shares: 220,
      likes: "1556k",
      downloads: "",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        {/* Images Column (visible on larger devices) */}
        <div className="flex justify-end grid-cols-2 gap-4 mt-8 lg:mt-0 relative">
          <div className="img1 z-10 overflow-hidden border-8 border-gray-100 border-opacity-40">
            <img src={CommunityImg} alt="Learn" className="w-full h-full " />
          </div>
        </div>

        {/* Details Column */}
        <div className="max-w-lg text-center md:text-end">
          <p className="text-6xl font-semibold mb-4">
            Join Our <br /> <span className="text-[#2B54FF]">Community</span>
          </p>
          <p className="mb-8 text-[20px]">
            At SQL Quizbot, we believe in the power of collaboration and open
            communication, and we have a number of communities that you can join
            to connect with other like-minded.
          </p>

          <button className=" border border-white bg-[#2B54FF] text-white px-8 py-2 rounded-[59px]  mb-2">
            Join Us
          </button>
        </div>
      </div>
      {/* Cards Section */}
      <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {cardsData.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md px-8 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img src={User} alt="" className="h-50 w-50 roounded-full" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <span>{card.name}</span>
                        <img src={Tick} alt="" className="w-5 h-5" />
                      </div>
                      <span>{card.handle}</span>
                    </div>
                  </div>
                  <div className="icon hidden md:block">
                    <img src={twitter} alt="" className="h-8 w-10" />
                  </div>
                </div>
                <div className="desc mb-2">{card.description}</div>
                {card.hashtags.map((tag, idx) => (
                  <p  key={idx} cla>{tag}</p>
                ))}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1">
                    <img src={Commit} alt="" className="w-5 h-5" />
                    <span>{card.commits}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={Share} alt="" className="w-6 h-5" />
                    <span>{card.shares}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={Like} alt="" className="w-6 h-5" />
                    <span>{card.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={Download} alt="" className="w-6 h-5" />
                    <span>{card.downloads}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

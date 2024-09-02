import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
    return (
        <div className="relative z-10 bg-myGreen py-28">
            <div className="container">
                <h2 className="text-4xl md:text-6xl font-semibold text-center">
                    THE ROADMAP
                </h2>
                <div className="flex flex-col md:flex-row justify-center flex-wrap items-center pt-16 gap-10 ">
                    <RoadmapItem
                        btnCount={"Phase 1"}
                        text={"SmonkeyKong's master plan: Summon the tribe, sling bananas, and build a viral community!"}
                    ></RoadmapItem>
                    <RoadmapItem
                        btnCount={"Phase 2"}
                        text={"SmonkeyKong and its crew of community members just launched a real-world project token. It's bananas!"}
                    ></RoadmapItem>
                    <RoadmapItem
                        btnCount={"Phase 3"}
                        text={"SmonkeyKong Community flips the script with a revolutionary blockchain and its very own native token, ready to cause more disruption than a troop of caffeine-fueled monkeys in the media industry HOW T"}
                    ></RoadmapItem>
            </div>
        </div>
        </div >
    );
};

export default Roadmap;
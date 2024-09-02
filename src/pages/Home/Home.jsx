import Banner from "../../components/Banner/Banner";
import Buy from "../../components/Buy/Buy";
import Community from "../../components/Community/Community";
import Is from "../../components/Is/Is";
import Roadmap from "../../components/Roadmap/Roadmap";
import Token from "../../components/Token/Token";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Is></Is>
            <Community></Community>
            <Buy></Buy>
            <Roadmap></Roadmap>
            <Token></Token>
        </div>
    );
};

export default Home;
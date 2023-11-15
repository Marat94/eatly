import Wrapper from "../wrapper/Wrapper";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import Application from "./application/Application";
import Restaurants from "./restaurants/Restaurants";
import Dishes from "./dishes/Dishes";
import Purchases from "./purchases/Purchases";
import Banner from "./banner/Banner";

const Home = () => {
    return(
        <Wrapper>
            <Hero />
            <Features />
            <Application />
            <Restaurants />
            <Dishes />
            <Purchases />
            <Banner />
        </Wrapper>

    )
}

export default Home;
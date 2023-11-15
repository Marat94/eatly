import Wrapper from "../../wrapper/Wrapper";
import ChickenKingMenu from "./chickenKingMenu/ChickenKingMenu";
import Questions from "../questions/Questions";

const ChickenKing = () => {
    return(
            <Wrapper>
                <ChickenKingMenu />
                <Questions />
            </Wrapper>
    )
}

export default ChickenKing;
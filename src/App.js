import {Component} from "react";
import TopBanner from "./components/top-banner";
import InputArea from "./components/input-area";
import styled from 'styled-components';
import ListArea from "./components/list-area";

class App extends Component {
    render() {
        const StyledContainer = styled.div`
          margin-top: -6em;
          display: flex;
          justify-content: center;
        `

        const StyledListSection = styled(StyledContainer)`
          margin-top: 1em;
        `
        return (
            <>
                <TopBanner/>
                <StyledContainer>
                    <InputArea/>
                </StyledContainer>
                <StyledListSection>
                    <ListArea/>
                </StyledListSection>
            </>
        );
    }
}

export default App;

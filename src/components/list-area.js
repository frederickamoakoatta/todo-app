import {Component} from "react";
import styled from 'styled-components'
import {StyledContainer} from "./input-area";

class ListArea extends Component {
    render() {
        const StyledListContainer = styled(StyledContainer)`
          padding: 2em;
          width: 58%;
          background-color: #FDFBFB;
        `

        const StyledCard = styled.div`
          display: flex;
          justify-content: space-between;
          background-color: #D9D9D9;
          width: 100%;
          padding-left: 1em;
          padding-right: 1em;
        `

        const StyledText = styled.p`
          font-size: 1em;
          font-family: 'Montserrat', sans-serif;
          text-align: left;
          color: #212121;
        `

        const StyledCheckbox = styled.input`
          width: 1.5em;
          height: 1.5em;
          margin-top: 1em;
        `

        return (
            <>
                <StyledListContainer>
                    <StyledCard>
                        <StyledText>Go to the Gym</StyledText>
                        <StyledCheckbox type="checkbox" defaultChecked={false}/>
                    </StyledCard>
                </StyledListContainer>
            </>
        )
    }
}

export default ListArea;

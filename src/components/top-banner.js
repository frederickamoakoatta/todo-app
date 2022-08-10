import styled from "styled-components";
import {Component} from "react";

class TopBanner extends Component {
    render() {
        const StyledWrapper = styled.div`
          height: 15em;
          width: 100%;
          background-color: #028656;
          margin-top: 0;
        `

        const StyledHeader = styled.p`
          font-size: 2.5em;
          font-family: 'Montserrat',sans-serif;
          text-align: center;
          padding-top: 1em;
          color: #fff
        `
        return (
            <StyledWrapper>
                <StyledHeader>Todo App</StyledHeader>
            </StyledWrapper>
        )
    }
}

export default TopBanner;


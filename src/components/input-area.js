import {Component} from "react";
import styled from "styled-components";
import Icon from '@mdi/react'
import {mdiPlusThick} from '@mdi/js'

const StyledContainer = styled.div`
          width: 70%;
          display: flex;
          justify-content: center;
        `

const StyledInput = styled.input`
          padding: 1em;
          width: 70%;
          font-family: 'Montserrat', sans-serif;
        `

const StyledButton = styled.button`
          background-color: #E2CC00;
          padding: 1em;
          border: 1px solid #E2CC00;
          width: 15%;
          margin-left: 1em;
          box-shadow: 1px 1px 1px #424242;
            &:hover {
              background-color: #028656;
            }
        `

class InputArea extends Component {
    render() {

        return (
            <StyledContainer>
                <StyledInput placeholder="Enter Task For The Day"/>
                <StyledButton>
                    <Icon path={mdiPlusThick}
                          title="Add"
                          size={1}
                          color="white"/>
                </StyledButton>
            </StyledContainer>
        )
    }
}

export default InputArea;
export {StyledButton, StyledInput, StyledContainer}

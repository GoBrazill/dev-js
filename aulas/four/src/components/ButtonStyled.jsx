import styled from "styled-components"

const StyledButton = styled.button`
    height: 100px;
    padding: ${(props) => (props.large ? '20px' : '')};
    color: blue;
    background-color: ${(props) => (props.secondary ? 'yellow' : 'orange')};
    border: 10px;
`

export default function ButtonStyled({ secondary, text, large }) {
    return (
        <StyledButton secondary={secondary} large={large}>
            {text}
        </StyledButton>
    )
}
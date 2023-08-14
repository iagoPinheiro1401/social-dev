import { useState, useRef, useEffect } from "react"
import styled from "styled-components"

const Dots = styled.img`
    cursor: pointer;
`
const StyledMenu = styled.div`
    position: absolute;
    right: 0;
    box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
    width: 200px;
    background-color: ${props => props.theme.white};

    display: ${props => props.show ? 'block' : 'none'};
`
const StyledOption = styled.div`
    padding: 15px;
    cursor: pointer;

    : hover {
        background-color: ${props => props.theme.inputBackground}
    }
`

const StyledContainerMenu = styled.div`
    position: relative;
`

const Menu = ({ options = [] }) => {
    const [show, setShow] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleCliclOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShow(false)
            }
        }
        document.addEventListener('click', handleCliclOutside, true)

        return () => {
            document.removeEventListener('click', handleCliclOutside, true);
        }

    },[menuRef])

    return (
            <StyledContainerMenu>
                <Dots src="/three-dots.svg" height="20px" onClick={() => {setShow(!show)}}/>
                <StyledMenu ref={menuRef} onBlur={() => {setShow(false)}} show={show}>
                    {
                        options.map((option, pos) => 
                        <StyledOption 
                           key={`menu-option-${pos}`}
                           onClick={option.onClick}
                        >
                            {option.text}
                        </StyledOption>)
                    }
                </StyledMenu>
            </StyledContainerMenu>
    )
}

export default Menu
import { ReactChild } from "react"
import "./SliderButton.scss";

type SliderButtonProps = {
    disabled: boolean,
    onClick: () => void
    children: ReactChild
}

const SliderButton = (props: SliderButtonProps) => {
    return (
        <button {...props} className='slider-btn'>
            {props.children}
        </button>
    )
}

export default SliderButton
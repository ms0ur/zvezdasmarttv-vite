import './ZButton.module.scss'
export interface ZButtonProps {
    text: string;
}

export function ZButton(props: ZButtonProps) {
    return (
        <button>{props.text}</button>
    )
}
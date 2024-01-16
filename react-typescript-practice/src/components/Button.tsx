
type ButtonProps = {
    children: React.ReactNode,
    btnStyle: React.CSSProperties
}
const Button = ({ children, btnStyle }: ButtonProps) => {
    return (
        <button style={btnStyle}>
            {children}
        </button>
    )
}

export default Button

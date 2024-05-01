export const SvgHoc = (OriginalComponent) => {
    const NewComponent = props => {
        const animations = {
            stroke: props.color || 'white',
            strokeWidth: 1,
            initial: {
                pathLength: 0,
                opacity: 0,
            },
            animate: {
                pathLength: 1,
                opacity: 1,
                transition: {
                    duration: 5,
                    ease: 'easeInOut'
                }
            },
        }
        const newProps = {
            width:'180px'
            ,height:'180px',
            animations,
            ...props
        }

        return <>
            <OriginalComponent {...newProps} />
        </>
    }
    return NewComponent
}

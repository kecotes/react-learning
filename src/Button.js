//Los PropTypes sirven para obligar a que se pase un tipo de dato especifico
import PropTypes from "prop-types";

export function Button({title, name="user-default"}) {
    console.log(title)
    if (!title) {
        console.error('El titulo es requerido')
    }
    return <button>{title} - {name}</button>
}

Button.propTypes = {
    title: PropTypes.string.isRequired
}

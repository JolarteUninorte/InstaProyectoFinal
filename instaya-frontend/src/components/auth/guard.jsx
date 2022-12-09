const Guard = ({ isAllowed, children }) => {

    if (!isAllowed) {
        return <div class="alert alert-danger" role="alert">
            Esta pagina no existe
            o no tiene permiso para ver este contenido.
        </div>
    }
    return children
}

export default Guard
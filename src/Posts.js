

export const Posts = () => {
    return (
        <>
        <h3>Data list</h3>

        <button onClick={  () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch( err => console.error(err))
        }}>
            Traer datos
        </button>
        </>
    )
}
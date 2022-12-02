export const getCartItems = () => {
    const json = localStorage.getItem('items')
    let items
    if (json) {
        items = JSON.parse(json)
    }
    return items || []
}
export const addToCartHelper = (cart, item, customer) => {

    let newCart = { ...cart };
    let items = [...newCart.items];
    if (newCart.items.lenght > 0) {
        let itemAllreadyExit = newCart.find(i => i.id === item.id)
        
        let itemAllreadyExitIndex = newCart.findIndex(i => i.id === item.id)

        if (itemAllreadyExit) {
            items.splice(itemAllreadyExitIndex,1,{
                ...itemAllreadyExit,
                qtly: itemAllreadyExit.qlty + 1
            })
        }else{
            item.push({...item,qtly:1})
        }
    } else {
        items.push({
            ...item,
            qlty: 1
        })
    }

    newCart.items = items;

    newCart.subTotal = 0;
    newCart.tax = 0;
    newCart.grandTotal = 0

    for (const i of newCart.items) {

        newCart.subTotal += parseFloat(i.price)*parseInt(i.qlty)

    }

    newCart.grandTotal = newCart.subTotal + newCart.tax;
    newCart.customer = customer;

    return newCart;
}
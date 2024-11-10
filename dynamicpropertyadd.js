function createInventoryItem(name, category, price) {
    return {
        name: name,
        category: category,
        price: price,

        describeItem() {
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: $${this.price.toFixed(2)}`);
        }
    };
}
function addItemDiscount(inventoryItem, discountPercent) {
    const discountedPrice = inventoryItem.price - (inventoryItem.price * (discountPercent / 100));
    return {
        ...inventoryItem,
        discountPercent:
        discountPercent,
        discountedPrice:
        discountedPrice,
        applyDiscount() {
            console.log(`Discounted Price of ${this.name}: $${this.discountedPrice.toFixed(2)}`);
        }
    };
}
const item1 = createInventoryItem("Laptop", "Electronics", 1000);
item1.describeItem();
const DiscountedItem1 = addItemDiscount(item1, 15);
DiscountedItem1.applyDiscount();
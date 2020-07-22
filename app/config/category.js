export const categoryData = [
    {
        isExpanded: true,
        category_name: 'Fashion',
        id: 1,
        subcategory: [
            { id: 2, val: 'Men' },
            { id: 3, val: 'Women' },
            { id: 4, val: 'Children' }
        ],
    },
    {
        isExpanded: true,
        category_name: 'Mobile',
        id: 5,
        subcategory: [
            { id: 6, val: 'Samsung' },
            { id: 7, val: 'Apple' },
            { id: 8, val: 'Motorola' }
        ],
    },
    {
        isExpanded: true,
        category_name: 'Books',
        id: 9,
        subcategory: [
            { id: 10, val: 'Computer' },
            { id: 11, val: 'Medical' },
            { id: 26, val: 'Sales' }
        ],
    },
    {
        isExpanded: true,
        category_name: 'Electronics',
        id: 12,
        subcategory: [
            { id: 13, val: 'TV' },
            { id: 14, val: 'Laptop' },
            { id: 15, val: 'Home Appliances' }
        ],
    },
    {
        isExpanded: true,
        category_name: 'Grocery',
        id: 16,
        subcategory: [
            { id: 17, val: 'Fragrance' },
            { id: 18, val: 'Pulses' }
        ],
    },
    {
        isExpanded: true,
        category_name: 'Toys',
        id: 19,
        subcategory: [
            { id: 20, val: 'Game' },
            { id: 21, val: 'Baby Care' }
        ],
    },
    {
        isExpanded: false,
        category_name: 'Furniture',
        id: 22,
    },
    {
        isExpanded: true,
        category_name: 'Auto Mobile',
        id: 23,
        subcategory: [
            { id: 24, val: 'Car' },
            { id: 25, val: 'Bike' }
        ],
    },

];

export const getCategory = () => {
    return categoryData;

}


const category = [
    {
        name: 'Clothing',
        id: 1,
        children: [
            {
                name: 'Children',
                id: 2
            },
            {
                name: 'Men',
                id: 3
            },
            {
                name: 'Women',
                id: 4
            },

        ]
    },
    {
        name: 'Books',
        id: 5,
        children: [
            {
                name: 'Computer',
                id: 6
            },
            {
                name: 'Medical',
                id: 7
            },
            {
                name: 'Engineering',
                id: 8
            }
        ]
    }
];
export const getCategory = () => {
    return categories;

}


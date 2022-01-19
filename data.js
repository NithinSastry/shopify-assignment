const tickets = {
  categories: [
    {
      name: 'club',
      price: 236,
      rows: [
        {
          id: 'A',
          range: '1-15',
          booked: {
            6: true,
            7: true,
            8: true,
            9: true,
            10: true,
            11: true,
            12: true,
          },
        },
        {
          id: 'B',
          range: '3-15',
          booked: {
            6: true,
            7: true,
            8: true,
            9: true,
            10: true,
          },
        },
      ],
    },
    {
      name: 'executive',
      price: 236,
      rows: [
        {
          id: 'C',
          range: '7-15',
          booked: {
            7: true,
            8: true,
            9: true,
          },
        },
        {
          id: 'D',
          range: '7-15',
          booked: {
            7: true,
            8: true,
            9: true,
            14: true,
            15: true,
          },
        },
        {
          id: 'E',
          range: '7-15',
          booked: {
            7: true,
            8: true,
            9: true,
            10: true,
            11: true,
            12: true,
            14: true,
            15: true,
          },
        },
        {
          id: 'F',
          range: '7-15',
          booked: {
            9: true,
            10: true,
            11: true,
            14: true,
            15: true,
          },
        },
        {
          id: 'G',
          range: '3-15',
          booked: {
            3: true,
            4: true,
            7: true,
            8: true,
            9: true,
            14: true,
            15: true,
          },
        },
        {
          id: 'H',
          range: '3-15',
          booked: {
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true,
            9: true,
            14: true,
            15: true,
          },
        },
        {
          id: 'I',
          range: '3-15',
          booked: {
            7: true,
            8: true,
            9: true,
            14: true,
            15: true,
          },
        },
        {
          id: 'J',
          range: '3-15',
          booked: {
            7: true,
            14: true,
            15: true,
          },
        },
      ],
    },
  ],
};
export default tickets;

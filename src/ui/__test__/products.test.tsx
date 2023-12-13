import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductsTable, { Product } from '../components/products'; // Assuming the component file is in the same directory
import { store } from '@/store/store'; // Import the store

describe('ProductsTable Component', () => {
  it('renders products table with products', () => {
    const { getByText, getAllByAltText } = render(
      <Provider store={store}>
        <ProductsTable />
      </Provider>
    );

    // Test logic to check if products are rendered properly and images are present
    // Adjust the assertions based on your component's actual rendering logic
    // For example:
    const brandElement = getByText('Products'); // Replace 'Brand 1' with the expected text
    // const imageElements = getAllByAltText('product-image'); // Replace 'product-image' with the expected alt text

    expect(brandElement).toBeInTheDocument();
    // expect(imageElements.length).toBeGreaterThan(0);
  });

//   it('renders no products message when there are no products', () => {
//     // Modify the store state to have no products
//     // If your store supports dynamic updates for testing, you can dispatch actions to simulate the state change
//     // If not, consider creating a mock store state without products to simulate this scenario
//     // For example:
//     // store.dispatch(actionToRemoveProducts());

//     const { getByText } = render(
//       <Provider store={store}>
//         <ProductsTable />
//       </Provider>
//     );

//     const noProductsMessage = getByText('No Products');
//     expect(noProductsMessage).toBeInTheDocument();
//   });
});

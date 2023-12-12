import { EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { productsSlice, fetchProducts, ProductDetail } from '../products/productsSlice';


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ products: [] }),
})
) as unknown as jest.MockedFunction<typeof fetch>;

describe('Products Slice', () => {
  let store: EnhancedStore<{ loading: boolean; error: string | null | undefined; value: ProductDetail[]; }, UnknownAction, Tuple<[StoreEnhancer<{ dispatch: ThunkDispatch<{ loading: boolean; error: string | null | undefined; value: ProductDetail[]; }, undefined, UnknownAction>; }>, StoreEnhancer]>>;

  beforeEach(() => {
    store = configureStore({
      reducer: productsSlice.reducer,
    });
  });

  it('should handle fetching products', async () => {
    await store.dispatch(fetchProducts());

      const { loading, error } = store.getState();
      const products = store.getState().value;

    // Check if products were fetched
    expect(products).toEqual([]);

    // Check loading state
    expect(loading).toBe(false);

    // Check error state
    expect(error).toBe(null);
  });
});

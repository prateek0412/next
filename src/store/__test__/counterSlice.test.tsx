import { EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction, configureStore } from '@reduxjs/toolkit';
import { CounterState, counterSlice, fetchUserData } from '../feature/counter/counterSlice';

// Mock fetch function for API call
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ /* Mock API response here */ }),
  }) as Promise<Response>
);

describe('Counter Slice', () => {
    let store: EnhancedStore<CounterState, UnknownAction, Tuple<[StoreEnhancer<{ dispatch: ThunkDispatch<CounterState, undefined, UnknownAction>; }>, StoreEnhancer]>>;

    beforeEach(() => {
        store = configureStore({
            reducer: counterSlice.reducer,
            // middleware: [], // Add any middleware if needed
        });
    });

    it('should fetch user data', async () => {
        await store.dispatch(fetchUserData());

        const state = store.getState();
        expect(state.products).toBeDefined();
        expect(state.error).toBeNull();
        expect(state.loading).toBeFalsy();
    });

    it('should increment value', () => {
        store.dispatch(counterSlice.actions.increment());

        const state = store.getState();
        expect(state.value).toBe(1);
    });
    
    it('should handle fetch user data failure', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Failed to fetch')) as Promise<Response>
        );
        await store.dispatch(fetchUserData());

        const state = store.getState();
        expect(state.error).toEqual('Failed to fetch');
        expect(state.loading).toBeFalsy();
        expect(state.products).toBeNull();
    });
});




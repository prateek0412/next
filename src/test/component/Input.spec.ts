// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Input from '../../components/Input';

// describe('Input Component', () => {
//   it('calls onChange callback when input value changes', () => {
//     const onChangeMock = jest.fn();
//     const { getByLabelText } = render(
//       <Input label="Username" type="text" value="" onChange={onChangeMock} />
//     );

//     const inputElement = getByLabelText('Username') as HTMLInputElement;
//     fireEvent.change(inputElement, { target: { value: 'test' } });

//     expect(onChangeMock).toHaveBeenCalledTimes(1);
//     expect(onChangeMock).toHaveBeenCalledWith('test');
//   });
// });

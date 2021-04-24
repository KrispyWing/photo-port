import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  //first test
  it('renders', () => {
    render(<Nav
      categories={categories} 
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockSetCurrentCategory}
      />);
  });

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav
      categories={categories} 
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockSetCurrentCategory}
      />);
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visble', () => {
  it('inserts emoji into the h2', () => {
    //arrange
    const { getByLabelText } = render(<Nav
      categories={categories} 
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockSetCurrentCategory}
      />);
    //assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})

describe('links are visible', () => {
  it('inserts text into links', () => {
    //Arrange
    const { getByTestId } = render(<Nav
      categories={categories} 
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockSetCurrentCategory}
      />);
    //Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})
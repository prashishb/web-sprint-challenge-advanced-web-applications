import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react';

const testArticle = {
    id: '1',
    headline: 'test',
    createdOn: '2021-08-09T18:02:38-04:00',
    author: '',
    summary: 'test',
    body: 'test',
};

test('renders component without errors', ()=> {
    render(<Article article={testArticle} />);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />);

    const headline = screen.getByTestId('headline');
    const author = screen.getByTestId('author');
    const summary = screen.getByTestId('summary');
    const body = screen.getByTestId('body');

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle} />);

    const author = screen.getByTestId('author');

    expect(author).toHaveTextContent('Associated Press');
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn();
    render(<Article article={testArticle} handleDelete={handleDelete} />);

    const deleteButton = screen.getByTestId('deleteButton');
    userEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
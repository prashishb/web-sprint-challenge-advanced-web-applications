import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleServices from '../services/articleServices'

jest.mock('../services/articleServices')

const testArticles = [
    {
        id: '1',
        headline: 'article 1',
        createdOn: '2021-08-09T18:02:38-04:00',
        author: '',
        summary: 'article 1',
        body: 'article 1',
    },
    {
        id: '2',
        headline: 'article 2',
        createdOn: '2021-08-09T18:02:38-04:00',
        author: '',
        summary: 'article 2',
        body: 'article 2',
    },
    {
        id: '3',
        headline: 'article 3',
        createdOn: '2021-08-09T18:02:38-04:00',
        author: '',
        summary: 'article 3',
        body: 'article 3',
    },
];


test("renders zero articles without errors", async () => {
    articleServices.mockResolvedValueOnce([]);
    render(<View />);
    const articles = await screen.queryAllByTestId('article');
    expect(articles.length).toBe(0);
});

test("renders three articles without errors", async ()=> {
    articleServices.mockResolvedValueOnce(testArticles);
    render(<View />);
    const articles = await screen.findAllByTestId('article');
    expect(articles.length).toBe(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
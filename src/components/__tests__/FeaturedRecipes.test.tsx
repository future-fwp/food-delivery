import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedRecipes from '../FeaturedRecipes';
import { mockRecipes } from '../../types/Recipe';

describe('FeaturedRecipes Component', () => {
  it('renders the main heading', () => {
    render(<FeaturedRecipes />);
    const heading = screen.getByText(/Featured Recipes/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<FeaturedRecipes />);
    const subheading = screen.getByText(/Discover our hand-picked selection of delicious recipes/i);
    expect(subheading).toBeInTheDocument();
  });

  it('renders the correct number of recipe cards', () => {
    render(<FeaturedRecipes />);
    const recipeCards = screen.getAllByRole('img');
    expect(recipeCards).toHaveLength(mockRecipes.length);
  });

  it('renders recipe titles', () => {
    render(<FeaturedRecipes />);
    mockRecipes.forEach(recipe => {
      const recipeTitle = screen.getByText(recipe.title);
      expect(recipeTitle).toBeInTheDocument();
    });
  });

  it('renders the "View All Recipes" button', () => {
    render(<FeaturedRecipes />);
    const viewAllButton = screen.getByText(/View All Recipes/i);
    expect(viewAllButton).toBeInTheDocument();
  });
});
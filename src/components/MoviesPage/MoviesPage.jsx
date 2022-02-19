import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SearchForm } from './SearchForm.styled';
import { ButtonSearch } from './ButtonSearch.styles';
import MovieDetailsPage from 'components/MovieDetailsPage';
import { Label } from './Label.styles';
import { Input } from './Input.styles';

function MoviesPage() {
  const [value, setValue] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;
    setValue(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const strValue = value.trim();
    if (!strValue) {
      reset();
      return;
    }
    // onSubmit(strValue);
    reset();
  };

  const reset = () => {
    setValue('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <ButtonSearch type="submit">
        <Label>Search</Label>
      </ButtonSearch>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={value}
        onChange={handleChange}
      />
    </SearchForm>
  );
}

MoviesPage.propTypes = {};

export default MoviesPage;

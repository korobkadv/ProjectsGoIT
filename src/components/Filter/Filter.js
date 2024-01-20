import { FilterInput } from './Filter.styled';

export const Filter = ({ valueFilter, onChangeFilter }) => {
  return (
    <>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={onChangeFilter}
        value={valueFilter}
      />
    </>
  );
};

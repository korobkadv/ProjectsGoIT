import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, getFilters } from '../../redux/filterSlise';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={evt => dispatch(updateFilter(evt.target.value))}
        value={useSelector(getFilters)}
      />
    </>
  );
};

import React from 'react';
import TextField from '@mui/material/TextField';

interface SearchProps {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const SearchBar: React.FC<SearchProps> = ({ onSearchChange, value }) => {

    return (
        <TextField
            label="Search by title"
            variant="outlined"
            value={value}
            onChange={onSearchChange}
            fullWidth
            margin="normal"
        />
    );
};

export default SearchBar;
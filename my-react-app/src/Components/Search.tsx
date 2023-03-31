// Create a component that allows the user to search for a movie
import React from 'react';
import { TextField, Container, Box, Button } from '@mui/material'; 

interface Props {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({ query, setQuery }: Props) => {

    const [search, setSearch] = React.useState<string>(query);

    // when the user presses enter, the search is executed
    const keyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setQuery(search);
        }
    };

    return (
        <Container maxWidth="xl"
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  height: 150, }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center',  alignItems: 'center', }} >
                <TextField 
                    id="outlined-search" 
                    variant="outlined" 
                    type="search"
                    label="Search here"
                    value={search}
                    color= "secondary"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => keyPress(e)}
                    sx={{ width: 300, marginRight: 1, }}
                />
                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => setQuery(search)}
                    sx={{ height: 56, Color: '#F6EDFE', backgroundColor: '#1F0439' }}
                >Search</Button>
            </Box>
        </Container>
    );
};
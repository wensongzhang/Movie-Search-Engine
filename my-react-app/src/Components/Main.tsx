import React from 'react';
import { Pagination, AppBar, Container, Box } from '@mui/material';
import { Search } from './Search';
import { Results } from './Results';
import { useFetch } from './useFetch';
// import logo from './logo.svg';
import './style.css';

type Data = {
    Response: string
    totalResults: number
    Search: Array<{}>
}

export const Main = () => {

    const [query, setQuery] = React.useState('');
    const [page, setPage] = React.useState(1);
    const { data, loading } = useFetch(`http://www.omdbapi.com/?apikey=211cea13&s=${query}&page=${page}`);

    // console.log(data);

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#1F0439', height: 70, }}>
                <Container maxWidth="xl" 
                    sx={{ display: 'flex', flexDirection: 'row', }}
                >
                    {/* <Box className='logo'
                        sx={{
                            // border: '1px solid white',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            width: 50, height: 50, marginRight: 2.5, marginTop: 1.2,
                        }}
                    >
                        <img src={logo} className="App-logo" alt="logo" 
                            style={{ width: 50, height: 50, }}
                        />
                    </Box> */}
                    <Box component='span' className='main-title'
                        sx={{
                            // border: '1px solid white',
                            width: 300, height: 60, 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            fontSize: 30, fontWeight: 'bold', Color: '#F6EDFE',
                        }}
                    >
                        Movie Search Engine
                    </Box>
                </Container>
            </AppBar>
            <Search query={query} setQuery={setQuery} />
            <Results results={data} loading={loading} />
            {(!loading && data !== null && (data as Data).Response !== "False") &&
                <Pagination
                    color="secondary"
                    count={Math.ceil((data as Data).totalResults / 10)}
                    onChange={(e, value) => setPage(value)}
                    sx={{ 
                        display: 'flex', justifyContent: 'center', alignItems: 'center', 
                        marginTop: 2, marginBottom: 5 
                    }}
                />
            }
        </>
    );
};
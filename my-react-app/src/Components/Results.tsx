// Create a component that displays the results of the search with typescript
import React from 'react';
import { Box, Grid, Card } from '@mui/material';
import { Details } from './Details';
import { makeStyles } from '@mui/styles';

interface Props {
    results: any;
    loading: boolean;
}

const useStyles = makeStyles({
    warningText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    innerWarningText: {
        border: '1px solid #1F0439', color: '#1F0439',
        width: 400, height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
});

export const Results = ({ results, loading }: Props) => {
    
    const [id, setId] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const style = useStyles();

    const handleOpen = (id:string) => {
        setOpen(true);
        setId(id);
    };
    const handleClose = () => {
        setOpen(false);
        setId('');
    };

    // if (loading) {
    //     return <Box className={style.warningText}>Loading...</Box>;
    // }
 
    if(results.Response === "False" && results.Error === "Too many results.") {
        return <Box className={style.warningText}><Box className={style.innerWarningText}> Too many results. Please refine your search. </Box></Box>;
    } else if (results.Response === "False" && results.Error === "Movie not found!") {
        return <Box className={style.warningText}><Box className={style.innerWarningText}> No results found. </Box></Box>;
    } else if(results.Response === "False"){
        return <Box className={style.warningText}><Box className={style.innerWarningText}> Type to start searching. </Box></Box>;
    } else {
        return (
            <>
                <Details id={id} open={open} handleClose={handleClose} />
                <Grid container spacing={3}>
                    {results.Search.map((result: any) => (
                        <Grid key={result.imdbID} 
                            item xs={12} sm={6} md={4} lg={3} 
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            onClick={() => handleOpen(result.imdbID)}
                            aria-label="movie-card"
                        >
                            <Card sx={{ width: 300, '&:hover': { boxShadow: 10, transition: 'all 0.1s ease-in-out', } }} >
                                <img src={result.Poster} alt={result.Title} loading='lazy' />
                                <Box 
                                    sx={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                                        fontFamily: 'Abhaya Libre', fontSize: 20, fontWeight: 'bold', color: '#1F0439',
                                        marginLeft: 2, marginRight: 2, marginTop: 3, marginBottom: 3,
                                    }}
                                >
                                    {result.Title}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </>
        )
    }
};
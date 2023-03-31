// Create a mui modal component that displays the details of a movie with typescript
import { useFetch } from './useFetch';
import { Modal, Box, Grid, Divider } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from '@mui/styles';

type Data = {
    Title: string;
    Plot: string;
    Response: string;
    Poster: string;
    imdbRating: string;
    imdbID: string;
    Actors: string;
    Director: string;
    Genre: string;
    Language: string;
    Released: string;
    Runtime: string;
    Type: string;
    Website: string;
}

interface Props {
    id: string;
    open: boolean;
    handleClose: () => void;
}

const useStyles = makeStyles({
    modal: {
        // border: '1px solid #000',
        position: 'fixed',
        top: '10% !important', 
        bottom: '10% !important', 
        left: '10% !important', 
        right: '10% !important',
        overflow:'scroll',
    },
    outter: {
        backgroundColor: '#D2CDD7',
        boxShadow: '1px 2px 9px #191919',
        // borderRadius: '10px',
        padding: '20px',
    },
    textAll: {
        // border: '1px solid #000',
        padding: '20px 20px 20px 20px',
    },
    textTags: {
        // border: '1px solid #000',
        padding: '20px 20px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
    tag: {
        // border: '1px solid #000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '0px 20px 0px 0px',
        padding: '3px 8px 3px 8px',
        borderRadius: '12px',
        backgroundColor: '#1F0439',
        color: '#F6EDFE',
        // fontFamily: 'Almarai regular',
    },
    icon: {
        fontSize: '20px !important',
        marginRight: '5px',
    },
    textRates: {
        // border: '1px solid #000',
        padding: '20px 20px 20px 0px',
    },
    imdb: {
        // border: '1px solid #000',
        margin: '0px 10px 0px 0px',
        padding: '3px 4px 2px 8px',
        borderRadius: '7px',
        backgroundColor: 'orange',
        fontSize: '20px',
        fontFamily: 'Impact T Regular',
        fontWeight: 'bold',
    },
    button: {
        position: 'fixed',
        right: '10%', top: '10%',
    },
    image: {
        // border: '1px solid #000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: '30px',
        fontWeight: 'bold',
    },
});

export const Details = ({ id, open, handleClose }: Props) => {
    const { data, loading } = useFetch(`https://www.omdbapi.com/?apikey=211cea13&i=${id}`);
    const style = useStyles();

    //A typescript function to switch the format of the date from 11 Jan 2021 to 01/11/2021
    const switchDate = (date: string) => {
        interface Months {
            [key: string]: string;
        }
        const months: Months = {
            Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
            Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
        }
        const dateArr = date.split(' ');
        const month = months[dateArr[1]];
        const day = dateArr[0];
        const year = dateArr[2];
        return `${month}/${day}/${year}`;
    }


    if (loading) {
        return <Box>Loading...</Box>;
    }

    if (data === null || (data as Data).Response === "False" ) {
        return <></>;
    }
    else {
        // console.log("data: ", data)
        return (
            <Modal
                className={style.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container spacing={1} className={style.outter}>
                    <Grid item xs={12} sm={12} md={5.3} lg={4}  className={style.image}>
                        <img src={(data as Data).Poster} alt={(data as Data).Title} loading="lazy"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={8} >
                    <Box className={style.textAll}>
                        <Box className={style.textTitle} sx={{ fontFamily: 'Abhaya Libre', fontWeight: 'bold' }} >{(data as Data).Title}</Box>
                        <Box className={style.textTags}>
                            <Box className={style.tag}> <CalendarMonthIcon className={style.icon}/> {switchDate((data as Data).Released)}</Box>  
                            <Box className={style.tag}> <MovieFilterIcon className={style.icon}/> {(data as Data).Genre}</Box>
                            <Box className={style.tag}> <AccessTimeIcon className={style.icon}/> {(data as Data).Runtime}</Box>
                        </Box>
                        <Box className={style.textRates}>
                            <Box component='span' className={style.imdb}> IMDb </Box>
                            <Box component='span'sx={{ fontSize: '20px', fontWeight: 'bold'}}>{(data as Data).imdbRating}</Box>
                            <Box component='span'>/10.0</Box>
                        </Box>
                        <Box sx={{ fontSize: '16px', fontWeight: 'bold' }}>Overview</Box>
                        <Box >{(data as Data).Plot}</Box>
                        <Divider sx={{ margin: '20px 0px 20px 0px' }} />
                        <Box component='span'sx={{ fontSize: '16px', fontWeight: 'bold'}}> Director: </Box>
                        <Box sx={{ padding: '0px 0px 10px 0px' }} >{(data as Data).Director}</Box>
                        <Box component='span'sx={{ fontSize: '16px', fontWeight: 'bold'}}> Actor: </Box>
                        <Box sx={{ padding: '0px 0px 10px 0px' }}>{(data as Data).Actors}</Box>
                        <ClearIcon onClick={handleClose} className={style.button}
                            sx={{ fontSize: '50px', color: '#191919', cursor: 'pointer' }}
                        />
                    </Box>
                    </Grid>
                </Grid>
            </Modal>
        );
    }
};



import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MovieList = () => {

    const { data } = useSelector((store) => store.movies)

    return (
        <>
            <div>
                <Grid sx={{ flexGrow: 1 }} container>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={3}>
                            {data?.map((item, index) => (
                                <Grid key={index} item>
                                    <Card sx={{ maxWidth: "350" }}>
                                        <Link to={`${item.imdbID}`}>
                                            <CardMedia
                                                component="img"
                                                height="350"
                                                image={item.Poster}
                                                alt={item.Title}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.primary">
                                                    {item.Title}
                                                </Typography>
                                                <Typography variant="body2" color="text.primary">
                                                    ({item.Year})
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default MovieList
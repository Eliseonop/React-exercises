import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Stack
} from '@mui/material'

export default function Jokes ({ joke, getJokes, changeState }) {
  const [disabled, setDisabled] = useState(false)
  let fecha = new Date(joke.created_at)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='200'
          image={
            joke.icon_url === 'not found'
              ? joke.icon_url
              : 'https://laopinion.com/wp-content/uploads/sites/3/2022/03/GettyImages-621430574.jpg?quality=80&strip=all&w=1200'
          }
          alt={joke.id}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {joke.value}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' marginTop={2}>
          {fecha.toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction='row' spacing={5} margin={2}>
          <Button
            variant='contained'
            color='info'
            onClick={() => {
              setDisabled(true)
              changeState(prevState => ({
                ...prevState,
                good: prevState.good + 1
              }))
            }}
            disabled={disabled}
          >
            Good
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => getJokes()}
            // action={() => getJokes()}
          >
            Next
          </Button>
          <Button
            variant='contained'
            color='error'
            onClick={() => {
              setDisabled(true)
              changeState(prevState => ({
                ...prevState,
                bad: prevState.bad + 1
              }))
            }}
            disabled={disabled}
          >
            Bad
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}

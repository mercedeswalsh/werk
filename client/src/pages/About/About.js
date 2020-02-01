import React, { useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import DevCard from '../../components/DevCard'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
    link: {
        textDecorationLine: 'none'
    }
})

const About = () => {
    const classes = useStyles()


    useEffect(() => {
        // axios({
        //     method: 'get',
        //     url: '/authorize',
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('werkToken')}`
        //     }
        // })
    }, [])

    return (

        <Grid container spacing={4} align="center">
            <Grid item xs={12}>
                <Typography variant="h5">
                    What is WERK?
                </Typography>
                <br/>
                <Typography variant="subtitle2">
                    WERK can help you stay on track of your fitness goals.  When you join the WERK community you can:
                </Typography>
                <List>

                    <ListItem>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText align="left" primary="Have access to pre-made workouts for upper, lower, and total body" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText align="left" primary="Create your own custom workout through our vast database of exercises" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText align="left" primary="Log and track your workout so that you can see your progress" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText align="left" primary="Be a part of an open and caring community of fellow health enthusiasts" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Meet The WERK Team
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <a href="https://github.com/mesmerizingYeti" className={classes.link}>
                    <DevCard
                        image="https://ca.slack-edge.com/TKAFG5QD9-ULXR8AFUZ-c9a095d1d510-512"
                        name="Nathan"
                        role="Git Master"
                        favorite="Anything Glute"
                    />
                </a>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <a href="https://github.com/mercedeswalsh" className={classes.link}>
                    <DevCard
                        image="https://ca.slack-edge.com/TKAFG5QD9-ULY02C8P8-3d1863e1b1ef-512"
                        name="Mercedes"
                        role="Frontend Team"
                        favorite="Bench Press"
                    />
                </a>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <a href="https://github.com/schirmerm" className={classes.link}>
                    <DevCard
                        image="https://ca.slack-edge.com/TKAFG5QD9-ULJEQ5WAX-03a5b4778309-512"
                        name="Maverick"
                        role="Frontend Team"
                        favorite="Squats"
                    />
                </a>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <a href="https://github.com/chbbs231" className={classes.link}>
                    <DevCard
                        image="https://ca.slack-edge.com/TKAFG5QD9-ULMK37M6G-f205369b1b63-512"
                        name="Arturo"
                        role="Backend Team"
                        favorite="Pullups"
                    />
                </a>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <a href="https://github.com/Paretooptimal22" className={classes.link}>
                    <DevCard
                        image="https://ca.slack-edge.com/TKAFG5QD9-ULPF1509X-39abf41164e2-512"
                        name="Kevin"
                        role="Backend Team"
                        favorite="Kettlebell Swings"
                    />
                </a>
            </Grid>
        </Grid>

    )
}

export default About
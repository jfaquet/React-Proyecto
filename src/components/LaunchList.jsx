import { useState, useEffect } from "react";
import * as API from "../services/launches";
import { Heading, Box} from '@chakra-ui/react'
import { LaunchItem} from '../components/LaunchItem'
import {BeatLoader } from 'react-spinners'

export function LaunchList() {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches()
        .then(setLaunches)
        .catch(console.log);
    }, [])
    return (
        <>
            <Heading as='h1' size="lg" m={4}> SpaceX launches</Heading>
            {launches.length === 0 ? (<Box p={10}><BeatLoader  size = {50} color="black"/></Box>) : (
                <section>
                {launches.map(launch => (
                    <LaunchItem key={launch.flight_number} {...launch}></LaunchItem>
                ))}
            </section>

            ) }
            
        </>
    )
}




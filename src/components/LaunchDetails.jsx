import { Link, useParams } from "react-router-dom"
import * as API from "../services/launches";
import { useState, useEffect } from "react";
import { Box, Flex, Spacer, Tag, Text, Icon } from "@chakra-ui/react";
import { SiWikipedia, SiYoutube } from "react-icons/si";
import {BeatLoader } from 'react-spinners'


export function LaunchDetails() {
    const [launch, setLaunches] = useState({});

    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFligthNumber(launchId)
            .then(setLaunches)
            .catch(err => console.log(err));
    }, [launchId])

    return (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
            {!launch ? (<div><BeatLoader/></div>) : (
                <>
                    <Flex>
                        <Text fontSize="2xl">
                            Mission <strong> {launch.mission_name}</strong>({launch.launch_year})
                        </Text>
                        <Spacer />
                        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                            {launch.launch_success ? "Success" : "Failure"}
                        </Tag>
                    </Flex>
                    <Box mt={2}>
                        <Text fontSize="lg">
                            Cohete:{" "}
                            <Link to={`/rockets/${launch.rocket?.rocket_id}`} style={{ color: 'blue' }} >
                                {launch.rocket?.rocket_name}
                            </Link>
                        </Text>
                    </Box>
                    <Box>
                        <a href={`${launch.links?.wikipedia}`}>
                            <Icon m={1} as={SiWikipedia} color="gray.500" />
                        </a>
                        <a href={`${launch.links?.video_link}`}>
                            <Icon m={1} as={SiYoutube} color="gray.500" />
                        </a>
                    </Box>




                </>)}

        </Box>);
}
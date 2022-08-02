import * as API from "./services/launches";
import { useState, useEffect} from "react";
import logo from "./assets/SpaceX-Logo.png"
import {LaunchItem} from "./components/LaunchItem"
import { Heading, Image} from '@chakra-ui/react'


export function App() {

  const [launches,setLaunches] = useState([]);

  useEffect(() =>{
    API.getAllLaunches().then(setLaunches);
  },[])

  return (
    <>
    <Image m={4} src={logo} width={300}/>
    <Heading as='h1' size="lg" m={4}> SpaceX launches</Heading>
    <section>
      {launches.map(launch =>(
        <LaunchItem key={launch.flight_number} {...launch}></LaunchItem>
      ))}
    </section>
    </>
  )
}

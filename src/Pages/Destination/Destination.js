import React from 'react'
import NavBar from '../../component/navbar/index'
import { data } from '../../Services/data'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './Destination.css'

function Destination() {
  return (
    <div className="container__dest">
      <NavBar />

      <Tabs className="container__destination">
        <div className="title__destination">
          <p>01</p>
          <h3>Pick Your Destination</h3>
        </div>
        <TabList className="container__info">
          <Tab className="title__info">{data[0].destinations[0].name}</Tab>
          <Tab className="title__info">{data[0].destinations[1].name}</Tab>
          <Tab className="title__info">{data[0].destinations[2].name}</Tab>
          <Tab className="title__info">{data[0].destinations[3].name}</Tab>
        </TabList>
        <TabPanel className="container__tab-panel">
          <div className="content__destination">
            <h1>{data[0].destinations[0].name}</h1>
            <p>{data[0].destinations[0].description}</p>
          </div>
          <div className="content__description-destination">
            <p>Avg.Distance</p>
            <p className="description__number">
              {data[0].destinations[0].distance}
            </p>
            <p>Est.Travel Time</p>
            <p className="description__number">
              {data[0].destinations[0].travel}
            </p>
          </div>
        </TabPanel>
        <TabPanel className="container__tab-panel">
          <div className="content__destination">
            <h1>{data[0].destinations[1].name}</h1>
            <p>{data[0].destinations[1].description}</p>
          </div>
          <div className="content__description-destination">
            <p>Avg.Distance</p>
            <p className="description__number">
              {data[0].destinations[1].distance}
            </p>
            <p>Est.Travel Time</p>
            <p className="description__number">
              {data[0].destinations[1].travel}
            </p>
          </div>
        </TabPanel>
        <TabPanel className="container__tab-panel">
          <div className="content__destination">
            <h1>{data[0].destinations[2].name}</h1>
            <p>{data[0].destinations[2].description}</p>
          </div>
          <div className="content__description-destination">
            <p>Avg.Distance</p>
            <p className="description__number">
              {data[0].destinations[2].distance}
            </p>
            <p>Est.Travel Time</p>
            <p className="description__number">
              {data[0].destinations[2].travel}
            </p>
          </div>
        </TabPanel>
        <TabPanel className="container__tab-panel">
          <div className="content__destination">
            <h1>{data[0].destinations[3].name}</h1>
            <p>{data[0].destinations[3].description}</p>
          </div>
          <div className="content__description-destination">
            <p>Avg.Distance</p>
            <p className="description__number">
              {data[0].destinations[3].distance}
            </p>
            <p>Est.Travel Time</p>
            <p className="description__number">
              {data[0].destinations[3].travel}
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
export default Destination

import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar';
import Bounty from './components/Bounty'
import BountyInfo from './components/BountyInfo';
import BountyContact from './components/BountyContact';
import {Routes, Route} from 'react-router-dom'
import BountyHome from './components/BountyHome';
import BountyAbout from './components/BountyAbout'
function App() {
  const [Bounties, setBounties] = useState(BountyInfo);

  const getBounties = () => {
    axios.get("/BountyInfo")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }
  const addBounty = (newBounty) => {
    axios.post("/BountyInfo", newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data] )
    })
    .catch(err => console.log(err))
  }

  const deleteBounty = (bountyId) => {
    axios.delete(`/BountyInfo/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  const editBounty = (updates, bountyId) => {
    axios.put(`/BountyInfo/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty: res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties();
  },  []);

  const bountyList = BountyInfo.map((bounty) => { 
    return(
    <Bounty 
          {...bounty} 
          deleteBounty={deleteBounty} 
          editBounty={editBounty}
          key={BountyInfo.firstName}/>)
  })

  return (
    <div className="bounties">
      <NavBar />
      <Routes>
        <Route path='/bounty-home' element={<BountyHome />} />
        <Route path='/bounty-about' element={<BountyAbout />} />
        <Route path='/bounty-contact' element={<BountyContact bountyList={bountyList} addBounty={addBounty} />} />
      </Routes>
    </div>
  )
  }

export default App;


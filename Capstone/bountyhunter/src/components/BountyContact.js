import BountyForm from "./BountyForm"

const BountyContact = ({addBounty, bountyList}) => {

    return (
        <div>
            <h1 className="contact">Bounty Hunters Contact</h1>
            <BountyForm 
        btnText='Add'
        submit={addBounty} />
        {bountyList}
        </div>
    )
}

export default BountyContact
import React, { useState } from 'react';

function AuctionPopup() {
  const [bidAmount, setBidAmount] = useState(0);

  const handleBidSubmit = () => {
    // Logic to submit bid
    // ...
  };

  return (
    <div className="auction-popup">
      <p>Highest Bid: $xxx</p>
      <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
      />
      <button onClick={handleBidSubmit}>Place Bid</button>
    </div>
  );
}

export default AuctionPopup;

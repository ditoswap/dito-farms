import React from 'react'
import orderBy from 'lodash/orderBy'
import nfts from 'config/constants/nfts'
import NftCard from './NftCard'
import NftGrid from './NftGrid'

const NftList = () => {
  return (
    <NftGrid>
      {orderBy(nfts, 'sortOrder').map((nft, i: number) => (
        <div key={nft.name}>
          <NftCard nft={nft} id={i} />
        </div>
      ))}
    </NftGrid>
  )
}

export default NftList

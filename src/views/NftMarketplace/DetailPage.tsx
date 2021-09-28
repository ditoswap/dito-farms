import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Button } from 'dito-uikit'
import nfts from 'config/constants/nfts'
import NftProvider from './contexts/NftProvider'
import NftGrid from './components/NftGrid'
import NftCard from './components/NftCard'
import NftPage from './components/NftPage'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const StyledGrid = styled(NftGrid)`
  background-color: white;
  border-radius: 10px;
  padding: 30px 50px;
  & > div {
    grid-column: 1 / 12;

    ${({ theme }) => theme.mediaQueries.sm} {
      grid-column: span 4;
    }

    &.info-wrap {
      grid-column: 1 / 12;

      ${({ theme }) => theme.mediaQueries.sm} {
        grid-column: span 8;
      }
    }
  }
`

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 40px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
  & > div:nth-child(1) {
    width: 150px;
    color: #8e8f99;
  }
  & > div:nth-child(2) {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    color: black;
  }
`

const NftMarketplaceDetail = ({ match }) => {
  const { id } = match.params

  const nft = nfts[id]

  return (
    <NftProvider>
      <NftPage>
        <StyledHero>
          <Heading as="h1" size="xxl" color="secondary" mb="24px">
            NFT Marketplace
          </Heading>
          <Heading as="h2" size="lg" color="secondary">
            A market made for NFT, where everything is special 😋
          </Heading>
        </StyledHero>
        <StyledGrid>
          <NftCard nft={nft} isDetail />
          <div className="info-wrap">
            <Heading as="h3" size="xl" color="black">
              {nft.name}
            </Heading>
            <Text color="#8e8f99">Current price</Text>
            <Heading as="h3" size="xl" color="secondary">
              100 DTO
            </Heading>
            <StyledButton>Approve</StyledButton>
            <Row>
              <Text fontSize="14px">Owner</Text>
              <Text fontSize="14px">0x06b1767503aec0d3e827cd27bb016f00f1cec862</Text>
            </Row>
            <Row>
              <Text fontSize="14px">Contract address</Text>
              <Text fontSize="14px">0xb95f4d790c684eff1a32a63f285311e28f283a19</Text>
            </Row>
            <Row>
              <Text fontSize="14px">Token ID</Text>
              <Text fontSize="14px">#388 </Text>
            </Row>
            <Row>
              <Text fontSize="14px">Asset Protocol</Text>
              <Text fontSize="14px">KIP-721 </Text>
            </Row>
            <Row>
              <Text fontSize="14px">Blockchain</Text>
              <Text fontSize="14px">OKExChain </Text>
            </Row>
            <Row>
              <Text fontSize="14px">Description</Text>
              <Text fontSize="14px">
                Feeling great! Rules The handling fee is 10% of the transaction amount will be burned.
              </Text>
            </Row>
          </div>
        </StyledGrid>
      </NftPage>
    </NftProvider>
  )
}

export default NftMarketplaceDetail

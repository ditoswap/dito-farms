import React from 'react'
import styled from 'styled-components'
import { Heading } from 'dito-uikit'
// import useI18n from 'hooks/useI18n'
// import HowItWorks from './components/HowItWorks'
import { Link } from 'react-router-dom'
import NftList from './components/NftList'
import NftProvider from './contexts/NftProvider'
import NftPage from './components/NftPage'
// import NftInfo from './components/NftInfo'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const TabWrap = styled.div`
  cursor: pointer;
  margin-top: 14px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #ddd;
  border-radius: 100px;
`

const StyledTabItem = styled.div`
  height: 36px;
  line-height: 36px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 100px;
  color: #659c91;
`

const MintButton = styled(Link)`
  height: 36px;
  line-height: 34px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 100px;
  color: #659c91;
  border: 1px solid #659c91;
  margin-left: 20px;
  display: inline-block;
`

const TabItem = ({ children, isActive, onClick }) => {
  return (
    <StyledTabItem style={isActive ? { backgroundColor: '#659C91', color: 'white' } : {}} onClick={onClick}>
      {children}
    </StyledTabItem>
  )
}

const NftMarketplace = () => {
  const [currentTab, setCurrentTab] = React.useState(0)
  // const TranslateString = useI18n()

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
          <TabWrap>
            <TabItem isActive={currentTab === 0} onClick={() => setCurrentTab(0)}>
              Market
            </TabItem>
            <TabItem isActive={currentTab === 1} onClick={() => setCurrentTab(1)}>
              My NFT
            </TabItem>
          </TabWrap>
          <MintButton to="/nft-marketplace/mint">Mint Artworks</MintButton>
        </StyledHero>
        {/* <NftInfo /> */}
        <NftList />
        {/* <HowItWorks /> */}
      </NftPage>
    </NftProvider>
  )
}

export default NftMarketplace

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'dito-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { setReferralCode } from 'utils/referrals'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  useEffect(() => {
    setReferralCode(window.location.search, account)
  }, [account])

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'Decentralized Trading Protocol on BSC network with a referral system')}
        </Heading>
        <Text>
          {TranslateString(578, 'Enjoy profitable yield farming and exchanges with the lowest fees in DeFi space!')}
        </Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home

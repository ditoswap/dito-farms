import React, { useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Tag, Button, Text, useModal } from 'dito-uikit'
import { Nft } from 'config/constants/types'
import { NavLink } from 'react-router-dom'
import InfoRow from '../InfoRow'
import Image from '../Image'
import { NftProviderContext } from '../../contexts/NftProvider'

interface NftCardProps {
  nft: Nft
  id?: number
  isDetail?: boolean
}

const Header = styled(InfoRow)`
  min-height: 28px;
`

const StyledCard = styled(Card)`
  padding-top: 100%;
`

const NftCard: React.FC<NftCardProps> = ({ nft, id, isDetail }) => {
  const { getTokenIds, reInitialize } = useContext(NftProviderContext)
  const { bunnyId, name, previewImage, originalImage, description } = nft

  return isDetail ? (
    <StyledCard
      style={{
        backgroundImage: `url(/images/nfts/${previewImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  ) : (
    <Card>
      <NavLink to={`/nft-marketplace/${id}`}>
        <Image src={`/images/nfts/${previewImage}`} alt={name} />
        <CardBody>
          <Header>
            <Heading>{name}</Heading>
          </Header>
          <Text>100 DTO</Text>
        </CardBody>
      </NavLink>
    </Card>
  )
}

export default NftCard

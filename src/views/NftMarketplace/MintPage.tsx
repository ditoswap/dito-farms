/*eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'dito-uikit'
import ImageUploading from 'react-images-uploading'
import Select from 'react-select'
import NftProvider from './contexts/NftProvider'
import NftPage from './components/NftPage'

const StyledPage = styled(NftPage)`
  max-width: 720px;
  padding: 40px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 80px 0;
  }
`

const StyledGrid = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 30px 100px;
  }
`

const Label = styled.label`
  display: flex;
  margin: 20px auto 0 auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 80%;
  }
  & > input {
    width: 20px;
    height: 20px;
  }
  & > span {
    flex: 1;
    margin-left: 10px;
  }
`

const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #659c91;
  border-radius: 5px;
  outline: none;
  font-size: 20px;
  &::placeholder {
    color: #ddd;
  }
`

const Textarea = styled.textarea`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #659c91;
  border-radius: 5px;
  outline: none;
  font-size: 20px;
  resize: none;
  height: 100px;
  &::placeholder {
    color: #ddd;
  }
`

const ImageWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  & > button {
    width: 100%;
    height: 500px;
    border: 0;
    background-size: 100% 100%;
    background-color: transparent;
    box-shadow: 0 0 10px -5px;
    border-radius: 10px;
    cursor: pointer;
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 80%;
    }
  }
`

const MintButton = styled.button`
  height: 36px;
  line-height: 34px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 10px;
  color: #659c91;
  border: 1px solid #659c91;
  display: block;
  margin: 40px auto 0 auto;
  background-color: white;
  cursor: pointer;
`

const RoyaltyWrap = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 5px;
  & > input {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > span {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #659c91;
    font-size: 20px;
  }
`

const options = [
  { value: 'picture', label: 'Picture' },
  { value: 'gif', label: 'GIF' },
  { value: 'video', label: 'Video' },
  { value: 'audio', label: 'Audio' },
]

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    marginTop: 10,
    marginBottom: 20,
    border: '1px solid #659C91 !important',
    borderRadius: 5,
    fontSize: 20,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '5px 20px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#659C91',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: '#659C91',
  }),
}

const NftMarketplaceMint = () => {
  const [images, setImages] = React.useState([])

  const onChange = (imageList) => {
    setImages(imageList)
  }

  return (
    <NftProvider>
      <StyledPage>
        <StyledGrid>
          <Heading as="h3" size="md" color="secondary">
            Artwork Type
          </Heading>
          <Select defaultValue={options[0]} options={options} styles={selectStyles} />
          <Heading as="h3" size="md" color="secondary">
            Artwork Name
          </Heading>
          <Input placeholder="Enter the artwork name" />
          <Heading as="h3" size="md" color="secondary">
            Artist Name
          </Heading>
          <Input placeholder="Enter the artist name" />
          <Heading as="h3" size="md" color="secondary">
            Social Media/Portfolio link
          </Heading>
          <Input placeholder="Personal website, Instagram, Twitter, etc." />
          <Heading as="h3" size="md" color="secondary">
            Brief Introduction
          </Heading>
          <Textarea placeholder="Enter the brief introduction" />
          <Heading as="h3" size="md" color="secondary">
            Royalties
          </Heading>
          <RoyaltyWrap>
            <Input type="number" min={0} max={50} placeholder="E.g. 10%" />
            <span>%</span>
          </RoyaltyWrap>
          <Text fontSize="14px" color="#659C91" marginBottom={20}>
            Suggested: 0%, 10%, 20%, 30%
          </Text>
          <Heading as="h3" size="md" color="secondary">
            Upload artwork image
          </Heading>
          <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
            {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
              <ImageWrapper>
                <button
                  style={imageList.length > 0 ? { backgroundImage: `url(${imageList[0].data_url})` } : {}}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  {imageList.length === 0 && 'Click or Drop here'}
                </button>
              </ImageWrapper>
            )}
          </ImageUploading>
          <Label>
            <input type="checkbox" />
            <span>
              I declare that this is an original artwork. I understand that no plagiarism is allowed, and that the
              artwork can be removed anytime if detected.
            </span>
          </Label>
          <MintButton>Mint</MintButton>
        </StyledGrid>
      </StyledPage>
    </NftProvider>
  )
}

export default NftMarketplaceMint

import React from 'react'
import styled from 'styled-components';

function BannerImg({ imgObj }) {
  console.log(imgObj)
  return (
    <InnerPageBanner img={imgObj}>
    </InnerPageBanner>
  )
}

const InnerPageBanner = styled.section`
  background: url(${props => props.img}) no-repeat;
    background-size: cover;
    min-height: 400px;
    position: relative;
`;

export default BannerImg

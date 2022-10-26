import React from 'react'
import styled from "styled-components";
function Banner() {
  return (
    <div>
        <BannerImg src="https://img.freepik.com/free-photo/young-woman-applying-perfume_144627-36381.jpg?w=1380&t=st=1666716167~exp=1666716767~hmac=34e81425d18c87b48290942c50bce2ff52c110e315a4533596d1bcd86e352d69" alt="banner" />
    </div>
  )
}
const BannerImg=styled.img`
width: 100%;
height: 500px;
fill: cover;
`

export default Banner
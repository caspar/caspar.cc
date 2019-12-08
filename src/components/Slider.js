import React, { Component } from "react"
import Slider from "react-slick"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        <div>
          <img src="http://caspar.cc/atonal-2017-1.jpg" />
        </div>
        <div>
          <img src="http://caspar.cc/atonal-2017-2.jpg" />
        </div>
        <div>
          <img src="http://caspar.cc/atonal-2017-3.jpg" />
        </div>
      </Slider>
    )
  }
}

// import React, { Component } from 'react'
// import styled from 'styled-components'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { default as SlickSlider } from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import subtract from '../../images/subtract.png'

// const YapSlider = styled.div`
//   position: relative;
//   /* height: 450px; */

//   .slick-slider .slick-track,
//   .slick-slider .slick-list {
//     height: 100%;
//   }

//   /* .slick-dots {
//     position: static;
//   } */
//   .slick-slider {
//     height: 100%;
//   }
//   .slick-track {
//     .slide-div {
//       height: 100%;
//       .gatsby-image-wrapper {
//         height: 100%;
//       }

//       img {
//         width: 100%;
//         max-width: 100%;
//         object-fit: cover;
//         height: 400px;
//       }
//     }
//   }
//   .slick-initialized .slick-slide {
//     padding: 0;
//   }

//   #subtract {
//     position: absolute;
//     height: 50%;
//     /* display: none; */
//     opacity: 0;
//     visibility: hidden;
//     transition: visibility 0.2s, opacity 1s linear;
//     bottom: 0;
//     right: 0;
//     margin-bottom: 0px;
//   }

//   @media (min-width: 992px) {
//     min-height: 400px;
//     height: calc(100vh - 400px);
//     .slick-track {
//       .slide-div {
//         img {
//           height: 500px;
//           margin: 0;
//         }
//       }
//     }
//     :hover {
//       #subtract {
//         display: inline-block;
//         visibility: visible;
//         opacity: 1;
//         max-width: 100%;
//       }
//     }
//   }
// `
// var settings = {
//   autoplay: true,
//   dots: false,
//   infinite: true,
//   speed: 3000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplaySpeed: 2000,
//   pauseOnHover: true,
// }

// const generateSlider = images => {
//   return (
//     <YapSlider>
//       <SlickSlider {...settings}>
//         {images.map((image, index) => {
//           return (
//             <div key={index} className="slide-div">
//               {image.image && image.image.childImageSharp ? (
//                 <Img
//                   fluid={image.image.childImageSharp.fluid}
//                   alt={image.description}
//                   objectFit="contain"
//                 />
//               ) : (
//                 <img src={image.image} alt={image.description} />
//               )}
//             </div>
//           )
//         })}
//       </SlickSlider>
//       <img id="subtract" src={subtract} alt="" />
//     </YapSlider>
//   )
// }
// class Slider extends Component {
//   componentDidMount() {
//     setTimeout(() => {
//       window.dispatchEvent(new Event('resize'))
//     }, 0)
//   }

//   render() {
//     if (this.props.data) {
//       return generateSlider(this.props.data)
//     }
//     return (
//       <StaticQuery
//         query={graphql`
//           query getSLiderImages {
//             file(name: { eq: "slider" }) {
//               childMarkdownRemark {
//                 frontmatter {
//                   image {
//                     image {
//                       childImageSharp {
//                         fluid(maxWidth: 600, quality: 92) {
//                           ...GatsbyImageSharpFluid
//                         }
//                       }
//                     }
//                     description
//                   }
//                 }
//               }
//             }
//           }
//         `}
//         render={data => {
//           const images = data.file.childMarkdownRemark.frontmatter.image
//           return generateSlider(images)
//         }}
//       />
//     )
//   }
// }

// export default Slider

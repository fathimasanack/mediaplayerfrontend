import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/unnamed.png'
import { Card } from 'react-bootstrap'
import img1 from '../assets/headset.jpg'
import img2 from '../assets/images.jpeg'
import img3 from '../assets/guitar.jpg'


const Landing = () => {
  return (
    <div style={{paddingTop:'80px'}} className='container'>
      <div className="row align-items-center">
        <div className="col-lg-5 mt-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ab modi, quaerat odit similique nulla sint temporibus fugit suscipit iure, aut consectetur voluptatibus cumque atque dicta doloremque! Ex, sit odio.
          Enim commodi voluptas possimus facere iusto nulla nisi laborum id aperiam impedit, amet, voluptatibus sit tempora quas sunt explicabo sequi, nam iste inventore alias modi a voluptates. Amet, excepturi error!
          Sapiente dignissimos doloremque quaerat blanditiis voluptatum iste deleniti velit illo consequuntur reiciendis natus laboriosam facilis aspernatur voluptatibus dolorum possimus ipsa doloribus minima voluptate fugiat, aperiam culpa unde odit recusandae. Autem.
          Esse, adipisci excepturi aliquam nam natus nemo, quo quos porro facilis vero quae qui hic ad voluptate. Voluptatum iusto, dolorum delectus perferendis voluptas facilis quia, nisi, dolore impedit porro recusandae.</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
          
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={landingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
               <Card.Img height={'250px'} variant="top" src={img1} />
              <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          users can upload,view and remove the videos
        
           </Card.Text>
          </Card.Body>
          </Card>

          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
               <Card.Img height={'250px'} variant="top" src={img2} />
              <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          users can categorise the videos by drag and drop feature
         
           </Card.Text>
          </Card.Body>
          </Card>

          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
               <Card.Img height={'250px'} variant="top" src={img3} />
              <Card.Body>
        <Card.Title>Managing Video History</Card.Title>
        <Card.Text>
          users can manage the watch history of all videos
         
           </Card.Text>
          </Card.Body>
          </Card>

          </div>
        </div>
      </div>
      {/* youtube */}
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className='col-lg-5'>
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything:</span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam alias aut hic, debitis vel accusantium quia illum illo maxime a enim, id doloremque reprehenderit autem minus fugiat velit? Magnam, consectetur?</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Categorise Videos:</span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam alias aut hic, debitis vel accusantium quia illum illo maxime a enim, id doloremque reprehenderit autem minus fugiat velit? Magnam, consectetur?</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Manading History:</span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam alias aut hic, debitis vel accusantium quia illum illo maxime a enim, id doloremque reprehenderit autem minus fugiat velit? Magnam, consectetur?</p>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
        <iframe width="500" height="360" src="https://www.youtube.com/embed/e1BHIY9p2WU" title="Eyy Banane - Video  | Vaazha | Vipin Das | Anand Menen | Electronic Kili |Siju Sunny |Joemon Jyothir"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>


      </div>
  )
}

export default Landing
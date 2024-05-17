import React from 'react'
import SectionHeading from '../../../Components/Common/SectionHeading';
import { homeCategoryList } from '../../../constants';
import ProgressiveImage from 'react-progressive-image';
import placeHolderImage from '../../../assets/placeholder.jpg'
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className='p-2 '>

      <SectionHeading text={"What are you looking for ?"} />
      <div style={{ overflowX: "hidden", WebkitOverflowScrolling: "touch" }} className="hidden-scroll-bar"   >
        <div
          className="flex overflow-y-auto gap-6 mt-3 hidden-scroll-bar"
        >
          {homeCategoryList?.map((category, index) => (
            <div className="flex flex-col items-center justify-center text-center" key={index}>
              <Link to={`/single-grocery/${category.id}`}>
                <ProgressiveImage
                  delay={20}
                  src={category.image}
                  placeholder={
                    placeHolderImage
                  }
                >
                  {(src) => (
                    <img
                      src={src}
                      style={{
                        height: "18vw",
                        minWidth: "18vw",
                        width: "18vw",
                        borderRadius: "50%",
                        objectFit: "cover",
                        backgroundRepeat: "round",
                        // padding: "3px",
                        backgroundSize: 'cover',
                      }}
                      className=""
                      alt="category.name"
                    />
                  )}
                </ProgressiveImage>
              </Link>
              <div className="mt-1 text-deli-black-500 text-md font-semibold" >
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands
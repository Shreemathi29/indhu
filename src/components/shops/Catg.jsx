import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "MAC",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "NARS",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "UVICORN",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "LAKME",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "SWISS",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "NAIL JUICE",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg

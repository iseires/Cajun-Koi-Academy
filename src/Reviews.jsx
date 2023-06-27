import React, {useState} from 'react'
import './reviews.css'
import Stars from "./assets/pngwing.com.png";
import Pagination from "@mui/material/Pagination";
function Reviews() {
    const reviews = [
      {
        name: "Jay",
        text: "Using this template for planning my daily life for both personal and university goals has never been easier! I’m not exaggerating when I say that Study Quest changed my life, it really did. So super duper thanks to Cajun Koi Academy and Mike and Matty for making this superb template! I can see myself using this even after I graduate! 🥳✨",
      },
      {
        name: "Mirii",
        text: "Study Quest is amazing! There's so much depth to everything, the tutorials, the template, and the support. If you're a notion fanatic like me, you'd squeal with the awesome workspaces and the robust system the template has. Its very well thought. Can't wait for Study Quest to run my life!",
      },
      {
        name: "Achii",
        text: "Everything about Cajun Koi Academy's notion templates, skill builders, and the community surrounding it has changed my life for the better. One thing that I wasn't expecting to encounter by using their organizers and accompanying videos was a renewed sense of self. The tools that Mike &amp; Matty have provided (and are still dishing out) have helped me to truly set myself up for success in a multitude of areas. These accountability items are more than just for keeping track of a syllabus. They are truly for helping you to become a better person.",
      },
      {
        name: "Isy",
        text: "Using this template for planning my daily life for both personal and university goals has never been easier! I’m not exaggerating when I say that Study Quest changed my life, it really did. So super duper thanks to Cajun Koi Academy and Mike and Matty for making this superb template! I can see myself using this even after I graduate! 🥳✨",
      },
      {
        name: "Pii",
        text: "Study Quest is amazing! There's so much depth to everything, the tutorials, the template, and the support. If you're a notion fanatic like me, you'd squeal with the awesome workspaces and the robust system the template has. Its very well thought. Can't wait for Study Quest to run my life!",
      },
      {
        name: "Fii",
        text: "Everything about Cajun Koi Academy's notion templates, skill builders, and the community surrounding it has changed my life for the better. One thing that I wasn't expecting to encounter by using their organizers and accompanying videos was a renewed sense of self. The tools that Mike &amp; Matty have provided (and are still dishing out) have helped me to truly set myself up for success in a multitude of areas. These accountability items are more than just for keeping track of a syllabus. They are truly for helping you to become a better person.",
      },
      {
        name: "Pay",
        text: "Using this template for planning my daily life for both personal and university goals has never been easier! I’m not exaggerating when I say that Study Quest changed my life, it really did. So super duper thanks to Cajun Koi Academy and Mike and Matty for making this superb template! I can see myself using this even after I graduate! 🥳✨",
      },
      {
        name: "Miti",
        text: "Study Quest is amazing! There's so much depth to everything, the tutorials, the template, and the support. If you're a notion fanatic like me, you'd squeal with the awesome workspaces and the robust system the template has. Its very well thought. Can't wait for Study Quest to run my life!",
      },
      {
        name: "Mira",
        text: "Everything about Cajun Koi Academy's notion templates, skill builders, and the community surrounding it has changed my life for the better. One thing that I wasn't expecting to encounter by using their organizers and accompanying videos was a renewed sense of self. The tools that Mike &amp; Matty have provided (and are still dishing out) have helped me to truly set myself up for success in a multitude of areas. These accountability items are more than just for keeping track of a syllabus. They are truly for helping you to become a better person.",
      },
    ];

    const [page, setPage] = useState(1)

let newArr = reviews.slice(0,3)

if (page == 2) {
  newArr = reviews.slice(3,6)
} else if(page == 3) {
  newArr = reviews.slice(6,9)
}
const list = newArr.map(review => {
        return <div className='single'>
         <h1 className='head'>{review.name}</h1>
         <img src={Stars} alt="" srcset="" className='small'/>
        <i>{review.text}</i>
        </div>
    })

    function handleChange(event, value) {
      setPage(value);
      console.log(value);
    }

  return (
    <div className="reviews">
      <div className="group">{list}</div>
      <Pagination count={3} variant="outlined" page={page} size='large' color="primary" onChange={handleChange}/>
    </div>
  );
}

export default Reviews
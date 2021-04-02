import React from "react"
import { FaEnvelopeOpenText } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { IoMdHelpCircle, IoMdPeople } from "react-icons/io"
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri"
import { BsPersonFill } from "react-icons/bs"

export default [
  {
    title: "home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "about",
    path: "/about",
    icon: <IoMdHelpCircle />,
  },
  {
    title: "attorneys",
    path: "/#/",
    icon: <IoMdPeople />,
    iconClosed: <RiArrowUpSFill />,
    iconOpened: <RiArrowDownSFill />,

    subNav: [
      {
        title: "William T. Counos, II",
        path: "/attorneys/william-T-counos",
        icon: <BsPersonFill />,
      },
      {
        title: "Jesse D. Bugbee",
        path: "/attorneys/jesse-D-bugbee",
        icon: <BsPersonFill />,
      },
      {
        title: "Shane K. Clark",
        path: "/attorneys/shane-K-clark",
        icon: <BsPersonFill />,
      },
    ],
  },
  {
    title: "contact",
    path: "/contact",
    icon: <FaEnvelopeOpenText />,
  },
]

// export default [
//   {
//     title: "home",
//     url: `/`,
//   },
//   {
//     title: "about",
//     url: `/about/`,
//   },
//   {
//     title: "attorneys",
//     subnav: [
//       { title: "William T. Counos, II", url: `/attorneys/william-T-counos` },
//       {
//         title: "Jesse D. Bugbee",
//         url: `/attorneys/jesse-D-bugbee`,
//       },
//       { title: "Shane K. Clark", url: `/attorneys/shane-K-clark` },
//     ],
//   },
//   {
//     title: "contact",
//     url: `/contact/`,
//   },
// ]

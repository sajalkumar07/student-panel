"use client";
import React from "react";
import { useState } from "react";
import styles from "./Content.module.css";
import ChatBar from "./ChatBar";
import Link from "next/link";

const cardData = [
  {
    title: "Live Classes",
    description: "3 classes today",
    path: "",
    icon: (
      <svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_692_2822)">
          <path
            d="M31.5 41.5H8.5C6.3 41.5 4.5 39.7 4.5 37.5V11.5C4.5 9.3 6.3 7.5 8.5 7.5H40.5C42.7 7.5 44.5 9.3 44.5 11.5V28.5C44.5 35.7 38.7 41.5 31.5 41.5Z"
            fill="#3C59B3"
          />
          <path
            d="M35.5 19.5C37.1569 19.5 38.5 18.1569 38.5 16.5C38.5 14.8431 37.1569 13.5 35.5 13.5C33.8431 13.5 32.5 14.8431 32.5 16.5C32.5 18.1569 33.8431 19.5 35.5 19.5Z"
            fill="#4D80F4"
          />
          <path d="M20.5 16.5L9.5 32.5H31.5L20.5 16.5Z" fill="#9AC9E3" />
          <path d="M31.5 22.5L23.5 32.5H39.5L31.5 22.5Z" fill="#4D80F4" />
          <path
            d="M48.2 29.6L45.4 26.8C45 26.4 44.3 26.4 43.8 26.8L42.5 28.1L46.9 32.5L48.2 31.2C48.6 30.8 48.6 30.1 48.2 29.6Z"
            fill="#F67678"
          />
          <path
            d="M27.9668 42.6672L40.2698 30.3652L44.6538 34.7492L32.3498 47.0502L27.9668 42.6672Z"
            fill="#FF9800"
          />
          <path
            d="M46.9002 32.5378L44.7082 34.7298L40.3252 30.3458L42.5172 28.1548L46.9002 32.5378Z"
            fill="#B0BEC5"
          />
          <path
            d="M28 42.7002L26.5 48.5002L32.3 47.0002L28 42.7002Z"
            fill="#F1C24D"
          />
          <path d="M27.2 45.5L26.5 48.5L29.5 47.8L27.2 45.5Z" fill="#37474F" />
        </g>
        <defs>
          <clipPath id="clip0_692_2822">
            <rect
              width="48"
              height="48"
              fill="white"
              transform="translate(0.5 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "View Assessments",
    description: "2 pending",
    path: "student/give-assessment/test-guide",
    icon: (
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.5825 43.7398C39.5825 46.0318 37.8657 47.8881 35.7455 47.8881H11.2842C9.16623 47.8881 7.44873 46.0311 7.44873 43.7398V6.33507C7.44873 4.04082 9.16698 2.18457 11.2842 2.18457H35.7455C37.8657 2.18457 39.5825 4.04082 39.5825 6.33507V43.7398Z"
          fill="#F2CA91"
        />
        <path
          d="M23.6745 7.88175C23.6745 8.3175 22.806 8.67 21.7395 8.67H9.38621C8.31671 8.67 7.44971 8.3175 7.44971 7.88175V0.78675C7.44971 0.3525 8.31596 0 9.38621 0H21.7395C22.806 0 23.6745 0.3525 23.6745 0.78675V7.88175Z"
          fill="#F2CA91"
        />
        <path
          d="M41.4966 41.9998C41.4966 43.9445 39.7626 45.5173 37.6214 45.5173H12.9021C10.7639 45.5173 9.02686 43.9438 9.02686 41.9998V10.2973C9.02686 8.35403 10.7639 6.77979 12.9021 6.77979H37.6214C39.7626 6.77979 41.4966 8.35478 41.4966 10.2973V41.9998Z"
          fill="#D0D2D3"
        />
        <path
          d="M41.4966 39.5203C41.4966 41.465 39.7626 43.0378 37.6214 43.0378H12.9021C10.7639 43.0378 9.02686 41.4643 9.02686 39.5203V7.81776C9.02686 5.87451 10.7639 4.30176 12.9021 4.30176H37.6214C39.7626 4.30176 41.4966 5.87526 41.4966 7.81776V39.5203Z"
          fill="white"
        />
        <path
          d="M32.825 6.21011C32.825 6.44411 31.6715 6.63461 30.2525 6.63461H13.8275C12.4055 6.63461 11.252 6.44411 11.252 6.21011V2.38886C11.252 2.15261 12.4055 1.96436 13.8275 1.96436H30.2525C31.6715 1.96436 32.825 2.15261 32.825 2.38886V6.21011Z"
          fill="#D0D2D3"
        />
        <path
          d="M15.5523 13.5226H36.9738C38.4153 13.5226 38.4153 11.4976 36.9738 11.4976H15.5523C14.116 11.4976 14.116 13.5226 15.5523 13.5226ZM15.5523 17.6363H36.9738C38.4153 17.6363 38.4153 15.6128 36.9738 15.6128H15.5523C14.116 15.6128 14.116 17.6363 15.5523 17.6363ZM15.5523 21.8401H36.9738C38.4153 21.8401 38.4153 19.8151 36.9738 19.8151H15.5523C14.116 19.8151 14.116 21.8401 15.5523 21.8401ZM15.5523 25.9501H36.9738C38.4153 25.9501 38.4153 23.9266 36.9738 23.9266H15.5523C14.116 23.9266 14.116 25.9501 15.5523 25.9501ZM15.5523 33.8851H25.4133C26.8503 33.8851 26.8503 31.8608 25.4133 31.8608H15.5523C14.116 31.8601 14.116 33.8851 15.5523 33.8851Z"
          fill="#35494D"
        />
      </svg>
    ),
  },
  {
    title: "Course Materials",
    description: "",
    path: "",
    icon: (
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3 18.1001L10.9 25.4001L6.7 21.3001L4.5 23.5001L10.9 29.9001L20.5 20.3001L18.3 18.1001ZM18.3 5.1001L10.9 12.4001L6.7 8.3001L4.5 10.5001L10.9 16.9001L20.5 7.3001L18.3 5.1001ZM18.3 31.1001L10.9 38.4001L6.7 34.3001L4.5 36.5001L10.9 42.9001L20.5 33.3001L18.3 31.1001Z"
          fill="#AED69F"
        />
        <path
          d="M24.5 22H44.5V26H24.5V22ZM24.5 9H44.5V13H24.5V9ZM24.5 35H44.5V39H24.5V35Z"
          fill="#A1D7FB"
        />
      </svg>
    ),
  },
  {
    title: "View Reports",
    description: "",
    path: "",
    icon: (
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 7C5.5 5.34315 6.84315 4 8.5 4H32.5C34.1569 4 35.5 5.34315 35.5 7V44H8.5C6.84315 44 5.5 42.6569 5.5 41V7Z"
          fill="#4D80F4"
          stroke="#0F0F0F"
          stroke-width="7"
          stroke-linejoin="round"
        />
        <path
          d="M35.5 24C35.5 22.8954 36.3954 22 37.5 22H41.5C42.6046 22 43.5 22.8954 43.5 24V41C43.5 42.6569 42.1569 44 40.5 44H35.5V24Z"
          stroke="#0F0F0F"
          stroke-width="7"
          stroke-linejoin="round"
        />
        <path
          d="M11.5 12H19.5"
          stroke="white"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.5 19H23.5"
          stroke="white"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const Content: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>
          <span>Hello, Username </span>
          <br />
          How can I help you today?
        </h1>
      </div>
      <div className={styles.container}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.cart}>
            <Link href={card.path}>
              <div>
                {card.icon}
                <h3>{card.title}</h3>
                <h5>{card.description}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <ChatBar></ChatBar>
    </div>
  );
};

export default Content;

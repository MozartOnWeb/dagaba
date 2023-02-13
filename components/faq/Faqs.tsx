"use client";

import React, { useState } from "react";

import styles from "./faqs.module.css";

import { ExpandArrowIcon, CloseArrowIcon } from "@/public/assets/icons";

const faqsArray = [
  {
    id: 0,
    headline: "Qu'est ce que APROPHAM ?",
    content:
      "In fermentum posuere urna nec tincidunt praesent. Netus et malesuada fames ac turpis egestas. Orci sagittis eu volutpat odio facilisis. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Leo duis ut diam quam nulla porttitor massa id.",
  },
  {
    id: 1,
    headline: "Comment puis-je me procurer les médicaments ?",
    content:
      "Quisque egestas diam in arcu cursus euismod quis viverra. At imperdiet dui accumsan sit amet nulla facilisi. Nulla malesuada pellentesque elit eget. Tincidunt eget nullam non nisi. Quam elementum pulvinar etiam non quam lacus. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. ",
  },
  {
    id: 2,
    headline: "Quels sont les emplacements de vos pharmacie ?",
    content:
      "Eget lorem dolor sed viverra. Nam libero justo laoreet sit amet. Risus pretium quam vulputate dignissim. Duis convallis convallis tellus id interdum velit laoreet. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Arcu risus quis varius quam quisque id diam. Nunc vel risus commodo viverra.",
  },
  {
    id: 3,
    headline: "Vos méthodes de créations sont-elles scientifiques ?",
    content:
      "Ultricies mi quis hendrerit dolor magna eget est. Amet consectetur adipiscing elit ut aliquam purus sit amet. Vitae nunc sed velit dignissim sodales ut. Pulvinar sapien et ligula ullamcorper malesuada proin. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales.",
  },
  {
    id: 4,
    headline: "Quelles sont les maladies que vos traitements couvrent?",
    content:
      "Adipiscing at in tellus integer. Vitae elementum curabitur vitae nunc sed velit dignissim. Rutrum tellus pellentesque eu tincidunt. Integer eget aliquet nibh praesent tristique. Sodales neque sodales ut etiam. Nibh tellus molestie nunc non blandit massa enim nec. Sapien eget mi proin sed libero enim sed.",
  },
];

function Faqs() {
  const [expandedQuestion, setExpandedQuestion] = useState<string>("");

  const handleExpand = (question: string) => {
    if (expandedQuestion === question) {
      setExpandedQuestion("");
    } else {
      setExpandedQuestion(question);
    }
  };

  return (
    <div className={styles.faqWrapper}>
      {faqsArray.map((item, index) => (
        <div className={styles.singleFaqWrapper} key={index}>
          <div>
            <h6>{item.headline}</h6>
            <div onClick={() => handleExpand(item.headline)}>
              {expandedQuestion === item.headline ? (
                <CloseArrowIcon />
              ) : (
                <ExpandArrowIcon />
              )}
            </div>
          </div>

          {expandedQuestion === item.headline && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Faqs;

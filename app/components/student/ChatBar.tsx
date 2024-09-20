"use client";
import React, { useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import styles from "./Content.module.css";

interface ChatBarProps {
  // add any props interface here
}

interface ChatBarState {
  query: string;
}

function ChatBar(props: ChatBarProps): JSX.Element {
  const [state, setState] = useState<ChatBarState>({ query: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ query: e.target.value });
  };

  return (
    <div className={styles.bottom}>
      <div className={styles.info}>!</div>
      <div className={styles.chat}>
        <input
          type="text"
          value={state.query}
          onChange={handleChange}
          placeholder="Enter your query here"
        />
        <RiSendPlane2Line className={styles.send} />
      </div>
    </div>
  );
}

export default ChatBar;

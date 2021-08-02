import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Faq({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles["faq"]} ${open ? styles["faq__open-row"] : ""}`}>
      <div>
        <h5 onClick={() => setOpen(!open)}>{title}</h5>
        <Image onClick={() => setOpen(!open)} src="/arrow-icon.svg" alt="arrow-icon" width="10px" height="7" />
      </div>
      <p>{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>AlaaHijazi | FAQ</title>
        <meta name="description" content="FAQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.svg__container}>
            <div className={styles.desktop__container}>
              <Image src="/desktop.svg" alt="desktop" width="472" height="359" />
            </div>
            <div className={styles.box_desktopSvg__container}>
              <Image src="/box-desktop.svg" alt="box-desktop" width="472" height="359" />
            </div>
          </div>
          <div className={styles.FAQ__container}>
            <h1>FAQ</h1>
            {[{
              id: "1",
              title: "How many team members can I invite?",
              description: "No more that 2GB. All files in your account must  fit your allotted storage space."
            }, {
              id: "2",
              title: "How many team members can I invite?",
              description: "No more that 2GB. All files in your account must  fit your allotted storage space."
            }, {
              id: "3",
              title: "How many team members can I invite?",
              description: "No more that 2GB. All files in your account must  fit your allotted storage space."
            }, {
              id: "4",
              title: "How many team members can I invite?",
              description: "No more that 2GB. All files in your account must  fit your allotted storage space."
            }, {
              id: "5",
              title: "How many team members can I invite?",
              description: "No more that 2GB. All files in your account must  fit your allotted storage space."
            }].map((faq, index) => <Faq key={index} title={faq.title} description={faq.description} />)}
          </div>
        </div>
      </main>
    </>
  )
}

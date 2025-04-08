"use client";

import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BannerSlider from "./components/bannerslider"; // Import BannerSlider

const cards = [
  {
    id: 1,
    title: "SYSTEM",
    description: "Build your system with us, whatever you want.",
  },
  {
    id: 2,
    title: "HARDWARE",
    description: "Expert Hardware Services, Fast and Reliable!",
  },
  {
    id: 3,
    title: "DESIGN",
    description: "Modern Designs, Timeless Impact!",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Add BannerSlider at the top */}
      <BannerSlider />

      <section style={{ padding: "50px 0", textAlign: "center", backgroundColor: "" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
            marginTop: 4,
          }}
        >
          {cards.map((card) => (
            <Card key={card.id} sx={{ width: 500, height: 150, padding: 2 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </section>

      <section style={{ padding: "50px 0", textAlign: "center" }}>
        <h1
          className="text-4xl"
          style={{
            display: "inline-block",
            paddingBottom: "10px",
            borderBottom: "4px solid #333",
          }}
        >
          Gallery
        </h1>
        <div className={styles.grid} style={{ marginTop: 20 }}>
          <div className={styles.gridItem}>
            <Image src="/gallery/1.jpg" alt="Image 1" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.gridItem}>
            <Image src="/gallery/2.jpg" alt="Image 2" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.gridItem}>
            <Image src="/gallery/3.jpg" alt="Image 3" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.gridItem}>
            <Image src="/gallery/4.jpg" alt="Image 4" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.gridItem}>
            <Image src="/gallery/5.jpg" alt="Image 5" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.gridItem}>
            <Image src="/gallery/6.jpg" alt="Image 6" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
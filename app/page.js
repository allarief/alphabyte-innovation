"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link dari Next.js
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
    link: "/system", // Tautan ke halaman system
  },
  {
    id: 2,
    title: "HARDWARE",
    description: "Expert Hardware Services, Fast and Reliable!",
    link: "/hardware", // Tautan ke halaman hardware
  },
  {
    id: 3,
    title: "DESIGN",
    description: "Modern Designs, Timeless Impact!",
    link: "/design", // Tautan ke halaman design
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
            <Link key={card.id} href={card.link} passHref>
              <Card
                sx={{
                  width: 500,
                  height: 150,
                  padding: 2,
                  cursor: "pointer", // Tambahkan pointer untuk menunjukkan bahwa ini bisa diklik
                }}
              >
                <CardContent>
                  <Typography variant="h4" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
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
    <div className={styles.gridItem} style={{ position: "relative", width: "100%", height: "300px" }}>
      <Image
        src="/gallery/1.jpg"
        alt="Image 1"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className={styles.gridItem} style={{ position: "relative", width: "100%", height: "300px" }}>
      <Image
        src="/gallery/2.jpg"
        alt="Image 2"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className={styles.gridItem} style={{ position: "relative", width: "100%", height: "300px" }}>
      <Image
        src="/gallery/3.jpg"
        alt="Image 3"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className={styles.gridItem} style={{ position: "relative", width: "100%", height: "300px" }}>
      <Image
        src="/gallery/4.jpg"
        alt="Image 4"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className={styles.gridItem} style={{ position: "relative", width: "100%", height: "300px" }}>
      <Image
        src="/gallery/5.jpg"
        alt="Image 5"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className={styles.gridItem} style={{ position: "relative", width: "100%", height: "300px" }}>
      <Image
        src="/gallery/6.jpg"
        alt="Image 6"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  </div>
</section>
    </div>
  );
}
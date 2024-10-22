import React, { useEffect } from "react";

const BubbleText = ({
  text = "default text", // Default text if no prop is passed
  hoverColor = "rgb(238, 242, 255)", // Default hover color
  neighborColor = "rgb(199, 210, 254)", // Default neighbor color when hovered
  normalColor = "rgb(165, 180, 252)", // Default color when not hovered
  fontSize = "text-5xl", // Allows dynamic font sizes
}) => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = hoverColor;

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = neighborColor;
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = neighborColor;
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "400";
        this.style.color = normalColor;

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "400";
          leftNeighbor.style.color = normalColor;
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "400";
          rightNeighbor.style.color = normalColor;
        }
      });
    });
  }, [hoverColor, neighborColor, normalColor]);

  return (
    <h2 className={`hover-text text-center ${fontSize} font-thin`} style={{ color: normalColor }}>
      <Text text={text} />
    </h2>
  );
};

const Text = ({ text }) => {
  return (
    <>
      {text.split("").map((char, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default BubbleText;

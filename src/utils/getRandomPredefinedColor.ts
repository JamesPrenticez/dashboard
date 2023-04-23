import isNullOrWhiteSpace from "./isNullOrWhiteSpace";

export const getRandomPredefinedColor = (initials: string): string => {
  if (isNullOrWhiteSpace(initials)) {
    return "#cccccc"; // return a default color
  }

  const colors = [
    "#32a852",
    "#1A8006",
    "#0478B3",
    "#D46A7E",
    "#FECE44",
    "#E74C3C",
    "#2C3E50",
    "#7D8F9B",
    "#9B59B6",
    "#F1C40F",
    "#1ABC9C",
    "#34495E",
  ];
  let index = 0;

  for (let i = 0; i < initials.length; i++) {
    index += initials.charCodeAt(i);
  }

  return colors[index % colors.length];
};

// https://mui.com/material-ui/react-avatar/#BackgroundLetterAvatars.tsx
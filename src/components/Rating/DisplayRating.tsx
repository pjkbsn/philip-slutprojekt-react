import { Box, Rating, Typography } from "@mui/material";

type RatingComponentProps = {
  ratingValue: number | null;
  setRatingValue: (value: number | null) => void;
};

export const RatingDisplay = ({ ratingValue }: { ratingValue: number }) => {
  return (
    <>
      <Typography component="legend">Rating:</Typography>
      <Rating name="read-only" value={ratingValue} readOnly />
    </>
  );
};

export const RatingComponent = ({
  ratingValue,
  setRatingValue,
}: RatingComponentProps) => {
  return (
    <>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Rate 1-5</Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
        />
      </Box>
    </>
  );
};

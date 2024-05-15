import { Box, Rating, Typography } from "@mui/material";

export const RatingDisplay = ({ ratingValue }: { ratingValue: number }) => {
  return (
    <>
      <Typography component="legend">Rating:</Typography>
      <Rating name="read-only" value={ratingValue} readOnly />
    </>
  );
};

export const RatingComponent = ({ ratingValue, setRatingValue }: any) => {
  //   const [value, setValue] = React.useState<number | null>(2);

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
        {/* <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} /> */}
      </Box>
    </>
  );
};

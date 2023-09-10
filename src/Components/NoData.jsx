import { Box } from "@mui/material";

/**
 *
 * @returns Text if data list is empty
 */
const NoData = () => {
  return (
    <Box
      sx={{
        display: "flex",

        width: { sm: "80%", xs: "50%" },
        justifyContent: "center",
        backgroundColor: "#E8E9EB",
        border: "solid 1px #D3D3D3",
        borderRadius: 1,
        p: 6,
      }}
    >
      No data at this date or pageUrl
    </Box>
  );
};
export default NoData;

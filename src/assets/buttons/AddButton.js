import { Button } from "@mui/material";
// import { allStyles } from "../../allStyles";
// import { BiPlus } from 'react-icons/bi';

export const AddButton = (props) => {
  //     const {onClickHandle,caption} = props

  //   return <Button variant="contained" onClick={onClickHandle} sx={allStyles.addButton} startIcon={<BiPlus /> }>
  //   Add {caption}
  //     </Button>
  const { onClickHandle, caption } = props;

  return (
    <Button
      variant="contained"
      onClick={onClickHandle}
      sx={{
        mt: 2,
        mb: 2,
        backgroundColor: "#FBB515",
        color: "black",
        "&:hover": {
          backgroundColor: "#FABE4B",
        },
      }}
      //   startIcon={<BiPlus />}
    >
      Add {caption}
    </Button>
  );
};

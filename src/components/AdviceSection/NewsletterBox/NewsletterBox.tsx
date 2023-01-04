import React from "react";
import "./NewsletterBox.scss";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

export const NewsletterBox = () => {
  return (
    <div className="newsletter__box">
      <p className="newsletter__description">Subscribe For Latest Newsletter</p>
      <div className="newsletter__input-box">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: 54,
          }}
        >
          <InputBase
            sx={{ ml: 3, mr: 0, flex: 1, color: "#000000", fontWeight: 400 }}
            placeholder="Your Email"
          />
          <IconButton color="primary" sx={{ p: "0" }} aria-label="directions">
            <div className="newsletter__btn">Subscribe</div>
          </IconButton>
        </Paper>
      </div>
    </div>
  );
};

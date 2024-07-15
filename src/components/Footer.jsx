import { Box, Button, Stack, Typography } from "@mui/material";
import netflix__logo from "../images/Logonetflix.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // Update every minute (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); 
  return (
    <>
      <footer style={{ backgroundColor: "#030303", }}>
        <Box className="container" py={4}>
          <Stack direction={{sm:"column", md:"row"}} gap={5} justifyContent="space-between" borderBottom="1px solid" borderColor="gray">
            <Box width={{ sm: "100%", md: "50%", lg: "25%" }}>
              <Stack direction="column">
                <Box>
                  <img
                    src={netflix__logo}
                    alt=""
                    width="150px"
                    className="mb-3"
                  />
                </Box>
                <Typography variant="body2" color="grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  eos doloribus facilis voluptate fugiat reprehenderit tempore
                  illum, quibusdam impedit temporibus minus porro ea enim?
                </Typography>
              </Stack>
            </Box>
            <Box width={{ sm: "100%", md: "50%", lg: "25%" }}>
              <Stack direction="column">
                <Typography variant="subtitle1" color="#fff" fontWeight="bold">
                  Quick Links
                </Typography>
                <Box>
                  <Link>
                    <Button
                      size="large"
                      startIcon={<KeyboardArrowRightIcon />}
                      sx={{ color: "grey", textTransform: "capitalize" }}
                    >
                      About
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link>
                    <Button
                      size="large"
                      startIcon={<KeyboardArrowRightIcon />}
                      sx={{ color: "grey", textTransform: "capitalize" }}
                    >
                      Category
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link>
                    <Button
                      size="large"
                      startIcon={<KeyboardArrowRightIcon />}
                      sx={{ color: "grey", textTransform: "capitalize" }}
                    >
                      Terms & Condition
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Box>
            <Box width={{ sm: "100%", md: "50%", lg: "25%" }}>
              <Stack direction="column">
                <Typography
                  variant="subtitle1"
                  color="#fff"
                  fontWeight="bold"
                  gutterBottom
                >
                  Contact
                </Typography>
                <Box mb={2}>
                  <a href="mailto:jacifa4692@vkr1.com">
                    <Stack direction="row" gap={2}>
                      <MarkEmailReadIcon sx={{ color: "grey" }} />
                      <Typography variant="body1" sx={{ color: "grey" }}>
                        jacifa4692@vkr1.com
                      </Typography>
                    </Stack>
                  </a>
                </Box>
                <Box mb={2}>
                  <a href="http://">
                    <Stack direction="row" gap={2}>
                      <LocationOnIcon sx={{ color: "grey" }} />
                      <Typography variant="body1" sx={{ color: "grey" }}>
                        Gregory Cartwrigh, 936 KiehnRoute,
                        WestNed,Tennessee-11230
                      </Typography>
                    </Stack>
                  </a>
                </Box>
                <Box mb={2}>
                  <a href="http://">
                    <Stack direction="row" gap={2}>
                      <LocalPhoneIcon sx={{ color: "grey" }} />
                      <Typography variant="body1" sx={{ color: "grey" }}>
                        +91 85674 25462
                      </Typography>
                    </Stack>
                  </a>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Typography color="gray" variant="body2" textAlign="center" mt={1}>&copy; <span>{currentYear}</span> Netfflix. All rights reserved.</Typography>
        </Box>
      </footer>
    </>
  );
};

export default Footer;

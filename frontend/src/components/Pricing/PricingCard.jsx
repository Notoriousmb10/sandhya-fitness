import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Radio from "@mui/joy/Radio";
import BuyNow from './BuyNow';

export default function PricingCard() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
        gap: 2,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          label="Gorai Gym"
          slotProps={{ input: { "aria-label": "A" } }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          label="Sai Baba Nagar Gym"
          slotProps={{ input: { "aria-label": "B" } }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Card size="lg" variant="outlined" sx={{ width: '400px' }}>
          <Chip size="sm" variant="outlined" color="neutral">
            BASIC
          </Chip>
          <Typography level="h2">Gym</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Strength Training
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Weight Lifting
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Machines & Equipment
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Dumbbells & Barbells
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check sx={{ color: "red" }} />
              </ListItemDecorator>
              Personal Trainers
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              ₹500
              <Typography textColor="text.tertiary" sx={{ fontSize: "sm" }}>
                / month
              </Typography>
            </Typography>
            <Button variant="soft" color="neutral" endDecorator={<KeyboardArrowRight />}>
              <BuyNow color={'black'} price={500} PlanName={'Gym'} Description={'Basic Gym Plan'}/>
            </Button>
          </CardActions>
        </Card>

        <Card
          size="lg"
          variant="solid"
          color="neutral"
          invertedColors
          sx={{ bgcolor: "neutral.900", height: "490px", width: '450px' }}
        >
          <Chip size="sm" variant="outlined">
            MOST POPULAR
          </Chip>
          <Typography level="h2">Gym + Crossfit</Typography>
          <Divider inset="none" />
          <List
            size="sm"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              mx: "calc(-1 * var(--ListItem-paddingX))",
            }}
          >
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              High-Intensity Workouts
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Endurance Boost
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Circuit Training
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check sx={{ color: "red" }}/>
              </ListItemDecorator>
              Powerlifting
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Functional Fitness
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              ₹1200
              <Typography textColor="text.tertiary" sx={{ fontSize: "sm" }}>
                / month
              </Typography>
            </Typography>
            <Button endDecorator={<KeyboardArrowRight />}>
              <BuyNow color={'black'} price={1200} PlanName={'Gym + Crossfit'} Description={'Gym with CrossFit'}/>
            </Button>
          </CardActions>
        </Card>

        <Card
          size="lg"
          variant="solid"
          color="neutral"
          invertedColors
          sx={{ bgcolor: "#FF4040", height: "490px", width: '450px' }}
        >
          <Chip size="sm" variant="outlined">
            MOST POPULAR
          </Chip>
          <Typography level="h2">Gym + Cardio</Typography>
          <Divider inset="none" />
          <List
            size="sm"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              mx: "calc(-1 * var(--ListItem-paddingX))",
            }}
          >
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Virtual Credit Cards
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Financial Analytics
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Checking Account
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              API Integration
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Cancel Anytime
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              ₹1500
              <Typography textColor="text.tertiary" sx={{ fontSize: "sm" }}>
                / month
              </Typography>
            </Typography>
            <Button endDecorator={<KeyboardArrowRight />}>
              <BuyNow color={'black'} price={1500} PlanName={'Gym + Cardio'} Description={'Gym with Cardio Plan'}/>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}

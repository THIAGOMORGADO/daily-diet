import { Text, View } from "react-native";
import { Container, Title } from "./styles";
import Header from "@components/Header";
import Typography from "@components/Typography";

export default function Home() {
  return (
    <Container>
      <Header />
      <Typography
        textAlign="right"
        fontFamily="bold"
        color="green_dark"
        lineHeight="lg"
      >
        Ola
      </Typography>
      <Typography
        textAlign="center"
        fontFamily="regular"
        color="red_dark"
        lineHeight="xs"
      >
        Ola
      </Typography>
      <Typography>Ola</Typography>
    </Container>
  );
}

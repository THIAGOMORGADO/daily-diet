import { Text, View } from "react-native";
import { Container, Title } from "./styles";
import Header from "@components/Header";
import Typography from "@components/Typography";
import Card from "@components/Card";

export default function Home() {
  return (
    <Container>
      <Header />

      <Card />
    </Container>
  );
}

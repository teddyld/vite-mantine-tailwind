import { Button, Text, Flex } from "@mantine/core";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Flex className="mx-auto max-w-5xl flex-col items-center gap-2">
        <Text
          size="xl"
          variant="gradient"
          gradient={{ from: "blue", to: "grape", deg: 90 }}
          className="font-bold"
        >
          MantineUI + TailwindCSS
        </Text>
        <Flex className="gap-2">
          <Button className="bg-red-500/20 text-red-500" variant="light">
            Red
          </Button>
          <Button variant="outline" className="bg-blue-500/10">
            Blue
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;

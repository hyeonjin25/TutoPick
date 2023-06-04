import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import { utils } from "near-api-js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Header from "./component/Header";
import {
  ContractIdState,
  IsSignedInState,
  WalletState,
} from "./state/RecoilState";
import { AppColor } from "./utils/GlobalStyles";

function HomeScreen() {
  const isSignedIn = useRecoilValue(IsSignedInState);
  const contractId = useRecoilValue(ContractIdState);
  const wallet = useRecoilValue(WalletState);

  const tabs = ["coding", "math", "science", "english", "music", "art"];
  const tabPanels = [
    ["react", "js", "web", "mobile", "spring"],
    ["algebra", "geometry", "calculus", "statistics"],
    ["physics", "chemistry", "biology"],
    ["reading", "writing", "speaking"],
    ["piano", "guitar", "violin"],
    ["painting", "sculpture", "photography"],
  ];
  const tags = ["blockChain", "web3", "outlineity"];

  useEffect(() => {}, []);

  return (
    <>
      <Header search={true} wallet={wallet}/>
      <Container centerContent>
        <Flex w={"100vw"} justify='center' align='center' mb='10px'>
          <TabComponent tabs={tabs} tabPanels={tabPanels} />
        </Flex>
        <Flex w='100vw' justify='center' mt={2}>
          <Wrap>
            <SimpleGrid spacing={4}>
              <CardComponent tags={tags} />
              <CardComponent tags={tags} />
              <CardComponent tags={tags} />
            </SimpleGrid>
            <SimpleGrid spacing={4}>
              <CardComponent tags={tags} />
              <CardComponent tags={tags} />
              <CardComponent tags={tags} />
            </SimpleGrid>
          </Wrap>
        </Flex>
      </Container>
    </>
  );
}

const TabComponent = ({ tabs, tabPanels }) => {
  return (
    <>
      <Tabs variant='unstyled'>
        <Flex
          w='100vw'
          h='63px'
          bg={AppColor.primary}
          align='center'
          justify={"center"}
        >
          <TabList gap={7}>
            {tabs.map((tab) => (
              <Tab _selected={{ fontWeight: 600 }}>{tab}</Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels h='63px'>
          {tabPanels.map((tabPanel) => (
            <TabPanel h='63px'>
              <Flex justify={"center"} gap={2} h='63px' margin={0}>
                {tabPanel.map((tab) => (
                  <Button
                    bg='none'
                    h='20px'
                    color={AppColor.primary}
                    fontWeight='600'
                  >
                    {tab}
                  </Button>
                ))}
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

// const InnerTabs = ({ tabPanel }) => {
//   const tags = ["blockChain", "web3", "outlineity"];

//   return (
//     <Flex justify={"center"} gap={2} h='63px' margin={0}>
//       {/* <Button bg='none' h='20px' color={AppColor.primary} fontWeight='600'>
//         {tab}
//       </Button> */}
//       <Tabs variant='unstyled'>
//         <Flex
//           w='100vw'
//           h='20px'
//           align='center'
//           justify={"center"}
//           bg='none'
//           color={AppColor.primary}
//           fontWeight='600'
//         >
//           <TabList gap={7}>
//             {tabPanel.map((tab) => (
//               <Tab
//                 _selected={{ fontWeight: 600, color: AppColor.secondary }}
//                 color={AppColor.secondary}
//               >
//                 {tab}
//               </Tab>
//             ))}
//           </TabList>
//         </Flex>
//         <TabPanels h='63px'>
//           <Flex w='100vw' justify='center' mt={2}>
//             <Wrap>
//               <SimpleGrid spacing={4}>
//                 <CardComponent tags={tags} />
//                 <CardComponent tags={tags} />
//                 <CardComponent tags={tags} />
//               </SimpleGrid>
//               <SimpleGrid spacing={4}>
//                 <CardComponent tags={tags} />
//                 <CardComponent tags={tags} />
//                 <CardComponent tags={tags} />
//               </SimpleGrid>
//             </Wrap>
//           </Flex>
//         </TabPanels>
//       </Tabs>
//     </Flex>
//   );
// };

const CardComponent = ({ tags }) => {
  return (
    <Link to='/tutor' style={{ textDecoration: "none" }}>
      <Card w={"45vw"} variant='unstyled' p={6}>
        <CardBody>
          <Flex gap={6} align='center'>
            <Avatar
              size='2xl'
              name='Dan Abrahmov'
              src='https://bit.ly/dan-abramov'
            />
            <Box>
              <Flex gap={2} pb={"7px"}>
                <Text fontSize='sm' fontWeight={700}>
                  Name
                </Text>
                <Text fontSize='sm' fontWeight={700}>
                  |
                </Text>
                <Text fontSize='sm' fontWeight={700} color={AppColor.primary}>
                  Daniel
                </Text>
              </Flex>
              <Flex gap={2} pb={"7px"}>
                <Text fontSize='sm' fontWeight={700}>
                  Field
                </Text>
                <Text fontSize='sm' fontWeight={700}>
                  |
                </Text>
                <Wrap spacing={2} padding={0}>
                  {tags.map((tag) => (
                    <Tag
                      size='sm'
                      key={tag}
                      variant='outline'
                      colorScheme={"purple"}
                      p='2px 10px'
                      color={AppColor.black}
                    >
                      {tag}
                    </Tag>
                  ))}
                </Wrap>
              </Flex>
              <Flex gap={2} pb={"7px"}>
                <Text fontSize='sm' fontWeight={700}>
                  cost per hour (won)
                </Text>
                <Text fontSize='sm' fontWeight={700}>
                  |
                </Text>
                <Tag
                  size='sm'
                  variant='outline'
                  colorScheme={"purple"}
                  p='2px 10px'
                  color={AppColor.black}
                >
                  30000
                </Tag>
              </Flex>
              <Flex gap={2}>
                <Text fontSize='sm' fontWeight={700}>
                  Total lectures
                </Text>
                <Text fontSize='sm' fontWeight={700}>
                  |
                </Text>
                <Tag
                  size='sm'
                  variant='outline'
                  colorScheme={"purple"}
                  p='2px 10px'
                  color={AppColor.black}
                >
                  30000
                </Tag>
              </Flex>
              <Flex gap={2} align='center'>
                <Text fontSize='sm' fontWeight={700}>
                  bio
                </Text>
                <Text fontSize='sm' fontWeight={700}>
                  |
                </Text>
                <Text fontSize='xs'>
                  Hello! I'm a blockchain expert, and I'm here to assist you.
                </Text>
              </Flex>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
};

export default HomeScreen;

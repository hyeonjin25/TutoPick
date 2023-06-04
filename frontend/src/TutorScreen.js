import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Tag,
  Text,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ApexChart from "./component/chart/CostChart";
import AlertModal from "./component/modal/AlertModal";
import ContactModal from "./component/modal/ContactModal";
import { getCount, getReceives, sendMoney } from "./nearApi/nearApi";
import { AppColor } from "./utils/GlobalStyles";
import { useRecoilValue } from "recoil";
import { ContractIdState, WalletState } from "./state/RecoilState";
import Header from "./component/Header";
import RatingChart from "./component/chart/RatingChart";
import { format } from "date-fns";
import SendModal from "./component/modal/SendModal";

function TutorScreen({ wallet, contractId }) {
  const [tutoCount, setTutoCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSendOpen,
    onOpen: onSendOpen,
    onClose: onSendClose,
  } = useDisclosure();
  const [receives, setReceives] = useState(null);

  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const tags = ["blockChain", "web3", "solidity"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(wallet);
        const count = await getCount({
          wallet,
          contractId,
          receivedId: "toystory.testnet",
        });
        setTutoCount(count.cnt);

        const rec = await getReceives({
          wallet,
          contractId,
          receivedId: "toystory.testnet",
        });
        console.log(rec);
        const receivesArr = [];
        rec.split(",").forEach((item) => {
          const arr = item.split("&");
          receivesArr.push(arr);
        });
        setReceives(receivesArr);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header wallet={wallet} />
      <Container centerContent>
        <Grid
          w='95vw'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={5}
        >
          <GridItem
            rowSpan={2}
            colSpan={3}
            p={5}
            pr={10}
            mr={10}
            borderRight={`solid 1px ${AppColor.secondary}`}
          >
            <Profile
              tags={tags}
              onOpen={onOpen}
              tutoCount={tutoCount}
              onSendOpen={onSendOpen}
            />
            <Introductory />
            <Flex>
              <BottomInfo />
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2} bg={AppColor.body} p={5} pr={7}>
            <ApexChart />
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={2}
            bg={AppColor.body}
            px={5}
            py={2}
            spacing={4}
          >
            <SimpleGrid spacing={3} variant='unstyled'>
              <Text fontSize={"sm"} fontWeight={700}>
                Tutoring history
              </Text>
              {receives?.map((item) => (
                <Card variant='unstyled' p={2}>
                  <CardBody>
                    <Flex gap={4}>
                      <Text fontSize={"sm"} fontWeight={600}>
                        {item[0]}
                      </Text>
                      <Text fontSize={"sm"}>{item[1]}</Text>
                    </Flex>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
        <ContactModal
          isOpen={isOpen}
          onClose={onClose}
          onAlertOpen={onAlertOpen}
        />
        <AlertModal isOpen={isAlertOpen} onClose={onAlertClose} />
        <SendModal isOpen={isSendOpen} onClose={onSendClose} />
      </Container>
    </>
  );
}

const BottomInfo = () => {
  return (
    <Grid
      w='100%'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={5}
      mt={5}
      pt={5}
    >
      <GridItem colSpan={3}>
        <Details />
      </GridItem>
      <GridItem colSpan={2}>
        <RatingChart />
      </GridItem>
    </Grid>
  );
};

const Introductory = () => {
  return (
    <Box mt={5}>
      <Text fontSize='sm'>
        "Hi, I'm Daniel. I hold a PhD in Computer Science and have over 10 years
        of experience in blockchain and web3.0 technologies. My mentoring style
        is learner-centered, aiming to facilitate students in crafting their own
        learning experiences. I cover a range of topics including smart
        contracts, DeFi, and crypto-economics. I'm looking for mentees who are
        active participants and have a passion for learning new things."
      </Text>
    </Box>
  );
};

const Details = () => {
  return (
    <SimpleGrid spacing={3} variant='unstyled'>
      <Text fontWeight={600}>Reviews</Text>
      <Card p={2} bg={AppColor.gray}>
        <Text fontSize={"xs"}>Termo.testnet</Text>
        <Text fontSize={"xs"} fontWeight={600}>
          "He provides detailed and helpful feedback to questions."
        </Text>
      </Card>
      <Card p={2} bg={AppColor.gray}>
        <Text fontSize={"xs"}>Termo.testnet</Text>
        <Text fontSize={"xs"} fontWeight={600}>
          "Daniel's explanations are insightful and clear."
        </Text>
      </Card>
      <Card p={2} bg={AppColor.gray}>
        <Text fontSize={"xs"}>Termo.testnet</Text>
        <Text fontSize={"xs"} fontWeight={600}>
          "I wish we could make better use of mentoring time."
        </Text>
      </Card>
    </SimpleGrid>
  );
};

const Profile = ({ tags, onOpen, tutoCount, onSendOpen }) => {
  const contractId = useRecoilValue(ContractIdState);
  const wallet = useRecoilValue(WalletState);

  return (
    <>
      <Flex gap={10} padding={2} align='flex-end'>
        <Avatar
          name='Dan Abrahmov'
          src='https://bit.ly/dan-abramov'
          borderRadius={"10px"}
          w='275px'
          h='275px'
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
          <Flex gap={2} pb={"7px"}>
            <Text fontSize='sm' fontWeight={700}>
              Total tutorings
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
              {tutoCount}
            </Tag>
          </Flex>
          <Flex gap={2}>
            <Button
              onClick={onOpen}
              bg={AppColor.primary}
              w='109px'
              h='39px'
              color={AppColor.white}
              fontSize='18px'
              mt={2}
            >
              Contact
            </Button>
            <Button
              onClick={onSendOpen}
              w='109px'
              h='39px'
              color={AppColor.primary}
              borderColor={AppColor.primary}
              fontSize='18px'
              mt={2}
              variant='outline'
            >
              transfer
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default TutorScreen;

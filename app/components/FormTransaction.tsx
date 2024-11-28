import { Box, Button, FormControl, FormLabel, Input, InputGroup, Select, Stack } from "@chakra-ui/react";
import { useState } from "react";

const CryptoTransactionForm: React.FC = () => {
    const [cryptoAmount, setCryptoAmount] = useState<string>("");
    const [cryptoType, setCryptoType] = useState<string>("BTC");
    const [userAddress, setUserAddress] = useState<string>("");
  
    const handleSubmit = () => {
      // Logika untuk submit form
      console.log("Form submitted");
    };
  
    return (
      <Box
        maxW="500px"
        mx="auto"
        p={8}
        boxShadow="2xl"
        borderRadius="xl"
        bg="white"
        mt={10}
      >
        
  
        <Stack gap={6}>
          <FormControl id="crypto-amount">
            <FormLabel fontSize="lg" fontWeight="medium">
              Jumlah Crypto
            </FormLabel>
            <InputGroup>
              <Input
                p={8}
                w="100%"
                border="1px solid"
                borderColor="#562ee7"
                borderRadius="28px"
                type="number"
                placeholder="Masukkan jumlah crypto"
                value={cryptoAmount}
                onChange={(e) => setCryptoAmount(e.target.value)}
                focusBorderColor="purple.500"
                size="lg"
                bg="gray.50"
                pl={14}
              />
            </InputGroup>
          </FormControl>
  
          <FormControl id="crypto-type">
            <FormLabel fontSize="lg" fontWeight="medium">
              Jenis Crypto
            </FormLabel>
            <InputGroup>
  
              <Select
                p={8}
                w="100%"
                value={cryptoType}
                onChange={(e) => setCryptoType(e.target.value)}
                border="1px solid"
                borderColor="#562ee7"
                borderRadius="28px"
                focusBorderColor="purple.500"
                size="lg"
                bg="gray.50"
                pl={14}
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="LTC">Litecoin (LTC)</option>
              </Select>
            </InputGroup>
          </FormControl>
  
          <FormControl id="user-address">
            <FormLabel fontSize="lg" fontWeight="medium">
              Alamat Wallet
            </FormLabel>
            <InputGroup>
             
              <Input
               p={8}
                w="100%"
                type="text"
                placeholder="Masukkan alamat wallet"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                border="1px solid"
                borderColor="#562ee7"
                borderRadius="28px"
                focusBorderColor="purple.500"
                size="lg"
                bg="gray.50"
                pl={14}
              />
            </InputGroup>
          </FormControl>
  
          <Button
            colorScheme="purple"
            onClick={handleSubmit}
            width="100%"
            size="lg"
            mt={6}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default CryptoTransactionForm;
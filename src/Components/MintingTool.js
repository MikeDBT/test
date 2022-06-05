

import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
import { min } from "bn.js";


const BN = require("bn.js");

const price = '5000000000000000000000000'
const price2 = '7000000000000000000000000'

let counter = localStorage.getItem("counter") || 0;

////////////////////////




const MintingTool = (props) => 
{

  const mintNFT = async () => 
  {

    await window.contract.nft_mint(
      {
        token_id: "40",
        metadata: 
        {
          title: "1",
          description: "The Team Most Certainly Goes :)",
          media: "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN(price)
    );

    
  };

  const mintNFT_2 = async () => 
  {
    

    await window.contract.nft_mint(
      {
        token_id: "41",
        metadata: 
        {
          title: "2",
          description: "The Team Most Certainly Goes :)",
          media: "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN(price2)
    );
    
  
  };


function plus()
{
  counter++
  localStorage.setItem("counter", counter);
}

function Count_mintNFT()
{
  if(counter == 1)
  {
    mintNFT();
  }
  else if(counter == 2)
  {
    mintNFT_2();
  }
  else if(counter >= 3)
  {
    alert('!!! Sold Out !!!');
  }
}

// Reset Counter


function reset()
{
  counter = 0;
  localStorage.setItem("counter", counter);
}

async function main() 
{
  await plus();
  await Count_mintNFT();
}

 
  return (
    <Card style={{ padding: "2vh" }}>
      <Container>
        <Row style={{ marginBottom: "vh" }}>
          <p>
            M.............................................
          </p>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={main}
            style={{ width: "50vw" }}
            
          >
            Mint NFT
          </Button>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={reset}
            style={{ width: "50vw" }}
            
          >
            Reset
          </Button>
          
          
        </Row>
        <Row className='d-flex justify-content-center'>
          {console.log(props.userNFTStatus)}
          {props.userNFTStatus ? (
            <Alert variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                bruh/sis.... You have an NFT already. You can see it{" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  here!
                </a>
                :)
              </p>
            </Alert>
          ) : null}
        </Row>
      </Container>
    </Card>
  );
};

MintingTool.propTypes = {};

export default MintingTool;


import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const ViewGithubRepo = ({ text, link }) => {
  return (
    <Button
      display="block"
      borderRadius={30}
      borderColor="#FF0000"
      color={'#FF0000'}
      _hover={{ bg: '#FF0000', color: '#FFFFFF' }}
      fontWeight={'semibold'}
      w="10.5rem"
      height="3rem"
      href={link}
      variant="outline"
    >
      <Link href={link} _hover={{ textDecoration: 'none' }} isExternal>
        {text}
      </Link>
    </Button>
  );
};

export default ViewGithubRepo;

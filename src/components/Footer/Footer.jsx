import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white pt-10'>
      <div className="flex justify-center space-x-5">
        <a href="https://linkedin.com/in/kiya-zewdu" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='h-8 w-8 bg-blue-400'/></a>
        <a href="https://github.com/Kiyazed" target="_blank" rel="noopener noreferrer"><GitHubIcon className='h-8 w-8 bg-black'/></a>
        <a href="https://twitter.com/Kiazewd" target="_blank" rel="noopener noreferrer"><XIcon className='h-8 w-8 bg-black'/></a>
      </div>
      <p className='justify-center flex pt-10 p-2'>&copy; {new Date().getFullYear()} Kiya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
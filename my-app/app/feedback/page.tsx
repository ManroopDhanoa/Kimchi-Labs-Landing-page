

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Nunito_Sans } from "next/font/google";
import { Separator } from "@radix-ui/react-menubar";
import { Menubar } from "@/components/ui/menubar";
import * as motion from "motion/react-client"
import Link from 'next/link';

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Contact() {
    return (
      <div className="flex justify-center pt-5">
        {/* Fixed Menubar */}
        <Menubar
  style={{
    display: "flex",
    justifyContent: "space-between", // Space only for major sections
    alignItems: "left",
    height: "45px",
    width: "930px",
    borderRadius: 15,
    position: "absolute"
  }}
>
  <div className="pt-2 pl-1 ">
 <a href="/homepage"> 
<motion.button
  whileHover={{
    scale: 1.1,
    rotate: [0, -10, 10, -10, 10, 0], // The "jiggle" rotation
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 1,
      bounce: 0.3,
    },
  }}
>
  <img
    src="/logo.svg"
    alt="logo"
    style={{ height: "32px", width: "118px", paddingLeft: 2 }}
  />
</motion.button>
</a>
</div>

  <div className="absolute" style={{ marginTop: -35, left: 220 }}>
  <div className="absolute flex gap-1">
    <Button variant="ghost">
      <a  href="https://discord.gg/9UW4Z9zJ">
      <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Discord</h1>
      </a>
    </Button>

    <Button variant="ghost">
    <a  href="https://github.com/Kimchi-Labs">
      <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>GitHub</h1>
      </a>
    </Button>

    <Button variant="ghost">
      <a href="https://github.com/Alexx1105/MuscleMemory">
      <h1 className={`${nunitoSans.className} opacity-100 font-bold text-xs`} style={{color:'#7d7d7d'}}>MuscleMemory</h1>
      </a>
    </Button>

    <Button variant="ghost">
      <a href="https://github.com/Alexx1105/MacStat-v2.1">
      <h1 className={`${nunitoSans.className} opacity-100 font-bold text-xs`} style={{color:'#7d7d7d'}}>MacStat</h1>
      </a>
    </Button>

    <Link href="/feedback">
    <Button variant="ghost">
      <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Feedback</h1>
    </Button>
    </Link>


    <Link href="mailto:alexh2877@gmail.com">
    <Button variant="ghost">
       <h1 className={`${nunitoSans.className} opacity-50 font-bold text-xs`}>Contact</h1> 
    </Button>
    </Link>

   

  </div>
</div>
</Menubar>
<div className="pt-80 h-40, absolute">
< img src="/Component 1.svg" alt="button" style={{left: 50}}/>
</div>

        {/* Main content */}
        <div className="h-screen ">
  {/* Fixed Text */}

  <div className="h-screen flex flex-col items-center pl-2 justify-center ">
  {/* Grouped Content */}
  
    {/* Text Heading */}
     <div className="flex relative ml-[-383px]">
    <h3
      className={`${nunitoSans.className} text-center text-gray-500 opacity-50 font-semibold text-base md:text-lg mb-4`} style={{letterSpacing: -0.5}}
    >
      <p className="mr-16 ">Send Bug reports, feature requests, or general Q & A's</p>
      <p className="mr-[-17px] pt-[-2px]">for MacStat, MuscleMemory, or inquiries about being a contributor.</p>
    </h3>
</div>
    {/* Textarea */}
    <Textarea
      className="rounded-xl"
      style={{
        width: "900px", // Fixed width for Textarea
        height: "90px", // Fixed height
        
      }}
      placeholder="Type your message here"
    />
<div className="pt-10 pl-40 ">
<Button
    variant="outline"
    className={nunitoSans.className}
    style={{
      top: "66ch", // Adjust button position using viewport height
      left: "21vw", // Center horizontally
      width: "150px",
      height: "40px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#f1f1ef",
      stroke: '#ececec',
      fontWeight: 900,
      letterSpacing: -0.5,
      borderRadius: 15,
      marginRight: 760
      
    
    }}
  >Send</Button>
  
  </div>
</div> 
</div>
</div>
    );
  }
  
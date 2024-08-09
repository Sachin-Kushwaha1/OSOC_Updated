import { Box, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Section from "../components/global/Section";
import MemberGrid from "../components/global/MemberGrid";
import { useAnimation } from "framer-motion";

interface Props {
  data: {
    id: string;
    year: string;
    members: {
      id: string;
      image: string;
      name: string;
      redirect: string;
    }[];
  }[];
  years: string[];
}

export const getStaticProps = async () => {
  const data = [
    {
      id: "1",
      year: "2026",
      members: [
        {
          id: "1",
          image: "/images/2026/abhinav.jpg",
          name: "Abhinav",
          redirect: "https://www.linkedin.com/in/a8h1n4v/",
        },
        {
          id: "2",
          image: "/images/2026/aditya.jpg",
          name: "Aditya Aggarwal",
          redirect: "https://www.linkedin.com/in/aditya-aggarwal-4a67a11ba",
        },
        {
          id: "3",
          image: "/images/2026/ayush.jpg",
          name: "Ayush Tyagi",
          redirect: "/",
        },
        {
          id: "4",
          image: "/images/2026/dainish.jpg",
          name: "Dainish Rahangdale",
          redirect: "https://www.linkedin.com/in/dainish-rahangdale-734914284",
        },
        {
          id: "5",
          image: "/images/2026/darshan.jpg",
          name: "Darshan Udaiwal",
          redirect: "https://www.linkedin.com/in/darshan-udaiwal-51b1a022a/",
        },
        {
          id: "6",
          image: "/images/2026/deeksha.jpg",
          name: "Deeksha Pandey",
          redirect: "https://www.linkedin.com/in/deeksha-pandey-647164190/",
        },
        {
          id: "7",
          image: "/images/2026/manjeet.jpg",
          name: "Manjeet Yadav",
          redirect: "https://www.linkedin.com/in/manjeet-yadav-a6b860204/",
        },
        {
          id: "8",
          image: "/images/2026/nikhil.jpg",
          name: "Nikhil Chhipa",
          redirect: "https://www.linkedin.com/in/nikhil-chhipa-50113718b/",
        },
      ],
    },
    {
      id: "2",
      year: "2025",
      members: [
        {
          id: "1",
          image: "/images/2025/nandini.jpg",
          name: "Nandini Sahu",
          redirect: "https://www.linkedin.com/in/nandini-sahu-118a40225/",
        },
        {
          id: "2",
          image: "/images/2025/sachin.jpg",
          name: "Sachin Kumar",
          redirect: "https://www.linkedin.com/in/sachin-kushwaha1/",
        },
        {
          id: "3",
          image: "/images/2025/manvendra.jpg",
          name: "Manvendra Singh",
          redirect: "https://www.linkedin.com/in/manvendrasingh43/",
        },
        {
          id: "4",
          image: "/images/2025/deepak.jpeg",
          name: "Deepak Suda",
          redirect: "https://www.linkedin.com/in/deepaksuda/",
        },
        {
          id: "5",
          image: "/images/2025/harsh.jpeg",
          name: "Harsh Goyal",
          redirect: "https://www.linkedin.com/in/harshgoyal0128/",
        },
        {
          id: "6",
          image: "/images/2025/neeraj.jpg",
          name: "Neeraj Kumar",
          redirect: "https://www.linkedin.com/in/neeraj-kumar-2002/",
        },
        {
          id: "7",
          image: "/images/2025/rishi.jpeg",
          name: "Rishikesh Bhakare",
          redirect: "https://www.linkedin.com/in/rsh-afk/",
        },
        {
          id: "8",
          image: "/images/2025/ritabrata.jpeg",
          name: "Ritabrata Biswas",
          redirect: "https://www.linkedin.com/in/ritabrata-biswas-18aa10297/",
        }
      ],
    },
    {
      id: "3",
      year: "2024",
      members: [
        {
          id: "1",
          image: "/images/2024/Ankur.jpg",
          name: "Ankur Bohra",
          redirect: "https://www.linkedin.com/in/ankur-bohra-97a4a817a",
        },
        {
          id: "2",
          image: "/images/2024/bhushan.jpg",
          name: "Bhushan Mendhe",
          redirect: "https://www.linkedin.com/in/bhushanmendhe",
        },
        {
          id: "3",
          image: "/images/2024/Bavi.jpg",
          name: "Chandarpavi Nadar",
          redirect: "https://www.linkedin.com/in/chandrapavi-nadar/",
        },
        {
          id: "4",
          image: "/images/2024/Dheeraj.jpg",
          name: " Dheeraj Lakhotra",
          redirect: "https://www.linkedin.com/in/ldheeraj18",
        },
        {
          id: "5",
          image: "/images/2024/Kritarth.jpg",
          name: "Kritarth Soni",
          redirect: "https://www.linkedin.com/in/kritarth-soni-301b641b2",
        },
        {
          id: "6",
          image: "/images/2024/Nilanjana.png",
          name: "Nilanjana Thakur",
          redirect: "https://www.linkedin.com/in/nilanjana-thakur",
        },
        {
          id: "7",
          image: "/images/2024/Pooja.jpg",
          name: "Pooja Somani",
          redirect: "https://www.linkedin.com/in/pooja-somani-315a82186",
        },
        {
          id: "8",
          image: "/images/2024/virender.jpg",
          name: "Virender Singh",
          redirect: "https://www.linkedin.com/in/virendersingh12",
        },
      ],
    },
    {
      id: "4",
      year: "2023",
      members: [
        {
          id: "1",
          image:
            "/images/2023/bhumika.jpeg",
          name: "Bhumika Khaka",
          redirect: "https://www.facebook.com/bhumika.khakha",
        },
        {
          id: "2",
          image:
            "/images/2023/kunal.jpeg",
          name: "Kunal Kumawat",
          redirect: "https://www.facebook.com/profile.php?id=100009228598175",
        },
        {
          id: "3",
          image:
            "/images/2023/mahima.jpeg",
          name: "Mahima Pawar",
          redirect: "https://www.facebook.com/mahima.pawar.100",
        },
        {
          id: "4",
          image:
            "/images/2023/manish.jpeg",
          name: "Manish Nangliya",
          redirect: "https://www.facebook.com/manish.nangliya.90",
        },
        {
          id: "5",
          image:
            "/images/2023/Payal.jpeg",
          name: "Payal Soni",
          redirect: "https://www.facebook.com/profile.php?id=100063462570698",
        },
        {
          id: "6",
          image:
            "/images/2023/prashansageete.jpeg",
          name: "Prashansa Geete",
          redirect: "https://www.facebook.com/prashansa.geete",
        },
        {
          id: "7",
          image:
            "/images/2023/shanoor.jpeg",
          name: "Shanoor Ahmed",
          redirect: "https://www.facebook.com/shanoor.ahmed.1614/",
        },
        {
          id: "8",
          image:
            "/images/2023/shivam.jpeg",
          name: "Shivam Singh",
          redirect: "https://www.linkedin.com/in/shivam098/",
        },
        {
          id: "9",
          image:
            "/images/2023/shivangi.jpeg",
          name: "Shivangi Gupta",
          redirect: "https://www.facebook.com/profile.php?id=100063437930332",
        }
      ],
    },
    {
      id: "5",
      year: "2022",
      members: [
        {
          id: "1",
          image:
            "/images/2022/anshika.jpeg",
          name: "Anshika Pandey",
          redirect: "https://www.linkedin.com/in/anshika-pandey-15235419b/",
        },
        {
          id: "2",
          image:
            "/images/2022/mayank.jpeg",
          name: "Mayank Sharma",
          redirect: "https://www.facebook.com/mayank.sharma.927980",
        },
        {
          id: "3",
          image:
            "/images/2022/mrinal.jpeg",
          name: "Mrinal Satyawanshi",
          redirect: "https://www.facebook.com/mrinal.satyawanshi",
        },
        {
          id: "4",
          image:
            "/images/2022/rakshat.jpeg",
          name: "Rakshat Puranik",
          redirect: "https://www.facebook.com/profile.php?id=100008408020433",
        },
        {
          id: "5",
          image:
            "/images/2022/sumit.jpeg",
          name: "Sumit Parmar",
          redirect: "https://www.facebook.com/sumit.parmar.71619533",
        },
        {
          id: "6",
          image:
            "/images/2022/sunil.jpeg",
          name: "Sunil Solanki",
          redirect: "https://www.facebook.com/profile.php?id=100012645852743",
        },
        {
          id: "7",
          image:
            "/images/2022/twinkle.jpg",
          name: "Twinkle Agarwal",
          redirect: "https://www.facebook.com/twinkle.agarwal.1098",
        }
      ],
    },
    {
      id: "6",
      year: "2021",
      members: [
        {
          id: "1",
          image:
            "/images/2021/ankur.jpg",
          name: "Ankur Rana",
          redirect: "https://www.facebook.com/ankurrana441555",
        },
        {
          id: "2",
          image:
            "/images/2021/ruchita.jpg",
          name: "Ruchita Nagar",
          redirect: "https://www.facebook.com/ruchita.nagar.5",
        },
        {
          id: "3",
          image:
            "/images/2021/richa.jpg",
          name: "Richa Agarwal",
          redirect: "https://www.facebook.com/richa.agarwal.0310",
        },
        {
          id: "4",
          image:
            "/images/2021/swapnil.jpg",
          name: "Swapnil Gupta",
          redirect: "https://www.facebook.com/swapnilg7",
        },
        {
          id: "5",
          image:
            "/images/2021/vaibhav.jpg",
          name: "Vaibhav Vikas",
          redirect: "https://www.facebook.com/vbhvvikas",
        },
        {
          id: "6",
          image:
            "/images/2021/vipin.jpg",
          name: "Vipin Kumar Niranjan",
          redirect: "https://www.facebook.com/vipinkumar.niranjan.9",
        },
        {
          id: "7",
          image:
            "/images/2021/kunal.jpg",
          name: "Kunal Bhavsar",
          redirect: "https://www.facebook.com/kunal.bhavsar.5494",
        },
        {
          id: "8",
          image:
            "/images/2021/rohit.jpeg",
          name: "Rohit Bairagi",
          redirect: "https://www.facebook.com/rohit.bairagi.98",
        },
      ],
    },
    {
      id: "7",
      year: "2020",
      members: [
        {
          id: "1",
          image:
            "/images/2020/aditya.jpg",
          name: "Aditya Gupta",
          redirect: "https://www.facebook.com/Aditya385",
        },
        {
          id: "2",
          image:
            "/images/2020/ankita.jpg",
          name: "Ankita Gupta",
          redirect: "https://www.linkedin.com/in/ankita-gupta-437a07148/",
        },
        {
          id: "3",
          image:
            "/images/2020/kshitiz.jpg",
          name: "Kshitiz Arora",
          redirect: "https://www.facebook.com/kshitizaol",
        },
        {
          id: "4",
          image:
            "/images/2020/mayank.jpg",
          name: "Mayank Songara",
          redirect: "https://www.facebook.com/mayank.songara.712",
        },
        {
          id: "5",
          image:
            "/images/2020/prajwal.jpg",
          name: "Prajjwal Gupta",
          redirect: "https://www.facebook.com/prajjwal.gupta.3781",
        },
        {
          id: "6",
          image:
            "/images/2020/surendra.jpg",
          name: "Surendra Lodhi",
          redirect: "https://www.facebook.com/surendra.lodhi.399",
        },
      ],
    },
    {
      id: "8",
      year: "2019",
      members: [
        {
          id: "1",
          image:
            "/images/2019/atheek.jpg",
          name: "Atheek Mohammad",
          redirect: "https://www.facebook.com/ateek.77?fref=nf",
        },
        {
          id: "2",
          image:
            "/images/2019/dimple.png",
          name: "Dimple Masheshwari",
          redirect: "https://www.linkedin.com/in/dimple-maheshwari-4b226413a/",
        },
        {
          id: "3",
          image:
            "/images/2019/harmit.jpg",
          name: "Harmit Singh Bhatia",
          redirect: "https://www.linkedin.com/in/hsb257/?originalSubdomain=in",
        },
        {
          id: "4",
          image:
            "/images/2019/khushali.png",
          name: "Khushali Porwal",
          redirect: "https://www.linkedin.com/in/khushali-porwal-7a122314a/",
        },
        {
          id: "5",
          image:
            "/images/2019/sanjay.jpg",
          name: "Sanjay Pal",
          redirect: "https://www.linkedin.com/in/sanjay-pal-ab4492140/?originalSubdomain=in",
        },
        {
          id: "6",
          image:
            "/images/2019/shubham.jpg",
          name: "Shubham Sharma",
          redirect: "https://www.linkedin.com/in/shubham-sharma-344834130/?originalSubdomain=in",
        },
        {
          id: "7",
          image:
            "/images/2019/vivek.jpg",
          name: "Vivek Xess",
          redirect: "https://www.linkedin.com/in/vivek-xess-0504aaab/?originalSubdomain=in",
        },
      ],
    },
    {
      id: "9",
      year: "2018",
      members: [
        {
          id: "1",
          image:
            "/images/2018/ananjaysingh.jpeg",
          name: "Ananjay Singh",
          redirect: "https://www.facebook.com/people/Ananjay-Singh/100005064075656",
        },
        {
          id: "2",
          image:
            "/images/2018/deepika.jpg",
          name: "Deepika Mewade",
          redirect: "https://www.linkedin.com/in/dipika-mewade-071a68124/?originalSubdomain=in",
        },
        {
          id: "3",
          image:
            "/images/2018/nikita.jpeg",
          name: "Nikita Gurjar",
          redirect: "https://www.linkedin.com/in/nikita-gurjar-172577121/?originalSubdomain=in",
        },
        {
          id: "4",
          image:
            "/images/2018/pradeep.jpg",
          name: "Pradeep Kushwah",
          redirect: "https://www.linkedin.com/in/pradeep-kushwah-17b872114/?originalSubdomain=in",
        },
        {
          id: "5",
          image:
            "/images/2018/pradeeps.jpeg",
          name: "Pradeep Sjukla",
          redirect: "https://www.linkedin.com/in/pradeep-shukla-648040143/?originalSubdomain=in",
        },
        {
          id: "6",
          image:
            "/images/2018/Prateek.jpg",
          name: "Prateek Prasanna Xaxa",
          redirect: "https://www.facebook.com/cppxaxa",
        },
        {
          id: "7",
          image:
            "/images/2018/Preeti.jpg",
          name: "Preeti Rathore",
          redirect: "https://www.facebook.com/pritynb",
        },
        {
          id: "8",
          image:
            "/images/2018/Purnima.jpg",
          name: "Purnima Verma",
          redirect: "https://www.linkedin.com/in/purnima-verma-864037148/?originalSubdomain=in",
        },
        {
          id: "9",
          image:
            "/images/2018/Trisha.jpg",
          name: "Trisha Gehlot",
          redirect: "https://www.linkedin.com/in/trisha-gehlot-299274117/?originalSubdomain=uk",
        }
      ],
    },
    {
      id: "10",
      year: "2017",
      members: [
        {
          id: "1",
          image:
            "/images/2017/palash.jpg",
          name: "Palash Maran",
          redirect: "https://www.linkedin.com/in/palashmaran/?originalSubdomain=in",
        }
      ],
    },
    {
      id: "8",
      year: "2016",
      members: [
        {
          id: "1",
          image:
            "/images/2016/Arun.jpg",
          name: "Arun Meena",
          redirect: "https://www.linkedin.com/in/arun-kumar-meena-80ab59124/?originalSubdomain=in",
        },
        {
          id: "2",
          image:
            "/images/2016/Ayush.jpg",
          name: "Ayush Gupta",
          redirect: "https://www.linkedin.com/in/ayush-gupta-aa4092174/?originalSubdomain=in",
        },
        {
          id: "3",
          image:
            "/images/2016/Nadeem.jpg",
          name: "Nadeem Bhati",
          redirect: "https://www.facebook.com/iNadeemBhati",
        },
        {
          id: "4",
          image:
            "/images/2016/Rahul.jpg",
          name: "Rahul Gupta",
          redirect: "https://www.linkedin.com/in/rahul-gupta-9b3790100/?originalSubdomain=in",
        },
        {
          id: "5",
          image:
            "/images/2016/Tarun.jpg",
          name: "Tarun Kumar Bhorhari",
          redirect: "https://www.linkedin.com/in/tarun-kumar-bhorhari-288407107/?originalSubdomain=in",
        },
        {
          id: "6",
          image:
            "/images/2016/Urvashi.jpg",
          name: "Urvashi Jawere",
          redirect: "https://www.linkedin.com/in/urvashi-jawere-58b711b7/?originalSubdomain=in",
        },
      ],
    },
    {
      id: "11",
      year: "2015",
      members: [
        {
          id: "1",
          image:
            "/images/2015/AKANSHA.jpg",
          name: "Akansha Satyarthi",
          redirect: "https://www.facebook.com/akansha.satyarthi",
        },
        {
          id: "2",
          image:
            "/images/2015/ARUN.jpg",
          name: "Arun Patidar",
          redirect: "https://www.linkedin.com/in/arun-patidar-4bba64bb/?originalSubdomain=in",
        },
        {
          id: "3",
          image:
            "/images/2015/ASHISH.jpg",
          name: "Ashish Bansal",
          redirect: "https://www.linkedin.com/in/ashish-bansal-19241284/?originalSubdomain=in",
        },
        {
          id: "4",
          image:
            "/images/2015/govind.jpg",
          name: "Govind Patidar",
          redirect: "https://www.linkedin.com/in/govind-patidar/?originalSubdomain=in",
        },
        {
          id: "5",
          image:
            "/images/2015/JAYSHREE.jpg",
          name: "Jayshree Likhar",
          redirect: "https://www.linkedin.com/in/jayshree-likhar-b6456a64/?originalSubdomain=in",
        },
        {
          id: "6",
          image:
            "/images/2015/MAYURI.jpg",
          name: "Mayuri Jain",
          redirect: "https://www.facebook.com/mayuri.jain.528",
        },
        {
          id: "7",
          image:
            "/images/2015/mukesh.jpg",
          name: "Mukesh Mali",
          redirect: "https://www.facebook.com/mukeshm280?fref=nf",
        },
        {
          id: "8",
          image:
            "/images/2015/sanyam.jpg",
          name: "Sanyam Jain",
          redirect: "https://www.facebook.com/sanyam.jain.982292",
        },
        {
          id: "9",
          image:
            "/images/2015/sukhmeet.jpg",
          name: "Sukhmeet Kaur Bhatia",
          redirect: "https://www.facebook.com/sukhmeetb1",
        },
        {
          id: "10",
          image:
            "/images/2015/sunil.jpg",
          name: "Sunil Hirole",
          redirect: "https://www.facebook.com/hirolesunil",
        },
        {
          id: "11",
          image:
            "/images/2015/sweekriti.jpg",
          name: "Sweekriti Smith",
          redirect: "https://www.linkedin.com/in/sweekriti-smith-18a85a103/?originalSubdomain=in",
        },
        {
          id: "12",
          image:
            "/images/2015/Vikas.jpg",
          name: "Vikas Pachori",
          redirect: "https://www.facebook.com/vikas.pachori",
        }
      ],
    },
    {
      id: "12",
      year: "2014",
      members: [
        {
          id: "1",
          image:
            "/images/2014/Ananthasooraj.jpg",
          name: "Ananthasooraj R Pai",
          redirect: "https://www.facebook.com/ananthasoorajrpai",
        },
        {
          id: "2",
          image:
            "/images/2014/Namrita.jpg",
          name: "Namrita Arya",
          redirect: "https://www.linkedin.com/in/namrita-arya-70416272/?originalSubdomain=in",
        },
        {
          id: "3",
          image:
            "/images/2014/Prity.jpg",
          name: "Prity Bhudolia",
          redirect: "https://www.facebook.com/prity.bhudolia",
        },
        {
          id: "4",
          image:
            "/images/2014/Ram.jpg",
          name: "Ram Dayal Vaishnav",
          redirect: "/",
        },
        {
          id: "5",
          image:
            "/images/2014/SWAPNA.jpg",
          name: "Swapna Sugunendiran",
          redirect: "https://www.linkedin.com/in/swapna-sugunendiran-0a491475/",
        },
        {
          id: "6",
          image:
            "/images/2014/vishal.jpg",
          name: "Vishal Singh",
          redirect: "https://www.linkedin.com/in/vishal-singh-2a998725/",
        },
      ],
    },
  ];
  const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"];
  return {
    props: { data, years },
  };
};

const Team = ({ data, years }: Props) => {
  const [currentYear, setCurrentYear] = useState(data[0].year);
  const [members, setMembers] = useState(data[0].members);
  const animation = useAnimation();

  useEffect(() => {
    const found = data.find((batch) => batch.year === currentYear);
    setMembers(() => found.members);
  }, [currentYear]);

  return (
    <>
      <Head>
        <title>Team | OSOC</title>
      </Head>
      <Flex minW="100%" flexDir="column" pos="relative" zIndex={10}>
        <video
          autoPlay
          muted
          loop
          src="/bg.mp4"
          style={{
            objectFit: "cover",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            zIndex: "-10",
          }}
        />
        <Box
          bg="blackAlpha.700"
          pos="fixed"
          top="0"
          left="0"
          minH="full"
          minW="full"
          zIndex={-10}
        />
        <Navbar />
        <Section
          heading="Members"
          years={years}
          callback={setCurrentYear}
          defaultYear={currentYear}
        >
          <MemberGrid members={members} />
        </Section>
        <Footer />
      </Flex>
    </>
  );
};

export default Team;

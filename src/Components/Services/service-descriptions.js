import firstDescImg from './images/first-description.svg';
import secondDescImg from './images/second-description.svg';
import thirdDesc from './images/third-desc.svg';
import fourthDesc from './images/fourth-desc.svg';

const serviceDescription = [
    {
        id: 1,
        name: "Basic",
        img: firstDescImg,
        description: [
            "Calendar management",
            "Customer service"
        ]
    },
    {
        id: 2,
        name: "Basic plus",
        img: secondDescImg,
        description: [
            "Calendar management",
            "Customer service",
            "Event planning"
        ]
    },
    {
        id: 3,
        name: "Executive",
        img: thirdDesc,
        description: [
            "Calendar management",
            "Customer service",
            "Event planning",
            "Travel planning",
            "Personal care arrangements"
        ],
    },
    {
        id: 4,
        name: "Social media support",
        img: fourthDesc,
        description: [
            "Pre-Scheduling posts",
            "Posting at optimal times",
            "Social media account management",
            "Active interaction with Followers"
        ]
    }
]

export default serviceDescription;
    

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://kreo-support-ticket-intelligence.netlify.app"
  ],
  methods: ["GET","POST"],
}));
app.use(express.json());
const insights = [
  {
    "issue": "Battery Problems",
    "mentions": 307,
    "examples": [
      "battery life i'm having an issue with the product . please assist. (thanks) i will contact all my suppliers and confirm. please try and find out whether their inventory is currently stocked, or any other reason. i am i've performed a factory reset on my product , hoping it would resolve the problem, but it didn't help.",
      "product recommendation i'm having an issue with the product . please assist. please note, you might have already paid for this product, which means spectators are not buying any of the products from the sale as their donations will go straight i've noticed a sudden decrease in battery life on my product . it used to last much longer.",
      "battery life i'm having an issue with the product . please assist. i was able to get my $50 bag from the vendor, but the bags i was wearing in the show were covered in stickers and the price for those i've tried different settings and configurations on my product , but the issue persists."
    ],
      "trend": "increasing",
    "growth_rate": 3.5,
  "impact_score": 920,
  "priority": "critical"
  },
  {
    "issue": "Account Access Issues",
    "mentions": 186,
    "examples": [
      "refund request i'm unable to access my product account. it keeps displaying an 'invalid credentials' error, even though i'm using the correct login information. how can i regain access to my account? solution 1 i'm unable to find the option to perform the desired action in the product . could you please guide me through the steps?",
      "product compatibility i've forgotten my password for my product account, and the password reset option is not working. how can i recover my account? i can reset my password by entering the following: my password still valid: password is expired i've recently updated the firmware of my product , and the issue started happening afterward. could it be related to the update?",
      "product recommendation i've forgotten my password for my product account, and the password reset option is not working. how can i recover my account? what happens when you lose all of your money without a credit card? the issue i'm facing is intermittent. sometimes it works fine, but other times it acts up unexpectedly."
    ],
    "trend": "decreasing",
    "growth_rate": -0.5,
    "impact_score": 93,
    "priority": "low"
  },
  {
    "issue": "Refund Requests",
    "mentions": 177,
    "examples": [
      "delivery problem i'm having an issue with the product . please assist. (and if need be this time, that could help.) 1.3.2.1 update my version to 3.0 or more. the issue i'm facing is intermittent. sometimes it works fine, but other times it acts up unexpectedly.",
      "delivery problem i'm having an issue with the product . please assist. if it's not working i can't help you. i've performed a factory reset on my product , hoping it would resolve the problem, but it didn't help.",
      "delivery problem i'm having an issue with the product . please assist. product #8 4-8-0-1 the product code on your product. #product id : {product_id i've checked the device settings and made sure that everything is configured correctly."
    ],
    "trend": "stable",
    "growth_rate": 0,
    "impact_score": 177,
    "priority": "medium"
  },
  {
    "issue": "Software Bugs",
    "mentions": 119,
    "examples": [
      "software bug i'm having an issue with the product . please assist. 4. it is possible that we cannot find some type of text or a product name to identify someone like mr. brown. 5. on the i've reviewed the troubleshooting steps on the official support website, but they didn't resolve the problem.",
      "software bug i'm having an issue with the product . please assist. i'm having an issue with the product_purchased}. please assist. customer reviewer: my husband was able to take an order from apple i've checked for any available software updates for my product , but there are none.",
      "product recommendation i've noticed a software bug in the product app. it's causing data loss and unexpected errors. how can i resolve this issue? i need assistance as soon as possible because it's affecting my work and productivity."
    ],
    "trend": "stable",
    "growth_rate": 0,
    "impact_score": 119,
    "priority": "medium"
  },
  {
    "issue": "Network Connectivity Issues",
    "mentions": 111,
    "examples": [
      "network problem i'm facing a problem with my product . the product is not turning on. it was working fine until yesterday, but now it doesn't respond. 1.8.3 i really i'm using the original charger that came with my product , but it's not charging properly.",
      "product setup i've recently set up my product , but it fails to connect to any available networks. what steps should i take to troubleshoot this issue? i can't find the 'product_ip' field of the i'm concerned about the security of my product and would like to ensure that my data is safe.",
      "product recommendation i've recently set up my product , but it fails to connect to any available networks. what steps should i take to troubleshoot this issue? if you know the answer, please let me know. do i i've noticed a sudden decrease in battery life on my product . it used to last much longer."
    ],
    "trend": "decreasing",
    "growth_rate": -1,
    "impact_score": 0,
    "priority": "low"
  },
  {
    "issue": "Hardware Issues",
    "mentions": 57,
    "examples": [
      "product setup i'm having an issue with the product . please assist. product name: tpubask3e3kq0 join date: oct 2007 posts: 11,532 quote: i've recently updated the firmware of my product , and the issue started happening afterward. could it be related to the update?",
      "hardware issue i'm having an issue with the product . please assist. thank you.\" the issue occurred after amazon started a tool to deal with a problem like this (see page 36 of the faq): \"the product is not i've recently updated the firmware of my product , and the issue started happening afterward. could it be related to the update?",
      "product setup i'm having an issue with the product . please assist. thank you. i'm having an issue with the product . please assist. thank you. i'm having an issue with i've recently updated the firmware of my product , and the issue started happening afterward. could it be related to the update?"
    ],
    "trend": "stable",
    "growth_rate": 0,
    "impact_score": 57,
    "priority": "low"
  },
  {
    "issue": "Product Setup Issues",
    "mentions": 43,
    "examples": [
      "product setup i'm having an issue with the product . please assist. your billing zip code is: 71701. we appreciate that you have requested a website address. please double check your email address. i've tried troubleshooting steps mentioned in the user manual, but the issue persists.",
      "product setup i'm having an issue with the product . please assist. product } must be a valid email address for your order and are valid for one week in advance. please make your purchases as quickly as possible the issue i'm facing is intermittent. sometimes it works fine, but other times it acts up unexpectedly.",
      "product setup i'm having an issue with the product . please assist. i'm using a brand new product. what a strange situation. i've just purchased a brand new one. what to do? i've noticed that the issue occurs consistently when i use a specific feature or application on my product ."
    ],
    "trend": "increasing",
    "growth_rate": 1,
    "impact_score": 86,
    "priority": "low"
  }
]

app.get("/insights", (req, res) => {
  res.json(insights);
});

app.post("/rebuild-insights", (req, res) => {
  res.json({ message: "Rebuild triggered" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

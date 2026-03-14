const express = require("express");

const app = express();
const PORT = 3000;

const insights = [
  {
    issue: "Battery Problems",
    mentions: 181,
    examples: [
      "battery life i'm having an issue with the product . please assist. (thanks) i will contact all my suppliers and confirm. please try and find out whether their inventory is currently stocked, or any other reason. i am i've performed a factory reset on my product , hoping it would resolve the problem, but it didn't help.",
      "product recommendation i'm having an issue with the product . please assist. please note, you might have already paid for this product, which means spectators are not buying any of the products from the sale as their donations will go straight i've noticed a sudden decrease in battery life on my product . it used to last much longer.",
      "battery life i'm having an issue with the product . please assist. i was able to get my $50 bag from the vendor, but the bags i was wearing in the show were covered in stickers and the price for those i've tried different settings and configurations on my product , but the issue persists."
    ],
    trend: "decreasing",
    growth_rate: -1,
    impact_score: 0,
    priority: "low"
  },
  {
    issue: "Refund Requests",
    mentions: 159,
    examples: [
      "refund request i'm having an issue with the product . please assist. i'll take care of those. i've performed a factory reset on my product , hoping it would resolve the problem, but it didn't help.",
      "cancellation request i'm having an issue with the product . please assist. it's not possible to remove the missing content. i've already contacted customer support multiple times, but the issue remains unresolved.",
      "cancellation request i'm having an issue with the product . please assist. also note: your information gets deleted every time an article is sent to a website you've never viewed. product is a unique identifier in i'm not sure if this issue is specific to my device or if others have reported similar problems."
    ],
    trend: "stable",
    growth_rate: 0,
    impact_score: 159,
    priority: "medium"
  },
  {
    issue: "Account Access Issues",
    mentions: 148,
    examples: [
      "refund request i'm unable to access my product account. it keeps displaying an 'invalid credentials' error, even though i'm using the correct login information. how can i regain access to my account?",
      "product compatibility i've forgotten my password for my product account, and the password reset option is not working.",
      "product recommendation i've forgotten my password for my product account, and the password reset option is not working."
    ],
    trend: "decreasing",
    growth_rate: -0.5,
    impact_score: 74,
    priority: "low"
  },
  {
    issue: "Network Connectivity Issues",
    mentions: 106,
    examples: [
      "network problem i'm having an issue with the product . please assist.",
      "network problem i'm having an issue with the product . please assist.",
      "network problem i'm having an issue with the product . please assist."
    ],
    trend: "stable",
    growth_rate: 0,
    impact_score: 106,
    priority: "medium"
  },
  {
    issue: "Delivery Problems",
    mentions: 105,
    examples: [
      "product setup i'm having an issue with the product . please assist.",
      "product setup i'm having an issue with the product . please assist.",
      "delivery problem i'm having an issue with the product . please assist."
    ],
    trend: "increasing",
    growth_rate: 1,
    impact_score: 210,
    priority: "medium"
  },
  {
    issue: "Software Bugs",
    mentions: 66,
    examples: [
      "software bug i'm having an issue with the product . please assist.",
      "software bug i'm having an issue with the product . please assist.",
      "cancellation request i'm encountering a software bug in the product."
    ],
    trend: "stable",
    growth_rate: 0,
    impact_score: 66,
    priority: "low"
  },
  {
    issue: "Hardware Issues",
    mentions: 35,
    examples: [
      "payment issue i'm facing a problem with my product . the product is not turning on.",
      "payment issue my product is making strange noises and not functioning properly.",
      "payment issue i'm having an issue with the product . please assist."
    ],
    trend: "decreasing",
    growth_rate: -1,
    impact_score: 0,
    priority: "low"
  }
];

app.get("F", (req, res) => {
  res.json(insights);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
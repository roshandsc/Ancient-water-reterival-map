const storeList = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [72.57, 23.02],
    },
    properties: {
      type: "Stepwell",
      region: "Gujarat",
      principle: "Harvest rainwater and provide community water access",
      reasons: "Scarcity of water and arid climate",
      images:
        "https://c8.alamy.com/comp/2R6KMN8/adalaj-stepwell-rudabai-stepwell-adalaj-gujarat-india-asia-2R6KMN8.jpg",
      advantages: "Water conservation, cooling effect, architectural heritage",
      revival: "Cleaning, structural reinforcement, awareness campaigns",
      government_initiatives: "INTACH and Gujarat Tourism preservation efforts",
      contributor: "Roshan Shetty",
      other_details:
        "Adalaj ni Vav is a prominent stepwell in Gujarat, built in 1499",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.52, 17.92],
    },
    properties: {
      type: "Karez System",
      region: "Bidar",
      principle: "Subterranean water channel system using gravity flow",
      reasons:
        "Zing is based on the principle of glacial meltwater collection and storage.",
      images:
        "https://media.assettype.com/thenewsminute%2Fimport%2Fsites%2Fall%2Fvar%2Fwww%2Fimages%2FBidar_Karez_4.JPG",
      advantages: "Efficient water transport, reduces evaporation",
      revival: "Desilting, community-led maintenance, historical mapping",
      government_initiatives:
        "Supported by Karnataka Tourism and Archaeological Survey of India",
      contributor: "Anshul Salian",
      other_details: "Believed to be of Persian origin, over 700 years old",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [80.2707, 13.0827],
    },
    properties: {
      type: "Eri System (Traditional Tanks)",
      region: "Tamil Nadu",
      principle:
        "Capture monsoon runoff for irrigation and groundwater recharge",
      reasons: "Dependence on seasonal rainfall and need for water storage",
      images:
        "https://www.researchgate.net/publication/337534514/figure/fig42/AS:830474813452337@1575012033528/Eri-a-system-of-rain-water-harves-ng-fed-by-channels-that-divert-river-water.png",
      advantages: "Recharges groundwater, reduces floods, aids biodiversity",
      revival: "Desilting, restoration of bunds, local community engagement",
      government_initiatives: "TNWRD and NGOs like DHAN Foundation",
      contributor: "Yashawanth.B.R.",
      other_details: "Thousands of Eris exist, dating back to Chola dynasty",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.10304, 24.18848],
    },
    properties: {
      type: "Johads",
      region: "Haryana",
      principle:
        "Allow water to slowly seep into the ground, recharging the aquifers.",
      reasons: "Seasonal rivers and streams often dry up quickly.",
      images:
        "https://www.notechmagazine.com/wp-content/uploads/2015/05/water-johad-india.jpg",
      advantages:
        "Ensures water availability for crops and livestock, even in dry seasons.",
      revival:
        "Mobilizing local residents to clean, maintain, and monitor the Johad.",
      government_initiatives:
        "MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act)",
      contributor: "Vaishnavi T",
      other_details: "These were started in 1984",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.0044, 13.1986],
    },
    properties: {
      type: "Kalyani",
      region: "Near Halebidu, Hassan District, Karnataka",
      principle:
        "A kalyani is a rainwater-harvesting temple tank for water conservation and rituals.",
      reasons:
        "Helps in managing seasonal rainfall, groundwater depletion, and ecological balance.",
      images: "https://pin.it/6Q46YRj8x",
      advantages:
        "Efficient rainwater harvesting, groundwater recharge, and ecological sustainability ensure long-term water security.",
      revival:
        "Restore kalyanis, promote rainwater harvesting, desilt tanks, and integrate modern filtration.",
      government_initiatives: "Jal Shakti Abhiyan - Catch the Rain",
      contributor: "Kanchana P",
      other_details:
        "Moodubidire’s kalyanis are linked to Jain heritage, aiding in rituals and water conservation, with key sites like Saavira Kambada Basadi",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.5571, 34.1546],
    },
    properties: {
      type: "Zing",
      region: "Cold place",
      principle:
        "Zing is based on the principle of glacial meltwater collection and storage.",
      reasons: "Arid climate, glacier dependency, seasonal farming.",
      images: "https://images.app.goo.gl/8HmHrNDFZzm4ZYYE6",
      advantages: "Supports sustainable agriculture in high-altitude regions.",
      revival:
        "Desilting and cleaning of zing reservoirs before the sowing season.",
      government_initiatives: "Mission Amrit Sarovar",
      contributor: "DEEKSHITA RAJESH NAIK",
      other_details:
        "Acts as a model of ancient ecological knowledge adapted to climate extremes",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.78, 20.96],
    },
    properties: {
      type: "Phad System",
      region: "Maharashtra",
      principle: "Diversion-based irrigation system using weirs and canals",
      reasons: "Western Maharashtra's riverine areas with seasonal flow",
      images:
        "https://th.bing.com/th/id/R.633d68b14d916d8c16107a1dc58bedc2?rik=js%2bk%2bW4kP4uHLA&riu=http%3a%2f%2f1.bp.blogspot.com%2f_ecCmBzb__Ro%2fRoZeW_9ZXoI%2fAAAAAAAAABQ%2fswqsJnSAc80%2fs320%2fphad.jpg&ehk=cF3XmvVndYhY%2f3NRUDbPYBVS3f75p0zPxfrO7sT2VCM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      advantages: "Equitable water distribution, enhances crop yield",
      revival: "Repairs of canals and weirs, water user associations",
      government_initiatives: "Maharashtra Water Resources Department",
      contributor: "Shazma",
      other_details: "Over 300 years old; UNESCO-listed traditional system",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.0432, 12.975],
    },
    properties: {
      type: "Surangam",
      region: "Kasargod, Kerala",
      principle:
        "Horizontal tunnel dug into laterite hills to tap groundwater via gravity flow",
      reasons:
        "Hilly terrain with laterite rock, less rainfall, need for year-round supply",
      images:
        "https://cdn.downtoearth.org.in/library/large/2021-08-20/0.78250500_1629469470_suranga.jpg",
      advantages: "Minimal evaporation, year-round water availability",
      revival: "Cleaning of tunnels, lining walls, awareness workshops",
      government_initiatives:
        "Supported by Kerala Forest and Water Resources Department",
      contributor: "Hegde Aansh Dilip",
      other_details:
        "Used by farmers for centuries in Kasargod and north Kerala",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [94.48, 25.6],
    },
    properties: {
      type: "Zabo System",
      region: "Nagaland",
      principle:
        "Rainwater harvesting system integrating forest, agriculture, and livestock",
      reasons:
        "Hilly terrain with poor water availability and need for sustainable agriculture",
      images:
        "https://www.researchgate.net/profile/Moses-Longchar-3/publication/355741444/figure/fig4/AS:1088038363022336@1637656035320/Fig-3-Schematic-of-the-Zabo-System-and-the-Components.jpg",
      advantages:
        "Supports biodiversity, sustainable farming, and water conservation",
      revival: "Improvement of watershed management, building new ponds",
      government_initiatives: "Integrated Watershed Management Programs",
      contributor: "Yashanya C.R.",
      other_details:
        "Used by Naga tribes for centuries, seen as an agricultural and cultural legacy",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.7794, 20.9595],
    },
    properties: {
      type: "Phad Irrigation System",
      region: "Dhule and Nashik districts, Maharashtra",
      principle:
        "Community-managed canal irrigation diverting river water through weirs, channels, and bunds",
      reasons:
        "Equitable water distribution in semi-arid regions with seasonal rivers",
      images: "Image not available",
      advantages:
        "Equitable water distribution, community participation and regulation, promotes crop rotation and sustainable water use",
      revival:
        "Desilting of canals, repair of weirs, reintroduction of traditional governance (water councils or panchphads)",
      government_initiatives:
        "Supported by Maharashtra Water Resource Department and NGOs under Participatory Irrigation Management (PIM) schemes",
      contributor: "Sujal S Habalkar",
      other_details:
        "The system dates back to the 16th century and still functions in parts; reflects strong community involvement in sustainable agriculture and water sharing",
    },
  },
  {
    type: "Feature",

    geometry: {
      type: "Point",

      coordinates: [27.0, 73.0],
    },
    properties: {
      type: "Kund's",

      region: "Rajasthan",

      principle:
        "Saucer-shaped catchment areas that divert rainwater to underground wells in Rajasthan",

      reasons:
        "Efficiently harvest and store rainwater in arid areas with low rainfall and high evaporation.",
      images:
        "http://www.rainwaterharvesting.org/methods/traditional/kunds.htm",

      advantages:
        "low-cost, sustainable way to store clean rainwater in arid regions with minimal evaporation and reliance on groundwater.",

      revival:
        "Repairing cracks, rebuilding catchment areas, lining tanks with lime or cement, and installing",

      government_initiatives:
        "Jal Shakti Abhiyan, MGNREGA, National Water Mission, Atal Bhujal Yojana",

      contributor: "Aparna Nath",

      other_details:
        "Aim to conserve water by reviving traditional systems like kunds, promoting community involvement",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [26.2006, 91.7458],
    },
    properties: {
      type: "Dung Bandh System",
      region: "AssamBrahmaputra valley",
      principle: "Temporary embankments to trap and divert floodwater",
      reasons: "Frequent floods and highly seasonal rainfall",
      images:
        "https://th.bing.com/th/id/R.37b766f5e8c39b5ba805aaa63775da9drik=l3XriV3ybHzlrQ&riu=http%3a%2f%2fwww.fao.org%2f3%2fT0555E%2fT0555E35.gif&ehk=t5YxQGMEQN%2bXpx1PzfWUQzsnS9Bko9dnwkPtzUKvuzo%3d&risl=&pid=ImgRaw&r=0",
      advantages:
        "Provides seasonal irrigation, controls soil erosion, low-cost and sustainable",
      revival: "Rebuilt annually using bamboo, mud, and clay by the community",
      government_initiatives: "Supported by local panchayats and NGOs",
      contributor: "Grishma Shetty",
      other_details:
        "Used by Bodo and other tribal communities, highly eco-friendly, adapted to monsoon cycle",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [85.1897, 21.4814],
    },
    properties: {
      type: "Dohas (or Donga)",
      region:
        "Western Odisha, especially in the Kalahandi and Nuapada districts",
      principle:
        "Small earthen depressions dug along hill slopes to trap rainwater and allow gradual percolation into the subsoil",
      reasons:
        "To capture and store rainwater in undulating terrains with erratic rainfall and limited perennial sources",
      images: "https://images.app.goo.gl/yFrtXjRuZePsydD66",
      advantages:
        "Enhances groundwater recharge, supports nearby vegetation, provides water for livestock and small-scale farming",
      revival:
        "Community-driven revival under watershed programs and tribal livelihood missions, integration with soil conservation strategies",
      government_initiatives:
        "Supported under MGNREGA and Odisha Tribal Empowerment & Livelihoods Programme (OTELP)",
      contributor: "Thejas",
      other_details:
        "Believed to be centuries old, dohas are a part of indigenous tribal knowledge systems and have been instrumental in sustaining life in rain-shadow regions",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [13.35, 74.7495],
    },
    properties: {
      type: "Paddy field bunding",
      region: "Udupi and dakshina Kannada districts, Karnataka",
      principle:
        "Construction of low, wide earthen embankments around rice fields to trap water and create a waterlogged environment for rice cultivation.",
      reasons:
        "High rainfall, water-intensive rice cultivation, undulating terrain, and the need to prevent soil erosion.",
      images:
        "https://www.dreamstime.com/view-patch-rice-fields-beautiful-bunds-middle-trees-lush-forests-view-patch-rice-fields-image249780293",
      advantages:
        "Conserves water, improves soil fertility, prevents erosion, recharges groundwater, and helps in flood control.",
      revival:
        "Rebuilding bunds, improving water management systems, community involvement, and integrating modern irrigation practices.",
      government_initiatives:
        "MGNREGA, IWMP, Krishi Bhagya Scheme, and watershed management programs support bunding and water conservation efforts.",
      contributor: "Kshama Shetty",
      other_details:
        "it not only conserves water for rice cultivation but also creates microhabitats that support biodiversity like frogs, fish, and beneficial insects in the field ecosystem.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [14.167, 75.0403],
    },
    properties: {
      type: "Sand Bores",
      region: "Sagara and Shivamogga districts, Karnataka",
      principle:
        "Wells dug in sandy riverbeds to extract water retained in sand pores",
      reasons:
        "Low cost, sustainable irrigation in dry seasons using naturally filtered water",
      images: "Image not available",
      advantages:
        "Environmentally friendly, cost-effective, avoids over-extraction of groundwater",
      revival:
        "Community training, awareness campaigns, and scientific placement of sand bores",
      government_initiatives:
        "Promoted by NGOs and included in decentralized water harvesting projects",
      contributor: "Soniya N",
      other_details:
        "Used widely along Sharavathi and Varada rivers; proven effective during dry spells",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.2, 12.8],
    },
    properties: {
      type: "Khattas: Traditional Temporary Check Dams",
      region:
        "Puttur, Sullia, and surrounding areas in the Dakshina Kannada district, Karnataka",
      principle:
        "Raises the water table by impounding water during the monsoon",
      reasons:
        "Helps in retaining water for agricultural and domestic use during dry periods",
      images:
        "https://gumlet.assettype.com/down-to-earth%2Fimport%2Flibrary%2Flarge%2F2020-02-27%2F0.80643000_1582803177_dams.jpg?w=1024&auto=format%2Ccompress&fit=max",
      advantages: "Eco-Friendly, Adaptability, Community Involvement",
      government_initiatives:
        "MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) Integration, 'Jalamrutha' Water Conservation Scheme, Incentive Program for Gram Panchayats",
      contributor: "Kavya",
      other_details:
        "Designed to last through the dry months (up to May or June), and are often rebuilt annually depending on monsoon damage",
    },
  },
];

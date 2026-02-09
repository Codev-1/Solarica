// Product Detail Page JavaScript

// Complete product data for all categories
const productData = {
    1: {
        title: "LED Solar Street Light 30W",
        description: "High-efficiency LED solar street light with motion sensor technology. Perfect for residential areas, pathways, and small roads. Features advanced battery management system and weather-resistant design.",
        image: "image_solarlights/img1.png",
        category: "Solar Street Lights",
        applications: [
            "Residential street lighting",
            "Pathway illumination",
            "Small road lighting",
            "Community area lighting",
            "Parking lot illumination"
        ],
        specifications: {
            "Power": "30W LED",
            "Luminous Flux": "3000-3500 lumens",
            "Color Temperature": "6000K",
            "Solar Panel": "60W monocrystalline",
            "Battery": "12V 30Ah lithium",
            "Charging Time": "6-8 hours",
            "Working Time": "10-12 hours",
            "IP Rating": "IP65",
            "Material": "Aluminum alloy",
            "Pole Height": "4-6 meters"
        },
        pricing: {
            "Base Price": "₹12,500",
            "Installation": "₹2,000",
            "Warranty": "3 Years",
            "Delivery": "Free within 50km",
            "Payment Terms": "50% Advance, 50% on Delivery"
        },
        features: [
            "Motion sensor technology",
            "Automatic on/off control",
            "Weather resistant design",
            "Long lifespan LED chips",
            "Efficient solar charging",
            "Low maintenance required",
            "Easy installation",
            "Eco-friendly operation"
        ]
    },
    2: {
        title: "Smart Solar Street Light 50W",
        description: "Advanced smart solar street light with remote monitoring capabilities and app control. Ideal for commercial areas and main roads with intelligent lighting management.",
        image: "image_solarlights/img2.jpg",
        category: "Solar Street Lights",
        applications: [
            "Commercial street lighting",
            "Main road illumination",
            "Highway lighting",
            "Industrial area lighting",
            "Smart city projects"
        ],
        specifications: {
            "Power": "50W Smart LED",
            "Luminous Flux": "5000-5500 lumens",
            "Color Temperature": "5700K-6500K",
            "Solar Panel": "100W monocrystalline",
            "Battery": "12V 50Ah lithium-ion",
            "Charging Time": "6-8 hours",
            "Working Time": "12-15 hours",
            "IP Rating": "IP66",
            "Material": "Die-cast aluminum",
            "Pole Height": "6-8 meters"
        },
        pricing: {
            "Base Price": "₹18,500",
            "Installation": "₹3,000",
            "Warranty": "5 Years",
            "Delivery": "Free within 50km",
            "Payment Terms": "50% Advance, 50% on Delivery"
        },
        features: [
            "Remote monitoring system",
            "Mobile app control",
            "Dimming functionality",
            "Real-time data tracking",
            "Fault detection alerts",
            "Energy optimization",
            "Cloud connectivity",
            "Advanced battery management"
        ]
    },
    3: {
        title: "All-in-One Solar Light 40W",
        description: "Compact all-in-one solar street light solution with integrated design. Perfect for areas where space is limited and easy installation is required.",
        image: "image_solarlights/img3.jpg",
        category: "Solar Street Lights",
        applications: [
            "Compact area lighting",
            "Garden pathways",
            "Residential compounds",
            "Small commercial spaces",
            "Emergency lighting"
        ],
        specifications: {
            "Power": "40W LED",
            "Luminous Flux": "4000-4500 lumens",
            "Color Temperature": "6000K",
            "Solar Panel": "Integrated 80W",
            "Battery": "Integrated LiFePO4 40Ah",
            "Charging Time": "6-7 hours",
            "Working Time": "10-12 hours",
            "IP Rating": "IP65",
            "Material": "Aluminum alloy",
            "Pole Height": "3-5 meters"
        },
        pricing: {
            "Base Price": "₹16,000",
            "Installation": "₹1,500",
            "Warranty": "3 Years",
            "Delivery": "Free within 50km",
            "Payment Terms": "50% Advance, 50% on Delivery"
        },
        features: [
            "All-in-one compact design",
            "PIR motion sensor",
            "Easy plug-and-play installation",
            "Maintenance-free operation",
            "Vandal-resistant design",
            "Multiple mounting options",
            "Energy-efficient operation",
            "Long battery life"
        ]
    },
    // Garden Lights (IDs 101-106)
    101: {
        title: "Solar Garden Pathway Light 5W",
        description: "Beautiful pathway lighting for gardens and walkways with warm white LED and rechargeable battery.",
        image: "gardenlights/img1.png",
        category: "Solar Garden Lights",
        specifications: {
            "Power": "5W LED",
            "Color Temperature": "3000K Warm White",
            "IP Rating": "IP65",
            "Battery": "Rechargeable Li-ion",
            "Material": "Weather Resistant Plastic",
            "Installation": "Ground Stake"
        },
        pricing: {
            "Base Price": "₹1,500",
            "Installation": "₹200",
            "Warranty": "2 Years",
            "Delivery": "Free within 25km",
            "Payment Terms": "100% Advance"
        },
        features: [
            "Warm white LED lighting",
            "Weather resistant design",
            "Easy ground stake installation",
            "Automatic dusk to dawn operation",
            "Long-lasting battery",
            "Low maintenance required"
        ]
    },
    102: {
        title: "Decorative Solar Garden Light 8W",
        description: "Decorative solar light with color changing features and remote control for beautiful garden ambiance.",
        image: "gardenlights/img2.png",
        category: "Solar Garden Lights",
        specifications: {
            "Power": "8W LED",
            "Features": "Color Changing",
            "Control": "Remote Control",
            "Battery": "Li-ion Battery",
            "Material": "Premium Plastic",
            "Installation": "Ground Stake"
        },
        pricing: {
            "Base Price": "₹2,200",
            "Installation": "₹200",
            "Warranty": "2 Years",
            "Delivery": "Free within 25km",
            "Payment Terms": "100% Advance"
        },
        features: [
            "Color changing LED",
            "Remote control operation",
            "Decorative design",
            "Weather resistant",
            "Easy installation",
            "Energy efficient"
        ]
    },
    103: {
        title: "Solar Bollard Light 10W",
        description: "Modern bollard design for contemporary gardens with dusk to dawn operation and weather resistant build.",
        image: "gardenlights/img3.png",
        category: "Solar Garden Lights",
        specifications: {
            "Power": "10W LED",
            "Design": "Modern Bollard",
            "Operation": "Dusk to Dawn",
            "Weather": "Weather Resistant",
            "Material": "Aluminum Alloy",
            "Installation": "Ground Mount"
        },
        pricing: {
            "Base Price": "₹3,500",
            "Installation": "₹300",
            "Warranty": "3 Years",
            "Delivery": "Free within 25km",
            "Payment Terms": "100% Advance"
        },
        features: [
            "Modern bollard design",
            "Aluminum alloy construction",
            "Dusk to dawn operation",
            "Weather resistant",
            "Professional appearance",
            "Long lifespan"
        ]
    },
    // Decorative Lights (IDs 201-206)
    201: {
        title: "Solar String Lights 10M",
        description: "Beautiful string lights for outdoor decoration and ambiance with 50 warm white LED bulbs.",
        image: "images/decorative-light-1.jpg",
        category: "Solar Decorative Lights",
        specifications: {
            "Power": "12W LED",
            "Length": "10 Meters",
            "Bulbs": "50 LED Bulbs",
            "Color": "Warm White",
            "Material": "Weatherproof Wire",
            "Installation": "Hanging"
        },
        pricing: {
            "Base Price": "₹2,800",
            "Installation": "₹500",
            "Warranty": "2 Years",
            "Delivery": "Free within 25km",
            "Payment Terms": "100% Advance"
        },
        features: [
            "50 warm white LEDs",
            "10 meter length",
            "Weatherproof design",
            "Easy hanging installation",
            "Perfect for parties",
            "Energy efficient"
        ]
    },
    202: {
        title: "Solar Fairy Lights 20M",
        description: "Flexible fairy lights with multiple color options and 200 LEDs for magical outdoor decoration.",
        image: "images/decorative-light-2.jpg",
        category: "Solar Decorative Lights",
        specifications: {
            "Power": "8W LED",
            "Length": "20 Meters",
            "LEDs": "200 LEDs",
            "Colors": "Multi-Color",
            "Material": "Flexible Wire",
            "Installation": "Flexible Mounting"
        },
        pricing: {
            "Base Price": "₹3,200",
            "Installation": "₹400",
            "Warranty": "2 Years",
            "Delivery": "Free within 25km",
            "Payment Terms": "100% Advance"
        },
        features: [
            "200 multi-color LEDs",
            "20 meter flexible wire",
            "Multiple color modes",
            "Flexible installation",
            "Magical ambiance",
            "Solar powered"
        ]
    },
    // Flood Lights (IDs 301-306)
    301: {
        title: "Solar Flood Light 50W",
        description: "High-power flood light for large area illumination with remote control and IP66 rating.",
        image: "images/flood-light-1.jpg",
        category: "Solar Flood Lights",
        specifications: {
            "Power": "50W LED",
            "Luminous Output": "5000 Lumens",
            "IP Rating": "IP66",
            "Control": "Remote Control",
            "Material": "Aluminum Alloy",
            "Installation": "Ground Mount"
        },
        pricing: {
            "Base Price": "₹8,500",
            "Installation": "₹1,000",
            "Warranty": "3 Years",
            "Delivery": "Free within 50km",
            "Payment Terms": "50% Advance, 50% on Delivery"
        },
        features: [
            "High-power 50W LED",
            "5000 lumens output",
            "IP66 waterproof rating",
            "Remote control operation",
            "Aluminum alloy housing",
            "Professional grade"
        ]
    },
    302: {
        title: "Solar Security Flood Light 100W",
        description: "Security flood light with motion detection and dusk to dawn operation for enhanced security.",
        image: "flood lights/img2.jpeg",
        category: "Solar Flood Lights",
        specifications: {
            "Power": "100W LED",
            "Luminous Output": "10000 Lumens",
            "Sensor": "Motion Sensor",
            "Operation": "Dusk to Dawn",
            "Material": "Heavy Duty Aluminum",
            "Installation": "Wall Mount"
        },
        pricing: {
            "Base Price": "₹15,500",
            "Installation": "₹1,500",
            "Warranty": "3 Years",
            "Delivery": "Free within 50km",
            "Payment Terms": "50% Advance, 50% on Delivery"
        },
        features: [
            "100W high-power LED",
            "10000 lumens brightness",
            "Motion sensor technology",
            "Dusk to dawn operation",
            "Security grade construction",
            "Heavy duty aluminum"
        ]
    },
    3: {
        title: "All-in-One Solar Light 40W",
        description: "Compact all-in-one solar street light solution with integrated design and PIR sensor technology.",
        image: "image_solarlights/img3.jpg",
        category: "Solar Street Lights",
        applications: [
            "Residential streets",
            "Small commercial areas",
            "Parking lots",
            "Walkways",
            "Garden pathways"
        ],
        specifications: {
            "Power": "40W LED",
            "Design": "All-in-One",
            "Sensor": "PIR Motion Sensor",
            "Battery": "LiFePO4",
            "Luminous Flux": "4000-4500 lumens",
            "Color Temperature": "6000K",
            "Charging Time": "6-8 hours",
            "Working Time": "10-12 hours",
            "IP Rating": "IP65",
            "Installation": "Integrated"
        },
        pricing: {
            "Base Price": "₹16,000",
            "Original Price": "₹19,000",
            "Discount": "16% OFF",
            "Installation": "₹1,500",
            "Warranty": "3 Years"
        },
        features: [
            "All-in-one compact design",
            "PIR motion sensor",
            "LiFePO4 battery technology",
            "Easy installation",
            "Weather resistant",
            "Energy efficient operation"
        ]
    },
    4: {
        title: "Motion Sensor Solar Light 25W",
        description: "Wall-mounted solar light with advanced motion detection technology perfect for security applications.",
        image: "image_solarlights/img4.png",
        category: "Solar Street Lights",
        applications: [
            "Security lighting",
            "Wall mounting",
            "Entrance lighting",
            "Perimeter security",
            "Motion detection areas"
        ],
        specifications: {
            "Power": "25W LED",
            "Sensor": "PIR Motion Sensor",
            "Installation": "Wall Mount",
            "Battery": "Li-ion Battery",
            "Detection Range": "6-8 meters",
            "Luminous Flux": "2500-3000 lumens",
            "Color Temperature": "6000K",
            "Charging Time": "6-8 hours",
            "Working Time": "8-10 hours",
            "IP Rating": "IP65"
        },
        pricing: {
            "Base Price": "₹9,500",
            "Original Price": "₹11,000",
            "Discount": "14% OFF",
            "Installation": "₹800",
            "Warranty": "2 Years"
        },
        features: [
            "Advanced motion detection",
            "Wall-mounted design",
            "Security focused",
            "Energy saving mode",
            "Weather resistant",
            "Easy installation"
        ]
    },
    5: {
        title: "High Power Solar Light 80W",
        description: "High-power solar street light designed for main roads and highways with maximum brightness output.",
        image: "image_solarlights/img5.png",
        category: "Solar Street Lights",
        applications: [
            "Main roads",
            "Highways",
            "Large parking areas",
            "Industrial areas",
            "Commercial districts"
        ],
        specifications: {
            "Power": "80W LED",
            "Brightness": "High Output",
            "IP Rating": "IP67",
            "Battery": "Lithium Battery",
            "Luminous Flux": "8000-9000 lumens",
            "Color Temperature": "6000K",
            "Solar Panel": "120W monocrystalline",
            "Charging Time": "6-8 hours",
            "Working Time": "10-12 hours",
            "Pole Height": "6-8 meters"
        },
        pricing: {
            "Base Price": "₹28,000",
            "Original Price": "₹32,000",
            "Discount": "13% OFF",
            "Installation": "₹3,000",
            "Warranty": "5 Years"
        },
        features: [
            "High power 80W LED",
            "Maximum brightness output",
            "IP67 weatherproof",
            "Heavy duty construction",
            "Highway grade quality",
            "Long lifespan"
        ]
    },
    // Product 6 removed - image file doesn't exist
    /*6: {
        title: "Compact Solar Light 20W",
        description: "Compact and affordable solar street light perfect for residential areas with easy installation.",
        image: "image_solarlights/img6.png",
        category: "Solar Street Lights",
        applications: [
            "Residential areas",
            "Small streets",
            "Garden lighting",
            "Pathway illumination",
            "Budget installations"
        ],
        specifications: {
            "Power": "20W LED",
            "Design": "Compact",
            "Installation": "Easy Install",
            "Battery": "Li-ion Battery",
            "Luminous Flux": "2000-2500 lumens",
            "Color Temperature": "6000K",
            "Solar Panel": "40W monocrystalline",
            "Charging Time": "6-8 hours",
            "Working Time": "8-10 hours",
            "IP Rating": "IP65"
        },
        pricing: {
            "Base Price": "₹8,500",
            "Original Price": "₹10,000",
            "Discount": "15% OFF",
            "Installation": "₹700",
            "Warranty": "2 Years"
        },
        features: [
            "Compact design",
            "Affordable pricing",
            "Easy installation",
            "Residential grade",
            "Energy efficient",
            "Low maintenance"
        ]
    },*/
    // Garden Lights (101-106)
    101: {
        title: "SOLAR GARDEN LIGHT (Fire)",
        description: "Beautiful pathway lighting for gardens and walkways with warm white LED and automatic on/off control.",
        image: "gardenlights/img1.png",
        category: "Solar Garden Lights",
        applications: ["Garden pathways", "Walkway lighting", "Landscape decoration", "Outdoor ambiance"],
        specifications: {
            "No of LED": "96 nos.",
    "Battery": "Lithium Ion Life p04-3.7V, 2000mAH",
    "Solar Panel": "5.5V - 1.3Watt Polycrystalline",
    "Backup and Charging time": "Charging Time 6-8 Hours with Backup of up to 8 hours",
    "Material Details": "Light Body Fiber, Pole/Stand material available in Plastic body with 2.5 mm thick and also with MS Pipe with thickness of 2.5MM. Stand Size 130*780mm with stand",
    "Warranty": "1 year Warranty",
    "Other Details": "Dusk to Dawn Sensor, Auto Mode enabled"
        },
        pricing: {
    "Base Price": "₹1,150",
    "GST": "12%",
    "Transport": "At actual (to pay)"
  },
        features: ["Automatic on/off", "Weather resistant", "Easy installation", "Energy efficient"]
    },
    102: {
        title: "GARDEN LIGHT",
        description: "Decorative solar light with color changing features and remote control for beautiful garden ambiance.",
        image: "gardenlights/img2.png",
        category: "Solar Garden Lights",
        applications: ["Garden decoration", "Party lighting", "Landscape design", "Outdoor events"],
        specifications: {
           "Solar Panel": "2V 50mA Poly",
    "Battery": "AA Ni-MH 1.2V 600mAh",
    "Size": "5.5 × 37 cm",
    "Light Color": "Yellow / RGB",
    "Charging Time": "4–6 Hours",
    "Lighting Time": "6–8 Hours"
        },
        pricing: {
            "Base Price": "₹349 (including GST)",
    "Transport": "To pay at actual"
        },
        features: ["Color changing", "Remote control", "Weather resistant", "Decorative design"]
    },
    103: {
        title: "SOLAR GARDEN LIGHT (Fire)",
        description: "Modern bollard design solar light perfect for driveways and garden borders with high brightness LED.",
        image: "gardenlights/img3.png",
        category: "Solar Garden Lights",
        applications: ["Driveway lighting", "Garden borders", "Pathway marking", "Security lighting"],
        specifications: {
           "No of LED": "96 nos.",
    "Battery": "Lithium Ion Life p04-3.7V, 2000mAH",
    "Solar Panel": "5.5V - 1.3Watt Polycrystalline",
    "Backup and Charging time": "Charging Time 6-8 Hours with Backup of Up to 8 hours",
    "Material Details": "Light Body Fiber, Pole/Stand material available in Plastic body with 2.5 mm thick and also with MS Pipe with thickness of 2.5MM. Stand Size 130*780mm with stand",
    "Warranty": "1 year Warranty",
    "Other Details": "Dusk to Dawn Sensor, Auto Mode enabled"
        },
        pricing: {
            "Base Price": "₹7,500",
    "GST": "12%",
    "Transport": "At actual (to pay)"
        },
        features: ["Modern design", "High brightness", "Durable construction", "Easy maintenance"]
    },
    104: {
        title: "GARDEN LIGHT",
        description: "Adjustable spike light for highlighting plants and garden features with focused beam lighting.",
        image: "gardenlights/img4.png",
        category: "Solar Garden Lights",
        applications: ["Plant highlighting", "Tree lighting", "Garden features", "Accent lighting"],
        specifications: {
           "Solar Panel": "2V 0.35W Poly",
    "Battery": "AA Ni-MH 1.2V 600mAh",
    "Size": "8.5 × 36 cm",
    "Light Color": "Cool White",
    "Charging Time": "4–6 Hours",
    "Lighting Time": "6–8 Hours",
    "Sensor": "Dawn to Dusk Sensor"
        },
        pricing: {
           "Base Price": "₹349 + GST 12% (per piece)",
    "Transport": "To pay at actual"
        },
        features: ["Adjustable beam", "Ground spike", "Plant highlighting", "Weather resistant"]
    },
    105: {
        title: "SOLAR GARDEN LIGHT",
        description: "Traditional lantern style solar light with vintage design perfect for creating classic garden ambiance.",
        image: "gardenlights/img5.png",
        category: "Solar Garden Lights",
        applications: ["Garden decoration", "Vintage lighting", "Patio ambiance", "Traditional design"],
        specifications: {
            "No. of LED": "240 nos.",
    "Solar Panel": "6V 18W Poly",
    "Battery": "Life PO4 3.2V 18Ah",
    "LED Power": "120W",
    "Light Color": "Cool White",
    "Charging Time": "6–8 Hours",
    "Lighting Time": "10–12 Hours",
    "Dimension": "42 cm Round",
    "Sensors": ["Motion Sensor", "Dawn to Dusk Sensor"],
    "Beam Angle": "120°",
    "Install Height": "3–5 m",
    "Application": "Outdoor",
    "Pole": "Not Included"
        },
        pricing: {
           "Base Price": "₹5,049 (including GST)",
    "Transport": "To pay at actual",
    "Pole": "Not included"
        },
        features: ["Vintage design", "Traditional style", "High quality materials", "Classic ambiance"]
    },
    106: {
        title: "SOLAR GARDEN LIGHT",
        description: "Decorative string lights with multiple LED bulbs perfect for parties and outdoor celebrations.",
        image: "gardenlights/img6.png",
        category: "Solar Garden Lights",
        applications: ["Party decoration", "Outdoor events", "Garden parties", "Festival lighting"],
        specifications: {
            "Solar Panel": "2V 0.35W Poly",
    "Battery": "AA Ni-MH 1.2V 600mAh",
    "Size": "10 × 44 cm",
    "Light Color": "Warm Yellow",
    "Charging Time": "4–6 Hours",
    "Lighting Time": "6–8 Hours"
        },
        pricing: {
            "Base Price": "₹349 (including GST)",
    "Transport": "To pay at actual"
        },
        features: ["String design", "Multiple modes", "Party lighting", "Easy installation"]
    },
    // Decorative Lights (201-206)
    201: {
        title: "Solar String Light 10M",
        description: "Beautiful string lights with warm white LEDs perfect for creating magical outdoor ambiance.",
        image: "decorativelights/l1.jpg",
        category: "Solar Decorative Lights",
        applications: ["Garden decoration", "Party lighting", "Wedding decoration", "Festival lighting"],
        specifications: {
            "Power": "12W LED",
            "Length": "10 meters",
            "LEDs": "50 Fairy lights",
            "Color": "Warm White",
            "Modes": "8 Flash modes"
        },
        pricing: {
            "Base Price": "₹3,500",
            "Installation": "₹400",
            "Warranty": "2 Years"
        },
        features: ["String lights", "Multiple modes", "Long length", "Magical ambiance"]
    },
    202: {
        title: "Solar Fairy Light 20M",
        description: "Elegant curtain-style decorative lights perfect for backdrop decoration and outdoor events.",
        image: "decorativelights/l2.jpg",
        category: "Solar Decorative Lights",
        applications: ["Backdrop decoration", "Wedding events", "Party decoration", "Outdoor celebrations"],
        specifications: {
            "Power": "8W LED",
            "Size": "3m x 3m",
            "LEDs": "200 LED lights",
            "Pattern": "Curtain style",
            "Control": "Remote control"
        },
        pricing: {
            "Base Price": "₹4,800",
            "Installation": "₹600",
            "Warranty": "2 Years"
        },
        features: ["Fairy design", "Remote control", "Large coverage", "Event decoration"]
    },
    203: {
        title: "Solar Curtain Light 15W",
        description: "Curtain-style decorative lights perfect for covering large areas with uniform lighting distribution.",
        image: "decorativelights/scurt.jpg",
        category: "Solar Decorative Lights",
        applications: ["Large area coverage", "Bush decoration", "Wall decoration", "Uniform lighting"],
        specifications: {
            "Power": "15W LED",
            "Size": "2m x 1.5m",
            "LEDs": "300 LED lights",
            "Pattern": "Cutain mesh",
            "IP Rating": "Waterproof"
        },
        pricing: {
            "Base Price": "₹3,200",
            "Installation": "₹400",
            "Warranty": "2 Years"
        },
        features: ["Net pattern", "Large coverage", "Uniform lighting", "Weather resistant"]
    },
    204: {
        title: "Solar Net Light 22W",
        description: "Net-style hanging lights perfect for roof edges and creating winter wonderland effects.",
        image: "decorativelights/snet.jpg",
        category: "Solar Decorative Lights",
        applications: ["Roof decoration", "Winter themes", "Holiday lighting", "Hanging decoration"],
        specifications: {
            "Power": "10W LED",
            "Length": "5 meters",
            "Drops": "20 Icicle drops",
            "Style": "Hanging icicles",
            "Color": "Cool white"
        },
        pricing: {
            "Base Price": "₹4,200",
            "Installation": "₹500",
            "Warranty": "2 Years"
        },
        features: ["Icicle design", "Hanging style", "Winter effect", "Roof decoration"]
    },
    205: {
        title: "Solar ICICLE Light 18W",
        description: "Colorful butterfly-shaped decorative lights that add whimsical charm to any garden space.",
        image: "decorativelights/icicle.jpg",
        category: "Solar Decorative Lights",
        applications: ["Garden decoration", "Children's areas", "Whimsical lighting", "Nature themes"],
        specifications: {
            "Power": "18W LED",
            "Design": "Butterfly shapes",
            "Colors": "Multi-color",
            "Quantity": "12 butterflies",
            "Animation": "Color changing"
        },
        pricing: {
            "Base Price": "₹2,800",
            "Installation": "₹300",
            "Warranty": "2 Years"
        },
        features: ["Butterfly design", "Color changing", "Whimsical charm", "Garden decoration"]
    },
    206: {
        title: "Solar Motif Lights 25W",
        description: "Beautiful flower-shaped lights that bloom with color, perfect for garden and patio decoration.",
        image: "decorativelights/motif.jpg",
        category: "Solar Decorative Lights",
        applications: ["Garden decoration", "Patio lighting", "Flower bed accent", "Decorative lighting"],
        specifications: {
            "Power": "25W LED",
            "Design": "Custom Motifs",
            "Colors": "RGB colors",
            "Quantity": "8 flowers",
            "Effect": "Blooming effect"
        },
        pricing: {
            "Base Price": "₹3,800",
            "Installation": "₹400",
            "Warranty": "2 Years"
        },
        features: ["Flower design", "RGB colors", "Blooming effect", "Garden accent"]
    },
    // Flood Lights (301-306)
    301: {
        title: "Solar Flood Light 50W",
        description: "High-power solar flood light perfect for large area illumination with motion sensor technology.",
        image: "flood lights/img1.jpeg",
        category: "Solar Flood Lights",
        applications: ["Large area lighting", "Security lighting", "Commercial spaces", "Outdoor events"],
        specifications: {
            "Power": "50W LED",
            "Lumens": "5000 lumens",
            "Sensor": "Motion sensor",
            "Battery": "Lithium 20Ah",
            "IP Rating": "IP66"
        },
        pricing: {
            "Base Price": "₹8,500",
            "Installation": "₹800",
            "Warranty": "3 Years"
        },
        features: ["High brightness", "Motion sensor", "Weather resistant", "Large coverage"]
    },
    302: {
        title: "Solar Security Flood Light 100W",
        description: "Security flood light with motion detection and high-power LED for maximum coverage.",
        image: "flood lights/img2.jpeg",
        category: "Solar Flood Lights",
        applications: ["Security lighting", "Perimeter lighting", "Entrance lighting", "Surveillance areas"],
        specifications: {
            "Power": "100W LED",
            "Lumens": "10000 lumens",
            "Sensor": "Motion Sensor",
            "Operation": "Dusk to Dawn",
            "IP Rating": "IP66"
        },
        pricing: {
            "Base Price": "₹12,500",
            "Installation": "₹1,200",
            "Warranty": "3 Years"
        },
        features: ["Motion sensor", "High brightness", "Security focused", "Dusk to dawn"]
    },
    303: {
        title: "Solar Stadium Light 200W",
        description: "Professional stadium lighting for sports facilities with wide beam coverage.",
        image: "flood lights/img3.jpg",
        category: "Solar Flood Lights",
        applications: ["Stadium lighting", "Sports facilities", "Large area coverage", "Professional use"],
        specifications: {
            "Power": "200W LED",
            "Lumens": "20000 lumens",
            "Grade": "Professional",
            "Beam": "Wide Beam",
            "Installation": "Pole Mount"
        },
        pricing: {
            "Base Price": "₹25,000",
            "Installation": "₹2,500",
            "Warranty": "5 Years"
        },
        features: ["Professional grade", "Wide beam", "Stadium use", "High power"]
    },
    304: {
        title: "Solar RGB Flood Light 75W",
        description: "RGB color changing flood light with smartphone control for decorative lighting.",
        image: "flood lights/img4.jpg",
        category: "Solar Flood Lights",
        applications: ["Decorative lighting", "Event lighting", "Color effects", "Smart control"],
        specifications: {
            "Power": "75W RGB LED",
            "Colors": "16 Million Colors",
            "Control": "App Control",
            "Features": "Color Changing",
            "IP Rating": "IP65"
        },
        pricing: {
            "Base Price": "₹15,000",
            "Installation": "₹1,500",
            "Warranty": "3 Years"
        },
        features: ["RGB colors", "App control", "Color changing", "Smart features"]
    },
    305: {
        title: "Solar Emergency Flood Light 30W",
        description: "Portable emergency flood light with backup power and USB charging capability.",
        image: "flood lights/img5.jpg",
        category: "Solar Flood Lights",
        applications: ["Emergency lighting", "Portable use", "Backup power", "Outdoor activities"],
        specifications: {
            "Power": "30W LED",
            "Design": "Portable",
            "Backup": "Emergency Power",
            "Charging": "USB Port",
            "Battery": "Lithium"
        },
        pricing: {
            "Base Price": "₹8,000",
            "Installation": "₹0",
            "Warranty": "2 Years"
        },
        features: ["Portable design", "Emergency backup", "USB charging", "Lightweight"]
    },
    // Product 306 removed - only 5 images available
    /*306: {
        title: "Solar Bollard Flood Light 40W",
        description: "Bollard-style flood light perfect for pathway and landscape lighting applications.",
        image: "images/flood-light-6.jpg",
        category: "Solar Flood Lights",
        applications: ["Pathway lighting", "Landscape lighting", "Garden borders", "Decorative use"],
        specifications: {
            "Power": "40W LED",
            "Style": "Bollard Design",
            "Height": "80cm",
            "Material": "Aluminum",
            "IP Rating": "IP65"
        },
        pricing: {
            "Base Price": "₹9,500",
            "Installation": "₹950",
            "Warranty": "3 Years"
        },
        features: ["Bollard design", "Pathway lighting", "Decorative style", "Durable construction"]
    },*/
    // Water Pumps (401-406)
    401: {
        title: "Solar Submersible Pump 3HP",
        description: "High-efficiency solar submersible pump for agricultural irrigation with MPPT controller.",
        image: "spump/1.png",
        category: "Solar Water Pumps",
        applications: ["Agriculture irrigation", "Well water pumping", "Farm irrigation", "Rural water supply"],
        specifications: {
            "Power": "3HP Motor",
            "Type": "Submersible",
            "Head": "100 meters",
            "Flow Rate": "5000 LPH",
            "Controller": "MPPT"
        },
        pricing: {
            "Base Price": "₹85,000",
            "Installation": "₹8,000",
            "Warranty": "5 Years"
        },
        features: ["High efficiency", "MPPT controller", "Agriculture use", "Long lifespan"]
    },
    402: {
        title: "Solar Surface Pump 5HP",
        description: "Reliable surface pump for domestic water supply needs with easy maintenance.",
        image: "spump/2.png",
        category: "Solar Water Pumps",
        applications: ["Domestic use", "Water supply", "Tank filling", "Irrigation systems"],
        specifications: {
            "Power": "5HP Motor",
            "Type": "Surface Mount",
            "Head": "80 meters",
            "Flow Rate": "8000 LPH",
            "Material": "Cast Iron"
        },
        pricing: {
            "Base Price": "₹95,000",
            "Installation": "₹9,500",
            "Warranty": "5 Years"
        },
        features: ["Surface mount", "Domestic use", "Easy maintenance", "High reliability"]
    },
    403: {
        title: "Solar Borewell Pump 7HP",
        description: "Heavy-duty borewell pump for industrial applications with robust construction.",
        image: "spump/3.png",
        category: "Solar Water Pumps",
        applications: ["Industrial use", "Borewell pumping", "Heavy duty", "Commercial use"],
        specifications: {
            "Power": "7HP Motor",
            "Type": "Borewell",
            "Head": "150 meters",
            "Flow Rate": "12000 LPH",
            "Grade": "Industrial"
        },
        pricing: {
            "Base Price": "₹125,000",
            "Installation": "₹12,500",
            "Warranty": "5 Years"
        },
        features: ["Industrial grade", "Heavy duty", "Borewell use", "High performance"]
    },
    404: {
        title: "Solar Centrifugal Pump 2HP",
        description: "Compact centrifugal pump for residential water supply with energy efficient design.",
        image: "spump/4.png",
        category: "Solar Water Pumps",
        applications: ["Residential use", "Water supply", "Compact design", "Energy efficient"],
        specifications: {
            "Power": "2HP Motor",
            "Type": "Centrifugal",
            "Head": "40 meters",
            "Flow Rate": "4000 LPH",
            "Design": "Compact"
        },
        pricing: {
            "Base Price": "₹55,000",
            "Installation": "₹5,500",
            "Warranty": "5 Years"
        },
        features: ["Centrifugal design", "Compact size", "Energy efficient", "Residential use"]
    },
    405: {
        title: "Solar Deep Well Pump 10HP",
        description: "High-power deep well pump for large-scale water extraction and irrigation systems.",
        image: "spump/5.png",
        category: "Solar Water Pumps",
        applications: ["Deep well", "Large scale", "Irrigation", "Commercial use"],
        specifications: {
            "Power": "10HP Motor",
            "Type": "Deep Well",
            "Head": "200 meters",
            "Flow Rate": "15000 LPH",
            "Grade": "Commercial"
        },
        pricing: {
            "Base Price": "₹175,000",
            "Installation": "₹17,500",
            "Warranty": "5 Years"
        },
        features: ["High power", "Deep well use", "Large scale", "Commercial grade"]
    },
    406: {
        title: "Solar Pool Pump 1HP",
        description: "Specialized pool pump for swimming pool filtration and water circulation systems.",
        image: "spump/6.png",
        category: "Solar Water Pumps",
        applications: ["Pool filtration", "Water circulation", "Swimming pools", "Spa systems"],
        specifications: {
            "Power": "1HP Motor",
            "Type": "Pool Pump",
            "Flow Rate": "2000 LPH",
            "Application": "Pool",
            "Features": "Filtration"
        },
        pricing: {
            "Base Price": "₹45,000",
            "Installation": "₹4,500",
            "Warranty": "3 Years"
        },
        features: ["Pool specific", "Filtration system", "Water circulation", "Spa compatible"]
    },
    // Water Heaters (501-506)
    501: {
        title: "Solar Water Heater 200L",
        description: "High-efficiency solar water heater for residential use with flat plate collector technology.",
        image: "heater/1.jpg",
        category: "Solar Water Heater",
        applications: ["Residential use", "Hot water supply", "Bathroom heating", "Kitchen use"],
        specifications: {
            "Capacity": "200 Liters",
            "Collector": "Flat Plate",
            "Installation": "Rooftop",
            "Material": "Stainless Steel",
            "Efficiency": "High"
        },
        pricing: {
            "Base Price": "₹35,000",
            "Installation": "₹3,500",
            "Warranty": "5 Years"
        },
        features: ["200L capacity", "Flat plate collector", "High efficiency", "Residential grade"]
    },
    502: {
        title: "Solar Water Heater 300L",
        description: "Premium evacuated tube solar water heater for large families with superior heat retention.",
        image: "heater/2.jpg",
        category: "Solar Water Heater",
        applications: ["Large families", "Commercial use", "Hotels", "Guest houses"],
        specifications: {
            "Capacity": "300 Liters",
            "Collector": "Evacuated Tube",
            "Tubes": "24 tubes",
            "Insulation": "PUF",
            "Efficiency": "Premium"
        },
        pricing: {
            "Base Price": "₹48,000",
            "Installation": "₹4,800",
            "Warranty": "5 Years"
        },
        features: ["300L capacity", "Evacuated tubes", "Superior efficiency", "Commercial grade"]
    },
    503: {
        title: "Solar Water Heater 500L",
        description: "Commercial grade solar water heater for hotels and institutions with ground mount installation.",
        image: "heater/3.jpg",
        category: "Solar Water Heater",
        applications: ["Hotels", "Institutions", "Commercial use", "Large buildings"],
        specifications: {
            "Capacity": "500 Liters",
            "Collector": "Flat Plate",
            "Installation": "Ground Mount",
            "Grade": "Commercial",
            "Material": "Heavy Duty"
        },
        pricing: {
            "Base Price": "₹75,000",
            "Installation": "₹7,500",
            "Warranty": "5 Years"
        },
        features: ["500L capacity", "Commercial grade", "Ground mount", "Heavy duty"]
    },
    504: {
        title: "Compact Solar Heater 150L",
        description: "Compact thermosiphon solar water heater for small homes with easy wall mount installation.",
        image: "heater/4.jpg",
        category: "Solar Water Heater",
        applications: ["Small homes", "Apartments", "Compact spaces", "Wall mounting"],
        specifications: {
            "Capacity": "150 Liters",
            "Type": "Thermosiphon",
            "Design": "Compact",
            "Installation": "Wall Mount",
            "Size": "Space Saving"
        },
        pricing: {
            "Base Price": "₹28,000",
            "Installation": "₹2,800",
            "Warranty": "3 Years"
        },
        features: ["Compact design", "Thermosiphon", "Wall mount", "Space saving"]
    },
    505: {
        title: "Solar Water Heater 400L",
        description: "High-performance evacuated tube heater for medium-sized buildings with excellent efficiency.",
        image: "heater/5.jpg",
        category: "Solar Water Heater",
        applications: ["Medium buildings", "Guest houses", "Hostels", "Commercial use"],
        specifications: {
            "Capacity": "400 Liters",
            "Collector": "Evacuated Tube",
            "Performance": "High",
            "Efficiency": "Excellent",
            "Tubes": "30 tubes"
        },
        pricing: {
            "Base Price": "₹62,000",
            "Installation": "₹6,200",
            "Warranty": "5 Years"
        },
        features: ["400L capacity", "High performance", "Evacuated tubes", "Excellent efficiency"]
    },
    506: {
        title: "Solar Water Heater 100L",
        description: "Budget-friendly solar water heater for small families with reliable flat plate technology.",
        image: "heater/6.jpg",
        category: "Solar Water Heater",
        applications: ["Small families", "Budget homes", "Basic needs", "Starter homes"],
        specifications: {
            "Capacity": "100 Liters",
            "Collector": "Flat Plate",
            "Category": "Budget Friendly",
            "Quality": "Reliable",
            "Installation": "Simple"
        },
        pricing: {
            "Base Price": "₹22,000",
            "Installation": "₹2,200",
            "Warranty": "3 Years"
        },
        features: ["100L capacity", "Budget friendly", "Flat plate", "Reliable quality"]
    },
    // Solar Inverters (601-606)
    601: {
        title: "Solar String Inverter 5KW",
        description: "High-efficiency string inverter for residential solar installations with MPPT technology.",
        image: "inverter/1.png",
        category: "Solar Inverter",
        applications: ["Residential solar", "Home systems", "Small commercial", "Grid-tie systems"],
        specifications: {
            "Power": "5KW",
            "Type": "String Inverter",
            "Efficiency": "97.5%",
            "MPPT": "2 Trackers",
            "Display": "LCD"
        },
        pricing: {
            "Base Price": "₹45,000",
            "Installation": "₹4,500",
            "Warranty": "5 Years"
        },
        features: ["High efficiency", "MPPT technology", "Residential use", "Grid-tie capable"]
    },
    602: {
        title: "Solar Hybrid Inverter 10KW",
        description: "Advanced hybrid inverter with battery backup capability for commercial applications.",
        image: "inverter/2.png",
        category: "Solar Inverter",
        applications: ["Commercial use", "Hybrid systems", "Battery backup", "Grid-tie with storage"],
        specifications: {
            "Power": "10KW",
            "Type": "Hybrid",
            "Battery": "Compatible",
            "Efficiency": "98%",
            "Monitoring": "WiFi"
        },
        pricing: {
            "Base Price": "₹85,000",
            "Installation": "₹8,500",
            "Warranty": "5 Years"
        },
        features: ["Hybrid technology", "Battery compatible", "Commercial grade", "WiFi monitoring"]
    },
    603: {
        title: "Solar Micro Inverter 300W",
        description: "Panel-level micro inverter for maximum energy harvest with individual panel optimization.",
        image: "inverter/3.png",
        category: "Solar Inverter",
        applications: ["Panel level", "Maximum harvest", "Individual optimization", "High performance"],
        specifications: {
            "Power": "300W",
            "Type": "Micro Inverter",
            "Level": "Panel Level",
            "Efficiency": "96%",
            "Monitoring": "Individual"
        },
        pricing: {
            "Base Price": "₹8,500",
            "Installation": "₹850",
            "Warranty": "10 Years"
        },
        features: ["Panel level", "Micro technology", "Individual monitoring", "High performance"]
    },
    604: {
        title: "Solar String Inverter 20KW",
        description: "Industrial grade string inverter for large-scale installations with three-phase output.",
        image: "inverter/4.png",
        category: "Solar Inverter",
        applications: ["Industrial use", "Large scale", "Three phase", "Heavy duty"],
        specifications: {
            "Power": "20KW",
            "Type": "String Inverter",
            "Phase": "Three Phase",
            "Grade": "Industrial",
            "Output": "Heavy Duty"
        },
        pricing: {
            "Base Price": "₹125,000",
            "Installation": "₹12,500",
            "Warranty": "5 Years"
        },
        features: ["Industrial grade", "Three phase", "Heavy duty", "Large scale"]
    },
    605: {
        title: "Solar Hybrid Inverter 3KW",
        description: "Compact hybrid inverter with advanced MPPT technology for small residential systems.",
        image: "inverter/5.png",
        category: "Solar Inverter",
        applications: ["Small residential", "Hybrid system", "MPPT technology", "Smart control"],
        specifications: {
            "Power": "3KW",
            "Type": "Hybrid System",
            "Technology": "MPPT",
            "Control": "Smart",
            "Size": "Compact"
        },
        pricing: {
            "Base Price": "₹35,000",
            "Installation": "₹3,500",
            "Warranty": "5 Years"
        },
        features: ["Compact size", "MPPT technology", "Smart control", "Hybrid system"]
    },
    606: {
        title: "Solar String Inverter 50KW",
        description: "High-power string inverter for commercial solar projects with monitoring capabilities.",
        image: "inverter/6.png",
        category: "Solar Inverter",
        applications: ["Commercial projects", "High power", "Monitoring", "Large installations"],
        specifications: {
            "Power": "50KW",
            "Type": "String Inverter",
            "Grade": "Commercial",
            "Monitoring": "Advanced",
            "Voltage": "High"
        },
        pricing: {
            "Base Price": "₹285,000",
            "Installation": "₹28,500",
            "Warranty": "5 Years"
        },
        features: ["High power", "Commercial grade", "Advanced monitoring", "Large installations"]
    },
    // Solar Panels (701-706)
    701: {
        title: "Monocrystalline Solar Panel 400W",
        description: "High-efficiency monocrystalline solar panel with 22% efficiency for residential installations.",
        image: "images/panel-1.jpg",
        category: "Solar Panels",
        applications: ["Residential solar", "Rooftop systems", "Grid-tie systems", "Off-grid systems"],
        specifications: {
            "Power": "400W",
            "Technology": "Monocrystalline",
            "Efficiency": "22%",
            "Cells": "72 cells",
            "Warranty": "25 Years"
        },
        pricing: {
            "Base Price": "₹18,000",
            "Installation": "₹1,800",
            "Warranty": "25 Years"
        },
        features: ["High efficiency", "Monocrystalline", "25 year warranty", "Residential grade"]
    },
    702: {
        title: "Polycrystalline Solar Panel 320W",
        description: "Cost-effective polycrystalline solar panel for commercial applications with reliable performance.",
        image: "images/panel-2.jpg",
        category: "Solar Panels",
        applications: ["Commercial solar", "Large installations", "Industrial use", "Utility scale"],
        specifications: {
            "Power": "320W",
            "Technology": "Polycrystalline",
            "Efficiency": "19%",
            "Cells": "72 cells",
            "Frame": "Aluminum"
        },
        pricing: {
            "Base Price": "₹14,000",
            "Installation": "₹1,400",
            "Warranty": "25 Years"
        },
        features: ["Cost effective", "Polycrystalline", "Commercial grade", "Reliable performance"]
    },
    703: {
        title: "Bifacial Solar Panel 500W",
        description: "Advanced bifacial solar panel for utility-scale installations with dual-sided energy generation.",
        image: "panel/s1.jpg",
        category: "Solar Panels",
        applications: ["Utility scale", "Bifacial technology", "Dual sided", "High efficiency"],
        specifications: {
            "Power": "500W",
            "Technology": "Bifacial",
            "Efficiency": "24%",
            "Sides": "Dual Sided",
            "Grade": "Utility"
        },
        pricing: {
            "Base Price": "₹22,000",
            "Installation": "₹2,200",
            "Warranty": "25 Years"
        },
        features: ["Bifacial technology", "Dual sided", "High efficiency", "Utility scale"]
    },
    704: {
        title: "Monocrystalline Solar Panel 300W",
        description: "Compact monocrystalline panel perfect for small rooftops with excellent efficiency.",
        image: "panel/s2.jpg",
        category: "Solar Panels",
        applications: ["Small rooftops", "Compact size", "Residential use", "Space efficient"],
        specifications: {
            "Power": "300W",
            "Technology": "Monocrystalline",
            "Size": "Compact",
            "Efficiency": "20%",
            "Grade": "Residential"
        },
        pricing: {
            "Base Price": "₹13,500",
            "Installation": "₹1,350",
            "Warranty": "25 Years"
        },
        features: ["Compact size", "Space efficient", "Residential grade", "High efficiency"]
    },
    705: {
        title: "High Efficiency Solar Panel 600W",
        description: "High-power solar panel for large commercial installations with maximum energy output.",
        image: "panel/s3.jpg",
        category: "Solar Panels",
        applications: ["Large commercial", "High power", "Maximum output", "Commercial grade"],
        specifications: {
            "Power": "600W",
            "Technology": "Monocrystalline",
            "Efficiency": "23%",
            "Output": "High Power",
            "Grade": "Commercial"
        },
        pricing: {
            "Base Price": "₹26,000",
            "Installation": "₹2,600",
            "Warranty": "25 Years"
        },
        features: ["High power", "Maximum output", "Commercial grade", "High efficiency"]
    },
    706: {
        title: "Flexible Solar Panel 200W",
        description: "Flexible solar panel for curved surfaces and mobile applications with lightweight design.",
        image: "panel/s4.jpg",
        category: "Solar Panels",
        applications: ["Curved surfaces", "Mobile applications", "Lightweight", "Flexible design"],
        specifications: {
            "Power": "200W",
            "Design": "Flexible",
            "Weight": "Lightweight",
            "Application": "Mobile",
            "Surface": "Curved"
        },
        pricing: {
            "Base Price": "₹15,000",
            "Installation": "₹1,500",
            "Warranty": "10 Years"
        },
        features: ["Flexible design", "Lightweight", "Curved surfaces", "Mobile use"]
    },
    // AC Lights (801-806)
    801: {
        title: "LED Bulb 9W",
        description: "Energy-efficient LED bulb for home and office use with cool white light and long lifespan.",
        image: "AClights/1.png",
        category: "AC Lights",
        applications: ["Home lighting", "Office use", "General lighting", "Energy saving"],
        specifications: {
            "Power": "9W LED",
            "Color": "Cool White",
            "Lumens": "900 lumens",
            "Base": "B22",
            "Lifespan": "25000 hours"
        },
        pricing: {
            "Base Price": "₹150",
            "Installation": "₹50",
            "Warranty": "2 Years"
        },
        features: ["Energy efficient", "Cool white", "Long lifespan", "Standard base"]
    },
    802: {
        title: "CFL Bulb 20W",
        description: "Compact fluorescent lamp with warm white light, perfect for general home lighting applications.",
        image: "AClights/2.png",
        category: "AC Lights",
        applications: ["Home lighting", "General use", "Warm lighting", "Budget lighting"],
        specifications: {
            "Power": "20W CFL",
            "Color": "Warm White",
            "Lumens": "1200 lumens",
            "Base": "B22",
            "Lifespan": "8000 hours"
        },
        pricing: {
            "Base Price": "₹120",
            "Installation": "₹50",
            "Warranty": "1 Year"
        },
        features: ["Warm white", "Compact design", "Budget friendly", "General use"]
    },
    803: {
        title: "LED Tube Light 18W",
        description: "LED tube light for commercial and industrial applications with flicker-free operation.",
        image: "AClights/3.png",
        category: "AC Lights",
        applications: ["Commercial use", "Industrial use", "Office lighting", "Flicker free"],
        specifications: {
            "Power": "18W LED Tube",
            "Length": "4 Feet",
            "Grade": "Commercial",
            "Operation": "Flicker Free",
            "Color": "Cool White"
        },
        pricing: {
            "Base Price": "₹350",
            "Installation": "₹100",
            "Warranty": "2 Years"
        },
        features: ["Commercial grade", "Flicker free", "4 feet length", "Industrial use"]
    },
    804: {
        title: "Outdoor LED Light 30W",
        description: "Waterproof LED light for outdoor applications with motion sensor and weather resistance.",
        image: "AClights/4.png",
        category: "AC Lights",
        applications: ["Outdoor use", "Motion sensor", "Waterproof", "Weather resistant"],
        specifications: {
            "Power": "30W LED",
            "Rating": "Waterproof",
            "Sensor": "Motion Sensor",
            "Use": "Outdoor",
            "Protection": "Weather Resistant"
        },
        pricing: {
            "Base Price": "₹1,200",
            "Installation": "₹200",
            "Warranty": "2 Years"
        },
        features: ["Waterproof design", "Motion sensor", "Outdoor use", "Weather resistant"]
    },
    805: {
        title: "Smart LED Bulb 12W",
        description: "Smart LED bulb with WiFi control and color changing capabilities for modern homes.",
        image: "AClights/5.png",
        category: "AC Lights",
        applications: ["Smart home", "WiFi control", "Color changing", "App control"],
        specifications: {
            "Power": "12W Smart LED",
            "Control": "WiFi",
            "Colors": "Color Changing",
            "App": "Smartphone Control",
            "Features": "Smart"
        },
        pricing: {
            "Base Price": "₹800",
            "Installation": "₹100",
            "Warranty": "2 Years"
        },
        features: ["WiFi control", "Color changing", "App control", "Smart features"]
    },
    806: {
        title: "High Bay LED 50W",
        description: "High bay LED light for warehouses and factories with high brightness and heat resistance.",
        image: "AClights/6.png",
        category: "AC Lights",
        applications: ["Warehouses", "Factories", "High brightness", "Heat resistant"],
        specifications: {
            "Power": "50W High Bay",
            "Grade": "Industrial",
            "Brightness": "High",
            "Resistance": "Heat Resistant",
            "Use": "Warehouse"
        },
        pricing: {
            "Base Price": "₹2,500",
            "Installation": "₹400",
            "Warranty": "3 Years"
        },
        features: ["Industrial grade", "High brightness", "Heat resistant", "Warehouse use"]
    },
    // Home Lights (901-906)
    901: {
        title: "LED Ceiling Light 24W",
        description: "Modern LED ceiling light perfect for living rooms with dimmable warm white illumination.",
        image: "home/h1.png",
        category: "Home Lights",
        applications: ["Living room", "Bedroom", "Dining room", "General lighting"],
        specifications: {
            "Power": "24W LED",
            "Type": "Ceiling Mount",
            "Color": "Warm White",
            "Dimming": "Dimmable",
            "Size": "12 inch"
        },
        pricing: {
            "Base Price": "₹2,500",
            "Installation": "₹300",
            "Warranty": "3 Years"
        },
        features: ["Modern design", "Dimmable", "Ceiling mount", "Living room use"]
    },
    902: {
        title: "Pendant Light 15W",
        description: "Stylish pendant light ideal for kitchen islands with adjustable height and modern design.",
        image: "home/h2.png",
        category: "Home Lights",
        applications: ["Kitchen island", "Dining area", "Pendant lighting", "Modern decor"],
        specifications: {
            "Power": "15W LED",
            "Type": "Pendant",
            "Height": "Adjustable",
            "Style": "Modern",
            "Color": "Warm White"
        },
        pricing: {
            "Base Price": "₹3,200",
            "Installation": "₹400",
            "Warranty": "3 Years"
        },
        features: ["Pendant style", "Adjustable height", "Modern design", "Kitchen use"]
    },
    903: {
        title: "Wall Sconce 12W",
        description: "Elegant wall sconce for bedroom ambient lighting with soft light and touch control.",
        image: "home/h3.png",
        category: "Home Lights",
        applications: ["Bedroom", "Ambient lighting", "Wall mount", "Touch control"],
        specifications: {
            "Power": "12W LED",
            "Type": "Wall Mount",
            "Light": "Soft Light",
            "Control": "Touch Control",
            "Use": "Bedroom"
        },
        pricing: {
            "Base Price": "₹2,800",
            "Installation": "₹350",
            "Warranty": "3 Years"
        },
        features: ["Wall mount", "Soft light", "Touch control", "Bedroom use"]
    },
    904: {
        title: "Table Lamp 8W",
        description: "Portable LED table lamp with USB charging capability for study and work areas.",
        image: "home/h4.png",
        category: "Home Lights",
        applications: ["Study area", "Work desk", "Portable use", "USB charging"],
        specifications: {
            "Power": "8W LED",
            "Type": "Table Lamp",
            "Feature": "Portable",
            "Charging": "USB Port",
            "Use": "Study"
        },
        pricing: {
            "Base Price": "₹1,800",
            "Installation": "₹0",
            "Warranty": "2 Years"
        },
        features: ["Portable design", "USB charging", "Study use", "Work desk"]
    },
    905: {
        title: "Bathroom Light 18W",
        description: "Waterproof ceiling light designed for bathrooms with IP65 rating and cool white light.",
        image: "home/h5.png",
        category: "Home Lights",
        applications: ["Bathroom", "Waterproof", "Ceiling mount", "Cool white"],
        specifications: {
            "Power": "18W LED",
            "Rating": "Waterproof IP65",
            "Type": "Ceiling",
            "Color": "Cool White",
            "Use": "Bathroom"
        },
        pricing: {
            "Base Price": "₹2,200",
            "Installation": "₹300",
            "Warranty": "3 Years"
        },
        features: ["Waterproof design", "IP65 rating", "Bathroom use", "Cool white"]
    },
    906: {
        title: "Chandelier 36W",
        description: "Luxury LED chandelier for elegant living spaces with crystal design and remote control.",
        image: "home/h6.png",
        category: "Home Lights",
        applications: ["Living room", "Elegant spaces", "Crystal design", "Remote control"],
        specifications: {
            "Power": "36W LED",
            "Type": "Chandelier",
            "Design": "Crystal",
            "Control": "Remote Control",
            "Style": "Luxury"
        },
        pricing: {
            "Base Price": "₹8,500",
            "Installation": "₹850",
            "Warranty": "3 Years"
        },
        features: ["Crystal design", "Remote control", "Luxury style", "Living room use"]
    },


    //poles
    10: {
  title: "9 Meter Octagonal Street Light Pole",
  category: "Street Light Pole",
  description: "9 meter octagonal pole designed for residential streets...",
  image: "fabtech/pole/3.png",

  specifications: {
    "Height": "9 Meter",
    "Material": "Hot Dip Galvanized Steel",
    "Thickness": "3 mm",
    "Top Diameter": "70 mm",
    "Bottom Diameter": "130 mm",
    "Finish": "Zinc Coated",
    "Foundation": "M20 Concrete",
    "Wind Resistance": "Up to 150 km/h",
    "Warranty": "10 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "10 Years"
  },

  applications: [
    "Residential roads",
    "Society streets",
    "Parks & walkways",
    "Campus areas"
  ]
},

    11: {
  title: "8 Meter Double Arm Street Light Solar Pole",
  category: "Solar Pole",
  description:
    "8 meter solar street light pole with solar panel mounting arm. Suitable for highways and main roads.",
  image: "fabtech/pole/5.webp",

  specifications: {
    "Height": "8 Meter",
    "Material": "Hot Dip Galvanized Steel",
    "Thickness": "3.5 mm",
    "Top Diameter": "75 mm",
    "Bottom Diameter": "150 mm",
    "Finish": "Powder Coated",
    "Foundation": "M25 Concrete",
    "Wind Resistance": "Up to 160 km/h",
    "Warranty": "12 Years",
    "Type": "Solar",
    "Installation": "Foundation Mounted"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "12 Years"
  },

  gallery: [
    "image_poles/pole8m.png",
    "image_poles/pole8m_2.png"
  ],

  applications: [
    "Highways",
    "Main roads",
    "Industrial zones",
    "Smart city projects"
  ]
},

14: {
  title: "6 Meter Decorative Street Pole",
  category: "Decorative Pole",
  description:
    "Elegant decorative pole for city beautification projects, gardens, and promenades.",
  image: "fabtech/pole/4.png",

  specifications: {
    "Height": "6 Meter",
    "Material": "Mild Steel with Casting",
    "Thickness": "4 mm",
    "Top Diameter": "80 mm",
    "Bottom Diameter": "170 mm",
    "Finish": "Black Powder Coat",
    "Foundation": "M30 Concrete",
    "Wind Resistance": "Up to 140 km/h",
    "Warranty": "8 Years",
    "Type": "Decorative",
    "Installation": "Foundation Mounted"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "8 Years"
  },

  gallery: [
    "image_poles/pole9m.png",
    "image_poles/pole9m_2.png"
  ],

  applications: [
    "City streets",
    "Gardens & parks",
    "Boulevards",
    "Tourist zones"
  ]
},

12: {
  title: "12 Meter High Mast Pole",
  category: "High Mast Pole",
  description:
    "Heavy-duty high mast pole for large open areas and industrial lighting requirements.",
  image: "fabtech/pole/8.png",

  specifications: {
    "Height": "12 Meter",
    "Material": "Hot Dip Galvanized Steel",
    "Thickness": "5 mm",
    "Top Diameter": "90 mm",
    "Bottom Diameter": "210 mm",
    "Finish": "Zinc + Powder Coat",
    "Foundation": "M35 Concrete",
    "Wind Resistance": "Up to 180 km/h",
    "Warranty": "15 Years",
    "Type": "High Mast",
    "Installation": "Foundation Mounted"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "15 Years"
  },

  gallery: [
    "image_poles/pole12m.png",
    "image_poles/pole12m_2.png"
  ],

  applications: [
    "Industrial yards",
    "Ports",
    "Highways",
    "Large campuses"
  ]
},

13: {
  title: "3 Meter Garden Light Pole",
  category: "Garden Pole",
  description:
    "Compact garden light pole ideal for pathways, landscapes, and residential gardens.",
  image: "fabtech/pole/7.webp",

  specifications: {
    "Height": "3 Meter",
    "Material": "Powder Coated MS",
    "Thickness": "2.5 mm",
    "Top Diameter": "60 mm",
    "Bottom Diameter": "110 mm",
    "Finish": "Black Matte",
    "Foundation": "M20 Concrete",
    "Wind Resistance": "Up to 120 km/h",
    "Warranty": "5 Years",
    "Type": "Garden",
    "Installation": "Foundation Mounted"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "5 Years"
  },

  gallery: [
    "image_poles/pole5m.png",
    "image_poles/pole5m_2.png"
  ],

  applications: [
    "Gardens",
    "Walkways",
    "Parks",
    "Residential areas"
  ]
},

    //Accessories

21: {
  title: "Single Arm Bracket",
  category: "Light Accessory",
  description:
    "Single arm mounting bracket designed for secure installation of street lights on poles. Built with high-strength GI steel for long outdoor life.",
  image: "fabtech/accessories/1.jpeg",

  specifications: {
    "Length": "450 mm",
    "Material": "Hot Dip Galvanized Steel",
    "Thickness": "3 mm",
    "Finish": "Powder Coated",
    "Mounting": "Clamp / Weld",
    "Warranty": "5 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Not Required",
    "Delivery": "Pan India",
    "Warranty": "5 Years"
  },

  applications: [
    "Street Poles",
    "Solar Poles",
    "Road Lighting"
  ]
},

22: {
  title: "Double Arm Bracket",
  category: "Light Accessory",
  description:
    "Heavy-duty double arm bracket for mounting two luminaires on wide roads and highways.",
  image: "fabtech/accessories/2.jpeg",

  specifications: {
    "Length": "2 x 450 mm",
    "Material": "Mild Steel",
    "Thickness": "4 mm",
    "Finish": "Powder Coated",
    "Mounting": "Weld / Clamp",
    "Warranty": "5 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Not Required",
    "Delivery": "Pan India",
    "Warranty": "5 Years"
  },

  applications: [
    "Highways",
    "Main Roads",
    "Industrial Roads"
  ]
},

23: {
  title: "Pole Base Plate",
  category: "Foundation Accessory",
  description:
    "Laser-cut heavy-duty base plate used for fixing poles on concrete foundations.",
  image: "fabtech/accessories/3.jpeg",

  specifications: {
    "Size": "300 x 300 mm",
    "Thickness": "12 mm",
    "Bolt Holes": "4 Nos",
    "Finish": "Zinc Coated",
    "Compatibility": "3m – 12m Poles",
    "Warranty": "3 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Included with Foundation",
    "Delivery": "Pan India",
    "Warranty": "3 Years"
  },

  applications: [
    "Street Poles",
    "High Mast Poles",
    "Industrial Poles"
  ]
},

24: {
  title: "High Mast Accessories Set",
  category: "High Mast Accessory",
  description:
    "Complete high mast accessory set designed for secure installation and long-term stability of high mast lighting systems in industrial and infrastructure projects.",
  image: "fabtech/accessories/4.png",

  specifications: {
    "Components": "Bolts, Clamps, Brackets & Fittings",
    "Material": "Hot Dip Galvanized Steel",
    "Finish": "Corrosion Resistant Coating",
    "Compatibility": "12m – 30m High Mast Poles",
    "Load Rating": "Heavy Duty",
    "Outdoor Grade": "Yes",
    "Weather Resistance": "High",
    "Life Span": "15 Years",
    "Warranty": "5 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Optional / Site Based",
    "Delivery": "Pan India",
    "Warranty": "5 Years"
  },

  applications: [
    "High Mast Lighting Systems",
    "Highways & Flyovers",
    "Stadiums & Grounds",
    "Ports & Industrial Yards"
  ]
},

25: {
  title: "Solar Light Accessories Kit",
  category: "Solar Light Accessory",
  description:
    "Complete accessory kit for solar street lights, including connectors, cable glands, mounting fittings, and protection components for safe and reliable outdoor installation.",
  image: "fabtech/accessories/5.png",

  specifications: {
    "Components": "Cable Glands, Connectors, Mounting Clamps, Fuses",
    "Material": "UV-Stabilized Plastic & Aluminum",
    "Ingress Protection": "IP65 Rated",
    "Operating Temperature": "-10°C to 60°C",
    "Compatibility": "All Solar Street & Garden Lights",
    "Outdoor Grade": "Yes",
    "Weather Resistance": "High",
    "Life Span": "8 Years",
    "Warranty": "2 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "With Solar Light Setup",
    "Delivery": "Pan India",
    "Warranty": "2 Years"
  },

  applications: [
    "Solar Street Lights",
    "Garden Solar Lights",
    "Campus Lighting",
    "Rural & Highway Projects"
  ]
},

26: {
  title: "Outdoor Battery Box for Solar Lights",
  category: "Electrical Accessory",
  description:
    "Weatherproof battery enclosure designed to safely house solar batteries for street lights and garden lights, protecting them from rain, dust, heat, and tampering.",
  image: "fabtech/accessories/6.png",

  specifications: {
    "Enclosure Type": "Outdoor Battery Box",
    "Material": "Powder Coated GI / Aluminum",
    "Ingress Protection": "IP65",
    "Locking System": "Key Lock",
    "Ventilation": "Heat Dissipation Slots",
    "Mounting": "Pole / Wall Mounted",
    "Finish": "Matte Black / Grey",
    "Capacity": "Single or Dual Battery",
    "Weather Resistance": "High",
    "Warranty": "2 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Pole / Wall Mounted",
    "Delivery": "Pan India",
    "Warranty": "2 Years"
  },

  applications: [
    "Solar Street Lights",
    "Garden Lights",
    "High Mast Poles",
    "Decorative Poles"
  ]
},

27: {
  title: "Solar Light Assembly Unit",
  category: "Electrical Accessory",
  description:
    "Complete solar light assembly unit designed for quick and reliable installation of solar street and garden lights. Includes pre-wired components, mounting hardware, and weather-resistant housing for long-term outdoor performance.",
  image: "fabtech/accessories/7.png",

  specifications: {
    "Assembly Type": "Solar Light Assembly",
    "Material": "Powder Coated GI / Aluminum",
    "Ingress Protection": "IP65",
    "Wiring": "Pre-Wired Harness",
    "Mounting": "Pole / Arm Mounted",
    "Finish": "Matte Black / Grey",
    "Compatibility": "All Standard Solar Lights",
    "Installation": "Plug & Play",
    "Weather Resistance": "High",
    "Warranty": "2 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Pole Mounted",
    "Delivery": "Pan India",
    "Warranty": "2 Years"
  },

  applications: [
    "Solar Street Lights",
    "Garden Lights",
    "High Mast Poles",
    "Decorative Poles"
  ]
},



    31: {
  title: "Solar Street Light Control Panel",
  category: "Control Panel",
  description:
    "Automatic control panel for solar street light systems with smart charging and protection.",
  image: "fabtech/control/1.png",

  specifications: {
    "Panel Type": "Solar Street Light Controller",
    "Material": "GI Steel Enclosure",
    "Usage": "Street Lighting",
    "Features": "Auto ON/OFF, Overcharge Protection, Weatherproof",
    "Technology": "PWM Based",
    "Protection": "Overcharge, Deep Discharge",
    "Ingress Rating": "Outdoor Grade",
    "Warranty": "2 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Panel Mounted",
    "Delivery": "Pan India",
    "Warranty": "2 Years"
  },

  applications: [
    "Solar Street Lights",
    "Village Roads",
    "Parks & Pathways"
  ]
},

32: {
  title: "Hybrid Solar Controller Panel",
  category: "Control Panel",
  description:
    "Hybrid controller panel for solar and grid power with intelligent battery management.",
  image: "fabtech/control/2.jpg",

  specifications: {
    "Panel Type": "Hybrid Solar Controller",
    "Material": "Mild Steel Enclosure",
    "Usage": "Industrial & Commercial",
    "Features": "Hybrid Mode, Battery Management, LCD Display",
    "Technology": "Solar + Grid",
    "Display": "LCD Status Panel",
    "Protection": "Overload & Short Circuit",
    "Warranty": "2 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Wall Mounted",
    "Delivery": "Pan India",
    "Warranty": "2 Years"
  },

  applications: [
    "Industrial Campuses",
    "Commercial Buildings",
    "Hybrid Lighting Systems"
  ]
},

33: {
  title: "PWM Solar Charge Controller Box",
  category: "Control Panel",
  description:
    "Compact PWM charge controller box for garden and small solar lighting systems.",
  image: "fabtech/control/3.jpeg",

  specifications: {
    "Panel Type": "PWM Solar Controller",
    "Material": "Aluminum Enclosure",
    "Usage": "Garden & Decorative Lighting",
    "Technology": "PWM Charging",
    "Size": "Compact",
    "Ingress Rating": "IP65",
    "Mounting": "Wall / Pole",
    "Warranty": "1 Year"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Wall / Pole Mounted",
    "Delivery": "Pan India",
    "Warranty": "1 Year"
  },

  applications: [
    "Garden Lights",
    "Pathway Lighting",
    "Small Solar Systems"
  ]
},

34: {
  title: "MPPT Solar Control Panel",
  category: "Control Panel",
  description:
    "High-efficiency MPPT based solar control panel for professional street light projects.",
  image: "fabtech/control/4.jpeg",

  specifications: {
    "Panel Type": "MPPT Solar Controller",
    "Material": "Mild Steel Enclosure",
    "Usage": "Street Lighting",
    "Technology": "MPPT",
    "Efficiency": "High Conversion Rate",
    "Display": "Smart Digital Display",
    "Protection": "Surge & Overload",
    "Warranty": "3 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Pole / Wall Mounted",
    "Delivery": "Pan India",
    "Warranty": "3 Years"
  },

  applications: [
    "City Roads",
    "Highways",
    "Smart City Projects"
  ]
},

35: {
  title: "All-in-One Solar Controller Unit",
  category: "Control Panel",
  description:
    "Integrated solar controller unit with battery management and dusk-to-dawn automation.",
  image: "fabtech/control/5.jpeg",

  specifications: {
    "Panel Type": "All-in-One Solar Controller",
    "Material": "Aluminum Enclosure",
    "Usage": "Street & Garden Lighting",
    "Features": "Plug & Play, Auto Dusk-Dawn",
    "Battery Management": "Integrated BMS",
    "Operation": "Automatic",
    "Mounting": "Inside Pole / Panel",
    "Warranty": "2 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Inside Pole / Panel",
    "Delivery": "Pan India",
    "Warranty": "2 Years"
  },

  applications: [
    "Solar Street Lights",
    "Garden Lights",
    "Compact Solar Systems"
  ]
},

36: {
  title: "Industrial Lighting Control Panel",
  category: "Control Panel",
  description:
    "Heavy-duty industrial control panel for large outdoor and infrastructure lighting systems.",
  image: "fabtech/control/6.jpeg",

  specifications: {
    "Panel Type": "Industrial Lighting Panel",
    "Material": "Mild Steel Heavy-Duty Enclosure",
    "Usage": "Industrial Lighting",
    "Features": "Surge Protection, Heavy Duty Design",
    "Protection": "MCB, Surge Arrestor",
    "Build": "Industrial Grade",
    "Mounting": "Floor / Wall Mounted",
    "Warranty": "3 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Floor / Wall Mounted",
    "Delivery": "Pan India",
    "Warranty": "3 Years"
  },

  applications: [
    "Factories",
    "Warehouses",
    "Ports & Yards",
    "Infrastructure Projects"
  ]
},

 41: {
  title: "Solar Home Lighting Kit",
  category: "Solar Home System",
  description:
    "Complete solar home lighting kit with panel, battery, controller, and LED lamps for basic home illumination.",
  image: "fabtech/home_product/1.jpg",

  specifications: {
    "System Type": "Off-Grid Solar Home Kit",
    "Solar Panel": "40W Polycrystalline",
    "Battery": "12V 20Ah",
    "Controller": "PWM Charge Controller",
    "Output": "4 LED Lamps + USB",
    "Backup Time": "6–8 Hours",
    "Mounting": "Wall / Roof",
    "Warranty": "1 Year"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Wall Mounted",
    "Delivery": "Pan India",
    "Warranty": "1 Year"
  },

  applications: [
    "Rural Homes",
    "Shops",
    "Huts",
    "Temporary Shelters"
  ]
},

42: {
  title: "Solar Inverter for Home",
  category: "Solar Home System",
  description:
    "High-efficiency solar inverter for home backup and off-grid solar applications.",
  image: "fabtech/home_product/2.jpeg",

  specifications: {
    "Inverter Type": "Pure Sine Wave",
    "Capacity": "850 VA",
    "Input Voltage": "12V DC",
    "Output Voltage": "230V AC",
    "Efficiency": "Up to 90%",
    "Compatibility": "Solar & Grid",
    "Protection": "Overload, Short Circuit",
    "Warranty": "2 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Wall Mounted",
    "Delivery": "Pan India",
    "Warranty": "2 Years"
  },

  applications: [
    "Homes",
    "Small Offices",
    "Shops",
    "Backup Power"
  ]
},

43: {
  title: "Solar Power Pack for Homes",
  category: "Solar Home System",
  description:
    "Compact solar power pack with built-in battery and inverter for home energy needs.",
  image: "fabtech/home_product/3.webp",

  specifications: {
    "System Type": "All-in-One Power Pack",
    "Battery Type": "Lithium",
    "Capacity": "500 Wh",
    "Output Ports": "AC + DC + USB",
    "Charging": "Solar & Grid",
    "Portability": "Portable Unit",
    "Display": "Digital Indicator",
    "Warranty": "1 Year"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Plug & Play",
    "Delivery": "Pan India",
    "Warranty": "1 Year"
  },

  applications: [
    "Homes",
    "Camping",
    "Emergency Backup",
    "Mobile Offices"
  ]
},

44: {
  title: "Rooftop Solar Panel – 150W",
  category: "Solar Home System",
  description:
    "High-efficiency 150W rooftop solar panel for residential power generation.",
  image: "fabtech/home_product/4.jpeg",

  specifications: {
    "Panel Type": "Polycrystalline",
    "Rated Power": "150W",
    "Voltage": "18–20V",
    "Frame": "Anodized Aluminum",
    "Glass": "Tempered",
    "Efficiency": "High Output",
    "Mounting": "Rooftop",
    "Warranty": "25 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Rooftop Mounted",
    "Delivery": "Pan India",
    "Warranty": "25 Years"
  },

  applications: [
    "Homes",
    "Apartments",
    "Small Offices",
    "Cabins"
  ]
},

45: {
  title: "Solar Fan System",
  category: "Solar Home System",
  description:
    "Energy-efficient solar fan system for ventilation and cooling in off-grid areas.",
  image: "fabtech/home_product/5.png",

  specifications: {
    "Fan Type": "DC Solar Fan",
    "Power": "25W",
    "Speed Control": "3 Levels",
    "Operation": "Direct Solar + Battery",
    "Diameter": "16 Inch",
    "Mounting": "Ceiling / Wall",
    "Noise Level": "Low",
    "Warranty": "1 Year"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Ceiling / Wall",
    "Delivery": "Pan India",
    "Warranty": "1 Year"
  },

  applications: [
    "Homes",
    "Schools",
    "Shops",
    "Rural Areas"
  ]
},

46: {
  title: "Solar Mobile Charging Station",
  category: "Solar Home System",
  description:
    "Compact solar charging station for mobile phones and small electronic devices.",
  image: "fabtech/home_product/6.webp",

  specifications: {
    "System Type": "Solar Charging Unit",
    "Panel Power": "10W",
    "Output Ports": "USB x 4",
    "Battery": "Built-in",
    "Charging Mode": "Solar + USB",
    "Portability": "Portable",
    "Usage": "Indoor / Outdoor",
    "Warranty": "1 Year"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Tabletop / Wall",
    "Delivery": "Pan India",
    "Warranty": "1 Year"
  },

  applications: [
    "Homes",
    "Shops",
    "Public Areas",
    "Emergency Use"
  ]
},
51: {
  title: "Rooftop Solar Structure – Residential",
  category: "Solar Structures",
  description: "Compact rooftop solar mounting structure designed for residential installations with high wind resistance and long life.",
  image: "fabtech/structure/1.png",

  specifications: {
    "Structure Type": "Rooftop",
    "Material": "GI Steel",
    "Design": "Tilted Frame",
    "Coating": "Hot Dip Galvanized",
    "Wind Load": "Up to 150 km/h",
    "Panel Support": "1–4 Panels",
    "Installation": "Roof Mounted",
    "Corrosion Resistance": "High",
    "Life Span": "25 Years",
    "Warranty": "10 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "10 Years"
  },

  applications: [
    "Residential rooftops",
    "Small homes",
    "Villas",
    "Urban houses"
  ]
},

52: {
  title: "Rooftop Solar Structure – Commercial",
  category: "Solar Structures",
  description: "Lightweight aluminum rooftop mounting structure ideal for commercial buildings and large rooftops.",
  image: "fabtech/structure/6.jpg",

  specifications: {
    "Structure Type": "Rooftop",
    "Material": "Aluminum",
    "Design": "Low Load Frame",
    "Coating": "Anodized",
    "Weight": "Lightweight",
    "Wind Load": "Up to 140 km/h",
    "Installation": "Bolt Mounted",
    "Corrosion Resistance": "Excellent",
    "Life Span": "25 Years",
    "Warranty": "12 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "12 Years"
  },

  applications: [
    "Commercial rooftops",
    "Office buildings",
    "Shopping complexes",
    "Institutions"
  ]
},

53: {
  title: "Long Railing Structure",
  category: "Solar Fabrication Works",
  description: "Heavy-duty long railing structure designed for industrial sites, solar plants, rooftops, and boundary protection with high strength and durability.",
  image: "fabtech/structure/2.png",

  specifications: {
    "Structure Type": "Long Railing",
    "Material": "GI / Mild Steel",
    "Design": "Straight & Modular",
    "Coating": "Hot Dip Galvanized / Powder Coated",
    "Height Options": "900 mm – 1500 mm",
    "Post Spacing": "1.5 – 2.5 Meter",
    "Wind Load": "Up to 150 km/h",
    "Corrosion Resistance": "High",
    "Installation": "Base Plate / Embedded",
    "Life Span": "25 Years",
    "Warranty": "10 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "10 Years"
  },

  applications: [
    "Solar power plants",
    "Industrial premises",
    "Rooftops & terraces",
    "Highways & boundaries",
    "Factories & warehouses"
  ]
},

54: {
  title: "Short Mono Rail Structure",
  category: "Solar Fabrication Works",
  description: "Compact mono rail structure designed for short-span solar installations, ideal for rooftops and small ground-mounted systems with precise panel alignment.",
  image: "fabtech/structure/3.png",

  specifications: {
    "Structure Type": "Short Mono Rail",
    "Material": "GI Steel / Aluminum",
    "Design": "Single Rail Support",
    "Coating": "Hot Dip Galvanized / Anodized",
    "Rail Length": "600 mm – 1200 mm",
    "Mounting": "Roof / Ground Base",
    "Wind Load": "Up to 140 km/h",
    "Panel Compatibility": "All Standard PV Modules",
    "Corrosion Resistance": "High",
    "Life Span": "20 Years",
    "Warranty": "8 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "8 Years"
  },

  applications: [
    "Residential rooftops",
    "Small commercial systems",
    "Terrace installations",
    "Garden solar setups",
    "Compact ground mounts"
  ]
},


55: {
  title: "Solar Carport Structure",
  category: "Solar Structures",
  description: "Solar carport structure providing parking shade while generating clean solar energy.",
  image: "fabtech/structure/7.jpg",

  specifications: {
    "Structure Type": "Carport",
    "Material": "GI Steel",
    "Design": "Parking Shade",
    "Coating": "Powder + Galvanized",
    "Vehicle Capacity": "2–20 Cars",
    "Wind Load": "Up to 150 km/h",
    "Drainage": "Rainwater Channel",
    "Dual Use": "Parking + Power",
    "Life Span": "25 Years",
    "Warranty": "12 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "12 Years"
  },

  applications: [
    "Parking areas",
    "Commercial buildings",
    "Malls",
    "IT parks"
  ]
},

56: {
  title: "Commercial Solar Shed Structure",
  category: "Solar Structures",
  description: "Large-span Commercial solar shed structure for factories and warehouses with high load capacity.",
  image: "fabtech/structure/5.png",

  specifications: {
    "Structure Type": "Commercial Shed",
    "Material": "GI Steel",
    "Span": "Large Area Coverage",
    "Coating": "HDG + Paint",
    "Wind Load": "Up to 180 km/h",
    "Load Capacity": "Heavy Duty",
    "Mounting": "Column Based",
    "Weather Resistance": "High",
    "Life Span": "30 Years",
    "Warranty": "15 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "15 Years"
  },

  applications: [
    "Factories",
    "Warehouses",
    "Commercial yards",
    "Large campuses"
  ]
},

61: {
  title: "Industrial Fabrication Work",
  category: "Industrial Works",
  description: "Custom industrial fabrication services for heavy-duty and large-scale applications.",
  image: "fabtech/industrial/1.webp",

  specifications: {
    "Work Type": "Industrial Fabrication",
    "Material": "Mild Steel",
    "Design": "Custom Engineering",
    "Strength": "Heavy Duty",
    "Finish": "As Required",
    "Precision": "High",
    "Load Capacity": "Industrial Grade",
    "Fabrication Method": "Welding & Cutting",
    "Life Span": "20+ Years",
    "Warranty": "Project Based"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per project",
    "Delivery": "Pan India",
    "Warranty": "Project Based"
  },

  applications: [
    "Factories",
    "Industrial plants",
    "Heavy machinery bases",
    "Custom metal works"
  ]
},

62: {
  title: "Warehouse Shed Structure",
  category: "Industrial Works",
  description: "Pre-engineered shed structures for warehouses and factories with long life and wide span.",
  image: "fabtech/industrial/2.jpg",

  specifications: {
    "Structure Type": "Warehouse Shed",
    "Material": "GI Steel",
    "Span": "Large Area",
    "Coating": "Hot Dip Galvanized",
    "Wind Load": "Up to 160 km/h",
    "Roof Type": "Metal Sheet",
    "Mounting": "Column Based",
    "Weather Resistance": "High",
    "Life Span": "30 Years",
    "Warranty": "15 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "15 Years"
  },

  applications: [
    "Warehouses",
    "Factories",
    "Industrial yards",
    "Storage units"
  ]
},

63: {
  title: "Solar Plant Installation Work",
  category: "Industrial Works",
  description: "Complete turnkey solar plant installation with expert team and fast execution.",
  image: "fabtech/industrial/3.webp",

  specifications: {
    "Service Type": "Solar Installation",
    "Execution": "Turnkey Project",
    "Team": "Certified Engineers",
    "Project Scale": "Small to Large Plants",
    "Mounting": "Rooftop & Ground",
    "Electrical Work": "Included",
    "Safety Standards": "Industrial Grade",
    "Timeline": "Fast Execution",
    "Support": "End-to-End",
    "Warranty": "Project Based"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Included",
    "Delivery": "Pan India",
    "Warranty": "Project Based"
  },

  applications: [
    "Solar power plants",
    "Industrial rooftops",
    "Open land projects",
    "Commercial solar sites"
  ]
},

64: {
  title: "Industrial Pipe Fabrication",
  category: "Industrial Works",
  description: "Precision pipe fabrication for industrial and utility projects with high pressure tolerance.",
  image: "fabtech/industrial/4.jpg",

  specifications: {
    "Work Type": "Pipe Fabrication",
    "Material": "Mild Steel",
    "Process": "Bending & Welding",
    "Accuracy": "High Precision",
    "Pressure Rating": "High",
    "Finish": "Industrial Grade",
    "Customization": "Available",
    "Application Type": "Utility & Process",
    "Life Span": "20 Years",
    "Warranty": "Project Based"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per scope",
    "Delivery": "Pan India",
    "Warranty": "Project Based"
  },

  applications: [
    "Industrial pipelines",
    "Utility projects",
    "Process plants",
    "Infrastructure works"
  ]
},

65: {
  title: "Metal Roofing Structure",
  category: "Industrial Works",
  description: "Industrial roofing and metal structure solutions with lightweight and weatherproof design.",
  image: "fabtech/industrial/5.jpeg",

  specifications: {
    "Structure Type": "Metal Roofing",
    "Material": "Aluminum",
    "Weight": "Lightweight",
    "Weather Resistance": "High",
    "Design": "Custom Layout",
    "Coating": "Protective Finish",
    "Drainage": "Integrated",
    "Mounting": "Frame Based",
    "Life Span": "25 Years",
    "Warranty": "12 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "12 Years"
  },

  applications: [
    "Industrial sheds",
    "Factories",
    "Workshops",
    "Commercial buildings"
  ]
},

66: {
  title: "Electrical Panel Installation",
  category: "Industrial Works",
  description: "Professional electrical panel and system installation with certified industrial standards.",
  image: "fabtech/industrial/6.jpeg",

  specifications: {
    "Service Type": "Electrical Installation",
    "Panel Type": "Industrial Grade",
    "Wiring": "Safe & Certified",
    "Compliance": "IS Standards",
    "Testing": "Included",
    "Protection": "Surge & Short-Circuit",
    "Mounting": "Wall / Floor",
    "Safety Level": "High",
    "Life Span": "Project Based",
    "Warranty": "Service Warranty"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Included",
    "Delivery": "Pan India",
    "Warranty": "Service Warranty"
  },

  applications: [
    "Factories",
    "Industrial plants",
    "Power rooms",
    "Commercial buildings"
  ]
},

71: {
  title: "Solar Ground Mount Structure",
  category: "Solar Fabrication",
  description: "Heavy-duty ground mount structure for large solar plants and open-field installations.",
  image: "image_solarfab/ground.png",

  specifications: {
    "Structure Type": "Ground Mount",
    "Material": "Hot Dip Galvanized Steel",
    "Design": "Fixed Tilt",
    "Coating": "HDG Finish",
    "Wind Load": "Up to 170 km/h",
    "Load Capacity": "Heavy Duty",
    "Mounting": "Foundation Based",
    "Corrosion Resistance": "High",
    "Life Span": "25 Years",
    "Warranty": "10 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "10 Years"
  },

  applications: [
    "Solar power plants",
    "Open land projects",
    "Industrial solar parks",
    "Large campuses"
  ]
},

72: {
  title: "Rooftop Solar Mounting Frame",
  category: "Solar Fabrication",
  description: "Lightweight aluminum mounting frame for residential and commercial rooftop solar installations.",
  image: "image_solarfab/rooftop.png",

  specifications: {
    "Structure Type": "Rooftop Mount",
    "Material": "Aluminum",
    "Design": "Modular Frame",
    "Coating": "Anodized",
    "Wind Load": "Up to 140 km/h",
    "Load Capacity": "Medium Duty",
    "Mounting": "Roof Anchored",
    "Corrosion Resistance": "Excellent",
    "Life Span": "20 Years",
    "Warranty": "8 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Roof Dependent",
    "Delivery": "Pan India",
    "Warranty": "8 Years"
  },

  applications: [
    "Homes",
    "Commercial rooftops",
    "Apartments",
    "Institutions"
  ]
},

73: {
  title: "Pole Mount Solar Structure",
  category: "Solar Fabrication",
  description: "Single pole-mounted solar structure for street lights and standalone solar systems.",
  image: "image_solarfab/pole.png",

  specifications: {
    "Structure Type": "Pole Mount",
    "Material": "GI Steel",
    "Design": "Single Pole",
    "Coating": "HDG",
    "Wind Load": "Up to 150 km/h",
    "Load Capacity": "Medium Duty",
    "Mounting": "Pole Top",
    "Weather Resistance": "High",
    "Life Span": "18 Years",
    "Warranty": "7 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Foundation Based",
    "Delivery": "Pan India",
    "Warranty": "7 Years"
  },

  applications: [
    "Solar street lights",
    "Rural lighting",
    "Remote locations",
    "Standalone systems"
  ]
},

74: {
  title: "Solar Carport Structure",
  category: "Solar Fabrication",
  description: "Dual-purpose solar carport structure providing parking shade and solar power generation.",
  image: "image_solarfab/carport.png",

  specifications: {
    "Structure Type": "Carport",
    "Material": "Mild Steel",
    "Design": "Custom Layout",
    "Coating": "Paint + HDG",
    "Wind Load": "Up to 160 km/h",
    "Load Capacity": "Heavy Duty",
    "Mounting": "Column Based",
    "Weather Resistance": "High",
    "Life Span": "25 Years",
    "Warranty": "12 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Site Specific",
    "Delivery": "Pan India",
    "Warranty": "12 Years"
  },

  applications: [
    "Parking areas",
    "Commercial buildings",
    "Campuses",
    "Shopping complexes"
  ]
},

75: {
  title: "Custom Solar Frame Fabrication",
  category: "Solar Fabrication",
  description: "Project-specific custom solar frames engineered for unique site conditions and layouts.",
  image: "image_solarfab/custom.png",

  specifications: {
    "Structure Type": "Custom Frame",
    "Material": "Mild Steel",
    "Design": "Project Specific",
    "Coating": "As Required",
    "Wind Load": "As Per Design",
    "Load Capacity": "Custom",
    "Mounting": "As Per Site",
    "Fabrication": "Precision Built",
    "Life Span": "20 Years",
    "Warranty": "10 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Project Based",
    "Delivery": "Pan India",
    "Warranty": "10 Years"
  },

  applications: [
    "Custom solar projects",
    "R&D installations",
    "Special structures",
    "Non-standard sites"
  ]
},

76: {
  title: "Floating Solar Structure",
  category: "Solar Fabrication",
  description: "Floating solar mounting structure designed for lakes, ponds, and water reservoirs.",
  image: "image_solarfab/floating.png",

  specifications: {
    "Structure Type": "Floating Mount",
    "Material": "Aluminum + HDPE",
    "Design": "Modular Floating",
    "Coating": "Corrosion Resistant",
    "Wind Load": "Up to 130 km/h",
    "Load Capacity": "Medium Duty",
    "Mounting": "Water Anchored",
    "UV Resistance": "High",
    "Life Span": "20 Years",
    "Warranty": "8 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Water Body Specific",
    "Delivery": "Pan India",
    "Warranty": "8 Years"
  },

  applications: [
    "Lakes",
    "Ponds",
    "Reservoirs",
    "Water treatment plants"
  ]
},


  81: {
    title: "Home EV Charger – 3.3kW",
    category: "EV Charging Station",
    description: "Compact AC charger designed for home electric vehicle charging with built-in safety and smart protection.",
    image: "greenwheel/station/1.jpeg",

    specifications: {
      "Charger Type": "AC Charger",
      "Power Output": "3.3 kW",
      "Mounting": "Wall Mount",
      "Input Voltage": "230V AC",
      "Protection": "Over Current, Over Voltage",
      "Connector": "Type 2",
      "Usage": "Residential",
      "Weather Rating": "IP54",
      "Life Span": "10 Years",
      "Warranty": "2 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Optional",
      "Delivery": "Pan India",
      "Warranty": "2 Years"
    },

    applications: [
      "Homes",
      "Apartments",
      "Private garages",
      "Residential parking"
    ]
  },

  82: {
    title: "Home EV Charger – 7.4kW",
    category: "EV Charging Station",
    description: "High-speed AC charger for residential EV users with WiFi connectivity and smart monitoring.",
    image: "greenwheel/station/2.jpeg",

    specifications: {
      "Charger Type": "AC Charger",
      "Power Output": "7.4 kW",
      "Connectivity": "WiFi Enabled",
      "Mounting": "Wall Mount",
      "Connector": "Type 2",
      "Input Voltage": "230V AC",
      "Safety": "Earth Leakage, Surge Protection",
      "Usage": "Residential",
      "Life Span": "12 Years",
      "Warranty": "3 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "As per site",
      "Delivery": "Pan India",
      "Warranty": "3 Years"
    },

    applications: [
      "Homes",
      "Villas",
      "Residential societies",
      "Private parking"
    ]
  },

  83: {
    title: "Commercial EV Charger – 22kW",
    category: "EV Charging Station",
    description: "Commercial-grade AC charging station for offices and parking areas with RFID access control.",
    image: "greenwheel/station/3.jpg",

    specifications: {
      "Charger Type": "AC Charger",
      "Power Output": "22 kW",
      "Access Control": "RFID",
      "Mounting": "Wall / Pole Mount",
      "Connector": "Type 2",
      "Input Voltage": "415V AC",
      "Protection": "Overload, Surge",
      "Usage": "Commercial",
      "Life Span": "15 Years",
      "Warranty": "3 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Commercial Setup",
      "Delivery": "Pan India",
      "Warranty": "3 Years"
    },

    applications: [
      "Office buildings",
      "Commercial parking",
      "Shopping malls",
      "IT parks"
    ]
  },

  84: {
    title: "DC Fast Charger – 30kW",
    category: "EV Charging Station",
    description: "DC fast charging station for highways and public areas with touchscreen interface.",
    image: "greenwheel/station/4.webp",

    specifications: {
      "Charger Type": "DC Fast Charger",
      "Power Output": "30 kW",
      "Display": "Touch Screen",
      "Connector": "CCS / GB-T",
      "Input Voltage": "415V AC",
      "Cooling": "Forced Air",
      "Usage": "Public",
      "OCPP Support": "Yes",
      "Life Span": "15 Years",
      "Warranty": "3 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Site Based",
      "Delivery": "Pan India",
      "Warranty": "3 Years"
    },

    applications: [
      "Highways",
      "Fuel stations",
      "Public charging hubs",
      "Transport depots"
    ]
  },

  85: {
    title: "DC Ultra Fast Charger – 60kW",
    category: "EV Charging Station",
    description: "High-capacity DC charger for commercial EV hubs with dual gun and OCPP compatibility.",
    image: "greenwheel/station/5.avif",

    specifications: {
      "Charger Type": "DC Fast Charger",
      "Power Output": "60 kW",
      "Connector": "Dual Gun (CCS)",
      "Display": "Smart Display",
      "Input Voltage": "415V AC",
      "OCPP": "Enabled",
      "Usage": "Commercial / Public",
      "Cooling": "Intelligent Cooling",
      "Life Span": "18 Years",
      "Warranty": "3 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Turnkey",
      "Delivery": "Pan India",
      "Warranty": "3 Years"
    },

    applications: [
      "EV hubs",
      "Bus depots",
      "Commercial parking",
      "Highway stations"
    ]
  },

  86: {
    title: "Portable EV Charging Unit",
    category: "EV Charging Station",
    description: "Portable EV charging unit for travel and emergency use with plug-and-play operation.",
    image: "greenwheel/station/6.webp",

    specifications: {
      "Charger Type": "Portable",
      "Power Output": "3.3 kW",
      "Operation": "Plug & Play",
      "Connector": "Universal",
      "Input Voltage": "230V AC",
      "Weight": "Lightweight",
      "Usage": "Home / Travel",
      "Safety": "Overheat Protection",
      "Life Span": "8 Years",
      "Warranty": "1 Year"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Not Required",
      "Delivery": "Pan India",
      "Warranty": "1 Year"
    },

    applications: [
      "Emergency charging",
      "Travel use",
      "Remote areas",
      "Backup charging"
    ]
  },


  91: {
    title: "Lithium EV Battery – 48V 50Ah",
    category: "EV Batteries",
    description: "Compact and lightweight lithium battery designed for electric two-wheelers with fast charging and long cycle life.",
    image: "greenwheel/ev-battery/1.webp",

    specifications: {
      "Voltage": "48V",
      "Capacity": "50Ah",
      "Chemistry": "LiFePO4",
      "Cycle Life": "2000+ Cycles",
      "Charging Time": "3–4 Hours",
      "Weight": "Lightweight Design",
      "BMS": "Inbuilt Smart BMS",
      "Operating Temp": "-10°C to 55°C",
      "Mounting": "Portable / Vehicle Fit",
      "Warranty": "3 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Plug & Play",
      "Delivery": "Pan India",
      "Warranty": "3 Years"
    },

    applications: [
      "Electric scooters",
      "E-bikes",
      "Light EVs",
      "Personal mobility"
    ]
  },

  92: {
    title: "Lithium EV Battery – 60V 60Ah",
    category: "EV Batteries",
    description: "High-capacity 60V lithium battery for electric scooters and light commercial EVs with enhanced safety.",
    image: "greenwheel/ev-battery/2.jpeg",

    specifications: {
      "Voltage": "60V",
      "Capacity": "60Ah",
      "Chemistry": "Lithium Ion",
      "Cycle Life": "2500+ Cycles",
      "Charging Time": "4–5 Hours",
      "Energy Density": "High",
      "BMS": "Advanced Protection",
      "Cooling": "Passive Air",
      "Mounting": "Vehicle Integrated",
      "Warranty": "3 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Vehicle Fitment",
      "Delivery": "Pan India",
      "Warranty": "3 Years"
    },

    applications: [
      "Electric scooters",
      "Delivery EVs",
      "Fleet vehicles",
      "Urban transport"
    ]
  },

  93: {
    title: "EV Battery Pack – 72V 80Ah",
    category: "EV Batteries",
    description: "High-power EV battery pack for performance vehicles with thermal protection and long range.",
    image: "greenwheel/ev-battery/3.jpeg",

    specifications: {
      "Voltage": "72V",
      "Capacity": "80Ah",
      "Chemistry": "LiFePO4",
      "Range Support": "Up to 120 km",
      "Cycle Life": "3000+ Cycles",
      "Thermal Protection": "Yes",
      "Charging Time": "5 Hours",
      "BMS": "Smart BMS",
      "Mounting": "Custom Fit",
      "Warranty": "4 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Custom Fitment",
      "Delivery": "Pan India",
      "Warranty": "4 Years"
    },

    applications: [
      "High-speed EVs",
      "Electric bikes",
      "Performance scooters",
      "Custom EV builds"
    ]
  },

  94: {
    title: "Commercial EV Battery – 96V",
    category: "EV Batteries",
    description: "Industrial-grade 96V battery for e-rickshaws and cargo EVs with heavy-duty performance.",
    image: "greenwheel/ev-battery/4.webp",

    specifications: {
      "Voltage": "96V",
      "Capacity": "100Ah",
      "Chemistry": "Lithium Ion",
      "Cycle Life": "3000+ Cycles",
      "Discharge Rate": "High Current",
      "Cooling": "Industrial Grade",
      "BMS": "Multi-Level Protection",
      "Mounting": "Vehicle Chassis",
      "Durability": "Heavy Duty",
      "Warranty": "5 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Vehicle Integration",
      "Delivery": "Pan India",
      "Warranty": "5 Years"
    },

    applications: [
      "E-rickshaws",
      "Cargo EVs",
      "Electric loaders",
      "Commercial fleets"
    ]
  },

  95: {
    title: "Home Energy Storage Battery – 5kWh",
    category: "Home Energy Storage",
    description: "Wall-mounted home battery for solar systems and backup power with silent operation.",
    image: "greenwheel/ev-battery/6.webp",

    specifications: {
      "Energy Capacity": "5 kWh",
      "Voltage": "48V",
      "Chemistry": "LiFePO4",
      "Mounting": "Wall Mount",
      "Cycle Life": "6000+ Cycles",
      "Inverter Support": "Hybrid / Off-grid",
      "Noise": "Silent",
      "Monitoring": "Mobile App",
      "Safety": "Fire Resistant",
      "Warranty": "5 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Wall Mount",
      "Delivery": "Pan India",
      "Warranty": "5 Years"
    },

    applications: [
      "Homes",
      "Solar rooftops",
      "Backup systems",
      "Off-grid houses"
    ]
  },

  96: {
    title: "Portable Power Battery – 1kWh",
    category: "Portable Energy",
    description: "Compact portable solar power station for outdoor use, emergency backup, and travel.",
    image: "greenwheel/ev-battery/7.jpeg",

    specifications: {
      "Energy Capacity": "1 kWh",
      "Output Ports": "AC + USB + DC",
      "Charging": "Solar / AC",
      "Weight": "Portable",
      "Display": "Digital LCD",
      "Noise": "Silent",
      "Cycle Life": "2000+ Cycles",
      "Safety": "Overload Protection",
      "Use Mode": "Indoor / Outdoor",
      "Warranty": "2 Years"
    },

    pricing: {
      "Base Price": "On Request",
      "Installation": "Plug & Play",
      "Delivery": "Pan India",
      "Warranty": "2 Years"
    },

    applications: [
      "Camping",
      "Emergency backup",
      "Outdoor events",
      "Mobile charging"
    ]
  },


111: {
  title: "Home EV Charger 3.3kW",
  category: "EV Chargers",
  description: "Compact AC home charger designed for daily EV charging with safety protection and smart monitoring.",
  image: "greenwheel/ev-charger/1.jpeg",

  specifications: {
    "Charger Type": "AC Wall Mount",
    "Power Output": "3.3 kW",
    "Input Voltage": "230V AC",
    "Connector": "Type 2",
    "Mounting": "Wall Mounted",
    "Protection": "Over Voltage, Short Circuit",
    "Smart Features": "Mobile App",
    "IP Rating": "IP54",
    "Operating Temp": "-20°C to 50°C",
    "Warranty": "2 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Optional",
    "Delivery": "Pan India",
    "Warranty": "2 Years"
  },

  applications: [
    "Home garages",
    "Residential parking",
    "Personal EV charging"
  ]
},

112: {
  title: "Smart EV Charger 7kW",
  category: "EV Chargers",
  description: "High-speed smart wallbox charger with WiFi and OCPP support for modern homes and apartments.",
  image: "greenwheel/ev-charger/2.webp",

  specifications: {
    "Charger Type": "AC Smart Wallbox",
    "Power Output": "7 kW",
    "Input Voltage": "230V AC",
    "Connector": "Type 2",
    "Connectivity": "WiFi / OCPP",
    "Mounting": "Wall Mounted",
    "Display": "LED Indicators",
    "IP Rating": "IP55",
    "Safety": "RCD, Surge Protection",
    "Warranty": "3 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "3 Years"
  },

  applications: [
    "Homes",
    "Apartments",
    "Private parking"
  ]
},

113: {
  title: "Portable EV Charger 3kW",
  category: "EV Chargers",
  description: "Lightweight portable EV charger for emergency and travel charging needs.",
  image: "greenwheel/ev-charger/3.jpeg",

  specifications: {
    "Charger Type": "Portable AC",
    "Power Output": "3 kW",
    "Input Voltage": "230V AC",
    "Connector": "Type 2",
    "Cable Length": "5 Meter",
    "Weight": "Lightweight",
    "Protection": "Overheat, Overcurrent",
    "IP Rating": "IP44",
    "Plug Type": "16A",
    "Warranty": "1 Year"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Not Required",
    "Delivery": "Pan India",
    "Warranty": "1 Year"
  },

  applications: [
    "Travel use",
    "Emergency charging",
    "Home backup charger"
  ]
},

114: {
  title: "Commercial AC Charger 22kW",
  category: "EV Chargers",
  description: "High-capacity AC charger for offices, malls, and parking complexes with RFID access.",
  image: "greenwheel/ev-charger/4.webp",

  specifications: {
    "Charger Type": "AC Commercial",
    "Power Output": "22 kW",
    "Input Voltage": "415V AC",
    "Connector": "Type 2 Dual Gun",
    "Authentication": "RFID",
    "Mounting": "Wall / Floor",
    "Communication": "OCPP",
    "IP Rating": "IP55",
    "Cooling": "Natural",
    "Warranty": "3 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "3 Years"
  },

  applications: [
    "Office buildings",
    "Malls",
    "Commercial parking"
  ]
},

115: {
  title: "DC Fast Charger 30kW",
  category: "EV Chargers",
  description: "Public DC fast charger for highways and charging stations with rapid charging capability.",
  image: "greenwheel/ev-charger/5.jpg",

  specifications: {
    "Charger Type": "DC Fast Charger",
    "Power Output": "30 kW",
    "Input Voltage": "415V AC",
    "Output Voltage": "200–750V DC",
    "Connectors": "CCS / CHAdeMO",
    "Cooling": "Forced Air",
    "Display": "Touch Screen",
    "IP Rating": "IP54",
    "Efficiency": "≥95%",
    "Warranty": "3 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "As per site",
    "Delivery": "Pan India",
    "Warranty": "3 Years"
  },

  applications: [
    "Highways",
    "Public stations",
    "Fuel pumps"
  ]
},

116: {
  title: "Ultra Fast EV Charger 60kW",
  category: "EV Chargers",
  description: "Ultra-fast DC charger for fleet operators and public charging hubs with high throughput.",
  image: "greenwheel/ev-charger/6.jpeg",

  specifications: {
    "Charger Type": "DC Ultra Fast",
    "Power Output": "60 kW",
    "Input Voltage": "415V AC",
    "Output Voltage": "200–1000V DC",
    "Connectors": "CCS Dual",
    "Cooling": "Liquid / Forced Air",
    "Communication": "OCPP 1.6",
    "Display": "7-inch Touch",
    "IP Rating": "IP54",
    "Warranty": "5 Years"
  },

  pricing: {
    "Base Price": "On Request",
    "Installation": "Turnkey",
    "Delivery": "Pan India",
    "Warranty": "5 Years"
  },

  applications: [
    "Fleet charging",
    "Public charging hubs",
    "Commercial EV stations"
  ]
},

121: {
    title: "Solar Rooftop AMC – Basic",
    category: "AMC Services",
    description: "Basic annual maintenance contract for residential solar rooftop systems, ensuring clean panels and stable performance.",
    image: "greenwheel/amc/1.jpeg",

    specifications: {
      "Service Type": "Solar Rooftop AMC",
      "Coverage Level": "Basic",
      "Visit Frequency": "1 Time / Year",
      "Panel Cleaning": "Included",
      "Inverter Check": "Included",
      "Performance Review": "Basic",
      "Response Time": "72 Hours",
      "System Size": "Up to 5 kW",
      "Support": "Business Hours",
      "Warranty": "1 Year"
    },

    pricing: {
      "Base Price": "On Request",
      "Billing Cycle": "Annual",
      "On-Site Visit": "Included",
      "Spare Parts": "Chargeable",
      "Coverage Area": "Pan India"
    },

    applications: [
      "Residential rooftops",
      "Small solar homes",
      "Villas",
      "Apartments"
    ]
  },

  122: {
    title: "Solar Rooftop AMC – Premium",
    category: "AMC Services",
    description: "Premium AMC with proactive maintenance, inverter service, and detailed performance reporting.",
    image: "greenwheel/amc/2.jpg",

    specifications: {
      "Service Type": "Solar Rooftop AMC",
      "Coverage Level": "Premium",
      "Visit Frequency": "Quarterly",
      "Panel Cleaning": "Included",
      "Inverter Service": "Included",
      "Energy Report": "Detailed",
      "Remote Monitoring": "Available",
      "Response Time": "24 Hours",
      "System Size": "Up to 20 kW",
      "Warranty": "1 Year"
    },

    pricing: {
      "Base Price": "On Request",
      "Billing Cycle": "Annual",
      "Emergency Visit": "Included",
      "Spare Parts": "Discounted",
      "Coverage Area": "Pan India"
    },

    applications: [
      "Large homes",
      "Societies",
      "Commercial rooftops",
      "Institutions"
    ]
  },

  123: {
    title: "EV Charger AMC – Standard",
    category: "AMC Services",
    description: "Standard maintenance plan for home and commercial EV chargers with safety and firmware updates.",
    image: "greenwheel/amc/3.jpeg",

    specifications: {
      "Service Type": "EV Charger AMC",
      "Coverage Level": "Standard",
      "Visit Frequency": "Bi-Annual",
      "Firmware Update": "Included",
      "Safety Testing": "Included",
      "Connector Check": "Included",
      "Response Time": "48 Hours",
      "Charger Type": "AC / DC",
      "Support": "Phone + On-site",
      "Warranty": "1 Year"
    },

    pricing: {
      "Base Price": "On Request",
      "Billing Cycle": "Annual",
      "Remote Support": "Included",
      "Parts Replacement": "Chargeable",
      "Coverage Area": "Pan India"
    },

    applications: [
      "Home EV chargers",
      "Office parking",
      "Commercial buildings",
      "Apartments"
    ]
  },

  124: {
    title: "EV Charging Station AMC – Premium",
    category: "AMC Services",
    description: "Premium AMC for public EV charging stations with 24x7 support and remote monitoring.",
    image: "greenwheel/amc/4.jpeg",

    specifications: {
      "Service Type": "EV Station AMC",
      "Coverage Level": "Premium",
      "Monitoring": "24x7 Remote",
      "Preventive Visits": "Quarterly",
      "Software Updates": "Included",
      "Uptime SLA": "99%",
      "Response Time": "12 Hours",
      "Station Size": "Multi-Gun",
      "Support": "24x7",
      "Warranty": "1 Year"
    },

    pricing: {
      "Base Price": "On Request",
      "Billing Cycle": "Annual",
      "Emergency Support": "Included",
      "Spare Parts": "Priority",
      "Coverage Area": "Pan India"
    },

    applications: [
      "Public charging stations",
      "Highways",
      "Malls",
      "Fuel stations"
    ]
  },

  125: {
    title: "Industrial Electrical AMC",
    category: "AMC Services",
    description: "Annual maintenance for industrial electrical systems and control panels ensuring safety and uptime.",
    image: "greenwheel/amc/5.jpg",

    specifications: {
      "Service Type": "Industrial Electrical AMC",
      "Coverage Level": "Standard",
      "Visit Frequency": "Quarterly",
      "Panel Maintenance": "Included",
      "Thermal Scanning": "Included",
      "Safety Audit": "Included",
      "Response Time": "24 Hours",
      "System Type": "LT / HT Panels",
      "Compliance": "IS Standards",
      "Warranty": "1 Year"
    },

    pricing: {
      "Base Price": "On Request",
      "Billing Cycle": "Annual",
      "On-Site Support": "Included",
      "Spare Parts": "Chargeable",
      "Coverage Area": "Pan India"
    },

    applications: [
      "Factories",
      "Warehouses",
      "Industrial plants",
      "Data centers"
    ]
  },

  126: {
    title: "Solar Plant O&M Contract",
    category: "AMC Services",
    description: "Complete operation and maintenance service for solar power plants with performance optimization.",
    image: "greenwheel/amc/6.jpg",

    specifications: {
      "Service Type": "Solar Plant O&M",
      "Coverage Level": "Premium",
      "Monitoring": "24x7 SCADA",
      "Cleaning Cycle": "Monthly",
      "Preventive Maintenance": "Included",
      "Performance Ratio Tracking": "Yes",
      "Fault Response": "8 Hours",
      "Plant Size": "100 kW – MW Scale",
      "Reporting": "Monthly",
      "Warranty": "1 Year"
    },

    pricing: {
      "Base Price": "On Request",
      "Billing Cycle": "Annual",
      "On-Site Team": "Optional",
      "Spare Parts": "As Per Use",
      "Coverage Area": "Pan India"
    },

    applications: [
      "Utility solar plants",
      "Industrial solar farms",
      "Ground mount projects",
      "Large rooftops"
    ]
  }





};






let currentProduct = null;

// Add global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    console.error('Error message:', e.message);
    console.error('Error source:', e.filename, 'Line:', e.lineno);
});

// Prevent any unexpected navigation
let pageLoaded = false;
window.addEventListener('beforeunload', function(e) {
    if (!pageLoaded) {
        console.log('Page unloading before fully loaded');
    }
});

// Track page load completion
window.addEventListener('load', function() {
    pageLoaded = true;
    console.log('Product detail page fully loaded');
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('Initializing product detail page...');
        loadProductFromURL();
        setupEventListeners();
        updateYear();
        console.log('Product detail page initialized successfully');
    } catch (error) {
        console.error('Error initializing page:', error);
    }
});

// Load product based on URL parameters
function loadProductFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number(urlParams.get('id'));
    
    console.log('Loading product ID:', productId);
    
    if (productId && productData[productId]) {
        console.log('Product found:', productData[productId].title);
        loadProduct(productData[productId]);
        currentProduct = productData[productId];
    } else {
        console.error('Product not found for ID:', productId);
        // Show error message instead of redirect
        showProductNotFound();
    }
}

// Show product not found message
function showProductNotFound() {
    document.body.innerHTML = `
        <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
            <h1>Product Not Found</h1>
            <p>The requested product could not be found.</p>
            <a href="index.html" style="color: #1976d2; text-decoration: none;">← Back to Home</a>
        </div>
    `;
}

// Load product data into the page
function loadProduct(product) {
    try {
        console.log('Loading product data:', product.title);
        
        // Update page title
        document.title = `${product.title} - Solarica`;
        
        // Update breadcrumb with error handling
        const categoryBreadcrumb = document.getElementById('categoryBreadcrumb');
        const productBreadcrumb = document.getElementById('productBreadcrumb');
        
        if (categoryBreadcrumb) {
            categoryBreadcrumb.textContent = product.category;
            categoryBreadcrumb.href = getCategoryURL(product.category);
        }
        
        if (productBreadcrumb) {
            productBreadcrumb.textContent = product.title;
        }
        
        // Update main content with error handling
        const productTitle = document.getElementById('productTitle');
        const productDescription = document.getElementById('productDescription');
        
        if (productTitle) productTitle.textContent = product.title;
        if (productDescription) productDescription.textContent = product.description;
        
        // Update main image with error handling
        const mainImage = document.getElementById('mainProductImage');
        if (mainImage) {
            mainImage.src = product.image;
            mainImage.alt = product.title;
        }
        
        // Update thumbnail with error handling
        const thumbnail = document.querySelector('.thumbnail img');
        if (thumbnail) {
            thumbnail.src = product.image;
            thumbnail.alt = product.title;
        }
        
        // Load tab content
        loadSpecifications(product.specifications);
        loadPricing(product.pricing);
        
        console.log('Product loaded successfully');
        
    } catch (error) {
        console.error('Error loading product:', error);
        showProductNotFound();
    }
}

// Get category URL based on category name
function getCategoryURL(category) {
    switch(category) {
        case 'Solar Street Lights':
            return 'slights.html';
        case 'Solar Water Pumps':
            return 'spumps.html';
        case 'Solar Water Heater':
            return 'sheater.html';
        case 'Solar Garden Lights':
            return 'sglights.html';
        default:
            return 'slights.html';
    }
}

// Load specifications tab
function loadSpecifications(specifications) {
    const table = document.getElementById('specificationsTable').getElementsByTagName('tbody')[0];
    table.innerHTML = Object.entries(specifications).map(([key, value]) => 
        `<tr><td>${key}</td><td>${value}</td></tr>`
    ).join('');
}

// Load pricing tab
function loadPricing(pricing) {
    const table = document.getElementById('pricingTable').getElementsByTagName('tbody')[0];
    table.innerHTML = Object.entries(pricing).map(([key, value]) => 
        `<tr><td>${key}</td><td>${value}</td></tr>`
    ).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Tab navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showTab(tabName);
        });
    });
}

// Show tab function
function showTab(tabName) {
    // Hide all tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show selected tab panel
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to selected tab button
    event.target.classList.add('active');
}

// Change main image
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnailImg = thumbnail.querySelector('img');
    
    if (thumbnailImg) {
        mainImage.src = thumbnailImg.src;
        
        // Update active thumbnail
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
    }
}

// Play video function (placeholder)
function playVideo() {
    alert('Video functionality will be implemented here. This would typically open a video modal or redirect to a video page.');
}

// Open image modal
function openImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const mainImage = document.getElementById('mainProductImage');
    
    modalImage.src = mainImage.src;
    modal.style.display = 'block';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Enquire now function
function enquireNow() {
    if (currentProduct) {
        const message = `Hi, I would like to enquire about ${currentProduct.title}. Please provide more details and pricing information.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Go back function
function goBack() {
    console.log('Go back clicked');
    if (document.referrer && document.referrer.includes(window.location.hostname)) {
        console.log('Going back in history');
        window.history.back();
    } else {
        console.log('No referrer, going to home');
        window.location.href = 'index.html';
    }
}

// Update year in footer
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeImageModal();
    }
});

// Handle escape key for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

// Export functions for global access
window.showTab = showTab;
window.changeMainImage = changeMainImage;
window.playVideo = playVideo;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.enquireNow = enquireNow;
window.goBack = goBack;

export const config = {
    headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
    },
    mockData: {
        businessDetails: {
            businessName: "Western Sydney University",
        },
        draftJoblist: [
            {
                joblistId: "1293801287",
                jobTitle: "Cleaner",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "",
                hourlyRate: "$20 per hour",
                workType: "",
                timeStamp: "12 days ago",
                status: "Draft",
            },
        ],
        disabledJoblist: [
            {
                joblistId: "1293801284",
                jobTitle: "Truck Driver",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "Sydney NSW 2000",
                hourlyRate: "$40 per hour",
                workType: "Casual",
                timeStamp: "7 hours ago",
                status: "Disabled",
            },
            {
                joblistId: "1293801288",
                jobTitle: "Lady In waiting",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "Burwood NSW 2134",
                hourlyRate: "",
                workType: "Casual",
                timeStamp: "11 days ago",
                status: "Disabled",
            },
        ],
        activeJoblist: [
            {
                joblistId: "1293801283",
                jobTitle: "Cherry Picker",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "Sydney NSW 2000",
                hourlyRate:
                    "$25 - $35 per hour, more for the correct candidate",
                workType: "Casual",
                timeStamp: "just now",
                status: "Active",
            },
            {
                joblistId: "1293801284",
                jobTitle: "Truck Driver",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "Sydney NSW 2000",
                hourlyRate: "$40 per hour",
                workType: "Casual",
                timeStamp: "7 hours ago",
                status: "Active",
            },
            {
                joblistId: "1293801285",
                jobTitle: "Farmer",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "Sydney NSW 2000",
                hourlyRate: "$20 per hour",
                workType: "Casual",
                timeStamp: "10 days ago",
                status: "Active",
            },
            {
                joblistId: "1293801286",
                jobTitle: "Land Digger",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "Burwood NSW 2134",
                hourlyRate: "$23 per hour",
                workType: "Casual",
                timeStamp: "3 days ago",
                status: "Active",
            },
            {
                joblistId: "1293801287",
                jobTitle: "Cleaner",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "Burwood NSW 2134",
                hourlyRate: "$20 per hour",
                workType: "Casual",
                timeStamp: "12 days ago",
                status: "Active",
            },
            {
                joblistId: "1293801288",
                jobTitle: "Lady In waiting",
                businessName: "Western Sydney University Ltd",
                category: "Farming, Animals & Conservation",
                location: "Burwood NSW 2134",
                hourlyRate: "$20 per hour",
                workType: "Casual",
                timeStamp: "11 days ago",
                status: "Active",
            },
        ],
        radioQuestions: [
            {
                question:
                    "Which of the following statements best describes your gender?",
                answers: [
                    { answer: "Male", value: "M" },
                    { answer: "Female", value: "F" },
                    { answer: "Others", value: "O" },
                ],
            },
            {
                question:
                    "Which of the following statements best describes your right to work in Australia?",
                answers: [
                    {
                        answer: "I have permanent work rights with no restrictions",
                        value: "permanent-with-restriction",
                    },
                    {
                        answer: "I have temporary work rights with no restrictions",
                        value: "temporary-no-restriction",
                    },
                    {
                        answer: "I have temporary work rights with restrictions",
                        value: "temporary-with-restriction",
                    },
                    {
                        answer: "I require sponsorship to work",
                        value: "sponsorship",
                    },
                ],
            },
            {
                question:
                    "Which of the following statements best describes your Covid-19 vaccination status?",
                answers: [
                    { answer: "I am fully vaccinated", value: 1 },
                    { answer: "I am partially vaccinated", value: 2 },
                    {
                        answer: "I am planning to be vaccinated as soon as possible",
                        value: 3,
                    },
                    { answer: "I have not been vaccinated", value: 4 },
                    { answer: "I have medical exemption", value: 5 },
                    { answer: "I prefer not to say", value: 6 },
                ],
            },
            {
                question: "Do you have customer service experience?",
                answers: [
                    { answer: "Yes", value: true },
                    { answer: "No", value: false },
                ],
            },
            {
                question:
                    "How many years' experience do you have in this role?",
                answers: [
                    { answer: "No experience", value: -1 },
                    { answer: "Less than a year", value: 0 },
                    { answer: "1 year", value: 1 },
                    { answer: "2 years", value: 2 },
                    { answer: "3 years", value: 3 },
                    { answer: "4 years", value: 4 },
                    { answer: "5 years", value: 5 },
                    { answer: "More than 5 years", value: 99 },
                ],
            },

            {
                question:
                    "Are you available to travel for this role when required?",
                answers: [
                    {
                        answer: "Yes, domestic travel",
                        value: "domestic",
                    },
                    {
                        answer: "Yes, international travel",
                        value: "international",
                    },
                    {
                        answer: "Yes, domestic and international travel",
                        value: "both",
                    },
                    {
                        answer: "No",
                        value: "none",
                    },
                ],
            },
        ],
        checkBoxQuestions: [
            {
                question:
                    "Which of the following forklift licenses do you have?",
                answers: [
                    { answer: "Forklift truck (LF)", value: "LF" },
                    {
                        answer: "Order picking forklift truck (LO)",
                        value: "LO",
                    },
                    { answer: "None of these", value: "none" },
                ],
            },
            {
                question: "Do you have a heavy vehicle driver's licence?",
                answers: [
                    {
                        answer: "I do not have a heavy vehicle driver's license",
                        value: "none",
                    },
                    {
                        answer: "Yes, light rigid (LR)",
                        value: "LR",
                    },
                    {
                        answer: "Yes, medium rigid (MR)",
                        value: "MR",
                    },
                    {
                        answer: "Yes, heavy rigid (HR)",
                        value: "HR",
                    },
                    {
                        answer: "Yes, heavy combination (HC)",
                        value: "HC",
                    },
                    {
                        answer: "Yes, multi rigid (MC)",
                        value: "MC",
                    },
                ],
            },
        ],
    },
};

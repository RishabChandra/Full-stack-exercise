const data = [
    {
        id: 1,
        question: "Which coach had the highest number of season wins in the year 1985?",
        answer: "KC Jones with id JONESKC01 has the highest number of season wins when year 1985 is taken into consideration. It accounts to 67 wins"
    }, {
        id: 2,
        question: "Visualize the average number of wins (playoff wins + season wins) for each TID.",
        answer: "A clear visualization can be found in the attached link for Q9."
    }, {
        id: 3,
        question: "Which coach has coached the most teams?",
        answer: " Kevin Loughery with id LOUGHKE01 has coached 7 teams which is the highest number of teams coached when compared to others."
    }, {
        id: 4,
        question: "What observations and insights can you make here from the data?",
        answer: "Observation: When win-loss ratio of coaches were calculated, the top ratio was of coach with id BROWNPH01 which was 10 wins against 1 loss in the year 1948. Next top win-loss ratio was taken by coach with id JACKSPH01 having 7 wins vs 1 loss and 5 wins vs 1 loss in 1956 and 1996 respectively. Another point to be noted is that the same coach with id JACKPH01 had all time highest season win of 72 in the year 1995 and 69 in the year 1996 with the same team CHI. Coach Phill Jackson was successful with the teams CHI and LAL having some of the highest season wins. He definetly seems to among top coaches."
    }, {
        id: 5,
        question: "What are you using to design your web interface?",
        answer: "I designed the web interface using React.js for building components and managing state. The grid layout for displaying the 9 questions is achieved with CSS Grid. Modal functionality is implemented with React Modal. For visualization, I utilized data from a CSV file processed in Python with Pandas, Matplotlib, and Seaborn. A detailed and complete visualization is provided in a PDF linked in question 9. The source code is available on GitHub; the link is provided for reference."
    }, {
        id: 6,
        question: "What is the architecture for the web page?",
        answer: "React Components: Each question is a separate React component, creating a modular and maintainable structure. Grid Layout: Utilizes a grid layout to display the 9 question components in an organized manner.Modal Component: Implements a modal component that appears when a question is clicked, displaying answers and a close button.    Data Visualization Integration: Uses data visualizations derived from Python (matplotlib, seaborn, pandas). The visualizations are presented in a PDF linked in question 9.External Resources: Links to external resources, such as the GitHub repository for the source code."
    }, {
        id: 7,
        question: "How are you reading the data?",
        answer: "The data which was provided in a csv file was read using a library called pandas in python. Then required visualizations were created by performing required operation on data and embeded in this web interface."
    }, {
        id: 8,
        question: "How much time did you use to complete this exercise?",
        answer: "Almost 4 hours for the main goal and some additional time to play around with data for personal interest."
    }, {
        id: 9,
        question: "Please share any code you created to complete this exercise.",
        answer: "Links for both web interface and data visualization are provided below"
    }
];

export default data;